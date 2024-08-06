export class UI {
  constructor() {}

  /**
   *
   * @param {Array<string>} answers array de strings con las respuestas posibles para una pregunta
   * @param {HTMLElement} injectableElement elemento HTML donde se inyectaran las respuestas
   * @param {CallBack} buttonClickHandler Callback que se ejecutará al hacer click en una respuesta, returna un Objeto que contiene la respuesta seleccionada
   */

  generateAnswerOptions(answers, injectableElement, buttonClickHandler) {
    const ansContainer = document.getElementById(injectableElement)
    ansContainer.innerHTML = ""

    answers.map((ansText) => {
      const ansBtn = document.createElement("button")
      ansBtn.setAttribute("id", "answers__button")
      ansBtn.textContent = ansText

      ansBtn.addEventListener("click", () => {
        buttonClickHandler({ answer: ansText })
      })

      ansContainer.appendChild(ansBtn)
    })
  }

  /**
   *
   * @param {string} question Cadena que se introducirá en el HTML
   * @param {HTMLElement} injectableElement elemento HTML donde se inyectara la pregunta
   */

  injectQuestion(question, injectableElement) {
    const questionContainer = document.getElementById(injectableElement)
    questionContainer.textContent = question
  }

  setActualQuestion(indexQuestion, totalQuestions) {
    const questionCounter = document.getElementById("question__counter")
    questionCounter.textContent = `${indexQuestion + 1} / ${totalQuestions}`
  }

  /**
   *
   * @param {HTMLElement} template Es el HTML que se va introducir dentro del contenedor del quiz
   * @param {HTMLElement} injectableElement elemento HTML donde se inyectara la pregunta
   */

  finishQuiz(template, injectableElement) {
    const questionContainer = document.getElementById(injectableElement)
    questionContainer.innerHTML = template ? template : "Fin del Quiz"
  }
}
