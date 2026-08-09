import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { ADDRESS, EMAIL, PHONE_DISPLAY, PHONE_HREF, SOCIAL_LINKS, WHATSAPP_URL } from '../data/site';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <img src={logo} alt="Varaahei Ventures" />
          <p className="footer-tag">Build. Grow. Belong.</p>
          <p className="footer-about">
            A technology and growth studio helping businesses across India go digital —
            websites, apps, AI, and the systems that run behind them.
          </p>
          <div className="footer-social">
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">IG</a>
            <a href={SOCIAL_LINKS.x} target="_blank" rel="noreferrer" aria-label="X (Twitter)">X</a>
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">FB</a>
            <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">YT</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="WhatsApp">WA</a>
          </div>
        </div>

        <nav className="footer-col" aria-label="Company">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/training">Training</Link></li>
            <li><Link to="/clients">Clients</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <nav className="footer-col" aria-label="Legal">
          <h4>Legal</h4>
          <ul>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/refund-policy">Refund Policy</Link></li>
            <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
          </ul>
        </nav>

        <div className="footer-col">
          <h4>Reach us</h4>
          <ul className="footer-contact">
            <li>{ADDRESS.line1}<br />{ADDRESS.line2}</li>
            <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li><a href={PHONE_HREF}>{PHONE_DISPLAY}</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom__row">
          <p>&copy; {year} Varaahei Ventures. All rights reserved.</p>
          <p>Coimbatore, Tamil Nadu, India</p>
        </div>
      </div>
    </footer>
  );
}
