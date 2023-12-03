import Image from "next/image";
const BackgroundImage = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-black z-10 bg-overlay" />
      <Image
        className="h-full object-cover object-center bg-image"
        src="/bg.jpg"
        alt="Background image"
        width={7319}
        height={3910}
      />
    </div>
  );
};

export default BackgroundImage;
