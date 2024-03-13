import React from "react";

interface ButtonProsps {
  label: string;
  className?: string;

  //   icon: string;
  //   label?: string;
  //   onClick?: any;
  //   disabled?: boolean;
  //   className?: string;
}

const Button: React.FC<ButtonProsps> = ({ label, className }) => {
  return (
    <div
      className={`py-1.5 px-3.5 text-themeSecond bg-theme rounded-full font-medium  ${className} `}
    >
      {label}
    </div>
  );
};

export default Button;
