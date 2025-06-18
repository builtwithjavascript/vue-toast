<script setup lang="ts">
  import { defineComponent, reactive, computed, onMounted, shallowRef } from 'vue'
  import type { IToastParams } from './types'
  import { eventBus, eventKeys } from './event-bus'
  import ElAlertPanel from './ElAlertPanel.vue'

  const DEFAULT_TIMEOUT = 3000
  let lastTimeout = 0

  const groupCssBaseClass = 'fixed flex p-4 pointer-events-none'
  const groupCssPositionStrategy = new Map<string, string>([
    ['top-right', 'top-0 right-0 justify-end'],
    ['bottom-right', 'bottom-0 right-0 justify-end'],
    ['top-left', 'top-0 left-0'],
    ['bottom-left', 'bottom-0 left-0'],
    ['top', 'w-full top-0 justify-center'],
    ['bottom', 'w-full bottom-0 justify-center'],
  ])

  type IToastGroup = {
    id: string
    cssClass: string
    items: IToastParams[]
  }

  type PortalProps = {
    testid?: string
    maxItems?: number
    toastComponent?: ReturnType<typeof defineComponent>
  }

  const props = withDefaults(defineProps<PortalProps>(), {
    testid: 'not-set',
    maxItems: 5,
  })

  const emit = defineEmits<{
    (e: 'close', id: string): any
  }>()

  const state = reactive<{
    items: IToastParams[]
    defaultToastComponent: ReturnType<typeof defineComponent>
    currentToastComponent: ReturnType<typeof defineComponent>
  }>({
    items: [],
    defaultToastComponent: <any>(props.toastComponent ? shallowRef(props.toastComponent) : shallowRef(ElAlertPanel)),
    currentToastComponent: <any>(props.toastComponent ? shallowRef(props.toastComponent) : shallowRef(ElAlertPanel)),
  })

  const groups = computed((): IToastGroup[] => {
    const allItems = state.items || []
    const { maxItems } = props

    const groupIds = [...new Set([...allItems.map((item) => item.group || 'top')])]

    const results = groupIds.map((groupId) => {
      let groupItems = allItems.filter((n) => n.group === groupId)

      if (groupId.indexOf('bottom') > -1) {
        groupItems = groupItems.slice(0, maxItems)
      } else {
        // if not bottom reverse the array
        groupItems = groupItems.reverse().slice(0, maxItems)
      }

      return {
        id: groupId,
        cssClass: `${groupCssBaseClass} ${groupCssPositionStrategy.get(groupId) || ''}`,
        items: groupItems,
      }
    })

    return results
  })

  const addToast = (params: IToastParams) => {
    const { toastComponent, sticky } = params
    if (toastComponent) {
      state.currentToastComponent = toastComponent
    } else {
      state.currentToastComponent = state.defaultToastComponent
    }

    const groupId = params.group || ''
    if (groupId?.indexOf('top') > -1) {
      state.items.push(params)
    } else {
      state.items.unshift(params)
    }

    // @ts-ignore
    const { timeout } = params

    const newTimeout = Number(Number(timeout || DEFAULT_TIMEOUT) + lastTimeout)

    if (!sticky) {
      setTimeout(() => {
        // @ts-ignore
        remove(params.id)
      }, newTimeout)
      lastTimeout += 75
    }
  }

  const remove = (id: string) => {
    const items = state.items || []
    const index = items.findIndex((n) => n.id === id)
    if (index > -1) {
      items.splice(index, 1)
    }
  }

  const onCloseToast = (id: string) => {
    emit('close', id)
    remove(id)
  }

  onMounted(() => {
    // @ts-ignore
    eventBus.on(eventKeys.showToast, addToast)
  })
</script>

<template>
  <div id="toast-portal" class="pointer-events-none">
    <div v-for="group in groups" :key="group.id">
      <div :class="group.cssClass">
        <div class="w-full max-w-sm">
          <transition-group
            enter-active-class="transform ease-out duration-300 transition"
            enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4"
            enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
            leave-active-class="transition ease-in duration-500"
            leave-from-class="opacity-100"
            leave-to-class="transform opacity-0"
            move-class="transition duration-500"
          >
            <div v-for="item in group.items" :key="item.id">
              <component
                :is="state.currentToastComponent"
                :id="item.id"
                addCss="mt-2 pointer-events-auto shadow-black shadow-md"
                :type="item.type"
                :category="item.category"
                :message="item.message"
                @close="onCloseToast"
              />
            </div>
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>
