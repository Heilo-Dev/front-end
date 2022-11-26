import { Sidebar } from "../components";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <>
      <div className="bg-primaryDark h-screen flex p-4 pb-0">
        <Sidebar />
        <div className="w-full">
          <div className="pb-4 h-full">
            <div className="h-full bg-white rounded-3xl py-3 px-7">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
