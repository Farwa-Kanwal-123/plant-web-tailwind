import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <Image
                        className="object-cover object-center rounded"
                        src="/about.jpg"
                        alt="about picture"
                        width={1000}
                        height={1000}
                    />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        Bring Nature Home with
                        <br />
                        Green Store!
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        At Green Store, we believe that plants have the power to transform lives and spaces. Whether you&#39;re looking to add a touch of greenery to your home, improve air quality, or create a peaceful retreat, we are here to help you every step of the way. Our carefully curated selection includes a variety of indoor and outdoor plants, handpicked for their beauty, health, and resilience. From beginners to seasoned plant enthusiasts, we cater to all levels of expertise, ensuring that your journey into plant care is fulfilling and enjoyable. With Green Store, you&#39;re not just buying plants; you&#39;re investing in a lifestyle of sustainability, serenity, and connection with nature. Let us help you bring a piece of the outdoors into your everyday life
                    </p>
                    <div className="flex justify-center">
                        <Link href={"/collections"} className="inline-flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded text-lg">
                            Explore Our Collections
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About