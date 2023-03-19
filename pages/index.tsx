import { Quiz1 } from "./components/question/quiz1";

export default function Home() {
  const q1 = {
    choice: ["a", "b", "c", "d"],
    correct_choice: "a",
    question: "How old am I?",
  };
  return (
    <div className="w-screen justify-center flex items-center h-screen bg-slate-900">
      <Quiz1 question={q1} />
    </div>
  );
}
