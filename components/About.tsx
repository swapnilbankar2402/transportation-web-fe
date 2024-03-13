import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="flex justify-between bg-themeLight px-6 sm:px-8 lg:px-12 py-14"
    >
      {/* Left */}
      <div className="w-full">
        <Image
          src={"/images/download.jpg"}
          alt={"about-us-image"}
          width={500}
          height={300}
          className="rounded-md w-full "
        />
      </div>
      {/* Right */}
      <div className="ps-16 py-14 w-full flex flex-col gap-3">
        <h2 className="font-bold tracking-wide text-2xl">About Us</h2>
        <p className="text-base">
          Wysax is your trusted partner in transportation solutions, At Wysax,
          we're more than just a transportation company - we're your reliable
          ally in moving goods efficeiently and securely. With a commitment to
          excellence and a passion for innovation, we strive to deliver the
          highest level of service to our valued clients.
        </p>
        <p className="text-base">
          What sets us apart is our unwavering dedication to customer
          satisfaction. We understand that every shipment is critical, which is
          why we leverage custting-edge technology and a global network of
          partners to ensure timely deliveries and superior performance.
        </p>
      </div>
    </section>
  );
};

export default About;
