import { SubHeading } from "../../components";
import { images } from "../../constants";
import Image from "next/image";


const page = () => {
  return (
    <div className="app__bg app__wrapper padding">
    <div className="app__wrapper_info padding-x">
      <SubHeading title={"Contact"}/>
      <h1 className="headtext__cormorant">Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <p className="p__cormorant" style={{color: "##DCCA87", margin: "2rem 0"}}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button type="button" className="custom__button" style={{marginTop: "2rem"}}>Visit Us</button>
    </div>

    <div className="app__wrapper_imgs">
      <Image 
      src={images.findus}
      alt="Findus img"
      className="img"
      />
    </div>
  </div>
  )
}

export default page