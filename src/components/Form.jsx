import React from "react";
import { RiSparkling2Fill, RiMagicLine } from "react-icons/ri";

const services = [
  "Website Design",
  "Content",
  "UX Design",
  "Strategy",
  "User Research",
  "Other",
];

const Form = () => {
  return (
    <div>
      <h1 className="w-96 text-3xl font-semibold">
        Got Ideas?{" "}
        <RiMagicLine className="inline-block text-lime-500 md:text-black" />
        We've got the skills. Let's team up.
      </h1>
      <p className="my-5 text-xl">
        Tell us more about yourself and what's on your mind.
      </p>
      <form action="https://docs.google.com/forms/d/e/1FAIpQLSeISuULYy8xpdtFjGNZ_W5gOgZBkIKmyPCIMQLo2JPRdYdV8Q/formResponse" className="flex w-full flex-col gap-3">
        <input
          type="text"
          name="entry.2064855694"
          id="fullname"
          placeholder="Your name"
          className="w-full border-b border-zinc-600 p-1 placeholder-stone-600 md:bg-lime-400"
        />
        <input
          type="email"
          name="entry.464797640"
          id="email"
          placeholder="your@company.com"
          className="w-full border-b border-zinc-600 p-1 placeholder-stone-600 md:bg-lime-400"
        />
        <input
          type="text"
          name="entry.251431214"
          id="message"
          placeholder="Tell us a little about your project..."
          className="h-24 w-full border-b border-zinc-600 p-1 placeholder-stone-600 md:bg-lime-400"
        />

        <p className="my-3 text-stone-700">How can we help?</p>

        <div className="mb-6 grid max-w-96 grid-cols-2">
          {services.map((service) => {
            return (
              <label className="flex items-center gap-1" key={service}>
                <input
                  type="checkbox"
                  name="entry.471991504"
                  value={service}
                  className="size-5"
                />{" "}
                {service}
              </label>
            );
          })}
        </div>

        <button className="flex items-center justify-center gap-2 rounded-lg bg-stone-950 p-1 text-white">
          Let's get started{" "}
          <RiSparkling2Fill className="text-xl text-lime-400" />
        </button>
      </form>
    </div>
  );
};

export default Form;