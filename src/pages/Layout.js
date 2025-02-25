import DetailsForm from "./DetailsForm";
import LiveResume from "./LiveResume";
import {useState} from "react";

const Layout = () => {
    const [formData, setFormData] = useState({});
    console.log(formData);

    return (
        <div className="flex flex-col w-full min-h-[100vh] gap-8 py-5 px-8 text-white bg-[#081229]">
            <h1 className="w-full text-center font-bold text-3xl text-gray-100">Resume Builder</h1>
            <div className="flex justify-around w-full">
                <div className="border-2 w-full flex flex-col gap-8">
                    <p className="text-3xl font-semibold text-center w-full p-5 bg-gray-600">Details</p>
                    <DetailsForm setFormData={setFormData} />
                </div>
                <div className="border-2 w-full flex flex-col gap-8">
                    <p className="text-3xl font-semibold text-center w-full p-5 bg-gray-600">Resume</p>
                    <LiveResume formData={formData} />
                </div>
            </div>
        </div>
    );
};
export default Layout;