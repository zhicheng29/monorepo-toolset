import React from "react";

import FlowHeader from "./components/FlowHeader";
import FlowSiderNode from "./components/FlowSiderNode";
import FlowContainer from "./components/FlowContainer";

const Flow: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <FlowHeader />
      <div className="flex flex-1 w-full overflow-hidden">
        <FlowSiderNode />
        <FlowContainer />
      </div>
    </div>
  );
};

export default Flow;
