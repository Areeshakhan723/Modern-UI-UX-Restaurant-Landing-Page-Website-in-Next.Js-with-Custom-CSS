import { images } from "../../constants";
import Image from "next/image";

const SubHeading = ({ title }: { title: string }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <p className="p__cormorant">{title}</p>

      <Image
        src={images.spoon}
        alt="SubHeading Image"
        className="spoon-image"
      />
    </div>
  );
};

export default SubHeading;
