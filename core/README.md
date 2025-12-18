# @actabldesign/bellhop-core

Bellhop Web Components Library built with StencilJS.

## Overview

This package provides framework-agnostic web components that can be used in any frontend application, including vanilla JavaScript, React, Angular, and Vue.

## Installation

```bash
npm install @actabldesign/bellhop-core
```

## Usage

### Vanilla JavaScript / HTML

```html
<!DOCTYPE html>
<html>
<head>
  <script type="module" src="node_modules/@actabldesign/bellhop-core/dist/bellhop-core/bellhop-core.esm.js"></script>
</head>
<body>
  <bh-button label="Click Me" hierarchy="primary"></bh-button>
</body>
</html>
```

### React

Use the React wrapper package for better integration:

```bash
npm install @actabldesign/bellhop-react
```

```tsx
import { BhButton } from '@actabldesign/bellhop-react';

function App() {
  return (
    <BhButton
      label="Click Me"
      hierarchy="primary"
      onBhClick={(e) => console.log('Clicked!', e)}
    />
  );
}
```

### Angular

Import and register the custom elements in your `main.ts`:

```typescript
import { defineCustomElements } from '@actabldesign/bellhop-core/loader';

defineCustomElements();
```

Add `CUSTOM_ELEMENTS_SCHEMA` to your module:

```typescript
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
```

Use in templates:

```html
<bh-button label="Click Me" hierarchy="primary" (bhClick)="handleClick($event)"></bh-button>
```

## Available Components

| Component | Tag | Description |
|-----------|-----|-------------|
| Button | `<bh-button>` | Versatile button with multiple variants |

## Development

```bash
# Build the library
npm run build

# Run tests
npm run test

# Start dev server
npm run start
```

## Component Naming Convention

All components use the `bh-` prefix to avoid conflicts with other libraries:
- `<bh-button>` - Button component
- `<bh-input-text>` - Text input (coming soon)
- `<bh-badge>` - Badge component (coming soon)

## Design Tokens

The components use CSS custom properties for theming. Import the global styles or define your own variables:

```css
:root {
  --color-brand-600: #4338ca;
  --color-neutral-600: #475569;
  /* ... other tokens */
}
```
