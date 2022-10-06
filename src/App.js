import "./App.css";
import quiz from "./quiz.json";
import { useState, useReducer } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [correct, setCorrect] = useState("");
  const questionContent = quiz.questions[count].question;

  const variant1 = quiz.questions[count].answers[0];
  const variant2 = quiz.questions[count].answers[1];
  const variant3 = quiz.questions[count].answers[2];
  const variant4 = quiz.questions[count].answers[3];
  const correctAnswer =
    quiz.questions[count].answers[quiz.questions[count].correctIndex];

  const clickHandler = (e) => {
    setCorrect(e.target.textContent === correctAnswer ? true : false);
    console.log(e.target.textContent === correctAnswer);
  };

  const nextquizHandler = () => {
    setTimeout(function () {
      setCount(count + 1);
    }, 500);
  };
  const prevquizHandler = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <div className="quiz__container">
        <div className="quiz">
          <h2>Question {count + 1}</h2>
          <div>{questionContent}</div>
        </div>
        <div className="answers">
          <button
            className={correct ? " green" : " orange"}
            onClick={clickHandler}
          >
            {" "}
            {variant1}
          </button>
          <button
            className={correct ? " green" : " orange"}
            onClick={clickHandler}
          >
            {variant2}
          </button>
          <button
            className={correct ? " green" : " orange"}
            onClick={clickHandler}
          >
            {variant3}
          </button>
          <button
            className={correct ? " green" : " orange"}
            onClick={clickHandler}
          >
            {variant4}
          </button>
        </div>
        {count < 11 ? (
          <button onClick={nextquizHandler} className="next">
            Next
          </button>
        ) : null}
        {count > 0 ? (
          <button onClick={prevquizHandler} className="prev">
            Prev
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default App;
