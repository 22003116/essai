<template>
  <div class="faq-section">
    <!-- <template>
      <div data-aos="zoom-in">
        {{ legend }}
      </div>
    </template> -->

    <template>
      <div :key="list.title" v-for="list in categories">
        {{ list.title }}
        <div class="flex flex-wrap gap-10 items-start text-center">
            <base-question
            :key="question"
            v-for="question in list.questions"
            :question="question"
            :answer="getAnswer(question)"
            class="outline-none select-text overflow-hidden rounded-md border text-center bg-white p-6 shadow-sm w-72"
            />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import BaseQuestion from './Base/BaseQuestion.vue';
import { mapGetters } from 'vuex'
export default {
  components: { BaseQuestion },
  computed: {
    typesOfQuestions() {
      return this.$store.state.categories
    },
    ...mapGetters([
      'categories',
      'questions'
    ])
  },
  methods: {
    getAnswer(index) {
      return this.questions.filter(element => element.question === index)[0].answer
    }
  },
  data() {
    return {
      legend: "We are here to support you",
      /* typesOfQuestions: 
      [
        {
          title: "Frequently Asked Questions",
          questions: [
             {
              details: "answer 1",
              title: "question 1",
            },

            {
              details: "answer 2",
              title: "Cquestion 2",
            },

            {
              details: "answer 3",
              title: "question 3",
            },

            {
              details: "answer 4",
              title: "question 4",
            },
          ],
        },
      ] */
    };
  },
};
</script>