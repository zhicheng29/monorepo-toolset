import SvgIcon from "@repo/ui/components/SvgIcon";

const FormHeader: React.FC = () => {
  const title = import.meta.env.VITE_APP_TITLE;

  return (
    <div className="flex flex-row items-center justify-center  mb-8">
      <div className="mb-2 mr-6">
        <SvgIcon name="backend" iconStyle={{ width: "60px", height: "60px" }} />
      </div>
      <div className="text-4xl font-bold tracking-wide">{title}</div>
    </div>
  );
};

export default FormHeader;
