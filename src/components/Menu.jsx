import { ArrowUpRight, Leaf } from "lucide-react";
import "./Menu.css";

const groups = [
  {
    title: "Coffee & tea",
    note: "A good thing, made slowly",
    items: [
      [
        "Aster house latte",
        "Double espresso, steamed milk, a touch of honey",
        "$6",
      ],
      ["Pour-over of the day", "Ask us what is resting on the bar", "$7"],
      ["Brown sugar cold brew", "18-hour steep, oat milk, brown sugar", "$6"],
      ["Ceremonial matcha", "Stone-ground matcha, whisked to order", "$7"],
    ],
  },
  {
    title: "Breakfast & brunch",
    note: "From opening until 2 pm",
    items: [
      [
        "Soft eggs on sourdough",
        "Cultured butter, chives, cracked pepper",
        "$15",
      ],
      [
        "Sunday morning toast",
        "Whipped ricotta, stone fruit, garden thyme",
        "$14",
      ],
      [
        "Mushroom breakfast bowl",
        "Crispy potatoes, greens, tahini yogurt",
        "$16",
      ],
    ],
  },
  {
    title: "Snacks",
    note: "A little something between meals",
    items: [
      ["Marinated olives", "Citrus peel, rosemary, warm sourdough", "$8"],
      ["Crispy potatoes", "Green herb dip, flaky sea salt", "$10"],
    ],
  },
  {
    title: "Main plates",
    note: "The good part of the day",
    items: [
      ["Roasted squash bowl", "Farro, greens, tahini, toasted seeds", "$18"],
      ["Market greens & grains", "Seasonal vegetables, lemon dressing", "$17"],
    ],
  },
  {
    title: "Something sweet",
    note: "Made here, every morning",
    items: [
      ["Olive oil cake", "Citrus zest, crème fraîche", "$9"],
      ["Brown butter cookie", "Dark chocolate, flaky salt", "$5"],
    ],
  },
];

function MenuCategory({ title, note, items, index }) {
  return (
    <section className="menu-category">
      <div className="menu-category-heading">
        <div>
          <h3>{title}</h3>
          <p>{note}</p>
        </div>
        <span>0{index + 1}</span>
      </div>
      <ul>
        {items.map(([name, description, price]) => (
          <li className="menu-item" key={name}>
            <div>
              <h4>{name}</h4>
              <p>{description}</p>
            </div>
            <span className="menu-price">{price}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function Menu() {
  return (
    <section className="menu-section" id="menu" aria-labelledby="menu-title">
      <div className="menu-layout section-wrap">
        <div className="menu-intro">
          <p className="section-kicker">Good things, made daily</p>
          <h2 className="section-title" id="menu-title">
            Come hungry.
            <br />
            <em>Leave happy.</em>
          </h2>
          <p className="section-copy">
            A small, seasonal menu with generous portions and ingredients we can
            feel good about. There's always something plant-based, too.
          </p>
          <div className="menu-note">
            <Leaf size={17} />
            Vegetarian-friendly, with plenty of vegan options
          </div>
          <a
            className="button button--dark"
            href="mailto:hello@astercafe.in?subject=Today's%20specials"
          >
            Ask about today's specials <ArrowUpRight size={15} />
          </a>
          <p className="menu-fine-print">
            Menu changes with the seasons. Prices in USD.
          </p>
        </div>
        <div className="menu-list">
          {groups.map((group, index) => (
            <MenuCategory key={group.title} {...group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
