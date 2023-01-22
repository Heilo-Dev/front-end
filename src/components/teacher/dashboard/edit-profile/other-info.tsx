import React from "react";

// @@ internal imports @@ //
import AccountDetails from "./account-details";
import Achievement from "./achievement";
import Attachment from "./attachment";
import BasicInfo from "./basic-info";
import EducationInfo from "./education-info";
import Payment from "./payment";

type Props = {};

const OtherInfo = (props: Props) => {
  return (
    <div>
      <BasicInfo />
      <EducationInfo />
      <Achievement />
      <AccountDetails />
      <Payment />
      <Attachment />
    </div>
  );
};

export default OtherInfo;
