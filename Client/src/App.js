import React, { useState } from 'react';
import './App.css';
import User from "./Components/userLogin";
import Question from "./Components/quiz";
import ScoreBoard from "./Components/userResult";
import { BrowserRouter, Switch, Route,Redirect } from "react-router-dom";
import axios from "axios";
import questions from "./Components/covidQues"



function App() {
  
  // const [quesNumber, setQuesNumber] = useState(0)
  // const [answers, setAnswers] = useState(new Array(14))
  // const [user, setUser] = useState({ name: "", email: "", answers: [], score: 0 })



  // const handleSubmit = () => {
  //   let score = 0
  //   questions.forEach((element, i) => {
  //     element.alternatives.forEach((option, i) => {
  //       if (i === answers[i] && option.isCorrect) {
  //         score++
  //       }
  //     })
  //   })
  //   setUser({ ...user, answers, score })
  //   try {
  //     return axios.put("http://localhost:3000/users", { user: { ...user, answers, score } })
  //   } catch (error) {
  //     console.log(error)
  //   }
  

  return (
    <BrowserRouter>
      <nav class="navbar  bg-info text-light">
      <a class="navbar-brand text-light" href="/">Covid19 Quiz</a>
    </nav>
      <div className="container">
        <Switch>

           <Route path='/' exact>
              <Redirect to='/login' />
            </Route>
            <Route path='/login' component={User} exact />
            <Route path='/quiz' component={Question} exact />
            <Route path='/leaderboard' component={ScoreBoard} exact />
        </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
