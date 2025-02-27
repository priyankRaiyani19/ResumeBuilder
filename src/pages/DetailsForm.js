import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { fields } from "../data/fields";

const DetailsForm = ({ setFormData }) => {
    const { control, watch, setValue, getValues } = useForm();
    const [dynamicFields, setDynamicFields] = useState({
        "Experience Details": [],
        "Education Details": [],
        "Projects": [],
    });

    useEffect(() => {
        const subscription = watch((value) => setFormData(value));
        return () => subscription.unsubscribe();
    }, [watch, setFormData]);

    const addField = (section) => {
        setDynamicFields((prev) => {
            const newFields =
                fields.find((ele) => ele.header === section)?.list.map((field) => ({
                    name: `${field.name}${prev[section]}`,
                    type: field.type,
                    placeholder: field.placeholder,
                    required: field.required,
                })) || [];

            const updatedData = [...(getValues(section) || []), {}];
            setValue(section, updatedData);

            return { ...prev, [section]: [...prev[section], ...newFields] };
        });
    };

    return (
        <form className="h-full w-full flex flex-col gap-8 p-5">
            {fields.map((ele) => (
                <div key={ele.header} className="flex flex-col gap-10 justify-around w-full">
                    <div className="flex justify-between items-center">
                        <p className="text-3xl font-bold">{ele.header}</p>
                        {(ele.header === "Experience Details" ||
                            ele.header === "Education Details" ||
                            ele.header === "Projects") && (
                            <button
                                onClick={() => addField(ele.header)}
                                type="button"
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                            >
                                Add
                            </button>
                        )}
                    </div>
                    <div className="w-full flex flex-col gap-5 justify-between">
                        {ele.list.map((element) => (
                            <div
                                key={element.name}
                                className="flex gap-5 justify-between items-center text-xl text-white"
                            >
                                <label
                                    htmlFor={element.name}
                                    className="w-[40%] text-2xl font-semibold flex justify-around"
                                >
                                    {element.name}
                                    <p>:</p>
                                </label>
                                <Controller
                                    name={element.name}
                                    control={control}
                                    defaultValue=""

                                    render={({ field }) =>
                                        element.type === "textarea" ? (
                                            <textarea
                                                {...field}
                                                id={element.name}
                                                required={element.required}
                                                placeholder={element.placeholder}
                                                className="bg-transparent border-2 rounded-lg border-gray-100 w-full p-2 text-white placeholder:capitalize"
                                                rows={4}
                                            />
                                        ) : (
                                            <input
                                                {...field}
                                                type={element.type}
                                                id={element.name}
                                                required={element.required}
                                                placeholder={element.placeholder}
                                                className="bg-transparent border-2 rounded-lg border-gray-100 w-full p-2 text-white placeholder:capitalize"
                                            />
                                        )
                                    }
                                />
                            </div>
                        ))}

                        {/* Added Fields */}
                        {dynamicFields[ele.header]?.map((element, index) => (
                            <div key={`${element.name}-${index}`} className="flex gap-5 justify-between items-center text-xl text-white">
                                <label className="w-[40%] text-2xl font-semibold flex justify-around">
                                    {element.name}
                                    <p>:</p>
                                </label>
                                <Controller
                                    name={`${ele.header}[${index}].${element.name}`}
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) =>
                                        element.type === "textarea" ? (
                                            <textarea
                                                {...field}
                                                id={`${element.name}-${index}`}
                                                required={element.required}
                                                placeholder={element.placeholder}
                                                className="bg-transparent border-2 rounded-lg border-gray-100 w-full p-2 text-white placeholder:capitalize"
                                                rows={4}
                                            />
                                        ) : (
                                            <input
                                                {...field}
                                                type={element.type}
                                                id={`${element.name}-${index}`}
                                                required={element.required}
                                                placeholder={element.placeholder}
                                                className="bg-transparent border-2 rounded-lg border-gray-100 w-full p-2 text-white placeholder:capitalize"
                                            />
                                        )
                                    }
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </form>
    );
};

export default DetailsForm;
