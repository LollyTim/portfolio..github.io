import React from "react";
import { AiFillMail } from "react-icons/ai";
import { FaWhatsapp, FaLocationArrow } from "react-icons/fa";

const Contact = () => {
    const contact_info = [
        { logo: <AiFillMail />, text: "ololadetimileyin3@gmail.com" },
        { logo: <FaWhatsapp />, text: "+234 81-330-221-18" },
        {
            logo: <FaLocationArrow />,
            text: "Lagos",
        },
    ];
    return (
        <section id="contact" className="py-20 px-3 text-white">
            <div className="text-center mt-8">
                <h3 className="text-4xl font-semibold  text-gray-800">
                    Contact <span className="text-[#00df9a]">Me</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

                <div
                    className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-8xl lg:max-w-5xl md:max-w-5xl  bg-gray-800 md:p-6 p-36 rounded-lg mx-auto "
                >
                    <form className="flex flex-col flex-1 gap-5 text-gray-900">
                        <input type="text" placeholder="Your Name" />
                        <input type="Email" placeholder="Your Email Address" />
                        <textarea placeholder="Your Message" rows={10}></textarea>
                        <button className="p-2 bg-[#00df9a] rounded-full w-48 ">Send Message</button>
                    </form>
                    <div className="flex flex-col  gap-7 ">
                        {contact_info.map((contact, i) => (
                            <div
                                key={i}
                                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
                            >
                                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center my-auto mt-8 text-white bg-[#00df9a] rounded-full">
                                    {contact.logo}
                                </div>
                                <p className="md:text-base text-sm  break-words">
                                    {contact.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;