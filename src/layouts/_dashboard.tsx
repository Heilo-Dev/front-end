import {
  LocalImage,
  Notification,
  StudentSidebar,
  TeacherSidebar,
} from "../components";
import profiePic from "../assets/img/tutor.png";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <>
      <div className="bg-primaryDark h-screen flex sm:p-4 sm:pb-0">
        {/* <StudentSidebar /> */}
        <TeacherSidebar />
        <div className="w-full">
          <div className="sm:pb-4 h-full">
            <div className="h-full bg-white sm:rounded-3xl py-3 px-2 sm:px-7">
              <div className="flex justify-end items-center">
                <Notification className="w-5 mr-5 text-primaryLight" />
                <div className="bg-primaryLight p-0.5 rounded-full">
                  <LocalImage src={profiePic} width={40} />
                </div>
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
