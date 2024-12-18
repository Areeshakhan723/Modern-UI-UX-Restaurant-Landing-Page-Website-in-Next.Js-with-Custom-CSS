import "./AboutUs.css";
import Image from "next/image";
import { images } from "../../constants";

const page = () => (
  <div
    className="app__aboutus app__bg flex__center padding-x"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <Image src={images.G} alt="G_overlay" className="img__G" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <Image src={images.spoon} alt="spoon" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <Image src={images.knife} alt="Knife" className="Knife_img" />
      </div>
      
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <Image src={images.spoon} alt="spoon" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default page;
