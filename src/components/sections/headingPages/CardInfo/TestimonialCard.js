export default function TestimonialCard(props) {
  return (
    <article className="testimonial-card">
      <div className="flex">
        <img
          height={100}
          width={100}
          src={props.img}
          alt="delivery Icon"
          style={{
            borderRadius: "100px",
            maxWidth: "100px",
            maxHeight: "100px",
          }}
        ></img>
        <div>
          <h3>{props.name}</h3>
        </div>
      </div>
      <p>" {props.description}</p>
    </article>
  );
}
