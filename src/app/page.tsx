import { AboutUs, Chef, FindUs, Gallery, Header, Intro, SpecialMenu } from './container';
import './page.css';

export default function Home() {
  return (
    <div>
     
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Gallery />
      <FindUs />
  </div>
  );
}
