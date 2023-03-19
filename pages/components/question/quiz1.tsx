/* eslint-disable react/jsx-key */
import { Question_Prop } from "@/pages/schema_ts";
import { FC } from "react";
import { useState, useEffect } from "react";
export const Quiz1: FC<Question_Prop> = ({ question }) => {
  const [wrong, setWrong] = useState<boolean[]>([]);
  const [state, setState] = useState<Number>(0);

  const check_ans = (choose: string, index: number) => {
    if (choose === question.correct_choice) {
      // User selected the correct answer
      setState(2);
    } else {
      setWrong((prevWrong) => {
        const newWrong = [...prevWrong];
        newWrong[index] = true;
        return newWrong;
      });
      setState(1);
    }
  };

  const Respone = () => {
    if (state === 0) {
      return <></>;
    } else if (state === 1) {
      return (
        <div className="place-self-center col-span-2 text-2xl text-red-500">
          NOOB!
        </div>
      );
    } else {
      return (
        <div className="place-self-center col-span-2 text-lime-400 text-2xl">
          U got it right!
        </div>
      );
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setWrong((prevWrong) => {
        const newWrong = [...prevWrong].fill(false);
        return newWrong;
      });
    }, 200);
    return () => clearTimeout(timeout);
  }, [wrong]);
  return (
    <div className=" p-10 gap-8 text-white  bg-white bg-opacity-10 rounded-2xl grid grid-cols-2 grid-rows-3">
      <div
        className="col-span-2 text-5xl
       mb-5 place-self-center "
      >
        {question.question}
      </div>
      {question.choice.map((data, index) => {
        return (
          <div
            className={
              !wrong[index]
                ? "place-self-center"
                : "place-self-center animate-wiggle  "
            }
          >
            <div
              onClick={() => check_ans(data, index)}
              className={
                !wrong[index]
                  ? "question-choice"
                  : "question-choice border-red-500"
              }
            >
              {data}
            </div>
          </div>
        );
      })}
      <Respone />

      <div className="col-span-2">
        Correct Answer is: {question.correct_choice}
      </div>
    </div>
  );
};
