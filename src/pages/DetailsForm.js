import React from 'react';
import {fields} from "../data/fields";

const DetailsForm = () => {
    return (<div className={`h-full w-full flex flex-col gap-8 p-5`}>

        {fields.map((ele, index) => (<div className={`flex flex-col gap-10 justify-around w-full  `}>

                <div>
                    <p className={`text-3xl font-bold under`}>  {ele.header} </p>
                </div>

                <div className={`w-full flex flex-col gap-5 justify-between`}>

                    {ele.list.map((element, index) => ((element.type === "textarea" ? (<div
                            key={index}
                            className={`flex  gap-5 justify-between items-center text-xl text-white`}>
                            <label htmlFor={element.label}
                                   className={`w-[40%] text-2xl font-semibold flex justify-around`}
                            >
                                {element.name}
                                <p>:</p>
                            </label>

                            <textarea name={element.name}
                                      id={element.name}
                                      required={element.required}
                                      placeholder={element.placeholder}
                                      className={`bg-transparent border-2 rounded-lg border-gray-100 w-full p-2 text-white placeholder:capitalize `}
                                      rows={4}/>

                        </div>) : (<div
                            key={index}
                            className={`flex  gap-5 justify-between items-center text-xl text-white`}>
                            <label htmlFor={element.label}
                                   className={`w-[40%] text-2xl font-semibold flex justify-around capitalize`}
                            >
                                {element.name}
                                <p>:</p>
                            </label>
                            <input
                                type={element.type}
                                name={element.name}
                                id={element.name}
                                required={element.required}
                                placeholder={element.placeholder}
                                className={`bg-transparent border-2 rounded-lg border-gray-100 w-full p-2 text-white placeholder:capitalize`}
                            />

                        </div>))

                    ))}

                </div>

            </div>
        ))
        }
    </div>);
};

export default DetailsForm;