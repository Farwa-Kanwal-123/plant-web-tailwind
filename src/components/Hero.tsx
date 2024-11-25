import Image from "next/image";

const Hero = () => {
  return (
    <main>
      <div className="realtive w-full h-screen -z-10 sticky">
        <Image
          src={"/hero.jpg"}
          alt="background image"
          layout="fill" // Image puri div ko cover karega
          objectFit="cover" //Image ko distort hone se bachata hai.
          priority //Optimization ke liye
          className="hidden md:block"
        />
        <Image
          src={"/plants1.jpg"}
          alt="background image"
          layout="fill" // Image puri div ko cover karega
          objectFit="cover" //Image ko distort hone se bachata hai.
          priority //Optimization ke liye
          className="block md:hidden"
        />

        <div className="absolute inset-0 bg-black/50 flex justify-center">
          <div className="flex justify-center">
            <div className="flex flex-col items-center mt-32 text-white space-y-6 md:space-y-10 lg:space-y-14 font-bold font-serif "
            >
              <div className="text-sm md:text-base lg:text-xl">WELCOME TO THE GREENSTORE </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-center px-3 text-wrap">
                Let&#39;s Bring the Spring to Your Home{" "}
              </h2>
              <button className="text-green-800 bg-white py-1 px-2 md:py-2 md:px-3 rounded-xl hover:scale-105">
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
