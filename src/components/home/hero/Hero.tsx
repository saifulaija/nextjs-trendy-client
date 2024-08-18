
import assets from "@/app/assets";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full relative">
      <Image
        src={assets.images.banner}
        width={0}
        height={0}
        sizes="100vw"
        alt="banner"
        placeholder="blur"
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};

export default Hero;
