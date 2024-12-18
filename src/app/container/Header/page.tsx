import Image from 'next/image';
import './Header.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const Header = () => (
  <div className="app__header app__wrapper padding" id="home">
    <div className="app__wrapper_info ">
      <SubHeading title={"Chase the new Flavour"}/>
      <h1 className="app__header-h1">The key to Fine dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_imgs">
      <Image 
      src={images.welcome}
      alt="Welcome"
      className="img"
      />
    </div>
  </div>
);

export default Header;
