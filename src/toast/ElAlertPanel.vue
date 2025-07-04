<script setup lang="ts">
  import { computed } from 'vue'
  import { alertCssStrategy, iconCssStrategy, textCssStrategy, buttonCloseCssStrategy } from './AlertCssStrategy'
  import type { TToastType } from './types'

  type Props = {
    testid?: string
    id: string
    type: TToastType
    category: string
    message: string
    addCss?: string
  }

  const props = withDefaults(defineProps<Props>(), {
    testid: 'not-set',
    id: 'not-set',
    type: 'normal',
    cartegory: 'info',
    message: 'not-set',
  })

  const emit = defineEmits<{
    (e: 'close', id: string): any
  }>()

  const getCssFromStrategyMap = (strategyMap: Map<string, string>) => {
    const type = props.type || 'normal'
    const category = props.category || 'info'
    let template = ''
    if (strategyMap.has(type)) {
      template = `${strategyMap.get(type)}`
    } else {
      template = `${strategyMap.get('normal')}`
    }
    return template.replaceAll(`[category]`, category).trim()
  }

  // a computed property to return a different css class based on the selected value
  const cssClass = computed((): string => {
    const result = ['rounded-md p-4 h-fit shadow shadow-md']

    // these are the CSS classes based on the type
    result.push(getCssFromStrategyMap(alertCssStrategy))

    // addCss will have additional CSS classes
    // we want to apply from where we consume this component
    const addCss = (props.addCss || '').trim()
    if (addCss.length > 0) {
      result.push(addCss)
    }
    return result.join(' ').trim()
  })

  const cssTextClass = computed((): string => {
    const result = ['text-sm font-medium']
    // these are the CSS classes based on the type
    result.push(getCssFromStrategyMap(textCssStrategy))

    return result.join(' ').trim()
  })

  const cssIconClass = computed((): string => {
    const result = ['h-5 w-5']
    // these are the CSS classes based on the type
    result.push(getCssFromStrategyMap(iconCssStrategy))
    return result.join(' ').trim()
  })

  const cssButtonCloseClass = computed((): string => {
    const result = ['cursor-pointer inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2']
    // these are the CSS classes based on the type
    result.push(getCssFromStrategyMap(buttonCloseCssStrategy))
    return result.join(' ').trim()
  })

  const onCloseClicked = () => {
    emit('close', props.id)
  }
</script>

<template>
  <div :class="cssClass">
    <div class="flex">
      <div class="flex-shrink-0">
        <svg
          :class="cssIconClass"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div class="ml-3">
        <p :class="cssTextClass">{{ props.message }}</p>
      </div>
      <div class="ml-auto pl-3">
        <div class="-mx-1.5 -my-1.5">
          <button type="button" :class="cssButtonCloseClass" @click="onCloseClicked">
            <span class="sr-only">Dismiss</span>
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
