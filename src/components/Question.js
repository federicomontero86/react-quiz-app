import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";

function Question() {
  const { questions } = useQuiz();

  return (
    <div>
      <h4>{questions.question}</h4>
      <Options />
    </div>
  );
}

export default Question;
