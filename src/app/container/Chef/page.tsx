import "./Chef.css";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import Image from "next/image";
const page = () => {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <Image
          src={images.chef}
          alt="chef"
          className="chef__img"
        />
      </div>
      <div className="app__wrapper_info">
        <SubHeading title={"Chef’s Word"} />
        <h1 className="headtext__cormorant">What we believe in</h1>

        <div className="app__chef-content">
          <div className="app__chef-content-quote">
            <Image src={images.quote} alt="quote_image" className="quote-img" />
            <p className="p__opensans">
              <i>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit
              .
              </i>
            </p>
          </div>
          <p className="p__opensans">
            <i>
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
            sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
            molestie lectus eu. Congue iaculis integer curabitur semper sit
            nunc.
            </i>
          </p>

          <div className="app__chef-sign">
            <p>Kevin Luo</p>
            <p className="p__opensans">Chef & Founder</p>
            <Image src={images.sign} alt="sign_image" className="sign_img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
