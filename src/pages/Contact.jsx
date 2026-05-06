import { MapPin, Phone } from 'lucide-react';
import SectionTitle from '../components/SectionTitle.jsx';
import Seo from '../components/Seo.jsx';
import { staff } from '../data/staff.js';

export default function Contact() {
  return (
    <section className="page-section top-page">
      <Seo title="Contact | Power Gym Kelibia" description="Contactez Power Gym Kelibia et ses coachs." />
      <SectionTitle eyebrow="Contact" title="Parlez avec l equipe" description="Pour les inscriptions, le planning et le coaching." />
      <div className="contact-grid">
        <div className="info-card">
          <MapPin />
          <h3>Power Gym Kelibia</h3>
          <p>Kelibia, Tunisie</p>
        </div>
        {staff.map((coach) => (
          <a className="info-card contact-card" href={coach.whatsapp} target="_blank" rel="noreferrer" key={coach.name}>
            <Phone />
            <h3>{coach.name}</h3>
            <p>{coach.phone}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
