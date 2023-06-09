import testimonials from "../../../data/testimonials";
import TestimonialCard from "./CardInfo/TestimonialCard";
export default function Testimonials() {
  return (
    <section className="testimonials">
      <article className="testimonials-topbar">
        <h2>Testimonials</h2>
      </article>

      <section className="testimonials-cards">
        {testimonials.map((i) => {
          return (
            <TestimonialCard
              key={i.name}
              name={i.name}
              description={i.text}
              img={i.img}
            />
          );
        })}
      </section>
    </section>
  );
}
