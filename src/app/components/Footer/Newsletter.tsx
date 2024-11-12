import "./Newsletter.css";
import { SubHeading } from "../../components";


const Newsletter = () => {
  return (
  <div className="app__Newsletter">
    <div className="app__heading">
      <SubHeading title="Newsletter"/>
      <h1 className="headtext__cormorant ">Subscribe to Our Newsletter</h1>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Email Your Address"/>
      <button type="button" className="custom__button ">Subscribe</button>
    </div>
  </div>
  )
};

export default Newsletter;
