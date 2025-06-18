import { defineComponent } from 'vue'

export type TToastType = 'normal' | 'ghost'

export type IToastParams = {
  id?: string
  group?: string
  type?: TToastType
  category?: string
  message: string
  sticky?: boolean
  timeout?: number
  toastComponent?: ReturnType<typeof defineComponent>
}
