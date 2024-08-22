const alertCssStrategy = new Map<string, string>([
  ['normal', `bg-[category] content-[category] hover:bg-[category]`],
  ['ghost', `bg-transparent border-[category] content-[category] hover:opacity-80`],
])

const iconCssStrategy = new Map<string, string>([
  ['normal', `content-[category] hover:bg-[category]`],
  ['ghost', `text-[category] over:opacity-80`],
])

const textCssStrategy = new Map<string, string>([
  ['normal', `content-[category] hover:bg-[category]`],
  ['ghost', `text-[category] over:opacity-80`],
])

const buttonCloseCssStrategy = new Map<string, string>([
  ['normal', `bg-[category] content-[category] hover:bg-[category] focus:ring-[category]-focus`],
  ['ghost', `bg-transparent border-[category] text-[category] over:opacity-80 focus:ring-[category]-focus`],
])

export { alertCssStrategy, iconCssStrategy, textCssStrategy, buttonCloseCssStrategy }
