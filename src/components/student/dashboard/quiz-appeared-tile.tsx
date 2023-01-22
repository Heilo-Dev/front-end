import React from "react";

// @@ internal imports @@ //
import { LocalImage } from "@components/image-snippents";
import QuizAppeared1 from "@assets/img/quiz-appeared1.png";
import QuizAppeared2 from "@assets/img/quiz-appeared2.png";

type Props = {};

const QuizAppearedTile = (props: Props) => {
  return (
    <div className="mb-3 cursor-pointer hover:bg-gray-200 p-4 rounded-3xl bg-[#fff] shadow-xl">
      <div className="flex justify-between items-center">
        <LocalImage src={QuizAppeared1} width={100} />
        <div className="flex flex-col ml-2">
          <h1 className="text-light text-xs">Total Mark</h1>
          <p className="text-5xl font-bold">23</p>
        </div>
      </div>
      <div className="rounded-[30px] p-2 mt-3 bg-[#f1f1f1]">
        <div className="flex items-center space-x-2">
          <LocalImage src={QuizAppeared2} />
          <p>Chapter-1 : Speed</p>
        </div>
        <div className="flex items-center justify-between my-1 text-textSecondary text-xs space-x-2">
          <p>Question: 25</p>
          <p>Time : 25 minutes</p>
        </div>
        <p className="text-textSecondary">27th July, 2021</p>
      </div>
    </div>
  );
};

export default QuizAppearedTile;
