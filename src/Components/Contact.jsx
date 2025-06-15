import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/apjmzqka", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20
                 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 
                 rounded-xl shadow-lg py-10"
    >
      <h1 className="text-3xl font-bold mb-2 text-blue-500 dark:text-blue-400">Contact Me</h1>
      <span className="font-semibold text-xl text-gray-700 dark:text-gray-300">
        Please fill out the form below to get in touch
      </span>

      <div className="flex flex-col items-center justify-center mt-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          action="https://getform.io/f/apjmzqka"
          method="POST"
          className="bg-white dark:bg-gray-800 w-full md:w-96 px-8 py-6 rounded-xl shadow-md"
        >
          <h2 className="text-xl font-semibold mb-4 text-blue-500 dark:text-blue-300 text-center">
            Send Your Message
          </h2>

          {/* Full Name */}
          <div className="flex flex-col mb-4">
            <label className="text-gray-800 dark:text-gray-300 mb-1">Full Name</label>
            <input
              {...register("name", { required: true })}
              className="rounded-lg border py-2 px-3 text-gray-800 dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              placeholder="Enter your full name"
            />
            {errors.name && <span className="text-sm text-red-500 mt-1">This field is required</span>}
          </div>

          {/* Email Address */}
          <div className="flex flex-col mb-4">
            <label className="text-gray-800 dark:text-gray-300 mb-1">Email Address</label>
            <input
              {...register("email", { required: true })}
              className="rounded-lg border py-2 px-3 text-gray-800 dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
              placeholder="Enter your email address"
            />
            {errors.email && <span className="text-sm text-red-500 mt-1">This field is required</span>}
          </div>

          {/* Message */}
          <div className="flex flex-col mb-4">
            <label className="text-gray-800 dark:text-gray-300 mb-1">Message</label>
            <textarea
              {...register("message", { required: true })}
              rows={4}
              className="rounded-lg border py-2 px-3 text-gray-800 dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your message"
            />
            {errors.message && <span className="text-sm text-red-500 mt-1">This field is required</span>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl px-4 py-2 w-full duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
