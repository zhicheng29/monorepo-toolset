import { useOutlet } from "react-router-dom";
const MainContainer: React.FC = () => {
  const outlet = useOutlet();

  return <div className="w-full h-full">{outlet}</div>;
};

export default MainContainer;
