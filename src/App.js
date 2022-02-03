import './App.css';
import React,{useState} from 'react';

function App() {
  const [score,setScore] = useState(0);
  var [index,setIndex] = useState(0);
  const [questions, setQuestions] = useState([
    {
      question: "1. what is capital of India?",
      choices: {
        a: "Delhi",
        b: "Bangalore",
        c: "Mumbai",
      } ,
      answer: "Delhi"
    },
    {
      question: "2. what is capital of Tamil Nadu?",
      choices: {
        a: "Chennai",
        b: "Bangalore",
        c: "Mumbai",
      } ,
      answer: "Chennai"
    },
    {
      question: "3. what is capital of Karnataka?",
      choices: {
        a: "Bangalore",
        b: "Delhi",
        c: "Mumbai",
      } ,
      answer: "Bangalore"
    },
    {
      question: "4. In which year did WWII end?",
      choices: {
        a: "1923",
        b: "1936",
        c: "1945",
      } ,
      answer: "1945"
    },
    {
      question: "5. How many colors are there in a rainbow?",
      choices: {
        a: "9",
        b: "7",
        c: "8",
      } ,
      answer: "7"
    },
    {
      question: "6. Which is the largest animal in the world?",
      choices: {
        a: "Elephant",
        b: "Blue whale",
        c: "Girrafe",
      } ,
      answer: "Blue Whale"
    },

  ]);

  const nextQuestion = () => {
    console.log("clicked next");
    setIndex(index+1);
    // console.log("question length",+questions.length-1)
    // console.log(index);
    // if()
    let selectedOption = document.getElementsByName('option');
    for(let i=0;i<selectedOption.length;i++) {
      if(selectedOption[i].checked) {
        console.log(selectedOption[i].value);
        if(selectedOption[i].value === questions[index].answer) {
          console.log("answer is correct")
          setScore(score+1);
          console.log("score is"+score);
        } else {
          console.log("answer is not corrrect")
          console.log("score is"+score);
        }
      }
    }
    if(index === questions.length-1) {
      console.log(index);
      setIndex(0);
      alert("you finished the game")
      alert(`You SCORED ${score} / ${questions.length} 😎👏🙌🎇🎆`)
      setScore(0);
    }

  }

  return (
    <div className="App">
      <div className="container">
        <div className="questions">
            <h3>{questions[index].question}</h3>
            <div className="options">
              <label><input type="radio" value={questions[index].choices.a} name="option"/>{questions[index].choices.a}</label><br/>
              <label><input type="radio" value={questions[index].choices.b} name="option"/>{questions[index].choices.b}</label><br/>
              <label><input type="radio" value={questions[index].choices.c} name="option"/>{questions[index].choices.c}</label><br/>
            </div>
        </div>
        <div className="button">
          <button onClick={() => nextQuestion()}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;
