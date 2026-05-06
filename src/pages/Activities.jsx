import ActivityCard from '../components/ActivityCard.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import Seo from '../components/Seo.jsx';
import { activities } from '../data/activities.js';

export default function Activities() {
  return (
    <section className="page-section top-page">
      <Seo
        title="Activites | Power Gym Kelibia"
        description="Toutes les activites Power Gym Kelibia: musculation, cardio, arts martiaux, kids et cours collectifs."
      />
      <SectionTitle
        eyebrow="Activites"
        title="Choisissez votre rythme"
        description="Un catalogue simple a mettre a jour depuis src/data/activities.js."
      />
      <div className="activity-grid">
        {activities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </section>
  );
}
