import React from "react";
import { ContactDatas } from "./ContactDatas";


const Contact = () => {
  return (
    <section id="contact" className="container mx-auto mt-[8rem] font-semibold">
      <div className="text-center">
        <h5 className="text-xs">Get In Touch</h5>
        <h1 className="text-4xl text-main pt-4">Contact</h1>
      </div>

      <div className="mt-16 grid lg:grid-cols-3 gap-5">
        {ContactDatas.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between p-5 h-[200px] bg-[#2a2a67] rounded-2xl "
          >
            <i className="text-2xl">{item.icon}</i>
            <div className="text-center">
              <p>{item.title}</p>
              <p className="text-sm font-medium text-gray">{item.info}</p>
            </div>
            <a href={item.link} className="opacity-90 hover:opacity-100">
              Send a message
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
