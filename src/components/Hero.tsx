import Image from "next/image";

const Hero = () => {
  return (
    <main>
      <div className="realtive w-full h-screen bg-center -z-10 sticky">
        <Image
          src={"/hero.jpg"}
          alt="background image"
          layout="fill" // Image puri div ko cover karega
          objectFit="cover" //Image ko distort hone se bachata hai.
          priority //Optimization ke liye
          className="hidden md:block"
        />
        <Image
          src={"/hero2.jpg"}
          alt="background image"
          layout="fill" // Image puri div ko cover karega
          objectFit="cover" //Image ko distort hone se bachata hai.
          priority //Optimization ke liye
          className="block md:hidden"
        />

        <div className="absolute inset-0 bg-black/50 flex justify-center">
          <div className="flex justify-center">
            <div className="flex flex-col items-center justify-center text-white space-y-8 md:space-y-10 lg:space-y-14 font-bold font-serif "
            >
              <div className="text-sm md:text-base lg:text-xl">WELCOME TO THE GREENSTORE </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-center px-3 text-wrap">
                Let&#39;s Bring the Spring to Your Home{" "}
              </h2>
              <button className="bg-green-600 text-white px-2 md:px-5 lg:px-6 py-1 md:py-2 rounded-md hover:scale-105">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
