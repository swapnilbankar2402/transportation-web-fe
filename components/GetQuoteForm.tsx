import React from "react";

const GetQuoteForm = () => {
  return (
    <div className="border-2 bg-blurBg rounded-lg h-full px-4 py-4">
      <div className="text-center">
        <h4 className="text-whiteFade font-bold ">Get a Quote</h4>
        <p className="text-xs my-4 text-whiteLight ">
          Get your personalized transportation quotattion today from Wysax.
          Experience competitive rates and exceptional services tailored to your
          needs.
        </p>
      </div>
      <form action="" className=" flex flex-col gap-4">
        <input
          type="text"
          placeholder="What are you moving?"
          className="w-full px-4 py-3 focus:outline-none rounded-md placeholder:text-sm  "
        />
        <input
          type="text"
          placeholder="Collection Location?"
          className="w-full px-4 py-3 focus:outline-none rounded-md placeholder:text-sm"
        />
        <input
          type="text"
          placeholder="Delivery Location?"
          className="w-full px-4 py-3 focus:outline-none rounded-md placeholder:text-sm"
        />
        <button
          className="py-2 px-6 mt-3  w-fit self-center text-themeSecond bg-theme rounded-full font-medium"
          type="submit"
        >
          Get Quotation
        </button>
      </form>
    </div>
  );
};

export default GetQuoteForm;
