import React from "react";
import { GrMail } from "react-icons/gr";
import { FaFacebookMessenger, FaLinkedin } from "react-icons/fa";

const contact = [
  {
    icon: <GrMail />,
    title: "Email",
    info: "kin0905152701@gmail.com",
    link: "mailto:kin0905152701@gmail.com",
  },
  {
    icon: <FaFacebookMessenger />,
    title: "Messenger",
    info: "Kin Nguyễn",
    link: "https://www.facebook.com/messages/t/100003134161056",
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    info: "Minh Quân",
    link: "https://www.linkedin.com/in/qu%C3%A2n-minh-2a862b24a/",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="container mx-auto mt-[8rem] font-semibold">
      <div className="text-center">
        <h5 className="text-xs">Get In Touch</h5>
        <h1 className="text-4xl text-main pt-4">Contact</h1>
      </div>

      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-20">
        <div className="flex flex-col gap-5">
          {contact.map((item, index) => (
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

        <div className="lg:col-start-2 lg:col-end-4">
          <form action="" className="flex flex-col gap-10">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
              className="w-full "
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full"
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              className="w-full"
            ></textarea>
            <button
              type="submit"
              className="w-[200px] bg-main p-5 rounded-2xl text-black opacity-90 duration-200 hover:opacity-100"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
