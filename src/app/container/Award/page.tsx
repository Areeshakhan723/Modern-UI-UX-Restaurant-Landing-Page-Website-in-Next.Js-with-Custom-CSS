import { SubHeading} from "@/app/components";
import { data, images } from "../../constants";
import Image from "next/image";
import "./Award.css";

const AwardsCard = ({awards : {imgUrl, title, subtitle}}) => (
    <div className="app__awards-card">
       <Image src={imgUrl} alt="awards" className="award__img"/>
      <div className="app__awards-card-content">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__opensans">{subtitle}</p>
      </div>
    </div>
)


const page = () => {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_info">
        <SubHeading title="Awards & recognition"/>
        <h1 className="headtext__cormorant">Our Laurels</h1>
      
      <div className="app__laurels_awards">
        {data.awards.map((awards) => 
          <AwardsCard awards={awards} key={awards.title}/>
        )}
      </div>
    </div>

      <div className="app__wrapper_img">
        <Image
        src={images.laurels}
        alt="laurels_img"
        className="laurels_img"
        />
      </div>
    </div>
  )
}

export default page
