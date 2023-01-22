import React from "react";

// @@ internal imports @@ //
import { UserInfo } from "../../../../types/user";
import AccountDetails from "./account-details";
import Attachment from "./attachment";
import BasicInfo from "./basic-info";
import EducationInfo from "./education-info";

type Props = {
  userInfo: UserInfo | undefined;
};

const OtherInfo = ({ userInfo }: Props) => {
  console.log(userInfo);
  return (
    <div>
      <BasicInfo basic={userInfo} />
      <EducationInfo />
      <AccountDetails />
      <Attachment />
    </div>
  );
};

export default OtherInfo;
