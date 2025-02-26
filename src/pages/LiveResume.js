import { useState, useRef } from "react";
import { fields } from "../data/fields";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const LiveResume = ({ formData }) => {
    const [showPreview, setShowPreview] = useState(false);
    const previewRef = useRef(null);

    // Function to Download PDF
    const handleDownloadPDF = () => {
        const input = previewRef.current;

        html2canvas(input, { scale: 2 }).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");
            const imgWidth = 170;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;

            pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
            pdf.save("Resume.pdf");
        });
    };

    return (
        <div className="p-5 text-white">
            {/* Live Resume Section */}
            {fields.map((section) => {
                const sectionData = formData[section.header] || [];

                return (
                    <div key={section.header} className="mb-5">
                        <h2 className="text-3xl font-bold mb-3">{section.header}</h2>

                        {/* Static Fields */}
                        {section.list.map(
                            (field) =>
                                formData[field.name] && (
                                    <p key={field.name} className="text-xl">
                                        <strong>{field.name}: </strong>
                                        {formData[field.name]}
                                    </p>
                                )
                        )}

                        {/* Dynamic Fields */}
                        {Array.isArray(sectionData) &&
                            sectionData.map((entry, index) => (
                                <div key={index} className="mt-2">
                                    {Object.entries(entry).map(([key, value]) => (
                                        <p key={key} className="text-xl">
                                            <strong>{key}: </strong>
                                            {value}
                                        </p>
                                    ))}
                                </div>
                            ))}
                    </div>
                );
            })}

            {/* Preview Button */}
            <div className="mt-5">
                <button
                    onClick={() => setShowPreview(true)}
                    className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-700"
                >
                    Preview
                </button>
            </div>

            {/* Preview Section */}
            {showPreview && (
                <div className="mt-10 p-5 border-2 border-gray-400 rounded-lg">
                    <h2 className="text-4xl font-bold mb-3">Preview</h2>

                    <div ref={previewRef} className="p-5 bg-gray-800 rounded-lg">
                        {fields.map((section) => {
                            const sectionData = formData[section.header] || [];

                            return (
                                <div key={section.header} className="mb-5">
                                    <h2 className="text-3xl font-bold mb-3">{section.header}</h2>

                                    {section.list.map(
                                        (field) =>
                                            formData[field.name] && (
                                                <p key={field.name} className="text-xl">
                                                    <strong>{field.name}: </strong>
                                                    {formData[field.name]}
                                                </p>
                                            )
                                    )}

                                    {Array.isArray(sectionData) &&
                                        sectionData.map((entry, index) => (
                                            <div key={index} className="mt-2">
                                                {Object.entries(entry).map(([key, value]) => (
                                                    <p key={key} className="text-xl">
                                                        <strong>{key}: </strong>
                                                        {value}
                                                    </p>
                                                ))}
                                            </div>
                                        ))}
                                </div>
                            );
                        })}
                    </div>

                    {/* Download PDF Button */}
                    <div className="mt-5">
                        <button
                            onClick={handleDownloadPDF}
                            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                        >
                            Download PDF
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LiveResume;
