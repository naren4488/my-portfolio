import { useRef } from "react";
import emailjs from "@emailjs/browser";

import sendicon from "./../../../assets/narendra/send.svg";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0dw3wuo",
        "template_ri52myb",
        form.current,
        "txFZvSHNC9PS5FHsF",
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent successfully");
          alert("Enquiry submitted successfully.");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        },
      );
  };
  return (
    <div id="contact" className="bg-[#131417] px-28 py-6 pb-32 text-white">
      <h1 className="mb-10 mt-16 text-4xl">{`Let's Connect`}</h1>
      {/* email form div */}

      <div className="flex-1">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex items-end  justify-between gap-10"
        >
          <div className="flex flex-col ">
            <label id="inputName" className="mb-1" htmlFor="userName">
              Name
            </label>
            <input
              className="mb-3 border-b border-white bg-inherit p-1 outline-none	"
              type="text"
              name="user_name"
              id="userName"
              required
              placeholder="Enter your full name"
            />
          </div>
          <div className="flex flex-col ">
            <label id="inputEmail" className="mb-1" htmlFor="emailAddress">
              Email
            </label>
            <input
              className="mb-3 border-b border-white bg-inherit p-1 outline-none	"
              type="email"
              name="user_email"
              id="emailAddress"
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="flex w-1/3 flex-col">
            <label id="inputMsg" htmlFor="messageBox" className="mb-1 p-1">
              Message
            </label>
            <textarea
              className="mb-3 border-b border-white bg-inherit pb-1 outline-none	"
              name="message"
              id="messageBox"
              required
              type="text"
              rows={1}
              placeholder="Enter your query here"
            />
          </div>

          <button
            type="submit"
            required
            className="m-3 flex shrink-0 items-center gap-4 bg-white px-4 py-2 text-black"
          >
            <div>Send Message</div>
            <div>
              <img src={sendicon} alt="" height={30} width={30} />
            </div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
