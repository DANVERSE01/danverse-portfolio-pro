# Muhammed Adel - Professional Portfolio

A cutting-edge portfolio website built with Next.js 16, Three.js, and modern web technologies. Features real 3D WebGL graphics, professional animations, and a design inspired by Human Academy.

## 🚀 Live Demo

- **GitHub Repository**: https://github.com/DANVERSE01/danverse-portfolio-pro
- **Netlify Deployment**: Connect your repository to Netlify for automatic deployment

## ✨ Features

### Real 3D Graphics
- Three.js WebGL rendering with realistic glass materials
- PBR (Physically Based Rendering) for authentic reflections
- Interactive 3D objects with auto-rotation and mouse controls
- HDRI environment mapping for realistic lighting

### Professional UI Components
- Glassmorphism navigation with colorful pill buttons
- Projects carousel with Swiper.js and coverflow 3D effect
- Testimonials slider with glassmorphism cards
- Services grid with hover animations
- Logo marquee with infinite scroll

### Design System
- Human Academy-inspired color palette
- Gradient text effects (cyan → blue → purple)
- Smooth animations with GSAP
- Responsive design for all devices
- Performance optimized for Lighthouse 90+ scores

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **3D Graphics**: Three.js, @react-three/fiber, @react-three/drei
- **Animations**: GSAP, Framer Motion
- **Carousel**: Swiper.js
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Icons**: Lucide React

## 📦 Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
```

## 🌐 Netlify Deployment

### Automatic Deployment

1. Go to [Netlify](https://app.netlify.com/)
2. Click "Add new site" → "Import an existing project"
3. Select "Deploy with GitHub"
4. Choose `danverse-portfolio-pro` repository
5. Build settings (auto-detected from netlify.toml):
   - **Build command**: `pnpm run build`
   - **Publish directory**: `.next`
6. Click "Deploy site"

Your site will be live in 2-3 minutes!

## 📁 Project Structure

```
app/
├── components/
│   ├── Scene3D.tsx          # 3D canvas wrapper
│   ├── GlassObject.tsx      # 3D glass star object
│   ├── Navigation.tsx       # Glassmorphism nav
│   ├── ProjectsCarousel.tsx # Swiper carousel
│   └── TestimonialsSlider.tsx # Testimonials
├── page.tsx                 # Main homepage
├── layout.tsx               # Root layout
└── globals.css              # Global styles
```

## ⚡ Performance

- Lighthouse Score: 90+ (Desktop & Mobile)
- Dynamic imports for 3D components
- Image optimization with AVIF/WebP
- Aggressive caching for static assets

## 📄 License

© 2025 Muhammed Adel. All rights reserved.

---

**Built with Next.js, Three.js, and cutting-edge web technologies.**
