import React from "react";

// @@ internal imports @@ //
import Scrollbar from "@components/ui/scrollbar";
import QuizAppearedTile from "./quiz-appeared-tile";

type Props = {};

const StudentQuizAppeared = (props: Props) => {
  return (
    <div className="grayDiv mt-8 py-4 w-full px-6">
      <h1 className="text-xl font-bold text-[#242121] mb-2">Quiz Appeared</h1>
      <Scrollbar style={{ height: "calc(100vh - 385px)" }}>
        <div className="grid grid-cols-2 gap-4">
          <QuizAppearedTile />
          <QuizAppearedTile />
          <QuizAppearedTile />
          <QuizAppearedTile />
          <QuizAppearedTile />
          <QuizAppearedTile />
          <QuizAppearedTile />
          <QuizAppearedTile />
          <QuizAppearedTile />
          <QuizAppearedTile />
          <QuizAppearedTile />
          <QuizAppearedTile />
        </div>
      </Scrollbar>
    </div>
  );
};

export default StudentQuizAppeared;
