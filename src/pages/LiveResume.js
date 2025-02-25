import {fields} from "../data/fields";

const LiveResume = ({ formData }) => {
    return (
        <div className='p-5 text-white'>
            {fields.map((section, index) => (
                <div key={index} className='mb-5'>
                    <h2 className='text-3xl font-bold mb-3'>{section.header}</h2>
                    {section.list.map((field, idx) => (
                        <p key={idx} className='text-xl'>
                            <strong>{field.name}: </strong>
                            {formData[field.name] || 'enter the details'}
                        </p>
                    ))}
                </div>
            ))}
        </div>
    );
};
export default LiveResume;
