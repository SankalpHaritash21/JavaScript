const Question = ({ question, onAnswerClick = () => {} }) => {
  return (
    <div
      className="question bg-white p-8 rounded-lg shadow-md"
      style={{ width: "400px" }}
    >
      <h2 className="text-xl font-semibold mb-4" style={{ minHeight: "2rem" }}>
        {question.question}
      </h2>
      <ul className="options">
        {question.answerOptions.map((option, index) => {
          return (
            <li key={index} className="mb-4">
              <button
                onClick={() => onAnswerClick(option.isCorrect)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                style={{ minHeight: "2.5rem", minWidth: "100%" }}
              >
                {option.text}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Question;
