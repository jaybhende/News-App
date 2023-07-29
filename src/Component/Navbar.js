import { IoClose } from "react-icons/io5"
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { RiArrowDropUpLine } from 'react-icons/ri'
import { BsGlobeCentralSouthAsia } from 'react-icons/bs'


const Navbar = (props) => {
    const [dropdown, setDropdrown] = useState(false)
    const [msg, setMsg] = useState(false)

    const handleDropDown = () => {
        setDropdrown(!dropdown)
    }


    const handleSelect = (e) => {
        props.handleCountry(e)
        setDropdrown(!dropdown)
        setMsg(true)
    }

    return (
        <section className="flex" >
            <nav className="flex fixed bg-black text-white z-10 w-full max-h-20 py-2 px-8  justify-between lg:mx-auto ">


                <div className="flex ">
                    <Link to="/" className="mx-3 py-3 text-xl font-bold" alt=""> News App</Link>
                </div>
                <div className="hidden   lg:flex ">
                    <div className="hidden lg:flex lg:flex-row ">

                        <Link to="/" onClick={() => setMsg(false)} className="mx-3 py-4 text-base font-semibold hover:underline">Home</Link>
                        <Link to="/Business" onClick={() => setMsg(false)} className="mx-3 py-4 text-base font-semibold hover:underline">Business</Link>
                        <Link to="/Entertainment" onClick={() => setMsg(false)} className="mx-3 py-4 text-base font-semibold hover:underline">Entertainment</Link>
                        <Link to="/General" onClick={() => setMsg(false)} className="mx-3 py-4 text-base font-semibold hover:underline">General</Link>
                        <Link to="/Health" onClick={() => setMsg(false)} className="mx-3 py-4 text-base font-semibold hover:underline">Health</Link>
                        <Link to="/Science" onClick={() => setMsg(false)} className="mx-3 py-4 text-base font-semibold hover:underline">Science</Link>
                        <Link to="/Sports" onClick={() => setMsg(false)} className="mx-3 py-4 text-base font-semibold hover:underline">Sports</Link>
                        <Link to="/Technology" onClick={() => setMsg(false)} className="mx-3 py-4 text-base font-semibold hover:underline">Technology</Link>

                    </div>
                </div>


                <div className=" flex">
                    <div className='   text-white mx-3'>
                        <div onClick={handleDropDown} className='    focus:outline-none  font-medium rounded-lg text-sm px-2 py-1 text-center inline-flex items-center  '><BsGlobeCentralSouthAsia /> <span className='text-4xl p-0'>{dropdown ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />} </span> </div>
                        <div className={` relative z-10 transition-all duration-100 ${dropdown ? " top-2 " : "bottom-64 "} `}>
                            <div className="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-32 dark:bg-gray-700">
                                <ul className="py-2 text-sm text-gray-700  dark:text-gray-200" >
                                    <li>
                                        <button value="in" onClick={handleSelect} className="block  w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"  >India</button>
                                    </li>
                                    <li>
                                        <button onClick={handleSelect} value="us" className="block  w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"  >USA</button>
                                    </li>
                                    <li>
                                        <button value="ch" onClick={handleSelect} className="block  w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"  >Australia</button>
                                    </li>
                                    <li>
                                        <button value="fr" onClick={handleSelect} className="block  w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"  >France</button>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        {msg && <div className="absolute top-24 "><div className="text-xs  w-56 flex flex-row justify-between bg-red-500 mb-2 rounded py-1 px-2  font-semibold uppercase"><h2>Select Category from above </h2><p><IoClose onClick={() => { setMsg(!msg) }} className="text-base ml-auto " /></p></div></div>}

                    </div>
                    <div className="hidden lg:flex lg:flex-row h-10 rounded-xl w-11 font-bold  hover:bg-white hover:text-black py-1  ">
                        <button >Login</button>

                    </div>
                </div>



            </nav>
        </section >
    )

}

export default Navbar
