# Nadara - Premium Moroccan Cosmetics

A beautiful, animated, premium cosmetics website built with Next.js, TypeScript, TailwindCSS, and Framer Motion.

![Nadara](https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=600&fit=crop&q=80)

## ✨ Features

- **Premium Design** - Elegant, natural aesthetic inspired by Hendiya/Aesop
- **Smooth Animations** - Framer Motion powered transitions and interactions
- **Responsive** - Beautiful on all devices
- **WhatsApp Checkout** - Direct order via WhatsApp integration
- **Static Data** - No backend required, all data in JSON files
- **SEO Ready** - Proper meta tags and semantic HTML

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/nadara.git
cd nadara
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Update `.env.local` with your WhatsApp number:
```
NEXT_PUBLIC_WHATSAPP_NUMBER=your_whatsapp_number
```

5. Start the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
nadara/
├── data/                    # Static JSON data
│   ├── products.json
│   ├── collections.json
│   └── testimonials.json
├── public/                  # Static assets
├── src/
│   ├── components/          # React components
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   ├── AnimatedProductCard.tsx
│   │   ├── ProductGallery.tsx
│   │   ├── ProductCarousel.tsx
│   │   ├── Filters.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Collections.tsx
│   │   ├── Values.tsx
│   │   ├── WhatsAppButton.tsx
│   │   └── variants.ts      # Framer Motion variants
│   ├── pages/               # Next.js pages
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   ├── index.tsx        # Home page
│   │   ├── about.tsx
│   │   ├── contact.tsx
│   │   ├── 404.tsx
│   │   └── products/
│   │       ├── index.tsx    # Products listing
│   │       └── [slug].tsx   # Product detail
│   ├── styles/
│   │   └── globals.css
│   └── types/
│       └── index.ts
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with hero, collections, bestsellers, values, testimonials |
| `/products` | Product listing with filters (category, price, popularity) |
| `/products/[slug]` | Product detail with gallery, benefits, ingredients, WhatsApp CTA |
| `/about` | Brand story with timeline, values, sustainability |
| `/contact` | Contact methods, FAQ, WhatsApp integration |

## 🎨 Design System

### Colors

- **Cream/Beige** - Primary background tones
- **Olive Green** - Accent and brand color
- **Terracotta** - Secondary accent
- **Charcoal** - Text and dark elements

### Typography

- **Titles**: Playfair Display (serif)
- **Body**: DM Sans (sans-serif)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (Pages Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## 📦 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🚀 Deployment

This project is ready to deploy on Vercel:

1. Push to GitHub
2. Import in Vercel
3. Add environment variable: `NEXT_PUBLIC_WHATSAPP_NUMBER`
4. Deploy!

## 📝 Customization

### Adding Products

Edit `data/products.json`:

```json
{
  "id": 13,
  "name": "Your Product Name",
  "slug": "your-product-slug",
  "price": 99,
  "images": ["url1", "url2", "url3"],
  "shortDescription": "Product description",
  "category": "Skincare",
  "benefits": ["Benefit 1", "Benefit 2"],
  "ingredients": "Ingredient list",
  "popular": true
}
```

### WhatsApp Number

Update the environment variable:
```
NEXT_PUBLIC_WHATSAPP_NUMBER=your_number
```

## 📄 License

MIT License - feel free to use for personal or commercial projects.

---

Built with ❤️ using Next.js, TailwindCSS, and Framer Motion

