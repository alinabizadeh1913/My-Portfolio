import React from "react";

const Header = () => {
    return (
        <section id="header" className="my-20">
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-6/12 px-1">
                        <div className="information">
                            <p className="text-[#26ebcd] text-2xl mb-3 who-am-i overflow-hidden">
                                <span className="text block w-fit relative">
                                    Who am i ?
                                    <span className="label absolute"></span>
                                </span>
                            </p>
                            <h1 className="text-white text-6xl flex flex-col i-am overflow-hidden">
                                <span className="w-fit elem-1">I'm ali nabizadeh</span><span className="w-fit elem-2">a frontend developer</span>
                            </h1>
                            <div className="overflow-hidden my-3">
                                <div className="my-description flex flex-col h-[40px] overflow-hidden">
                                    <div className="wrapper">
                                        <div className="text-[#26ebcd] select-none mb-3 bg-[#05211c] w-fit border border-[#266b6b] rounded-full py-1 px-3">
                                            Creative Front-End Developer
                                        </div>
                                        <div className="text-[#26ebcd] select-none mb-3 bg-[#05211c] w-fit border border-[#266b6b] rounded-full py-1 px-3">
                                            Innovative Web Experiences Creator
                                        </div>
                                        <div className="text-[#26ebcd] select-none mb-3 bg-[#05211c] w-fit border border-[#266b6b] rounded-full py-1 px-3">
                                            Designer Of Modern Web Interfaces
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-6/12 px-1">
                        <div className="">

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;