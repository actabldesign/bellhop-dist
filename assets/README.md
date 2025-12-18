# Bellhop Assets

Shared assets library for the Bellhop design system, including avatars, illustrations, images, and logos.

## Installation

```bash
npm install @actabldesign/bellhop-assets
```

## Usage

### Import Assets

Import assets directly from the package:

```tsx
import { avatars, illustrations, logos, images } from '@actabldesign/bellhop-assets';
```

### Direct Path Imports

You can also import assets using direct paths:

```tsx
// Avatars
import avatar1 from '@actabldesign/bellhop-assets/avatars/avatar-1.svg';

// Illustrations
import welcomeIllustration from '@actabldesign/bellhop-assets/illustrations/welcome.svg';

// Logos
import logo from '@actabldesign/bellhop-assets/logos/logo.svg';

// Images
import heroImage from '@actabldesign/bellhop-assets/images/hero.png';
```

## Available Assets

### Avatars

User avatar illustrations and placeholders located in `/avatars/`:
- Various avatar styles and variations
- SVG format for optimal scaling
- Consistent design language

### Illustrations

Decorative illustrations for empty states, onboarding, and feature highlights located in `/illustrations/`:
- Empty state illustrations
- Onboarding graphics
- Feature highlight visuals
- All in SVG format

### Logos

Bellhop brand logos in various formats located in `/logos/`:
- Full color logo
- Monochrome versions
- Icon-only variants
- Light and dark theme versions

### Images

General purpose images and graphics located in `/images/`:
- Hero images
- Background graphics
- General purpose imagery

## Framework Integration

### React

```tsx
import { Button } from '@actabldesign/bellhop-react-components';
import avatar from '@actabldesign/bellhop-assets/avatars/avatar-1.svg';

function UserProfile() {
  return (
    <div className="profile">
      <img src={avatar} alt="User avatar" />
      <h2>John Doe</h2>
    </div>
  );
}
```

### Angular

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  template: `
    <div class="profile">
      <img [src]="avatarSrc" alt="User avatar">
      <h2>John Doe</h2>
    </div>
  `
})
export class UserProfileComponent {
  avatarSrc = 'node_modules/@actabldesign/bellhop-assets/avatars/avatar-1.svg';
}
```

### Using with CDN

For quick prototyping, you can use assets directly via URL:

```html
<img src="https://esm.sh/@actabldesign/bellhop-assets/avatars/avatar-1.svg" alt="Avatar">
```

## Asset Guidelines

### File Formats
- **SVG**: Vector graphics (avatars, illustrations, logos)
- **PNG**: Raster images with transparency
- **JPG**: Photographic images

### Optimization
All assets are optimized for web use:
- SVGs are minified and cleaned
- Images are compressed
- Appropriate formats chosen for each use case

### Naming Convention
Assets follow a consistent naming pattern:
- Lowercase with hyphens: `avatar-1.svg`
- Descriptive names: `welcome-illustration.svg`
- Version indicators when applicable: `logo-v2.svg`

## Best Practices

### Performance
```tsx
// Lazy load images for better performance
import { lazy } from 'react';

const HeroImage = lazy(() => import('@actabldesign/bellhop-assets/images/hero.png'));
```

### Accessibility
Always include descriptive alt text:
```tsx
<img
  src={avatar}
  alt="User profile avatar showing a professional headshot"
/>
```

### Responsive Images
Use appropriate sizes for different viewports:
```tsx
<picture>
  <source
    media="(min-width: 768px)"
    srcSet={largeImage}
  />
  <img src={smallImage} alt="Description" />
</picture>
```

## Development

### Adding New Assets

1. Place assets in the appropriate directory (`avatars/`, `illustrations/`, `logos/`, or `images/`)
2. Follow the naming convention
3. Optimize assets before committing
4. Update the index.js export if needed

### Building

```bash
npm run build:lib:assets
```

## License

MIT
