# Futuristic Radar Navigation UI

A fully accessible, keyboard-friendly radar/aim interface with curved menu blocks that follow the radar's circumference. Built with semantic HTML, modern CSS, and React.

## Features

- 🎯 **Central Radar Display**: Perfect circle with grid lines, concentric rings, and a rotating sweep beam
- 🔄 **Rotating Sweep**: Smooth 360° animation with customizable speed
- 📍 **Crosshair Aim**: Pulsing center dot with crosshair guides
- 🎨 **Curved Menu Blocks**: Left and right stacks that visually follow the radar's curvature
- ✨ **Hover Effects**: Blocks expand outward, labels fade in, icons glow, and connector lines appear
- ⌨️ **Full Keyboard Support**: Tab navigation with identical hover/focus states
- 📱 **Responsive Design**: Adapts to mobile with stacked layout
- ♿ **Accessible**: ARIA labels, focus outlines, and reduced-motion support
- 🎭 **Themeable**: Fully customizable via CSS variables

## Quick Start

The radar navigation component is self-contained and ready to use. Simply import it:

```tsx
import RadarNav from './components/RadarNav';

function App() {
  return <RadarNav />;
}
```

## Customization

### CSS Variables

All visual properties are controlled via CSS variables defined in `/components/RadarNav.css`:

#### Colors
```css
--radar-bg: #05060a;           /* Deep space background */
--radar-accent: #00e6a8;       /* Neon teal accent color */
--radar-accent-dim: #00856350; /* Dimmed accent for subtle effects */
--radar-grid: #1a3d3680;       /* Grid line color */
--radar-glow: rgba(0, 230, 168, 0.4); /* Glow effect color */
--menu-bg: #0d1117;            /* Menu block background */
--menu-hover-bg: #161b22;      /* Menu block hover background */
--menu-text: #e6edf3;          /* Text color */
--menu-label-bg: rgba(13, 17, 23, 0.95); /* Label background */
```

#### Sizes
```css
--radar-size: 280px;           /* Radar diameter */
--menu-block-width: 56px;      /* Menu block width */
--menu-block-height: 56px;     /* Menu block height (44px min for touch) */
--menu-gap: 16px;              /* Gap between menu blocks */
--menu-offset: 40px;           /* Distance from radar to menus */
--connector-length: 30px;      /* Connector line length */
```

#### Animation
```css
--sweep-duration: 6s;          /* Radar sweep rotation speed */
--pulse-duration: 1.8s;        /* Center dot pulse speed */
--hover-duration: 250ms;       /* Hover transition speed */
--glow-intensity: 8px;         /* Glow blur radius */
```

### Changing Theme Colors

To create a different color scheme, override the CSS variables:

```css
/* Blue theme example */
:root {
  --radar-accent: #00a6ff;
  --radar-glow: rgba(0, 166, 255, 0.4);
  --radar-grid: #1a3d5080;
}

/* Red alert theme */
:root {
  --radar-accent: #ff3366;
  --radar-glow: rgba(255, 51, 102, 0.4);
  --radar-grid: #5d1a2480;
}

/* Purple cyber theme */
:root {
  --radar-accent: #b366ff;
  --radar-glow: rgba(179, 102, 255, 0.4);
  --radar-grid: #3d1a5d80;
}
```

### Changing Radar Size

Adjust the radar size by changing the `--radar-size` variable:

```css
/* Large radar */
:root {
  --radar-size: 400px;
}

/* Small radar */
:root {
  --radar-size: 200px;
}
```

### Adding/Removing Menu Items

Edit the `leftMenuItems` and `rightMenuItems` arrays in `/components/RadarNav.tsx`:

```tsx
const leftMenuItems: MenuItem[] = [
  { id: 'target', label: 'Target Lock', icon: <Target size={20} />, href: '#target' },
  { id: 'shield', label: 'Defense Grid', icon: <Shield size={20} />, href: '#shield' },
  // Add more items here
];
```

Available icons from `lucide-react`: Target, Zap, Shield, Crosshair, Radar, Activity, Radio, Satellite, Plus many more...

### Customizing Menu Block Curve

The curvature of menu blocks is controlled by rotation. Adjust the rotation angle in the CSS:

```css
/* More curve */
.menu-stack--left .menu-block {
  transform: rotate(calc((var(--item-index) - (var(--total-items) - 1) / 2) * -12deg));
}

/* Less curve (flatter) */
.menu-stack--left .menu-block {
  transform: rotate(calc((var(--item-index) - (var(--total-items) - 1) / 2) * -5deg));
}
```

## Accessibility Features

### Keyboard Navigation
- Press **Tab** to navigate between menu items
- Press **Enter** or **Space** to activate a link
- Focus states match hover states visually
- Visible focus outline for keyboard users

### Screen Readers
- Semantic HTML with `<nav>`, `<ul>`, `<li>`, and `<a>` elements
- ARIA labels on all interactive elements
- Descriptive link text and labels
- Decorative elements hidden with `aria-hidden="true"`

### Reduced Motion
- Respects `prefers-reduced-motion` media query
- Disables sweep animation and pulse effects
- Reduces transition durations to near-instant

### High Contrast Mode
- Enhanced borders in high contrast mode
- Thicker focus outlines for better visibility

## Responsive Behavior

### Desktop (> 768px)
- Horizontal layout with radar in center
- Left and right menu stacks
- Blocks curve to follow radar circumference

### Tablet (≤ 768px)
- Vertical layout with radar in center
- Menu blocks arranged in rows above/below radar
- Labels appear below blocks on hover

### Mobile (≤ 480px)
- Smaller radar (160px)
- Touch-friendly 44×44px minimum hit targets
- Optimized spacing for smaller screens

## Browser Support

Tested and working in:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## Technical Details

### HTML Structure
- Semantic `<nav>` container
- Unordered list `<ul>` for menu stacks
- Anchor tags `<a>` for links (works with routing libraries)
- SVG-free design using CSS transforms and gradients

### CSS Techniques
- CSS Grid and Flexbox for layout
- CSS Custom Properties for theming
- CSS transforms for rotation and positioning
- CSS keyframe animations for sweep and pulse
- CSS filters for glow effects
- Cubic-bezier easing for smooth motion

### Performance
- GPU-accelerated transforms
- Optimized animations using `transform` and `opacity`
- No JavaScript required for core functionality
- Minimal repaints and reflows

## Advanced Customization

### Custom Sweep Pattern

Modify the sweep beam gradient in CSS:

```css
.radar__sweep-beam {
  background: linear-gradient(90deg, 
    transparent 0%, 
    var(--radar-accent) 50%,
    transparent 100%
  );
}
```

### Multi-Sweep Effect

Add multiple sweep beams:

```css
.radar__sweep::before,
.radar__sweep::after {
  content: '';
  position: absolute;
  /* Copy .radar__sweep-beam styles */
}

.radar__sweep::after {
  animation-delay: 3s; /* Offset second sweep */
}
```

### Glitch Effect

Add a glitch animation to the radar:

```css
@keyframes glitch {
  0%, 100% { transform: translate(0); }
  33% { transform: translate(-2px, 2px); }
  66% { transform: translate(2px, -2px); }
}

.radar {
  animation: glitch 0.3s ease-in-out infinite;
  animation-play-state: paused;
}

.radar:hover {
  animation-play-state: running;
}
```

## License

Free to use and modify for any project.
