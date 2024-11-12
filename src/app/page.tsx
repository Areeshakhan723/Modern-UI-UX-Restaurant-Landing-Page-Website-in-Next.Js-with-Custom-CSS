import { AboutUs, Chef, FindUs, Gallery, Header, Intro, SpecialMenu } from './container';
// import { Navbar } from './components';
import './page.css';

export default function Home() {
  return (
    <div>
     
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      {/* <Laurels /> */}
      <Gallery />
      <FindUs />
  </div>
  );
}
