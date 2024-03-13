import React from "react";
import Header from "./Header";
import Panel from "./Panel";
import { PanelData } from "@/content/PanelData";
import GetQuoteForm from "./GetQuoteForm";
import IconifyIcons from "./IconifyIcons";
import Link from "next/link";

const LandingSection = () => {
  return (
    <section className="bg-[#8A6E64] h-[100vh] w-full px-6 sm:px-8 lg:px-12">
      <Header />
      {/* <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-3" > */}
      {/* overflow-hidden py-10 sm:py-20 lg:pb-32 xl:pb-3 */}
      <div className="py-4 md:grid md:grid-cols-5 md:gap-28 items-center">
        {/* Left section */}
        <div className="md:col-span-3  text-white">
          <h1 className="text-4xl font-semibold tracking-wide">
            Transforming <span className="text-theme">Transportation</span>{" "}
            <br />
            by <span className="text-theme">Reaching</span> New Heights
          </h1>
          <p className="my-6 text-base text-whiteFade">
            By leveraging insights from our network of industry insiders, you
            will know exactly when to buy to maximize profit, and exactly when
            to sell to avoid painful losses.
          </p>
          <div className="flex gap-2">
            {PanelData.map(({ id, count, title }) => (
              <Panel count={count} panelTitle={title} key={id} />
            ))}
            {/* <Panel count={"6500"} panelTitle="Deliveries" /> */}
          </div>
        </div>
        {/* Right section */}
        <div className="md:col-span-2">
          <GetQuoteForm />
        </div>
      </div>
      {/* Expore */}
      <Link href={'/'} className="text-white cursor-pointer flex items-center gap-2">
        <div className=" bg-blurBg w-fit p-2 rounded-full">
          <IconifyIcons icon="ph:arrow-right-light" />
        </div>
        <span>Expore services</span>
      </Link>
    </section>
  );
};

export default LandingSection;
