import {Link} from "react-router-dom"
import Netflix_logo from '../../assets/netflix_logo.svg';


export default function Navbar(){
    return (
            <div className='lg:text-sm xl:text-base hidden lg:flex fixed z-10 flex bg-black justify-between px-20 items-center text-white w-full top-0'>
                <div className='flex gap-6 text-white items-center'>
                    <img className="h-24" src={Netflix_logo} alt="Netflix Logo" />
                    <Link to={"/home"}>Home</Link>
                    <Link>Shows</Link>
                    <Link>Movies</Link>
                    <Link>New & Popular</Link>
                    <Link to={'/watchlist'}>My List</Link>
                    <Link>Browse by Language</Link>
                </div>
                <div className='flex gap-6 '>
                    {/* search icon */}
                    <div className='flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                    </div>

                    <a href="" className='text-white'>Children</a>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-white size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                        </svg>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>

                    </div>
                    <div></div>
                </div>
            </div>
    )
}