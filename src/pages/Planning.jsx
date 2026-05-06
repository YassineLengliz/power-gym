import SectionTitle from '../components/SectionTitle.jsx';
import Seo from '../components/Seo.jsx';
import { schedule } from '../data/planning.js';

export default function Planning() {
  return (
    <section className="page-section top-page">
      <Seo title="Planning | Power Gym Kelibia" description="Planning hebdomadaire Power Gym Kelibia." />
      <SectionTitle eyebrow="Planning" title="Planning hebdomadaire" description="Les horaires sont centralises dans src/data/planning.js." />
      <div className="schedule-grid">
        {schedule.map(([day, ...items]) => (
          <article className="info-card" key={day}>
            <h3>{day}</h3>
            {items.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}
