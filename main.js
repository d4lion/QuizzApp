import { preguntas } from "./data/questions.js"
import { Quiz } from "./models/Quiz.js"
import { UI } from "./models/UI.js"

const quiz = new Quiz(preguntas) // <--- Podemos reutilizar estas clases
const ui = new UI() // <--- Podemos reutilizar estas clases

const respuestas = []

function startQuiz(indexQuestion = 0) {
  if (indexQuestion >= quiz.quiz_questions.length) {
    ui.finishQuiz("", "quiz")
  } else {
    // Se encarga de inyectar la pregunta en el HTML
    ui.injectQuestion(quiz.getQuestion(indexQuestion), "question")

    // Nos ayuda a la hora de mostrar en que pregunta estamos
    ui.setActualQuestion(indexQuestion, quiz.quiz_questions.length)

    // Se encarga de generar los botones basados en un array que se le pase como argumento
    ui.generateAnswerOptions(quiz.getAnswers(indexQuestion), "answers", (e) => {
      respuestas.push({ indexQuestion: e.answer })
      startQuiz(indexQuestion + 1)
    })
  }
}

startQuiz()
