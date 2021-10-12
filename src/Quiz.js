import React from 'react'
import QuizQuestions from './QuizQuestion.js'

let quizData = require('./quiz_data.json')
console.log(quizData.quiz_questions[0]["instruction_text"])

class Quiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = { quiz_position: 1 }
  }
  render() {
    return (
      <QuizQuestions quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]} />
    )
  }

}

export default Quiz