"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      alt="logo"
      className="md:block cursor-pointe"
      height={"100"}
      width={"100"}
      src={"/images/logo.png"}
      priority
      onClick={() => router.push("/")}
    />
  );
};

export default Logo;
