import "./SpecialMenu.css";
import { SubHeading, MenuItem } from "@/app/components";
import { data, images } from "../../constants";
import Image from "next/image";

const page = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext__cormorant">Today’s Special</h1>
    </div>

    {/* cocktail and Bear */}
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu-wine flex__center">
        <p className="app__specialMenu-menu-heading">Wine & Beer</p>
        <div className="app__specialMenu-menu-items">
          {data.wines.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <Image src={images.menu} alt="menu__img" className="menu__img" />
      </div>

      <div className="app__specialMenu-menu-cocktail flex__center">
        <p className="app__specialMenu-menu-heading">Cocktail</p>
        <div className="app__specialMenu-menu-items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem
              key={cocktail.title + index}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
    </div>

    <div style={{ margin: "15px" }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default page;
