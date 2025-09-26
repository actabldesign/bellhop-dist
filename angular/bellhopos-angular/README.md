# bellhopos Angular UI Component Library

A comprehensive Angular UI component library with design system tokens and styled components.

## Installation

```bash
npm install @actabldesign/bellhop-angular
```

## Setup

### 1. Import the Module

Add `BellhoposAngularModule` to your Angular module:

```typescript
import { BellhoposAngularModule } from '@actabldesign/bellhop-angular';

@NgModule({
  imports: [BellhoposAngularModule],
})
export class AppModule {}
```

### 2. Import Styles

**IMPORTANT**: You must import the bellhopos styles to ensure components display correctly.

Add this import to your `src/styles.css` file:

```css
@import 'node_modules/@actabldesign/bellhop-angular/src/lib/styles/bellhop-styles.css';
```

Or if you prefer to import individual style files:

```css
@import 'node_modules/@actabldesign/bellhop-angular/src/lib/styles/bellhop-primary-colors.css';
@import 'node_modules/@actabldesign/bellhop-angular/src/lib/styles/bellhop-secondary-colors.css';
@import 'node_modules/@actabldesign/bellhop-angular/src/lib/styles/bellhop-spacing.css';
@import 'node_modules/@actabldesign/bellhop-angular/src/lib/styles/bellhop-radius.css';
@import 'node_modules/@actabldesign/bellhop-angular/src/lib/styles/bellhop-shadows.css';
@import 'node_modules/@actabldesign/bellhop-angular/src/lib/styles/bellhop-typography.css';
@import 'node_modules/@actabldesign/bellhop-angular/src/lib/styles/bellhop-icons.css';
```

### 3. Optional: Add Global Styles

For optimal styling, add these global styles to your `src/styles.css`:

```css
* {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: var(--font-inter);
  font-size: var(--text-sm-size);
  line-height: var(--text-sm-line);
  color: var(--color-neutral-800);
  background-color: var(--color-white);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

button {
  font-family: inherit;
  font-size: inherit;
}
```

## Usage

### Basic Component Examples

```html
<!-- Button Component -->
<app-button
  [label]="'Click Me'"
  [hierarchy]="'primary'"
  [size]="'md'"
  (onClick)="handleClick()"
>
</app-button>

<!-- Container Component -->
<app-container [title]="'Dashboard'">
  <p>Your content here</p>
</app-container>

<!-- Notification Component -->
<app-notification
  [title]="'Success!'"
  [message]="'Operation completed successfully'"
  [isVisible]="true"
>
</app-notification>

<!-- Badge Component -->
<app-badge [label]="'Active'" [variant]="'success'"></app-badge>

<!-- Dropdown Component -->
<app-dropdown
  [label]="'Actions'"
  [items]="dropdownItems"
  (itemSelected)="handleMenuAction($event)"
>
</app-dropdown>

<!-- Toggle Component -->
<app-toggle
  [label]="'Enable Notifications'"
  [checked]="notificationsEnabled"
  (toggleChange)="onToggleChange($event)"
>
</app-toggle>

<!-- Complete Dashboard Layout -->
<div class="app-layout">
  <aside class="app-sidebar">
    <app-sidebar></app-sidebar>
  </aside>

  <main class="app-main">
    <header class="app-header">
      <app-appbar
        [isMenuOpen]="!pageNavCollapsed"
        (menuToggle)="onPageNavToggle()"
      >
      </app-appbar>
    </header>

    <div class="bellhop-content-container">
      <nav class="page-nav" [class.collapsed]="pageNavCollapsed">
        <app-page-navigation></app-page-navigation>
      </nav>

      <section class="bellhop-content-area">
        <div class="bellhop-content-wrapper-full">
          <!-- Your content here -->
        </div>
      </section>
    </div>
  </main>
</div>
```

### Available Components

- `app-button` - Button component with multiple variants
- `app-container` - Container component with title
- `app-notification` - Notification/alert component
- `app-badge` - Badge component for status indicators
- `app-dropdown` - Dropdown menu component
- `app-toggle` - Toggle switch component
- `app-popover` - Popover component
- `app-appbar` - Application bar component
- And many more...

## Design System

The library includes a comprehensive design system with:

- **Colors**: Brand colors, neutral colors, semantic colors
- **Typography**: Font sizes, weights, line heights
- **Spacing**: Consistent spacing scale
- **Shadows**: Drop shadow tokens
- **Radius**: Border radius tokens
- **Icons**: Material Symbols support

All design tokens are available as CSS custom properties (variables).

## Demo Pages

The library includes interactive demo pages to help you get started:

### 📊 Dashboard Demo

A complete dashboard layout showcasing the full bellhopos design system:

```
node_modules/@actabldesign/bellhop-angular/src/lib/demo/dashboard-demo.html
```

### ⚡ Integration Demo

Step-by-step examples of how to use each component in your Angular application:

```
node_modules/@actabldesign/bellhop-angular/src/lib/demo/angular-integration-demo.html
```

### 🔧 Angular Code Examples

Complete working Angular component examples with correct APIs:

```
node_modules/@actabldesign/bellhop-angular/src/lib/demo/angular-dashboard-example.ts
```

**To view the demos:**

- Open the HTML files in your browser for interactive demos
- Check the TypeScript file for exact working Angular code examples with correct selectors and properties

## Troubleshooting

### Components appear unstyled

Make sure you've imported the CSS files as described in the Setup section. The most common issue is forgetting to import `bellhop-styles.css`.

### Material Icons not displaying

The library uses Material Symbols Outlined. If icons aren't displaying, check that you have internet connectivity as the fonts are loaded from Google Fonts CDN.

## Development

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

### Building

Run `ng build bellhopos-angular` to build the library.

### Testing

Run `ng test bellhopos-angular` to execute the unit tests.
