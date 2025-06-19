type TEventBus = {
  emit: (eventId: 'show-toast', data?: any) => any
  on: (eventId: 'show-toast', listener: (evt: CustomEvent) => any) => any
  off: (eventId: 'show-toast', listener: (evt: CustomEvent) => any) => any
}

const eventBus: TEventBus = {
  emit: (eventId: 'show-toast', data?: any) => {
    document.documentElement.dispatchEvent(
      new CustomEvent(eventId, {
        bubbles: false,
        detail: data,
      }),
    )
  },
  on: (eventId: 'show-toast', listener: (evt: CustomEvent) => any) => {
    document.documentElement.addEventListener(eventId, listener as any)
  },
  off: (eventId: 'show-toast', listener: (evt: CustomEvent) => any) => {
    document.documentElement.removeEventListener(eventId, listener as any)
  },
}

export const useEventBus = () => {
  return eventBus
}
