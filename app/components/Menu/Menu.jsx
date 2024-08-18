'use client';
import { loadBack, loadMenu } from "@/app/utils/loadSection";
import React, { useEffect } from "react";

const Menu = () => {

    useEffect(() => {
        setTimeout(() => {
            loadMenu();
            loadBack();
        },313)
    }, [])

    return (
        <nav id="menu" className="my-5">
            <div className="container mx-auto relative">
                <div className="menu-inner flex flex-wrap items-center border-t border-slate-600 border-b border-opacity-45">
                    <div className="w-2/12 py-1 border-r border-slate-600 border-opacity-50 ">
                        <h1 className="text-[#3c7068] text-center select-none py-[7px] px-[10px]">
                            <i class="fa-solid fa-code mr-2 text-white"></i>
                            <span className="mr-1">
                                ALi
                            </span>
                            <span>
                                Nabizadeh
                            </span>
                        </h1>
                    </div>
                    <div className="w-7/12 py-1">
                        <div className="links flex flex-wrap justify-center">
                            <a href="#" className="text-[#3c7068] mx-1 text-sm">
                                <i class="fa-solid fa-rectangle-list mr-2 text-emerald-200"></i>
                                <span>
                                    Summary
                                </span>
                                <i class="fa-solid fa-angle-down mr-1"></i>
                            </a>
                            <a href="#" className="text-[#3c7068] mx-1 text-sm">
                                <i class="fa-solid fa-screwdriver-wrench mr-2 text-emerald-200"></i>
                                <span>
                                    Skills
                                </span>
                                <i class="fa-solid fa-angle-down mr-1"></i>
                            </a>
                            <a href="#" className="text-[#3c7068] mx-1 text-sm">
                                <i class="fa-solid fa-briefcase mr-2 text-emerald-200"></i>
                                <span>
                                    Project
                                </span>
                                <i class="fa-solid fa-angle-down mr-1"></i>
                            </a>
                            <a href="#" className="text-[#3c7068] mx-1 text-sm">
                                <i class="fa-solid fa-graduation-cap mr-2 text-emerald-200"></i>
                                <span>
                                    Education
                                </span>
                                <i class="fa-solid fa-angle-down mr-1"></i>
                            </a>
                            <a href="#" className="text-[#3c7068] mx-1 text-sm">
                                <i class="fa-solid fa-language mr-2 text-emerald-200"></i>
                                <span>
                                    Language
                                </span>
                                <i class="fa-solid fa-angle-down mr-1"></i>
                            </a>
                        </div>
                    </div>
                    <div className="w-3/12 pr-3 py-2 flex items-center justify-center border-l border-slate-600 border-opacity-50">
                        <div className="links flex">
                            <a href="#" className="text-[#3c7068] mx-1 text-sm">
                                <i className="fa-solid fa-info-circle mr-2 text-emerald-200"></i>
                                <span>
                                    About Me
                                </span>
                                <i class="fa-solid fa-angle-down mr-1"></i>
                            </a>
                            <a href="#" className="text-[#3c7068] mx-1 text-sm">
                                <i class="fa-solid fa-phone mr-2 text-emerald-200"></i>
                                <span>
                                    Contact
                                </span>
                                <i class="fa-solid fa-angle-down mr-1"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="back1 absolute top-[-150px] left-[-80px] w-[270px] h-[270px] rounded-full bg-[#3c7068] blur-[170px] z-[-1] hidden md:block"></div>
            </div>
        </nav>
    )
}

export default Menu;