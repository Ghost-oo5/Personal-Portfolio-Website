"use client";

import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";
import { isValidEmail } from "@/../utils/check-email";

const ContactWithoutCaptcha = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState({
    email: false,
    required: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const checkRequired = () => {
    if (input.email && input.message && input.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!input.email || !input.message || !input.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    }

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
    const options = {
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
    };

    const templateParams = {
      from_name: input.name,
      email: input.email,
      message: `${input.message} \nEmail: ${input.email}`,
    };

    try {
      setIsLoading(true);
      const res = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        options,
      );

      if (res.status === 200) {
        toast.success("Message sent successfully!");
        setIsLoading(false);
        setInput({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error: unknown) {
      setIsLoading(false);
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };
  return (
    <div className="">
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
        Contact with me
      </p>
      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <p className="text-base text-[#d3d8e8]">
          {
            "If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."
          }
        </p>
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-base">Your Name: </label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="text"
              maxLength={100}
              required={true}
              onChange={(e) => setInput({ ...input, name: e.target.value })}
              onBlur={checkRequired}
              value={input.name}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Your Email: </label>
            <input
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="email"
              maxLength={100}
              required={true}
              value={input.email}
              onChange={(e) => setInput({ ...input, email: e.target.value })}
              onBlur={() => {
                checkRequired();
                setError({ ...error, email: !isValidEmail(input.email) });
              }}
            />
            {error.email && (
              <p className="text-base text-red-400">
                Please provide a valid email!
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base">Your Message: </label>
            <textarea
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              maxLength={500}
              name="message"
              required={true}
              onChange={(e) => setInput({ ...input, message: e.target.value })}
              onBlur={checkRequired}
              rows={4}
              value={input.message}
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            {error.required && (
              <p className="text-base text-red-400">
                Email and Message are required!
              </p>
            )}
            <button
              className="custom-contact-link"
              role="button"
              onClick={handleSendMail}
            >
              <span>
                {isLoading ? (
                  <div
                    className="inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                    role="status"
                  ></div>
                ) : (
                  <div className="custom-animated-button btn-blue flex items-center gap-2 !rounded-full ">
                    send message <TbMailForward className="ml-1" size={18} />
                  </div>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactWithoutCaptcha;
