# Chân Kinh Online - Design System

## Overview

Chân Kinh Online (CKO) is a digital monastery for entrepreneurs featuring a Zen-inspired, minimalistic aesthetic with deep, mysterious tones.

## Vibe & Aesthetic

- **Primary Feel**: Mysterious, Deep, Quiet, Ancient yet Modern (Digital Heritage)
- **Design Philosophy**: Less is more. Every element serves a purpose.
- **Motion**: Slow, smooth transitions. No jumpy animations.

## Color Palette

### Dark Mode (Default)

- **Background**: Deep Charcoal (`#1a1a1a` → `oklch(0.18 0.005 85)`)
- **Card/Secondary**: Stone Grey (`#2d2d2d` → `oklch(0.22 0.005 85)`)
- **Text (Body)**: Off-white/Cream (`#e5e5e5` → `oklch(0.9 0.005 85)`)
- **Text (Headings/Accents)**: Muted Gold (`#c5a059` → `oklch(0.75 0.09 75)`)
- **Borders**: Thin, subtle (`#404040` → `oklch(0.35 0.005 85)`)

### Light Mode

- **Background**: Soft cream (`oklch(0.98 0.003 85)`)
- **Text**: Dark charcoal (`oklch(0.2 0.01 85)`)
- **Accents**: Same muted gold for brand consistency

## Typography

### Font Families

#### Headings (h1-h6)
- **Font**: Playfair Display
- **Variable**: `--font-serif`
- **Usage**: All headings, titles, and decorative text
- **Weights**: 400, 500, 600, 700

#### Body Text
- **Font**: Inter
- **Variable**: `--font-sans`
- **Usage**: Paragraphs, buttons, inputs, all UI elements
- **Weights**: 300, 400, 500, 600, 700

### Typography Hierarchy

```tsx
<h1 className="text-6xl font-serif font-semibold text-gold-accent">
  Page Title
</h1>

<h2 className="text-4xl font-serif text-gold-accent">
  Section Title
</h2>

<p className="text-lg text-foreground/80 font-light">
  Body text with relaxed weight
</p>
```

## Component Patterns

### Cards

```tsx
<div className="p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm hover:border-gold-accent/30 transition-all duration-300">
  <h3 className="text-lg font-serif text-gold-accent mb-3">Card Title</h3>
  <p className="text-sm text-muted-foreground font-light">Content</p>
</div>
```

### Buttons

```tsx
<button className="px-6 py-2 bg-gold-accent text-background font-sans font-medium rounded-md hover:opacity-90 transition-opacity">
  Button Text
</button>
```

### Decorative Elements

```tsx
{/* Horizontal divider with gold accent */}
<div className="h-px bg-gradient-to-r from-transparent via-gold-accent/50 to-transparent" />

{/* Subtle border with gold on hover */}
<div className="border border-border/50 hover:border-gold-accent/30 transition-colors">
  Content
</div>
```

## Animations

### CSS Animations (Defined in globals.css)

- `animate-fadeIn`: Fade in over 0.6s
- `animate-slideUp`: Slide up and fade in over 0.8s
- `animate-fadeInSlow`: Slow fade in over 1.2s

### Framer Motion (Recommended for interactive elements)

```tsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
>
  Content
</motion.div>
```

### Staggered Animations

```tsx
<motion.div className="stagger-children">
  {items.map((item) => (
    <div key={item.id}>{item.content}</div>
  ))}
</motion.div>
```

## Layout Patterns

### Sticky Footer

```tsx
<div className="min-h-screen flex flex-col">
  <main className="flex-1">Main content</main>
  <footer className="mt-auto py-8 border-t border-border/30">
    Footer content
  </footer>
</div>
```

### Texture Overlay (Adds subtle depth)

```tsx
<div className="texture-overlay">
  {/* Content will have subtle noise texture overlay */}
</div>
```

## Custom Utility Classes

### Text

- `text-gold`: Uses muted gold accent color
- `font-serif`: Uses Playfair Display
- `font-sans`: Uses Inter
- `font-light`: Light weight for body text

### Borders

- `border-gold`: Gold accent border
- `border-border/50`: 50% opacity border

### Backgrounds

- `bg-gold-accent`: Gold accent background
- `bg-card/50`: Semi-transparent card background
- `backdrop-blur-sm`: Subtle blur effect

## Theme Configuration

### Dark Mode (Default)

The application defaults to dark mode for the Zen aesthetic. To change themes:

```tsx
import { useTheme } from 'next-themes'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle theme
    </button>
  )
}
```

### Custom CSS Variables

Colors are defined as CSS variables in `globals.css`:

```css
--background: oklch(0.18 0.005 85);      /* Deep charcoal */
--foreground: oklch(0.9 0.005 85);        /* Off-white */
--gold-accent: oklch(0.75 0.09 75);       /* Muted gold */
--border: oklch(0.35 0.005 85);           /* Subtle grey */
```

## Scrollbar Styling

Custom dark, minimal scrollbars are applied globally:

- Width: 8px
- Color: Matches border color
- Hover: Slightly lighter
- Horizontal scrollbars can be hidden with `no-scrollbar` class

## Accessibility

### Contrast Ratios

- Dark mode text meets WCAG AA standards
- Gold accents are used sparingly for emphasis, not for critical text

### Semantic HTML

```tsx
<main>
  <section>
    <article>
      <h1>Content</h1>
    </article>
  </section>
</main>
```

## Best Practices

1. **Simplicity**: Avoid unnecessary visual noise
2. **Breathing Room**: Use generous padding and spacing
3. **Consistent Animations**: Keep transitions slow and smooth (200ms-1s)
4. **Gold Sparingly**: Use gold only for emphasis, hierarchy, and branding
5. **Texture Overlays**: Use sparingly for depth without distraction
6. **Typography**: Always use serif for headings, sans-serif for body

## File Structure

```
src/
├── app/
│   ├── globals.css          # Global styles, animations, variables
│   ├── layout.tsx           # Root layout with fonts and theme provider
│   └── page.tsx             # Demo page showcasing design system
├── components/
│   ├── theme-provider.tsx   # Theme management wrapper
│   └── ui/                  # shadcn/ui components
└── lib/
    └── utils.ts             # Utility functions
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Components**: shadcn/ui (New York style)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Playfair Display (serif), Inter (sans-serif)
- **Theme**: next-themes

## Next Steps

1. Build out page components following the design patterns
2. Create reusable components that follow the aesthetic
3. Implement smooth page transitions
4. Add more Framer Motion animations for interactive elements
5. Consider adding a custom cursor or scroll effects for enhanced experience
