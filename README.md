# Bellhop Public Distribution

This repository contains built assets for public consumption via npm and esm.sh.

## Installation

### Core Web Components
```bash
npm install @actabldesign/bellhop-core
```

```typescript
import { defineCustomElements } from '@actabldesign/bellhop-core/loader'
defineCustomElements()
```

### React Components
```bash
npm install @actabldesign/bellhop-react
```

```typescript
import { BhButton } from '@actabldesign/bellhop-react'
```

### Styles
```bash
npm install @actabldesign/bellhop-styles
```

```typescript
import '@actabldesign/bellhop-styles'
```

### Assets
```bash
npm install @actabldesign/bellhop-assets
```

```typescript
import { avatars, illustrations, logos } from '@actabldesign/bellhop-assets'
```

## Usage with esm.sh (no install needed)
```typescript
import { defineCustomElements } from 'https://esm.sh/@actabldesign/bellhop-core/loader'
```

Last updated: Thu Dec 18 20:51:30 UTC 2025
Source commit: 796143c15c414e9a46fd44f369c89576bb877009
