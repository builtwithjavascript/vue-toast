const alertCssStrategy = new Map<string, string>()

alertCssStrategy.set('info', 'bg-info text-info-content')
alertCssStrategy.set('success', 'bg-success text-success-content')
alertCssStrategy.set('warning', 'bg-warning text-warning-content')
alertCssStrategy.set('danger', 'bg-danger text-danger-content')

alertCssStrategy.set('primary', 'bg-primary text-info-primary')
alertCssStrategy.set('secondary', 'bg-secondary text-secondary-content')
alertCssStrategy.set('accent', 'bg-accent text-accent-content')
alertCssStrategy.set('neutral', 'bg-neutral text-neutral-content')
// no hovers:
alertCssStrategy.set('body', 'bg-body text-body-content')
alertCssStrategy.set('card', 'bg-card text-card-content')
alertCssStrategy.set('code', 'bg-code text-code-content')

const iconCssStrategy = new Map<string, string>()
iconCssStrategy.set('info', 'text-info-content')
iconCssStrategy.set('success', 'text-success-content')
iconCssStrategy.set('warning', 'text-warning-content')
iconCssStrategy.set('danger', 'text-danger-content')

iconCssStrategy.set('primary', 'text-primary-content')
iconCssStrategy.set('secondary', 'text-secondary-content')
iconCssStrategy.set('accent', 'text-accent-content')
iconCssStrategy.set('neutral', 'text-neutral-content')
// no hovers:
iconCssStrategy.set('body', 'bg-body text-body-content')
iconCssStrategy.set('card', 'bg-card text-card-content')
iconCssStrategy.set('code', 'bg-code text-code-content')

const textCssStrategy = new Map<string, string>()
textCssStrategy.set('info', 'text-info-content')
textCssStrategy.set('success', 'text-success-content')
textCssStrategy.set('warning', 'text-warning-content')
textCssStrategy.set('danger', 'text-danger-content')

textCssStrategy.set('primary', 'text-primary-content')
textCssStrategy.set('secondary', 'text-secondary-content')
textCssStrategy.set('accent', 'text-accent-content')
textCssStrategy.set('neutral', 'text-neutral-content')
// no hovers:
textCssStrategy.set('body', 'bg-body text-body-content')
textCssStrategy.set('card', 'bg-card text-card-content')
textCssStrategy.set('code', 'bg-code text-code-content')

const buttonCloseCssStrategy = new Map<string, string>()
buttonCloseCssStrategy.set('info', 'bg-info text-info-content hover:bg-info-hover focus:ring-info-focus')
buttonCloseCssStrategy.set(
  'success',
  'bg-success text-success-content hover:bg-success-hover ffocus:ring-success-focus',
)
buttonCloseCssStrategy.set('warning', 'bg-warning text-warning-content hover:bg-warning-hover focus:ring-warning-focus')
buttonCloseCssStrategy.set('danger', 'bg-danger text-danger-content hover:bg-danger-hover focus:ring-danger-focus')

buttonCloseCssStrategy.set('primary', 'bg-primary text-primary-content hover:bg-primary-hover focus:ring-primary-focus')
buttonCloseCssStrategy.set(
  'secondary',
  'bg-secondary text-secondary-content hover:bg-secondary-hover ffocus:ring-secondary-focus',
)
buttonCloseCssStrategy.set('accent', 'bg-accent text-accent-content hover:bg-accent-hover focus:ring-accent-focus')
buttonCloseCssStrategy.set('neutral', 'bg-neutral text-neutral-content hover:bg-neutral-hover focus:ring-neutral-focus')
// no hovers:
buttonCloseCssStrategy.set('body', 'bg-body text-body-content hover:bg-body-400 focus:ring-body-300')
buttonCloseCssStrategy.set('card', 'bg-card text-card-content hover:bg-card-400 focus:ring-card-300')
buttonCloseCssStrategy.set('code', 'bg-code text-code-content hover:bg-code-400 focus:ring-code-300')

export { alertCssStrategy, iconCssStrategy, textCssStrategy, buttonCloseCssStrategy }
