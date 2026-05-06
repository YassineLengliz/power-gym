import { ArrowRight, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import background from '../../assets/background.png';
import ActivityCard from '../components/ActivityCard.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import Seo from '../components/Seo.jsx';
import { activities } from '../data/activities.js';
import { hours } from '../data/planning.js';

export default function Home() {
  return (
    <>
      <Seo
        title="Power Gym Kelibia | Salle de sport a Kelibia"
        description="Power Gym Kelibia est une salle moderne pour musculation, activites collectives, planning, coaching et transformation physique."
      />
      <section className="hero home-hero">
        <img src={background} alt="" aria-hidden="true" className="hero-media" loading="eager" decoding="async" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">POWER GYM KELIBIA</p>
          <h1>
            Train Smarter at <span>Power Gym</span>
          </h1>
          <p>Un espace moderne a Kelibia pour vous entrainer, progresser et depasser vos limites.</p>
          <div className="button-row">
            <Link className="primary-button" to="/activites">
              Decouvrir les activites <ArrowRight size={20} />
            </Link>
            <Link className="secondary-button" to="/contact">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
      <section className="page-section">
        <SectionTitle
          eyebrow="Activites"
          title="Un programme complet pour chaque objectif"
          description="Musculation, cardio, arts martiaux, kids et cours collectifs dans une ambiance intense et encadree."
        />
        <div className="activity-grid">
          {activities.slice(0, 6).map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </section>
      <section className="page-section">
        <SectionTitle eyebrow="Horaires" title="Ouvert tot, ferme tard" center />
        <div className="info-grid three">
          {hours.map((item) => (
            <div className="info-card center-card" key={item.days}>
              <Clock />
              <h3>{item.days}</h3>
              <p>{item.hours}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="page-section">
        <div className="info-grid four">
          {[
            ['Coaching professionnel', ShieldCheck],
            ['Activites variees', Sparkles],
            ['Ambiance motivante', Sparkles],
            ['Horaires flexibles', Clock]
          ].map(([title, Icon]) => (
            <div className="info-card" key={title}>
              <Icon />
              <h3>{title}</h3>
              <p>Une experience claire, intense et encadree pour rester constant.</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
