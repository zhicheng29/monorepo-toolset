import LogicFlow from "@logicflow/core";
import { useEffect, useRef } from "react";

import "@logicflow/core/dist/index.css";

const FlowContainer: React.FC = () => {
  const refContainer = useRef(null);
  const data = {
    // 节点
    nodes: [
      {
        id: "21",
        type: "rect",
        x: 300,
        y: 100,
        text: "rect node"
      },
      {
        id: "50",
        type: "circle",
        x: 500,
        y: 100,
        text: "circle node"
      }
    ],
    // 边
    edges: [
      {
        type: "polyline",
        sourceNodeId: "50",
        targetNodeId: "21"
      }
    ]
  };
  useEffect(() => {
    if (refContainer.current) {
      const lf = new LogicFlow({
        container: refContainer.current,
        grid: true
      });
      lf.render(data);
      lf.translateCenter();
    }
  }, []);

  return <div id="flow-container" className="flex-1" ref={refContainer}></div>;
};

export default FlowContainer;
