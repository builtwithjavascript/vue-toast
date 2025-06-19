import type { App, Plugin as VuePLugin } from 'vue'
import type { TToastType, IToastParams } from './types'
import { createVNode, render } from 'vue'
import { useToast } from './useToast'
import ToastPortal from './ToastPortal.vue'

export { TToastType, IToastParams, useToast }

export const ToastPlugin: VuePLugin = {
  install(app: App) {
    const { showToast } = useToast()
    app.config.globalProperties.$showToast = showToast
    app.component('ToastPortal', ToastPortal)

    // Programmatically mount ToastPortal
    const container = document.createElement('div')
    document.body.appendChild(container)
    const vnode = createVNode(ToastPortal)
    render(vnode, container)
  },
}
