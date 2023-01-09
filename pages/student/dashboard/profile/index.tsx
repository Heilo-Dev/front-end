import Head from "next/head";
import React, { useEffect, useState } from "react";
import {
  Review,
  ReviewTile,
  Scrollbar,
  StudentInfoCard,
} from "../../../../components";
import { DashboardLayout } from "../../../../layouts";
import { useGetUserInfoQuery } from "../../../../redux/slices/apiSlice";
import { UserInfo } from "../../../../types/user";

type Props = {};

const Profile = (props: Props) => {
  const [userInfo, setUserInfo] = useState<UserInfo | undefined>(undefined);
  const { data, error, isLoading, isFetching, isSuccess }: any =
    useGetUserInfoQuery();

  useEffect(() => {
    if (data) setUserInfo(data.result);
  }, [data]);

  console.log(userInfo);

  return (
    <div>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DashboardLayout>
        <section className="lg:grid grid-cols-12 gap-6 mt-3">
          <div className="col-span-4 m-3 lg:m-0">
            <StudentInfoCard userInfo={userInfo} />
          </div>
          <div className="col-span-8 m-3 lg:m-0">
            <Scrollbar style={{ height: "calc(100vh - 130px)" }}>
              <div className="grayDiv p-4 rounded-3xl">
                <div className="titleTab bg-[#3DDEA5] text-white">
                  Basic Information
                </div>
                <div className="lg:grid grid-cols-12 gap-4">
                  <div className="col-span-6 p-4 pb-0">
                    <h1 className="font-light text[#7D7D7D] mb-1.5">Address</h1>
                    <p className="text-[#7D7D7D] font-semibold">
                      274, sher-e-bangla road, Dhaka- 1209
                    </p>
                  </div>
                  <div className="col-span-6 p-4 pb-0">
                    <h1 className="font-light text[#7D7D7D] mb-1.5">Gender</h1>
                    <p className="text-[#7D7D7D] font-semibold">Male</p>
                  </div>
                  <div className="col-span-6"></div>
                </div>
              </div>

              <div className="grayDiv p-4 rounded-3xl mt-4">
                <div className="titleTab bg-[#3DDEA5] text-white">
                  Education
                </div>
                <div className="lg:grid grid-cols-12 gap-4">
                  <div className="col-span-6 p-4 pb-0">
                    <h1 className="font-light text[#7D7D7D] mb-1.5">
                      Current Institute
                    </h1>
                    <p className="text-[#7D7D7D] font-semibold">
                      Maple Leaf International School And College
                    </p>
                  </div>
                  <div className="col-span-6 p-4 pb-0">
                    <h1 className="font-light text[#7D7D7D] mb-1.5">Class</h1>
                    <p className="text-[#7D7D7D] font-semibold">Std- VI</p>
                  </div>
                  <div className="col-span-6"></div>
                </div>

                <div className="lg:grid grid-cols-12 gap-4">
                  <div className="col-span-6 p-4 pb-0">
                    <h1 className="font-light text[#7D7D7D] mb-1.5">Medium</h1>
                    <p className="text-[#7D7D7D] font-semibold">
                      English Medium
                    </p>
                  </div>
                  <div className="col-span-6 p-4 pb-0">
                    <h1 className="font-light text[#7D7D7D] mb-1.5">
                      Background
                    </h1>
                    <p className="text-[#7D7D7D] font-semibold">Science</p>
                  </div>
                  <div className="col-span-6"></div>
                </div>
              </div>

              <div className="border-4 border-[#F1F1F1] rounded-3xl mt-4">
                <div className="titleTab bg-[#3DDEA5] text-white m-4">Reviews</div>
                <div className="lg:grid grid-cols-12">
                  <div className="col-span-6 order-3 p-4 pb-0">
                    <Review />
                  </div>
                  <div className="col-span-6 order-2 p-4 pb-0 border border-r-4 border-[#F1F1F1]">
                    <div className="py-3 pl-10">
                      <Scrollbar style={{ height: "calc(100vh - 400px)" }}>
                        <ReviewTile />
                        <ReviewTile />
                        <ReviewTile />
                        <ReviewTile />
                        <ReviewTile />
                        <ReviewTile />
                        <ReviewTile />
                        <ReviewTile />
                        <ReviewTile />
                        <ReviewTile />
                        <ReviewTile />
                        <ReviewTile />
                      </Scrollbar>
                    </div>
                  </div>
                </div>
              </div>
            </Scrollbar>
          </div>
        </section>
      </DashboardLayout>
    </div>
  );
};

export default Profile;