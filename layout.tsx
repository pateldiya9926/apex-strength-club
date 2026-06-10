@import 'tailwindcss';
@import 'tw-animate-css';
@import 'shadcn/tailwind.css';

@custom-variant dark (&:is(.dark *));

@theme inline {
  --font-heading: var(--font-sans);
  --font-sans: 'Inter', 'Inter Fallback';
  --font-mono: 'Geist Mono', 'Geist Mono Fallback';
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  --color-chart-5: var(--chart-5);
  --color-chart-4: var(--chart-4);
  --color-chart-3: var(--chart-3);
  --color-chart-2: var(--chart-2);
  --color-chart-1: var(--chart-1);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive: var(--destructive);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  --color-foreground: var(--foreground);
  --color-background: var(--background);
  --radius-sm: calc(var(--radius) * 0.6);
  --radius-md: calc(var(--radius) * 0.8);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) * 1.4);
  --radius-2xl: calc(var(--radius) * 1.8);
  --radius-3xl: calc(var(--radius) * 2.2);
  --radius-4xl: calc(var(--radius) * 2.6);
  --font-serif: 'Source Serif 4', 'Source Serif 4 Fallback';
  /* computed shadow variables below - do not modify */
  --shadow-2xs: var(--shadow-x) var(--shadow-y) color-mix(in srgb, var(--shadow-color) calc(var(--shadow-opacity) * 100%), transparent);
  --shadow-xs: var(--shadow-x) var(--shadow-y) var(--shadow-blur) var(--shadow-spread) color-mix(in srgb, var(--shadow-color) calc(var(--shadow-opacity) * 100%), transparent);
  --shadow-sm: var(--shadow-x) var(--shadow-y) calc(var(--shadow-blur) * 1.5) var(--shadow-spread) color-mix(in srgb, var(--shadow-color) calc(var(--shadow-opacity) * 100%), transparent);
  --shadow-md: calc(var(--shadow-x) * 2) calc(var(--shadow-y) * 2) calc(var(--shadow-blur) * 3) calc(var(--shadow-spread) - 1px) color-mix(in srgb, var(--shadow-color) calc(var(--shadow-opacity) * 100%), transparent);
  --shadow-lg: calc(var(--shadow-x) * 4) calc(var(--shadow-y) * 4) calc(var(--shadow-blur) * 5) calc(var(--shadow-spread) - 3px) color-mix(in srgb, var(--shadow-color) calc(var(--shadow-opacity) * 100%), transparent);
  --shadow-xl: calc(var(--shadow-x) * 6) calc(var(--shadow-y) * 6) calc(var(--shadow-blur) * 7) calc(var(--shadow-spread) - 5px) color-mix(in srgb, var(--shadow-color) calc(var(--shadow-opacity) * 100%), transparent);
  --shadow-2xl: calc(var(--shadow-x) * 8) calc(var(--shadow-y) * 8) calc(max(0px, var(--shadow-blur) * 9 - 8px)) calc(var(--shadow-spread) - 12px) color-mix(in srgb, var(--shadow-color) calc(var(--shadow-opacity) * 250%), transparent);
  --shadow: var(--shadow-md);
  --color-shadow-color: var(--shadow-color);
  --shadow-opacity: var(--shadow-opacity);
  --shadow-spread: var(--shadow-spread);
  --shadow-blur: var(--shadow-blur);
  --shadow-y: var(--shadow-y);
  --shadow-x: var(--shadow-x);
  --color-destructive-foreground: var(--destructive-foreground);
}

:root {
  --background: #0a0a0b;
  --foreground: #f5f5f5;
  --card: #141417;
  --card-foreground: #f5f5f5;
  --popover: #141417;
  --popover-foreground: #f5f5f5;
  --primary: #1d9bf0;
  --primary-foreground: #04121f;
  --secondary: #1c1c20;
  --secondary-foreground: #e5e5e5;
  --muted: #1c1c20;
  --muted-foreground: #9ca3af;
  --accent: #0e2a3f;
  --accent-foreground: #7fd2ff;
  --destructive: #ef4444;
  --border: #26262b;
  --input: #26262b;
  --ring: #1d9bf0;
  --chart-1: #1d9bf0;
  --chart-2: #38bdf8;
  --chart-3: #0ea5e9;
  --chart-4: #0284c7;
  --chart-5: #075985;
  --radius: 0.625rem;
  --sidebar: #0a0a0b;
  --sidebar-foreground: #f5f5f5;
  --sidebar-primary: #1d9bf0;
  --sidebar-primary-foreground: #04121f;
  --sidebar-accent: #0e2a3f;
  --sidebar-accent-foreground: #7fd2ff;
  --sidebar-border: #26262b;
  --sidebar-ring: #1d9bf0;
  --destructive-foreground: #ffffff;
  --shadow-x: 0px;
  --shadow-y: 1px;
  --shadow-blur: 2px;
  --shadow-spread: 0px;
  --shadow-opacity: 0.05;
  --shadow-color: #000000;
}

.dark {
  --background: #171717;
  --foreground: #e5e5e5;
  --card: #262626;
  --card-foreground: #e5e5e5;
  --popover: #262626;
  --popover-foreground: #e5e5e5;
  --primary: #3b82f6;
  --primary-foreground: #ffffff;
  --secondary: #262626;
  --secondary-foreground: #e5e5e5;
  --muted: #262626;
  --muted-foreground: #a3a3a3;
  --accent: #1e3a8a;
  --accent-foreground: #bfdbfe;
  --destructive: #ef4444;
  --border: #404040;
  --input: #404040;
  --ring: #3b82f6;
  --chart-1: #60a5fa;
  --chart-2: #3b82f6;
  --chart-3: #2563eb;
  --chart-4: #1d4ed8;
  --chart-5: #1e40af;
  --sidebar: #171717;
  --sidebar-foreground: #e5e5e5;
  --sidebar-primary: #3b82f6;
  --sidebar-primary-foreground: #ffffff;
  --sidebar-accent: #1e3a8a;
  --sidebar-accent-foreground: #bfdbfe;
  --sidebar-border: #404040;
  --sidebar-ring: #3b82f6;
  --destructive-foreground: #ffffff;
  --shadow-x: 0px;
  --shadow-y: 1px;
  --shadow-blur: 2px;
  --shadow-spread: 0px;
  --shadow-opacity: 0.05;
  --shadow-color: #000000;
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
  html {
    @apply font-sans;
    scroll-behavior: smooth;
  }
}

@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float-y {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes pulse-ring {
  0% {
    box-shadow: 0 0 0 0 rgba(29, 155, 240, 0.55);
  }
  70% {
    box-shadow: 0 0 0 14px rgba(29, 155, 240, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(29, 155, 240, 0);
  }
}

@layer utilities {
  .reveal {
    opacity: 0;
  }
  .reveal.is-visible {
    animation: fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }
  .animate-float {
    animation: float-y 4s ease-in-out infinite;
  }
  .animate-pulse-ring {
    animation: pulse-ring 2s infinite;
  }
  .glass {
    background: color-mix(in srgb, var(--card) 55%, transparent);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
  }
  .text-glow {
    text-shadow: 0 0 28px rgba(29, 155, 240, 0.35);
  }
}
