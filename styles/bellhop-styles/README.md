# Bellhop Styles

Shared CSS styles and design tokens for the Bellhop design system. This package provides framework-agnostic styles that can be used with Angular, React, or any other framework.

## Installation

```bash
npm install @actabldesign/bellhop-styles
```

## Usage

### Import All Styles

Import the complete style package in your main CSS or TypeScript/JavaScript file:

```css
@import '@actabldesign/bellhop-styles';
```

or in TypeScript/JavaScript:

```tsx
import '@actabldesign/bellhop-styles';
```

### Import Individual Style Modules

For more granular control, you can import individual style modules:

```css
@import '@actabldesign/bellhop-styles/base/colors.css';
@import '@actabldesign/bellhop-styles/base/typography.css';
@import '@actabldesign/bellhop-styles/base/spacing.css';
@import '@actabldesign/bellhop-styles/base/shadows.css';
@import '@actabldesign/bellhop-styles/base/radius.css';
```

### Using Design Tokens

All design tokens are available as CSS custom properties:

```css
.my-component {
  /* Colors */
  background-color: var(--color-primary-500);
  color: var(--color-neutral-800);

  /* Spacing */
  padding: var(--spacing-4);
  margin: var(--spacing-2);

  /* Typography */
  font-family: var(--font-inter);
  font-size: var(--text-sm-size);
  line-height: var(--text-sm-line);

  /* Shadows */
  box-shadow: var(--shadow-md);

  /* Border Radius */
  border-radius: var(--radius-md);
}
```

## Design Tokens Reference

### Colors

#### Primary Colors
- `--color-primary-50` to `--color-primary-900`
- `--color-primary-500` (default brand color)

#### Neutral Colors
- `--color-neutral-50` to `--color-neutral-900`
- `--color-white`, `--color-black`

#### Semantic Colors
- **Success**: `--color-success-50` to `--color-success-900`
- **Warning**: `--color-warning-50` to `--color-warning-900`
- **Error**: `--color-error-50` to `--color-error-900`
- **Info**: `--color-info-50` to `--color-info-900`

### Typography

#### Font Families
- `--font-inter`: Primary font family

#### Font Sizes
- `--text-xs-size` (0.75rem)
- `--text-sm-size` (0.875rem)
- `--text-base-size` (1rem)
- `--text-lg-size` (1.125rem)
- `--text-xl-size` (1.25rem)
- And more...

#### Font Weights
- `--font-light` (300)
- `--font-normal` (400)
- `--font-medium` (500)
- `--font-semibold` (600)
- `--font-bold` (700)

### Spacing

Spacing scale from 0.5 to 96 (in 0.25rem increments):
- `--spacing-0-5` (0.125rem)
- `--spacing-1` (0.25rem)
- `--spacing-2` (0.5rem)
- `--spacing-4` (1rem)
- `--spacing-8` (2rem)
- And more...

### Shadows

- `--shadow-xs`: Extra small shadow
- `--shadow-sm`: Small shadow
- `--shadow-md`: Medium shadow
- `--shadow-lg`: Large shadow
- `--shadow-xl`: Extra large shadow

### Border Radius

- `--radius-sm` (0.125rem)
- `--radius-md` (0.25rem)
- `--radius-lg` (0.5rem)
- `--radius-xl` (1rem)
- `--radius-full` (9999px)

## Component Styles

The package includes pre-built component styles that follow the Bellhop design system. These are automatically applied when using Bellhop components.

### Layout Classes

```css
.app-layout { /* Dashboard layout */ }
.app-sidebar { /* Sidebar container */ }
.app-main { /* Main content area */ }
.bellhop-content-container { /* Content wrapper */ }
```

## Framework Integration

### React

```tsx
import '@actabldesign/bellhop-styles';

function App() {
  return (
    <div className="app-layout">
      {/* Your components */}
    </div>
  );
}
```

### Angular

Add to your `src/styles.css`:

```css
@import '@actabldesign/bellhop-styles';
```

### Vanilla JavaScript/HTML

```html
<link rel="stylesheet" href="node_modules/@actabldesign/bellhop-styles/index.css">
```

## Development

This package is built using Rollup and PostCSS.

### Building

```bash
npm run build:lib:styles
```

## License

MIT
