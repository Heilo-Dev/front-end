import Head from "next/head";
import { DashboardLayout } from "../../../layouts";
import { useSession } from "next-auth/react";
import {
  DashboardCard,
  NotificationTile,
  Scrollbar,
  StudentUpcommingSessions,
  StudentTutionCompleted,
  StudentQuizAppeared,
  StudentFavouriteTutors,
} from "../../../components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

const Dashboard = ({ children }: Props) => {
  const { data: session, status } = useSession();
  const [selectedCard, setSelectedCard] = useState(1);
  const token = session?.user?.email;
  useEffect(() => {
    if (token) localStorage.setItem("heiloUserToken", token);
  }, [token]);
  const router = useRouter();
  useEffect(() => {
    if (status === "unauthenticated") router.replace("/");
  }, [router, status]);

  if (status === "loading" || status === "unauthenticated")
    return (
      <div className="flex justify-center items-center section-container bg-slate-200">
        <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-700 h-10 w-10" />
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-700 rounded" />
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-700 rounded col-span-2" />
                  <div className="h-2 bg-slate-700 rounded col-span-1" />
                </div>
                <div className="h-2 bg-slate-700 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardLayout>
        <div className="sm:px-4 px-2 sm:mt-6 mt-2">
          <div className="justify-between hidden sm:flex">
            <DashboardCard
              cardName="Upcoming Sessions"
              amount="03"
              cardNumber={1}
              color1="text-[#02A17B]"
              color2="text-[#45E7C0]"
              selectedCard={selectedCard}
              setSelectedCard={setSelectedCard}
            />
            <DashboardCard
              cardName="Tutions completed"
              amount="53"
              cardNumber={2}
              color1="text-[#00758F]"
              color2="text-[#45DDE7]"
              selectedCard={selectedCard}
              setSelectedCard={setSelectedCard}
            />
            <DashboardCard
              cardName="Quiz Appeared"
              amount="13"
              cardNumber={3}
              color1="text-[#FFA800]"
              color2="text-[#FAE0BA]"
              selectedCard={selectedCard}
              setSelectedCard={setSelectedCard}
            />
            <DashboardCard
              cardName="Favourite Tutors"
              amount="09"
              cardNumber={4}
              color1="text-[#DA4453]"
              color2="text-[#FB9999]"
              selectedCard={selectedCard}
              setSelectedCard={setSelectedCard}
            />
          </div>

          <div className="flex space-x-8">
            {selectedCard === 1 && <StudentUpcommingSessions />}
            {selectedCard === 2 && <StudentTutionCompleted />}
            {selectedCard === 3 && <StudentQuizAppeared />}
            {selectedCard === 4 && <StudentFavouriteTutors />}
            <div className="grayDiv mt-8 p-1 w-full px-5 hidden sm:block">
              <h1 className="text-primaryLight font-semibold my-2 mx-1.5">
                Notifications
              </h1>
              <Scrollbar style={{ height: "calc(100vh - 360px)" }}>
                <NotificationTile />
                <NotificationTile />
                <NotificationTile />
                <NotificationTile />
                <NotificationTile />
                <NotificationTile />
                <NotificationTile />
                <NotificationTile />
                <NotificationTile />
                <NotificationTile />
              </Scrollbar>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
