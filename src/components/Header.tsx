import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/logo-header.png';
import { WHATSAPP_URL } from '../data/site';
import './Header.css';

const navItems = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Products', to: '/products' },
  { label: 'Training', to: '/training' },
  { label: 'Clients', to: '/clients' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container site-header__row">
        <Link to="/" className="brand" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Varaahei Ventures" />
          <span className="brand__text">
            <span className="brand__name">Varaahei Ventures</span>
            <span className="brand__tag">Build. Grow. Belong.</span>
          </span>
        </Link>

        <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary">
          <ul>
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) => (isActive ? 'is-active' : '')}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="whatsapp-pill"
            aria-label="Chat with us on WhatsApp"
          >
            <WhatsAppIcon />
            <span>WhatsApp</span>
          </a>
          <button
            className="menu-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.83.49 3.55 1.34 5.03L2 22l5.24-1.37a9.86 9.86 0 0 0 4.8 1.22h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.03c-.24.68-1.4 1.3-1.93 1.35-.5.05-.99.24-3.31-.7-2.83-1.14-4.65-4.02-4.79-4.21-.14-.19-1.15-1.53-1.15-2.92s.72-2.07.98-2.35c.25-.28.55-.35.73-.35h.53c.17 0 .4-.02.6.47.24.58.8 1.99.87 2.13.07.14.11.31.02.5-.09.19-.14.31-.28.47-.14.16-.29.36-.42.48-.14.14-.28.28-.12.56.16.28.7 1.18 1.52 1.92 1.05.95 1.93 1.24 2.21 1.38.28.14.44.12.6-.07.16-.19.68-.8.87-1.07.19-.28.37-.23.62-.14.26.09 1.63.78 1.91.92.28.14.47.21.53.33.07.12.07.68-.17 1.3Z" />
    </svg>
  );
}
