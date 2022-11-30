import Head from "next/head";
import React from "react";
import Notification from "../../../../components/student/dashboard/student-find-tutor/notifications";
import SearchBar from "../../../../components/student/dashboard/student-find-tutor/search-bar";
import AvailableTutor from "../../../../components/student/homepage/available-tutor";
import Scrollbar from "../../../../components/ui/scrollbar";
import { DashboardLayout } from "../../../../layouts";
import { useGetUserInfoQuery } from "../../../../redux/slices/apiSlice";

type Props = {};

const StudentFindTutor = (props: Props) => {
    const {data}=useGetUserInfoQuery()
    console.log(data);

  return (
    <div>
      <Head>
        <title>Edit Profile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DashboardLayout>
        <section className="grid grid-cols-12 gap-16">
          <div className="col-span-8">
            <SearchBar />
            <div>
              <Scrollbar style={{ height: "calc(75vh - 100px)" }}>
                <div className="px-6">
                  <AvailableTutor />
                  <AvailableTutor />
                </div>
              </Scrollbar>
            </div>
          </div>
          <div className="col-span-4 mt-24 bg-bgAccent px-6 rounded-2xl h-[77vh]">
            <h1 className="text-primaryDark text-md capitalize mt-2">
              notifications
            </h1>
            <Scrollbar style={{ height: "calc(85vh - 100px)" }}>
              <Notification />
              <Notification />
              <Notification />
              <Notification />
              <Notification />
              <Notification />
              <Notification />
            </Scrollbar>
          </div>
        </section>
      </DashboardLayout>
    </div>
  );
};

export default StudentFindTutor;
