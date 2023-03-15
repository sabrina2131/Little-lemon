import SpecialCard from "./CardInfo/SpecialCard";

export default function Specials() {
  return (
    <section className="specials">
      <article className="specials-topbar">
        <h2>This weeks specials</h2>
        {/* <a
          className="action-button"
          href={require("../../../assets/menu.webp")}
          target="_blank"
          rel="noreferrer"
        >
          Online Menu
        </a> */}
      </article>

      <section className="specials-cards">
        <SpecialCard
          className="specials-card"
          image="/BRANDING/ICdLWb5gTE-m-IBTHUbNKA_1b4d05e13f71491396e9e67699bc82e1_C8.M1.L3.Item-3-Exercise-Wireframing-the-project-Wireframe/images/greeksalad.jpg"
          name="Greek Salad"
          price="$12.99"
          description="Refreshing salad, made with tomato, lettuce, feta cheese, and olives.
                 Dressed with salt, hot pepper, and olive oil."
        />
        <SpecialCard
          className="specials-card"
          image="/BRANDING/icons_assets/bruschetta.jpg"
          name="Bruschetta"
          price="$16.99"
          description="Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with
                 salt and olive oil."
        />
        <SpecialCard
          className="specials-card"
          image="/BRANDING/icons_assets/lemon dessert.jpg"
          name="Lemon Dessert"
          price="$8.50"
          description="Fresh baked lemon bread coated in salt and sugar. Powdered in citrus
                 and lemon zest."
        />
      </section>
    </section>
  );
}
