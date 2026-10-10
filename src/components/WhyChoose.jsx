import { Coffee, HeartHandshake, Leaf, Sun } from "lucide-react";
import "./WhyChoose.css";
const reasons = [
  [
    Leaf,
    "Close to the source",
    "Thoughtful ingredients from people and farms we know by name.",
  ],
  [
    Coffee,
    "Coffee with character",
    "Small-batch beans, carefully dialed in, never rushed.",
  ],
  [
    Sun,
    "A softer place to land",
    "A warm corner, a familiar face, and no reason to hurry.",
  ],
  [
    HeartHandshake,
    "Made for everyone",
    "Good hospitality, kind service, and room at the table.",
  ],
];
export default function WhyChoose() {
  return (
    <section className="why-section">
      <div className="section-wrap">
        <div className="why-heading">
          <p className="section-kicker">The Aster feeling</p>
          <h2 className="section-title">
            Little details.
            <br />
            <em>Big difference.</em>
          </h2>
        </div>
        <div className="why-grid">
          {reasons.map(([Icon, title, copy], i) => (
            <article className="why-item" key={title}>
              <span className="why-number">0{i + 1}</span>
              <div className="why-icon">
                <Icon size={21} />
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
