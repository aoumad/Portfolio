import Image from "next/image";

const Homepage = () => {
  return
  <div className="flex flex-col">
    {/* Image container */}
    <div className="h-1/2 relative"></div>
      <Image src="/hero.png" alt="" fill/>
    {/* Text container */}
    <div className="h/1/2"></div>
  </div>;
};

export default Homepage;

// 33.22