import Image from "next/image";
import {Sevillana } from "next/font/google"

const sevillana = Sevillana({subsets:['latin'],weight:"400"})

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

        <div className="absolute inset-0 bg-black/40 flex justify-center">
          <div className="flex justify-center">
            <div className="flex flex-col items-center justify-center text-white space-y-6 md:space-y-8 lg:space-y-10 font-serif "
            >
              <div className="text-sm md:text-base lg:text-xl font-bold">WELCOME TO THE GREENSTORE </div>
              <div className={`${sevillana.className} text-2xl md:text-3xl lg:text-4xl text-center px-3 text-wrap space-y-4`}>
                <p>Let&#39;s Bring the Spring to Your Home!{" "}</p>
              </div>
              <p className="px-[10%] md:px-40 text-wrap text-center">Explore our curated collection of beautiful indoor plants, designed to brighten your space and enhance your well-being. Whether you&#39;re a seasoned plant parent or just starting your green journey, find the perfect plant to suit your style and space. Start growing your green world today!</p>
              <button className="bg-green-600 text-white px-3 md:px-5 lg:px-6 py-1 md:py-2 rounded-full hover:scale-105">
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
