import React from "react";
import Logo from "./Logo";
import { NavItems } from "@/content/NavItems";
import Link from "next/link";
import Button from "./Button";

const Header = () => {
  return (
    <header >
      <nav>
        <div className="relative z-10 py-6 flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Menu and action */}
          <div className="flex items-center gap-8">
            <div className="flex gap-4">
              {NavItems.map(({ item, link, id }) => (
                <Link href={link} key={id} className="text-whiteLight" >
                  <span>{item}</span>
                </Link>
              ))}
            </div>
            <Button label="Sign in" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
