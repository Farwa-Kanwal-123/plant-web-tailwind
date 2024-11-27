import Link from 'next/link'
import { FaInstagramSquare, FaLinkedin } from 'react-icons/fa'
import { MdAttachEmail } from 'react-icons/md'
import { PiPhoneCallFill } from 'react-icons/pi'

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <Link href={""} className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <h2 className="ml-3 text-gray-800 text-2xl text-bold">Green store</h2>
                    </Link>
                    <p className="mt-2 text-sm text-gray-500">
                        Your one-stop shop for vibrant, healthy plants.Air plant banjo lyft occupy retro adaptogen indego
                    </p>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                            CATEGORIES
                        </h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link href={""} className="text-gray-600 hover:text-gray-800">First Link</Link>
                            </li>
                            <li>
                                <Link href={""} className="text-gray-600 hover:text-gray-800">Second Link</Link>
                            </li>
                            <li>
                                <Link href={""} className="text-gray-600 hover:text-gray-800">Third Link</Link>
                            </li>
                            <li>
                                <Link href={""} className="text-gray-600 hover:text-gray-800">Fourth Link</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                            CATEGORIES
                        </h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link href={""} className="text-gray-600 hover:text-gray-800">First Link</Link>
                            </li>
                            <li>
                                <Link href={""} className="text-gray-600 hover:text-gray-800">Second Link</Link>
                            </li>
                            <li>
                                <Link href={""} className="text-gray-600 hover:text-gray-800">Third Link</Link>
                            </li>
                            <li>
                                <Link href={""} className="text-gray-600 hover:text-gray-800">Fourth Link</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                            CATEGORIES
                        </h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link href={""} className="text-gray-600 hover:text-gray-800">First Link</Link>
                            </li>
                            <li>
                                <Link href={""} className="text-gray-600 hover:text-gray-800">Second Link</Link>
                            </li>
                            <li>
                                <Link href={""} className="text-gray-600 hover:text-gray-800">Third Link</Link>
                            </li>
                            <li>
                                <Link href={""} className="text-gray-600 hover:text-gray-800">Fourth Link</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                            CATEGORIES
                        </h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link href={""} className="text-gray-600 hover:text-gray-800">First Link</Link>
                            </li>
                            <li>
                                <Link href={""} className="text-gray-600 hover:text-gray-800">Second Link</Link>
                            </li>
                            <li>
                                <Link href={""} className="text-gray-600 hover:text-gray-800">Third Link</Link>
                            </li>
                            <li>
                                <Link href={""} className="text-gray-600 hover:text-gray-800">Fourth Link</Link>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-500 text-sm text-center sm:text-left">
                        © 2024 Green Store
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">

                        <Link href={""} className="ml-3 text-gray-500">
                            <PiPhoneCallFill className='w-5 h-5' />
                        </Link>

                        <Link href={""} className="ml-3 text-gray-500">
                            <FaLinkedin className='w-5 h-5' />
                        </Link>

                        <Link href={""} className="ml-3 text-gray-500">
                            <FaInstagramSquare className='w-5 h-5' />
                        </Link>

                        <Link href={""} className="ml-3 text-gray-500">
                            <MdAttachEmail className='w-5 h-5' />
                        </Link>
                    </span>
                </div>
            </div>
        </footer>

    )
}

export default Footer