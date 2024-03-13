"use client";
import React from "react";
import { Icon } from "@iconify/react";

interface IconifyIconsProps {
  icon: string;
  color?: string;
  height?: number;
  width?: number;
}

const IconifyIcons: React.FC<IconifyIconsProps> = ({
  icon,
  color,
  height,
  width,
}) => {
  return <Icon icon={icon} height={height} color={color} width={width} />;
};

export default IconifyIcons;
