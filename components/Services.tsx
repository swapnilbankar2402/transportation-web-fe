import React from "react";

const Services = () => {
  return (
    <section
      id="services"
      className="flex justify-between px-6 sm:px-8 lg:px-12 py-14"
    >
      <div className="pe-16 py-14 w-full flex flex-col gap-3">
        <h2 className="font-bold tracking-wide text-2xl">Services Offered</h2>
        <p className="text-base">
          Discover a comprehensive range of transportation solutions tailored to
          meet your needs with Wysax. From freight forwarding to logistics
          management, trust us to streamline your supply chain and popel your
          business forward.
        </p>
      </div>
      <div className="w-full">Images</div>
    </section>
  );
};

export default Services;
