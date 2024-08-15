import mitt from './mitt'

export const eventBus = mitt()

export const eventKeys = Object.freeze({
  showToast: 'show-toast',
})
