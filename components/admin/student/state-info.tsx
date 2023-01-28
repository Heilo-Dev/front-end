import React from "react";

type Props = {};

const StateInfo = (props: Props) => {
  return (
    <div className=" w-fit grid grid-cols-3 justify-center gap-18 my-6 mx-auto">
      <div>
        <h1 className="text-primaryLight text-xl lg:text-2xl font-light">TUITION AVAIL</h1>
        <p className="text-accent/80 text-3xl lg:text-5xl font-bold">41</p>
      </div>
      <div>
        <h1 className="text-primaryLight text-xl lg:text-2xl font-light">QUIZ APPEARED</h1>
        <p className="text-accent/80 text-3xl lg:text-5xl font-bold">25</p>
      </div>
      <div>
        <h1 className="text-accent/70 text-xl lg:text-2xl font-light">
          TOTAL MONEY SPEND
        </h1>
        <p className="text-primaryDark text-3xl lg:text-5xl font-bold">TK. 2511</p>
      </div>
    </div>
  );
};

export default StateInfo;
