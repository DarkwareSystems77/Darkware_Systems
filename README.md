# Darkware Systems - Company Profile SPA

A modern, responsive single-page application built with React Router v7, featuring a dark theme with neon green accents and smooth animations.

## 🚀 Features

- **Modern Design**: Dark theme with neon green accents inspired by devsinc.com and kwanso.com
- **Responsive Layout**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion animations throughout the application
- **Interactive Navigation**: Sticky navigation with scroll-based highlighting
- **Portfolio Showcase**: Interactive project carousel with filtering
- **Team Section**: Professional team member profiles with hover effects
- **Contact Form**: Validated contact form with React Hook Form and Zod
- **SEO Optimized**: Comprehensive meta tags and structured data
- **Accessibility**: Keyboard navigation and ARIA labels
- **Performance**: Optimized scroll handling and lazy loading

## 🛠️ Tech Stack

- **Framework**: React Router v7
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Build Tool**: Vite

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd darkware-systems
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
app/
├── components/
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Team.tsx
│   │   └── Contact.tsx
│   └── ui/               # Reusable UI components
│       ├── Navigation.tsx
│       ├── Footer.tsx
│       ├── Section.tsx
│       ├── ScrollProgress.tsx
│       ├── ScrollToTop.tsx
│       ├── LoadingSpinner.tsx
│       └── StructuredData.tsx
├── lib/
│   ├── hooks/            # Custom React hooks
│   ├── utils.ts          # Utility functions
│   └── constants.ts      # App constants
├── routes/
│   └── home.tsx          # Main page route
└── root.tsx              # Root layout
```

## 🎨 Design System

### Colors

- **Primary Background**: `#000000` (Black)
- **Secondary Background**: `#0a0a0a` (Dark Gray)
- **Accent Color**: `#00ff41` (Neon Green)
- **Text**: `#ffffff` (White)
- **Muted Text**: `#9ca3af` (Gray)

### Typography

- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, large sizes with gradient effects
- **Body Text**: Regular weight, optimized for readability

### Animations

- **Scroll Reveals**: Elements animate in as they enter viewport
- **Hover Effects**: Subtle scale and color transitions
- **Page Transitions**: Smooth navigation between sections
- **Loading States**: Spinner animations for form submissions

## 🔧 Customization

### Adding New Sections

1. Create a new component in `app/components/sections/`
2. Import and add to `app/routes/home.tsx`
3. Add navigation item to `app/lib/constants.ts`

### Modifying Colors

Update the color palette in `tailwind.config.js`:

```javascript
colors: {
  neon: {
    green: '#00ff41',
    'green-dark': '#00cc33',
    'green-light': '#33ff66',
  },
  // ... other colors
}
```

### Adding Animations

Use Framer Motion for new animations:

```jsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content here
</motion.div>;
```

## 📱 Responsive Breakpoints

- **Mobile**: `< 768px`
- **Tablet**: `768px - 1024px`
- **Desktop**: `> 1024px`

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **ARIA Labels**: Proper labeling for screen readers
- **Focus Management**: Clear focus indicators
- **Color Contrast**: WCAG AA compliant color combinations
- **Semantic HTML**: Proper heading hierarchy and landmarks

## 🚀 Performance Optimizations

- **Lazy Loading**: Images and components load as needed
- **Scroll Throttling**: Optimized scroll event handling
- **Code Splitting**: Automatic code splitting with React Router
- **Image Optimization**: Responsive images with proper sizing
- **Bundle Analysis**: Built-in bundle analyzer for optimization

## 📈 SEO Features

- **Meta Tags**: Comprehensive meta tag configuration
- **Structured Data**: JSON-LD structured data for search engines
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter sharing optimization
- **Sitemap**: Automatic sitemap generation (if configured)

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**: Ensure all dependencies are installed with `npm install`
2. **Animation Issues**: Check that Framer Motion is properly imported
3. **Styling Issues**: Verify Tailwind CSS is configured correctly
4. **Type Errors**: Run `npm run typecheck` to identify TypeScript issues

### Development Tips

- Use the browser dev tools to inspect animations
- Test on multiple devices for responsive design
- Check accessibility with screen readers
- Validate HTML and CSS for standards compliance

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions, please contact:

- Email: contact@darkwaresystems.com
- Website: https://darkwaresystems.com

---

Built with ❤️ by Darkware Systems
