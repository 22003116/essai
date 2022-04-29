export const state = () => ({
    categories: [
        {
            name: 'Frequently Asked Questions',
            questions: [
                'question 1',
                'question 3',
                'question 4'
            ]
        },
        {
            name: 'other category',
            questions: [
                'question 1',
                'question 2'
            ]
        }
    ],
    questions: [
        {
            question:'question 1',
            answer: 'answer 1'
        },
        {
            question:'question 2',
            answer: 'answer 2'
        },
        {
            question:'question 3',
            answer: 'answer 3'
        },
        {
            question:'question 4',
            answer: 'answer 4'
        },
    ]
  })
  
  export const mutations = {
    addCategory(state, name) {
      state.categories.push({
        name,
        questions: []
      })
    },
    removeCategory(state, { index }) {
      state.categories.splice(state.categories.indexOf(index), 1)
    },
    addQuestion(state, { question, answer }) {
      state.questions.push({
        question,
        answer
      })
    },
    removeQuestion(state, { name }) {
      state.questions.splice(state.questions.indexOf(name), 1)
    },
    addQuestionToCategory(state, { index, name }) {
        state.categories[index].questions.push({
            name
          })
    },
    removeQuestionFromCategory(state, { index, name }) {
      state.categories[index].questions.splice(state.categories[index].questions.indexOf(name), 1)
    }
  }