export const state = () => ({
  categories: [
    {
      title: "Frequently Asked Questions",
      questions: ["question 1", "question 3", "question 4"],
    },
    {
      title: "other category",
      questions: ["question 1", "question 2"],
    },
  ],
  questions: [
    {
      question: "question 1",
      answer: "answer 1",
    },
    {
      question: "question 2",
      answer: "answer 2",
    },
    {
      question: "question 3",
      answer: "answer 3",
    },
    {
      question: "question 4",
      answer: "answer 4",
    },
  ],
});

export const getters = {
  categories: (state) => {
    return state.categories;
  },
  questions: (state) => {
    return state.questions;
  },
};

export const mutations = {
  addCategory(state, name) {
    state.categories.push({
      name,
      questions: [],
    });
  },
  removeCategory(state, { index }) {
    state.categories.splice(state.categories.indexOf(index), 1);
  },
  addQuestion(state, { question, answer }) {
    state.questions.push({
      question,
      answer,
    });
  },
  removeQuestion(state, { name }) {
    state.questions.splice(state.questions.indexOf(name), 1);
  },
  addQuestionToCategory(state, { index, name }) {
    state.categories[index].questions.push({
      name,
    });
  },
  removeQuestionFromCategory(state, { category, question }) {
    /* console.log(state.categories);
      const index = this.categories.findIndex((el) => el.title === category);
      console.log(index);
      state.categories[index].questions.splice(state.categories[index].questions.indexOf(question), 1);
      console.log(state.categories); */
    let index;
    for (let x = 0; x < state.categories.length; x++) {
      if (state.categories[x].title === category) {
		  index = x;
      }
    }
	if(index !== null) {
		state.categories[index].questions.splice(state.categories[index].questions.indexOf(question), 1);
	}
  },
};
