import type { App, Plugin as VuePLugin } from 'vue'
import { useToast } from './useToast'
import ToastPortal from './ToastPortal.vue'

export { useToast }

export const ToastPlugin: VuePLugin = {
  install(app: App) {
    const { showToast } = useToast()
    app.config.globalProperties.$showToast = showToast
    app.component('ToastPortal', ToastPortal)
  },
}
