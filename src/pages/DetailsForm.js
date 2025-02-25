import React from 'react';
import {fields} from "../data/fields";

const DetailsForm = ({  setFormData }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="h-full w-full flex flex-col gap-8 p-5">
            {fields.map((ele) => (
                <div key={ele.header} className="flex flex-col gap-10 justify-around w-full">
                    <div>
                        <p className="text-3xl font-bold">{ele.header}</p>
                    </div>
                    <div className="w-full flex flex-col gap-5 justify-between">
                        {ele.list.map((element) => (
                            <div key={element.name} className="flex gap-5 justify-between items-center text-xl text-white">
                                <label htmlFor={element.name} className="w-[40%] text-2xl font-semibold flex justify-around">
                                    {element.name}
                                    <p>:</p>
                                </label>
                                {element.type === "textarea" ? (
                                    <textarea
                                        name={element.name}
                                        id={element.name}
                                        required={element.required}
                                        placeholder={element.placeholder}
                                        className="bg-transparent border-2 rounded-lg border-gray-100 w-full p-2 text-white placeholder:capitalize"
                                        rows={4}
                                        onChange={handleChange}
                                    />
                                ) : (
                                    <input
                                        type={element.type}
                                        name={element.name}
                                        id={element.name}
                                        required={element.required}
                                        placeholder={element.placeholder}
                                        className="bg-transparent border-2 rounded-lg border-gray-100 w-full p-2 text-white placeholder:capitalize"
                                        onChange={handleChange}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DetailsForm;