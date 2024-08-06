export class Quiz {
  user_answers = {}

  constructor(quiz_questions) {
    this.quiz_questions = quiz_questions
  }

  /**
   *
   * @param {number} index Pregunta de la que se quiere obtener el texto
   * @returns
   */

  getQuestion(index) {
    return this.quiz_questions[index].question
  }

  /**
   *
   * @param {number} index Pregunta de la que se quiere obtener las respuestas
   * @returns
   */

  getAnswers(index) {
    return this.quiz_questions[index].answers
  }
}
