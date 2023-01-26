import Head from "next/head";
import React from "react";
import {
  ActivityScale,
  AdminQuizDashboardCard,
  AverageRating,
  QuizRatingCard,
  Scrollbar,
  TotalQuizScale,
} from "../../../components";
import { AdminLayout } from "../../../layouts";

type Props = {};

const AdminQuiz = (props: Props) => {
  return (
    <>
      <Head>
        <title>Admin | Quiz</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AdminLayout>
        <div className="lg:pl-6">
          <div className="lg:grid grid-cols-12 gap-4">
            {/* <div className="flex flex-col pt-5"> */}
            <div className="col-span-8 p-4 pb-0 mt-4">
              <div className="lg:grid grid-cols-12 space-y-3 gap-4">
                <div className="col-span-4">
                  <AdminQuizDashboardCard
                    title="TOTAL QUIZ CONDUCTED"
                    count={2011}
                  />
                </div>
                <div className="col-span-4">
                  <AdminQuizDashboardCard
                    title="TOTAL QUIZ AVAILABLE"
                    count={4211}
                  />
                </div>
                <div className="col-span-4">
                  <AdminQuizDashboardCard
                    title="TOTAL STUDENT APPEARED"
                    count={2511}
                  />
                </div>
              </div>
              <div className="mt-7">
                <h1 className="text-primaryDark text-xl capitalize">
                  total quiz conducted
                </h1>
                <div className="w-fit flex bg-white overflow-hidden ml-auto font-semibold rounded-full border-primaryDark border-[1px] pl-2">
                  <select
                    defaultValue="male"
                    className="form-input mb-0 ml-3 w-[120px] py-1"
                  >
                    <option value="male">Last 7 days</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
              <TotalQuizScale />
            </div>

            <div className="col-span-4 mb-64 lg:mb-0 p-3 lg:p-0">
              <div className="grayDiv lg:h-screen">
                <AverageRating rating={4.8} />
                <div className="flex justify-between my-3">
                  <div className="w-fit flex bg-white overflow-hidden font-semibold rounded-full border-primaryDark border-[1px] pl-2">
                    <select
                      defaultValue="male"
                      className="form-input mb-0 ml-3 w-[120px] py-1"
                    >
                      <option value="male">Last 7 days</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div className="w-fit flex bg-white overflow-hidden ml-auto font-semibold rounded-full border-primaryDark border-[1px] pl-2">
                    <select
                      defaultValue="male"
                      className="form-input mb-0 ml-3 w-[120px] py-1"
                    >
                      <option value="male">Last 7 days</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
                <Scrollbar style={{ height: "calc(100vh - 270px)" }}>
                  <QuizRatingCard />
                  <QuizRatingCard />
                  <QuizRatingCard />
                  <QuizRatingCard />
                  <QuizRatingCard />
                  <QuizRatingCard />
                  <QuizRatingCard />
                  <QuizRatingCard />
                  <QuizRatingCard />
                  <QuizRatingCard />
                  <QuizRatingCard />
                  <QuizRatingCard />
                  <QuizRatingCard />
                  <QuizRatingCard />
                  <QuizRatingCard />
                  <QuizRatingCard />
                  <QuizRatingCard />
                  <QuizRatingCard />
                  <QuizRatingCard />
                  <QuizRatingCard />
                </Scrollbar>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminQuiz;
