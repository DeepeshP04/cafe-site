import { Star } from "lucide-react";
import "./Reviews.css";
const reviews = [
  [
    "The sort of place you pop into for a coffee and somehow spend all morning. Everything feels thoughtful, especially the people.",
    "Maya R.",
    "Local regular",
    "MR",
  ],
  [
    "That honey latte is a little ridiculous in the best way. The breakfast toast is worth crossing the neighborhood for.",
    "Daniel K.",
    "Weekend visitor",
    "DK",
  ],
  [
    "Bright, calm, genuinely welcoming. I brought my laptop once and now the team knows my order. It feels like my place.",
    "Ari P.",
    "Neighborhood neighbor",
    "AP",
  ],
];
function Stars() {
  return (
    <span className="review-stars" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} size={13} fill="currentColor" />
      ))}
    </span>
  );
}
export default function Reviews() {
  return (
    <section
      className="reviews-section"
      id="reviews"
      aria-labelledby="reviews-title"
    >
      <div className="section-wrap">
        <div className="reviews-heading">
          <div>
            <p className="section-kicker">Kind words from around the block</p>
            <h2 className="section-title" id="reviews-title">
              Don't just take <em>our word.</em>
            </h2>
          </div>
          <div className="review-score">
            <Stars />
            <strong>
              4.9 <small>/ 5</small>
            </strong>
            <span>from our lovely guests</span>
          </div>
        </div>
        <div className="review-grid">
          {reviews.map(([quote, name, detail, initials]) => (
            <article className="review-item" key={name}>
              <Stars />
              <blockquote>“{quote}”</blockquote>
              <div className="review-author">
                <span className="review-avatar" aria-hidden="true">
                  {initials}
                </span>
                <span>
                  <strong>{name}</strong>
                  <small>{detail}</small>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
