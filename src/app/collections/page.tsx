import React from "react";
import Image from "next/image";
import Link from "next/link";

const Collections = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto ">
        <div className="flex flex-wrap justify-evenly space-x-4">
          {/* 1st image */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full mb-4 border-gray-400 border-2 ml-4">
            <Link
              href={""}
              className="block relative h-48 rounded overflow-hidden"
            >
              <Image
                alt="ecommerce"
                className="object-contain object-center w-full h-full block"
                src="/p1.jpeg"
                width={100}
                height={50}
              />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                The Catalyzer
              </h2>
              <p className="mt-1">$16.00</p>
            </div>
          </div>

          {/* 2nd image */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full mb-4 border-gray-400 border-2">
            <Link
              href={""}
              className="block relative h-48 rounded overflow-hidden"
            >
              <Image
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="/p2.png"
                width={200}
                height={200}
              />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Shooting Stars
              </h2>
              <p className="mt-1">$21.15</p>
            </div>
          </div>

          {/* 3rd */}

          <div className="lg:w-1/4 md:w-1/2 p-4 w-full mb-4 border-gray-400 border-2">
            <Link
              href={""}
              className="block relative h-48 rounded overflow-hidden"
            >
              <Image
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="/p3.jpeg"
                width={100}
                height={100}
              />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Neptune
              </h2>
              <p className="mt-1">$14.00</p>
            </div>
          </div>

          {/* 4th  */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full mb-4 border-gray-400 border-2">
            <Link
              href={""}
              className="block relative h-48 rounded overflow-hidden"
            >
              <Image
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="/p4.jpeg"
                width={100}
                height={100}
              />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Neptune
              </h2>
              <p className="mt-1">$11.00</p>
            </div>
          </div>

          {/* 5th */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full mb-4 border-gray-400 border-2">
            <Link
              href={""}
              className="block relative h-48 rounded overflow-hidden"
            >
              <Image
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="/p5.jpeg"
                width={100}
                height={100}
              />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Neptune
              </h2>
              <p className="mt-1">$13.00</p>
            </div>
          </div>

          {/* 6th */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full mb-4 border-gray-400 border-2">
            <Link
              href={""}
              className="block relative h-48 rounded overflow-hidden"
            >
              <Image
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="/p6.png"
                width={100}
                height={100}
              />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Neptune
              </h2>
              <p className="mt-1">$12.00</p>
            </div>
          </div>

          {/* 7th */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full mb-4 border-gray-400 border-2">
            <Link
              href={""}
              className="block relative h-48 rounded overflow-hidden"
            >
              <Image
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="/p7.jpeg"
                width={100}
                height={100}
              />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Neptune
              </h2>
              <p className="mt-1">$16.00</p>
            </div>
          </div>

          {/* 8th */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full mb-4 border-gray-400 border-2">
            <Link
              href={""}
              className="block relative h-48 rounded overflow-hidden"
            >
              <Image
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="/p8.jpeg"
                width={100}
                height={100}
              />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Neptune
              </h2>
              <p className="mt-1">$18.00</p>
            </div>
          </div>

          {/* 9th */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full mb-4 border-gray-400 border-2">
            <Link
              href={""}
              className="block relative h-48 rounded overflow-hidden"
            >
              <Image
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="/p9.jpeg"
                width={100}
                height={100}
              />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Neptune
              </h2>
              <p className="mt-1">$13.00</p>
            </div>
          </div>

          {/* 10th */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full mb-4 border-gray-400 border-2">
            <Link
              href={""}
              className="block relative h-48 rounded overflow-hidden"
            >
              <Image
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="/p10.jpeg"
                width={100}
                height={100}
              />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Neptune
              </h2>
              <p className="mt-1">$15.00</p>
            </div>
          </div>

          {/* 11th */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full mb-4 border-gray-400 border-2">
            <Link
              href={""}
              className="block relative h-48 rounded overflow-hidden"
            >
              <Image
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="/p11.png"
                width={100}
                height={100}
              />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Neptune
              </h2>
              <p className="mt-1">$11.00</p>
            </div>
          </div>

          {/* 12th */}

          <div className="lg:w-1/4 md:w-1/2 p-4 w-full mb-4 border-gray-400 border-2">
            <Link
              href={""}
              className="block relative h-48 rounded overflow-hidden"
            >
              <Image
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="/p12.jpeg"
                width={100}
                height={100}
              />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                The 400 Blows
              </h2>
              <p className="mt-1">$18.40</p>
            </div>
          </div>

          {/* 13th */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full mb-4 border-gray-400 border-2">
            <Link
              href={""}
              className="block relative h-48 rounded overflow-hidden"
            >
              <Image
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="/p13.jpeg"
                width={100}
                height={100}
              />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                The Catalyzer
              </h2>
              <p className="mt-1">$16.00</p>
            </div>
          </div>

          {/* 14th */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full mb-4 border-gray-400 border-2">
            <Link
              href={""}
              className="block relative h-48 rounded overflow-hidden"
            >
              <Image
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="/p14.jpeg"
                width={100}
                height={100}
              />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Shooting Stars
              </h2>
              <p className="mt-1">$21.15</p>
            </div>
          </div>

          {/* 15th */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full mb-4 border-gray-400 border-2">
            <Link
              href={""}
              className="block relative h-48 rounded overflow-hidden"
            >
              <Image
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="/p15.jpeg"
                width={100}
                height={100}
              />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Neptune
              </h2>
              <p className="mt-1">$12.00</p>
            </div>
          </div>

          {/* 16th */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full mb-4 border-gray-400 border-2">
            <Link
              href={""}
              className="block relative h-48 rounded overflow-hidden"
            >
              <Image
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="/p16.jpeg"
                width={100}
                height={100}
              />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Neptune
              </h2>
              <p className="mt-1">$12.00</p>
            </div>
          </div>

          {/* 17th */}

          <div className="lg:w-1/4 md:w-1/2 p-4 w-full mb-4 border-gray-400 border-2">
            <Link
              href={""}
              className="block relative h-48 rounded overflow-hidden"
            >
              <Image
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="/p17.jpeg"
                width={100}
                height={100}
              />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Neptune
              </h2>
              <p className="mt-1">$12.00</p>
            </div>
          </div>

          {/* 18th */}
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full mb-4 border-gray-400 border-2">
            <Link
              href={""}
              className="block relative h-48 rounded overflow-hidden"
            >
              <Image
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="/p18.jpeg"
                width={100}
                height={100}
              />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                The 400 Blows
              </h2>
              <p className="mt-1">$18.40</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
