import './globals.css'
import { Outfit } from 'next/font/google'
import Link from 'next/link'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800']
})

// ===== NEXT.JS METADATA (SEO & OPEN GRAPH) =====
export const metadata = {
  metadataBase: new URL('https://digopk.vercel.app'),
  title: 'DigoPK | Web Developer Karachi & Digital Marketing Pakistan – Top Web Development Agency',
  description: 'DigoPK is a premium web development & digital marketing agency in Karachi, Pakistan. Specializing in web developer services, SEO, e-commerce, UI/UX design, and graphic design. Top web developer Karachi & Pakistan.',
  keywords: [
    "web developer karachi", "web developer pakistan", "digital marketing pk",
    "digital marketing pakistan", "seo services karachi", "ecommerce development pakistan",
    "web design karachi", "top web agency pakistan", "digopk", "wordpress developer karachi",
    "react developer pakistan", "graphic design karachi", "video editing pakistan",
    "ui ux design pakistan", "best web developer karachi", "digital agency pakistan"
  ],
  authors: [{ name: 'DigoPK' }],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://digopk.vercel.app/',
  },
  openGraph: {
    title: 'DigoPK | Top Web Developer Karachi & Digital Agency Pakistan',
    description: 'We build high-performance websites & digital experiences. Web development, SEO, digital marketing, e-commerce, and design services in Karachi, Pakistan.',
    url: 'https://digopk.vercel.app/',
    siteName: 'DigoPK',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'DigoPK - Web Developer Karachi',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DigoPK | Web Developer Karachi & Digital Agency Pakistan',
    description: 'Top web development & digital marketing agency in Karachi, Pakistan. Get your website built by experts.',
    images: ['https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop'],
  },
  icons: {
    icon: '/favicon.ico',
  },
}

// ===== JSON-LD SCHEMAS (GOOGLE RICH RESULTS) =====
const jsonLdSchemas = [
  // 1. Breadcrumb Schema
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://digopk.vercel.app/" },
      { "@type": "ListItem", "position": 2, "name": "Web Development", "item": "https://digopk.vercel.app/#services" },
      { "@type": "ListItem", "position": 3, "name": "Digital Marketing", "item": "https://digopk.vercel.app/#services" }
    ]
  },
  // 2. Local Business / Organization Schema
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "DigoPK",
    "image": "https://digopk.vercel.app/images/logo.png",
    "url": "https://digopk.vercel.app/",
    "telephone": "+92 310 7454676",
    "email": "motech508@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gulshan-e-Iqbal",
      "addressLocality": "Karachi",
      "addressRegion": "Sindh",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "24.8607",
      "longitude": "67.0011"
    },
    "description": "DigoPK is a full-service digital agency in Karachi, Pakistan. We specialize in web development, SEO, digital marketing, e-commerce, UI/UX design, and video editing. Top web developer Karachi.",
    "sameAs": [
      "https://www.linkedin.com/company/digopk",
      "https://www.instagram.com/digopk",
      "https://github.com/digopk"
    ],
    "priceRange": "PKR 35,000 - PKR 500,000+",
    "areaServed": ["Karachi", "Lahore", "Islamabad", "Pakistan", "Worldwide"],
    "serviceType": ["Web Development", "Digital Marketing", "SEO", "E-Commerce", "Graphic Design", "Video Editing", "UI/UX Design"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    }
  },
  // 3. Website Schema
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "DigoPK",
    "url": "https://digopk.vercel.app/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://digopk.vercel.app/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="image/ico" href="favicon.ico" />
      </head>
      <body className={outfit.className}>

        <div className="glow-bg glow-1"></div>
        <div className="glow-bg glow-2"></div>

        {/* Navbar */}
        <nav className="navbar">
          <div className="nav-inner">
            <Link href="/" className="logo">
              <img src="/images/logo.png" height="30" alt="DigoPk logo" />
            </Link>
            <ul className="nav-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/work">Portfolio</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/blogs">Blogs</Link></li>
            </ul>
            <Link href="/apply" className="btn-nav">Start a Project <i className="fas fa-arrow-right"></i></Link>
            <div className="hamburger"><i className="fas fa-bars"></i></div>
          </div>
        </nav>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer>
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <img src="/images/logo.png" height="30" alt="DigoPK" />
              </div>
              <p>Pakistan's leading digital agency. We build websites and brands that grow your business.</p>
            </div>
            <div className="footer-links">
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/work">Work</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/contact">Contact</Link>
              <li><Link href="/blogs">Blogs</Link></li>
            </div>
            <div className="footer-social">
              <a href="#"><i className="fab fa-github"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="https://wa.me/923107454676" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
          {/* Naya Footer Bottom with Links */}
          <div className="footer-bottom" style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center', marginTop: '20px' }}>
            <div className="legal-links" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link href="/terms" style={{ color: 'var(--text-muted)', fontSize: '14px', transition: '0.3s' }}>Terms & Conditions</Link>
              <Link href="/privacy" style={{ color: 'var(--text-muted)', fontSize: '14px', transition: '0.3s' }}>Privacy Policy</Link>
              <Link href="/refund" style={{ color: 'var(--text-muted)', fontSize: '14px', transition: '0.3s' }}>Refund Policy</Link>
            </div>
            <p>© 2026 DigoPK. All rights reserved. Made with <span style={{ color: 'var(--primary)' }}>❤</span> in Pakistan 🇵🇰 | Web Developer Karachi | Digital Marketing Pakistan</p>
          </div>
        </footer>

        <a href="https://wa.me/923107454676" className="whatsapp-float" target="_blank" rel="noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
        <script src='script.js'></script>

      </body>
    </html>
  )
}