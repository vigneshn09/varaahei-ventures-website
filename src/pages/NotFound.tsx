import { Link } from 'react-router-dom';
import FlameDivider from '../components/FlameDivider';
import logo from '../assets/images/logo-header.png';
import './NotFound.css';

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container not-found__inner">
        <img src={logo} alt="" className="not-found__mark" aria-hidden="true" />
        <span className="not-found__code">404</span>
        <h1>This page wandered off.</h1>
        <p>The page you're looking for doesn't exist, or may have moved. Let's get you back on track.</p>
        <FlameDivider className="not-found__flame" />
        <div className="not-found__actions">
          <Link to="/" className="btn btn-primary">Back to Home</Link>
          <Link to="/contact" className="btn btn-ghost">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
