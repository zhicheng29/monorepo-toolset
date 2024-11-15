import React from "react";

import FlowHeader from "./components/FlowHeader";
import FlowSiderNode from "./components/FlowSiderNode";
import FlowContainer from "./components/FlowContainer";

const Flow: React.FC = () => {
  return (
    <React.Fragment>
      <FlowHeader />
      <div className="flex h-[calc(100%-80px)] w-full">
        <FlowSiderNode />
        <FlowContainer />
      </div>
    </React.Fragment>
  );
};

export default Flow;
