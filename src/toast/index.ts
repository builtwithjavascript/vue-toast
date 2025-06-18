import type { App, Plugin as VuePLugin } from 'vue'
import type { TToastType, IToastParams } from './types'
import { useToast } from './useToast'
import ToastPortal from './ToastPortal.vue'

export { TToastType, IToastParams, useToast }

export const ToastPlugin: VuePLugin = {
  install(app: App) {
    const { showToast } = useToast()
    app.config.globalProperties.$showToast = showToast
    app.component('ToastPortal', ToastPortal)
  },
}
