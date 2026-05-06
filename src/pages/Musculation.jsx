import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import coachesImage from '../assets/coaches.png';
import musculationHero from '../assets/musculation.png';
import SectionTitle from '../components/SectionTitle.jsx';
import Seo from '../components/Seo.jsx';
import { staff } from '../data/staff.js';

export default function Musculation() {
  return (
    <>
      <Seo
        title="Musculation | Power Gym Kelibia"
        description="Decouvrez le plateau musculation de Power Gym Kelibia et ses coachs Mouhamed Mokhtar et Mohamed Znaidy."
      />
      <section className="hero sub-hero">
        <img src={musculationHero} alt="" aria-hidden="true" className="hero-media" loading="eager" decoding="async" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">POWER GYM KELIBIA</p>
          <h1>
            Notre coachs de plateau <span>musculation</span>
          </h1>
          <p>Passionnes, disponibles et a l ecoute, nos coachs vous accompagnent pour atteindre vos objectifs.</p>
          <div className="button-row">
            <Link className="primary-button" to="/contact">
              Reservez maintenant <ArrowRight size={20} />
            </Link>
            <Link className="secondary-button" to="/machines">
              Decouvrir les machines
            </Link>
          </div>
        </div>
      </section>
      <section className="page-section">
        <SectionTitle
          eyebrow="Musculation"
          title="Force, securite et progression visible"
          description="Notre plateau accompagne les debutants comme les pratiquants confirmes: technique, posture et surcharge progressive."
        />
        <div className="info-grid four">
          {['Transformation physique', 'Support debutant', 'Technique securisee', 'Progression suivie'].map((item) => (
            <div className="info-card" key={item}>
              <h3>{item}</h3>
              <p>Un accompagnement humain pour transformer l effort en resultat durable.</p>
            </div>
          ))}
        </div>
      </section>
      <section className="page-section">
        <div className="coach-panel">
          <SectionTitle
            eyebrow="Coachs"
            title="Nos coachs de plateau"
            description="Touchez un coach pour le contacter directement et commencer votre accompagnement."
            center
          />
          <div className="coach-photo">
            <img src={coachesImage} alt="Coachs de plateau Power Gym Kelibia" loading="lazy" decoding="async" />
          </div>
          <div className="coach-grid">
            {staff.map((coach) => (
              <a key={coach.name} className="coach-card" href={coach.whatsapp} target="_blank" rel="noreferrer" aria-label={`Contacter ${coach.name}`}>
                <span>
                  <strong>{coach.name}</strong>
                  <small>Contacter</small>
                </span>
                <MessageCircle />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
