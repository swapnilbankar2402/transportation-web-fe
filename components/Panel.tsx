import React from "react";

interface PanelProps {
  count: string;
  panelTitle: string;
}

const Panel: React.FC<PanelProps> = ({ count, panelTitle }) => {
  return (
    <div className=" w-fit text-center py-2 px-5 bg-blurBg rounded-lg ">
      <p className="text-2xl font-bold">{count}</p>
      <span className="text-sm">{panelTitle}</span>
    </div>
  );
};

export default Panel;
