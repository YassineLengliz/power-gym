import SectionTitle from '../components/SectionTitle.jsx';
import Seo from '../components/Seo.jsx';

const plans = [
  ['Mensuel', 'Contactez-nous', 'Acces salle et activites selon planning.'],
  ['Trimestriel', 'Contactez-nous', 'Pour garder le rythme avec un engagement clair.'],
  ['Coaching', 'Sur demande', 'Accompagnement personnalise avec coach de plateau.']
];

export default function Pricing() {
  return (
    <section className="page-section top-page">
      <Seo title="Tarifs | Power Gym Kelibia" description="Tarifs et abonnements Power Gym Kelibia." />
      <SectionTitle eyebrow="Tarifs" title="Des abonnements simples" description="Les montants peuvent etre ajoutes ici quand ils sont confirmes." />
      <div className="info-grid three">
        {plans.map(([name, price, text]) => (
          <article className="info-card price-card" key={name}>
            <h3>{name}</h3>
            <strong>{price}</strong>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
