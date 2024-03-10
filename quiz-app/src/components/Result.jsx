const Result = ({ userAnswers, questions, resetQuiz = () => {} }) => {
  const correctAnswers = userAnswers.filter((answer) => answer).length;

  return (
    <div className="results bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Results</h2>
      <p className="mb-6">
        You answered <span className="font-semibold">{correctAnswers}</span> out
        of <span className="font-semibold">{questions.length}</span> questions{" "}
        <span
          onClick={resetQuiz}
          className="text-blue-500 cursor-pointer hover:text-blue-700"
        >
          Click here to Retry
        </span>
      </p>
      <ul className="list-disc pl-5">
        {questions.map((question, index) => {
          const isCorrect = userAnswers[index];
          const selectedOption = question.answerOptions.find(
            (option) => option.isCorrect
          );
          return (
            <li
              key={index}
              className={`mb-2 ${
                isCorrect ? "text-green-600" : "text-red-600"
              }`}
            >
              Q{index + 1}. {question.question}
              {isCorrect ? (
                <b> - Correct</b>
              ) : (
                <b>
                  {" - Correct answer: "}
                  {selectedOption && selectedOption.text}
                </b>
              )}
            </li>
          );
        })}
      </ul>

      {/* Restart Button */}
      <button
        onClick={resetQuiz}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6 focus:outline-none focus:shadow-outline"
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default Result;
