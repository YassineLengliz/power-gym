export default function SectionTitle({ eyebrow, title, description, center = false }) {
  return (
    <div className={center ? 'section-title center' : 'section-title'}>
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <span>{description}</span> : null}
    </div>
  );
}
