import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import logo from '../../assets/logo-Dr6vfgn4.png';

const navItems = [
  ['/', 'Accueil'],
  ['/activites', 'Activites'],
  ['/musculation', 'Musculation'],
  ['/planning', 'Planning'],
  ['/tarifs', 'Tarifs'],
  ['/contact', 'Contact']
];

export default function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          <img src={logo} alt="Power Gym Kelibia" />
        </Link>
        <nav className="desktop-nav" aria-label="Navigation principale">
          {navItems.map(([to, label]) => (
            <NavLink key={to} to={to}>
              {label}
            </NavLink>
          ))}
        </nav>
        <button className="icon-button mobile-only" type="button" aria-label="Menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </header>
      {open ? (
        <nav className="mobile-nav" aria-label="Navigation mobile">
          {navItems.map(([to, label]) => (
            <NavLink key={to} to={to} onClick={() => setOpen(false)}>
              {label}
            </NavLink>
          ))}
        </nav>
      ) : null}
      <main>
        <Outlet />
      </main>
      <footer className="site-footer">
        <span>Power Gym Kelibia</span>
        <span>Musculation, coaching et activites collectives.</span>
      </footer>
    </div>
  );
}
