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
            questions: [0,1]
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
    addCategory(state, text) {
      state.categories.push({
        text,
        done: false
      })
    },
    removeCategory(state, { todo }) {
      state.categories.splice(state.categories.indexOf(todo), 1)
    },
    addQuestion(state, text) {
      state.questions.push({
        text,
        done: false
      })
    },
    removeQuestion(state, { todo }) {
      state.questions.splice(state.questions.indexOf(todo), 1)
    },
  }