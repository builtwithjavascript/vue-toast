import { eventBus, eventKeys } from './event-bus'
import { toastPositions } from './Constants'
import { defineComponent } from 'vue'

const getNextId = () => {
  const array = new Uint32Array(1)
  window.crypto.getRandomValues(array)
  const str = array[0].toString().padStart(10, '0')
  return str
}

export type IToastParams = {
  id?: string
  group?: string
  type?: 'ghost' | 'normal'
  category?: string
  message: string
  sticky?: boolean
  timeout?: number
  toastComponent?: ReturnType<typeof defineComponent>
}

const showToast = async (params: IToastParams) => {
  // sanitize params
  const options = {
    ...params,
    id: getNextId(),
    group: params.group || 'top',
    type: params.type || 'normal',
    category: params.category || 'info',
    sticky: params.sticky || false,
  } as IToastParams

  eventBus.emit(eventKeys.showToast, options)
}

export const useToast = () => {
  return {
    showToast,
    toastPositions,
  }
}
