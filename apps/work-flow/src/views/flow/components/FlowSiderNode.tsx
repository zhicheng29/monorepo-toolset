import { Avatar, Button } from "antd";
import { MenuFoldOutlined, PlusOutlined } from "@ant-design/icons";
// import { useState } from "react";

interface NodeType {
  title: string;
  imgSrc: string;
}

const SiderNode: React.FC = () => {
  // const [showSiderNode, setShowSiderNode] = useState(false);
  const nodeList: NodeType[] = [
    {
      title: "开始节点",
      imgSrc: "https://api.dicebear.com/7.x/miniavs/svg?seed=1"
    },
    {
      title: "开始节点",
      imgSrc: "https://api.dicebear.com/7.x/miniavs/svg?seed=1"
    },
    {
      title: "开始节点",
      imgSrc: "https://api.dicebear.com/7.x/miniavs/svg?seed=1"
    },
    {
      title: "开始节点",
      imgSrc: "https://api.dicebear.com/7.x/miniavs/svg?seed=1"
    },
    {
      title: "开始节点",
      imgSrc: "https://api.dicebear.com/7.x/miniavs/svg?seed=1"
    },
    {
      title: "开始节点",
      imgSrc: "https://api.dicebear.com/7.x/miniavs/svg?seed=1"
    },
    {
      title: "开始节点",
      imgSrc: "https://api.dicebear.com/7.x/miniavs/svg?seed=1"
    },
    {
      title: "开始节点",
      imgSrc: "https://api.dicebear.com/7.x/miniavs/svg?seed=1"
    },
    {
      title: "开始节点",
      imgSrc: "https://api.dicebear.com/7.x/miniavs/svg?seed=1"
    },
    {
      title: "开始节点",
      imgSrc: "https://api.dicebear.com/7.x/miniavs/svg?seed=1"
    },
    {
      title: "开始节点",
      imgSrc: "https://api.dicebear.com/7.x/miniavs/svg?seed=1"
    },
    {
      title: "开始节点",
      imgSrc: "https://api.dicebear.com/7.x/miniavs/svg?seed=1"
    },
    {
      title: "开始节点",
      imgSrc: "https://api.dicebear.com/7.x/miniavs/svg?seed=1"
    },
    {
      title: "开始节点",
      imgSrc: "https://api.dicebear.com/7.x/miniavs/svg?seed=1"
    },
    {
      title: "开始节点",
      imgSrc: "https://api.dicebear.com/7.x/miniavs/svg?seed=1"
    },
    {
      title: "开始节点",
      imgSrc: "https://api.dicebear.com/7.x/miniavs/svg?seed=1"
    },
    {
      title: "开始节点",
      imgSrc: "https://api.dicebear.com/7.x/miniavs/svg?seed=1"
    },
    {
      title: "开始节点",
      imgSrc: "https://api.dicebear.com/7.x/miniavs/svg?seed=1"
    },
    {
      title: "开始节点",
      imgSrc: "https://api.dicebear.com/7.x/miniavs/svg?seed=1"
    },
    {
      title: "开始节点",
      imgSrc: "https://api.dicebear.com/7.x/miniavs/svg?seed=1"
    },
    {
      title: "开始节点",
      imgSrc: "https://api.dicebear.com/7.x/miniavs/svg?seed=1"
    }
  ];
  return (
    <div className="flex flex-col bg-[#f7f7fa] py-3 w-60">
      <div className="flex items-center justify-between px-4 mb-3">
        <div className="text-lg">选择节点</div>
        <Button icon={<MenuFoldOutlined />} size="small" />
      </div>
      <div className="flex flex-col overflow-auto">
        {nodeList.map((item, index) => {
          return (
            <div className="flex items-center justify-between px-4 py-2 mx-4 mb-3 text-sm bg-white rounded-lg" key={index}>
              <div className="flex items-center gap-2">
                <Avatar shape="square" src={<img src={item.imgSrc} />} />
                <span>{item.title}</span>
              </div>
              <Button type="text" size="small" icon={<PlusOutlined />} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SiderNode;
