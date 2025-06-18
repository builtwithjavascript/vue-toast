# vue-toast
Toast notification Vue component based on Tailwind

## Example
```typescript
  import type { TToastType, IToastParams } from '@builtwithjavascript/vue-toast'
  import { useToast } from '@builtwithjavascript/vue-toast'

  ...

  const { showToast, toastPositions } = useToast()
  
  let options: IToastParams = {
    group: 'top-right',
    type: type || 'normal',
    category: category || 'info',
    message: `onButtonClicked ${category}`,
    sticky: false,
    timeout: 5000,
  }

  await showToast(options)
```

## IMPORTANT
IMPORTANT: when using a plugin like @builtwithjavascript/vue-toast, you have to include the path here within the tailwind.config.js "content" or Vite/Tailwind will not include the css classes used by the plugin when building or running:

```javascript
// file: tailwind.config.js:

module.exports = {
  content: [
    "./index.html", /* you might have to add this */
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@builtwithjavascript/vue-toast/**/*.{vue,js,ts,jsx,tsx}" // <-- add this
  ],
  ...
```
