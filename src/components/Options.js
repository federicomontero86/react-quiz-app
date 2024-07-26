import { useQuiz } from "../contexts/QuizContext";

function Options() {
  const { answer, questions, dispatch, index } = useQuiz();

  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {questions[index].options.map((option, i) => (
        <button
          key={option}
          disabled={hasAnswered}
          className={`btn btn-option ${i === answer ? "answer" : ""} ${
            hasAnswered
              ? i === questions[index].correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          onClick={() => dispatch({ type: "newAnswer", payload: i })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
