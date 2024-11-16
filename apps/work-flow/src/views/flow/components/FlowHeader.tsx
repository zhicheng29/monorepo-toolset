import { Button, Avatar, Dropdown } from "antd";
import {
  CaretDownOutlined,
  CheckCircleFilled,
  FormOutlined,
  InfoCircleOutlined,
  LeftOutlined,
  PlusSquareOutlined,
  UserOutlined
} from "@ant-design/icons";

import type { MenuProps } from "antd";

const FlowHeader: React.FC = () => {
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("click left button", e);
  };

  const handleMenuClick: MenuProps["onClick"] = e => {
    console.log("click", e);
  };

  const items: MenuProps["items"] = [
    {
      label: "1st menu item",
      key: "1",
      icon: <UserOutlined />
    },
    {
      label: "2nd menu item",
      key: "2",
      icon: <UserOutlined />
    },
    {
      label: "3rd menu item",
      key: "3",
      icon: <UserOutlined />,
      danger: true
    },
    {
      label: "4rd menu item",
      key: "4",
      icon: <UserOutlined />,
      danger: true,
      disabled: true
    }
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick
  };

  return (
    <div className="flex items-center justify-between h-20 px-6 bg-[#f7f7fa] border-b">
      <div className="flex items-center gap-4">
        <Button icon={<LeftOutlined />}></Button>
        <Avatar size="large" shape="square" icon={<UserOutlined />} />
        <div className="text-sm">
          <div className="flex items-center gap-1 text-zinc-500">
            <span>test</span>
            <Button className="p-0 w-5 h-5 text-xs" size="small" type="text" icon={<InfoCircleOutlined />}></Button>
            <Button className="p-0 w-5 h-5 text-xs" size="small" type="text" icon={<FormOutlined />}></Button>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-zinc-400">保存于时间</span>
            <div className=" px-2 py-px rounded bg-green-200 text-green-500">
              <CheckCircleFilled />
              <span className="ml-2">status and token</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center flex-shrink-0 gap-4">
        <Button>结果</Button>
        <Dropdown.Button
          className="w-auto"
          icon={<CaretDownOutlined />}
          trigger={["click"]}
          menu={menuProps}
          onClick={handleButtonClick}
        >
          试运行
        </Dropdown.Button>
        <Button type="primary">发布</Button>
        <Button icon={<PlusSquareOutlined />} />
      </div>
    </div>
  );
};

export default FlowHeader;
