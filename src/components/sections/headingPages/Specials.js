import Bruschetta from "../../../assets/food/bruschetta.jpeg";
import GreekSalad from "../../../assets/food/greek-salad.webp";
import LemonDessert from "../../../assets/food/lemon-dessert.webp";
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
          image={GreekSalad}
          name="Greek Salad"
          price="$12.99"
          description="Refreshing salad, made with tomato, lettuce, feta cheese, and olives.
                 Dressed with salt, hot pepper, and olive oil."
        />
        <SpecialCard
          className="specials-card"
          image={Bruschetta}
          name="Bruschetta"
          price="$16.99"
          description="Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with
                 salt and olive oil."
        />
        <SpecialCard
          className="specials-card"
          image={LemonDessert}
          name="Lemon Dessert"
          price="$8.50"
          description="Fresh baked lemon bread coated in salt and sugar. Powdered in citrus
                 and lemon zest."
        />
      </section>
    </section>
  );
}
