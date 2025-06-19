import { useEventBus } from './event-bus'
import { toastPositions } from './Constants'
import type { IToastParams } from './types'

const getNextId = () => {
  const array = new Uint32Array(1)
  window.crypto.getRandomValues(array)
  const str = array[0].toString().padStart(10, '0')
  return str
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

  useEventBus().emit('show-toast', options)
}

export const useToast = () => {
  return {
    showToast,
    toastPositions,
  }
}
