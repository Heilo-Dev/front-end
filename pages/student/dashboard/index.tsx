type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <>
      <div className="bg-primaryDark h-screen flex p-4 pb-0">
        <div className="bg-white/80 h-full w-48 mr-4">
          <h1>Dashboard Menu</h1>
        </div>
        <div className="w-full">
          <div className="pb-4 h-full">
            <div className="h-full bg-white rounded-3xl p-4">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
