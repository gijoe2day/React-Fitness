import React from "react";
import Card from "./Card";

const ExerciseList = ({ exercises }) => {
  return (
    <div>
      {exercises.map((exercise) => {
        return (
          <Card
            title={exercise.title}
            description={exercise.description}
            rightColor={exercise.rightColor}
            image={exercise.img}
            leftColor={exercise.leftColor}
            key={exercise.id}
          />
        );
      })}
    </div>
  );
};

export default ExerciseList;
