# vue-toast
Toast notification Vue component based on Tailwind

## IMPORTANT
IMPORTANT: when using a plugin like @windoplug/vue-toast, you have to include the path here within the tailwind.config.js "content" or Vite/Tailwind will not include the css classes used by the plugin when building or running:

```javascript
// file: tailwind.config.js:

module.exports = {
  content: [
    "./index.html", /* you might have to add this */
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@windplug/vue-toast/**/*.{vue,js,ts,jsx,tsx}" // <-- add this
  ],
  ...
```
