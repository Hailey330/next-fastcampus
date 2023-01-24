import React from "react";
import { Lecture } from "interface/lecture";
import useLectures from "hooks/useLectures";
import LectureItem from "./LectureItem";

const LectureList = () => {
  const { isLoading, data } = useLectures();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const lectureItems = data.lectureList.map((lecture: Lecture) => {
    return <LectureItem key={`lecture-${lecture.id}`} lecture={lecture} />;
  });

  return <div>{lectureItems}</div>;
};

export default LectureList;
