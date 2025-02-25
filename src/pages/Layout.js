import React from 'react';
import DetailsForm from "./DetailsForm";

const Layout = () => {
    return (
        <div className={`flex flex-col w-full min-h-[100vh] gap-8 py-5 px-8 text-white bg-[#081229]`}>
            <h1 className={`w-full text-center font-bold text-3xl text-gray-100`}> Resume Builder </h1>

            <div className={`flex justify-around w-full  `}>

                <div className={`border-2 w-full flex flex-col gap-8`}>
                    <p className={`text-3xl font-semibold text-center  w-full p-5   bg-gray-600 `}>Details</p>

                    <div>
                        <DetailsForm/>
                    </div>
                </div>

                <div className={`border-2 w-full flex flex-col gap-8`}>
                    <p className={`text-3xl font-semibold text-center  w-full p-5 bg-gray-600  `}>Resume</p>
                </div>

            </div>


        </div>
    );
};

export default Layout;