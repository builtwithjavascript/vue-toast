# vue-toast

**Lightweight toast notification plugin for Vue 3, styled with Tailwind CSS.**  
Supports grouped notifications, preset types (info, success, error, etc.), timeouts, and sticky messages.

[![npm version](https://img.shields.io/npm/v/@builtwithjavascript/vue-toast)](https://www.npmjs.com/package/@builtwithjavascript/vue-toast)
[![License](https://img.shields.io/npm/l/@builtwithjavascript/vue-toast)](./LICENSE)

---

## 🚀 Install

Install via npm:

```bash
npm i -D @builtwithjavascript/vue-toast
```

Then modify your main.ts:
```typescript
// main.ts
import { createApp } from 'vue'
import App from './App.vue'

// Import the plugin
import { ToastPlugin } from '@builtwithjavascript/vue-toast'

createApp(App)
  .use(ToastPlugin as any)
  .mount('#app')
```



## Example Usage

```typescript
import { useToast } from '@builtwithjavascript/vue-toast'
import type { IToastParams } from '@builtwithjavascript/vue-toast'

const { showToast, toastPositions } = useToast()

const options: IToastParams = {
  group: 'top-right',
  type: 'normal',       // or 'success', 'error', etc.
  category: 'info',     // custom grouping
  message: 'Action completed!',
  sticky: false,
  timeout: 5000,        // in milliseconds
}

await showToast(options)
```

You can show multiple toasts in different positions using groups such as 'top-left', 'bottom-right', etc.



## IMPORTANT: Tailwind Configuration Required

In order for Tailwind to recognize and include CSS classes used by this plugin, you must explicitly configure your Tailwind setup:



### Tailwind v3

Add the plugin path to the content array in your tailwind.config.js:
```javascript
// file: tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/@builtwithjavascript/vue-toast/**/*.{vue,js,ts,jsx,tsx}' // <-- required
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```



### Tailwind v4

In Tailwind v4, you must add a @source directive in your main CSS file to include external component paths:
```css
/* file: src/main.css or src/style.css */
@import "tailwindcss";

/* Add this line to allow Tailwind to detect toast styles */
@source "../node_modules/@builtwithjavascript/vue-toast/**/*.{vue,js,ts,jsx,tsx}";

/* als need to add these as they are dynamic classes used by vue-toast */
@source inline("pointer-events-none pointer-events-auto");
@source inline("fixed");
@source inline("flex flex-shrink-0 inline-flex ");
@source inline("top-0 bottom-0 right-0 left-0");
@source inline("justify-end justify-center");
@source inline("rounded-md");
@source inline("shadow shadow-black shadow-md");
@source inline("sr-only text-sm font-medium");
@source inline("h-fit h-5 w-5 w-full max-w-sm");
@source inline("mt-2 ml-3 ml-auto pl-3 -mx-1.5 -my-1.5");
@source inline("p-1.5 p-2 p-3 p-4");
@source inline("cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2");

```

Refer to the [Tailwind v4 content configuration docs](https://tailwindcss.com/docs/detecting-classes-in-source-files) for more info.
