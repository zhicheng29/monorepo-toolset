import { useEffect, useRef } from "react";
import LogicFlow from "@logicflow/core";
import { Control } from "@logicflow/extension";

import "@logicflow/core/dist/index.css";
import "@logicflow/extension/lib/style/index.css";

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
      LogicFlow.use(Control);
      const lf = new LogicFlow({
        container: refContainer.current!,
        stopScrollGraph: true,
        grid: {
          visible: true,
          config: {
            color: "#eceeef",
            thickness: 1
          }
        },
        keyboard: {
          enabled: true
        },
        background: {
          backgroundColor: "#f2f3f5"
        }
      });
      lf.render(data);
      lf.translateCenter(); // 将图形移动到画布中央
    }
  }, []);

  return <div id="flow-container" className="flex-1" ref={refContainer}></div>;
};

export default FlowContainer;
