<template>
  <div class="faq-section">
    <template>
      <div data-aos="zoom-in">
        {{ legend }}

        <input type="button" name="ask questions"/>
      </div>
    </template>

    <template>
      <div :key="questions.title" v-for="questions in typesOfQuestions">
        <base-question
          :key="question.title"
          v-for="question in questions"
          :question="question.title"
          :answer="question.details"
        >
        </base-question>
      </div>
    </template>
  </div>
</template>

<script>
import BaseQuestion from '../components/BaseQuestion.vue';
export default {
  components: { BaseQuestion },
  data() {
    return {
      legend: "We are here to support you",
      typesOfQuestions: {
        title: "Frequently Asked Questions",
        questions: {
          question1: {
            details:
              "Yes, once logged go to your settings. Under “Subscription” you can choose to upgrade or cancel your plan at any time.",
            title: "Can I upgrade or cancel my plan later?",
          },

          question2: {
            details:
              "Yes, you can easily download leads into an Excel .csv file, or you can export leads directly to your CRM.",
            title: "Can I export my leads to Excel?",
          },

          question3: {
            details: "Yes, and we offer a 25% discount for paying annually.",
            title: "Do you have annual plans?",
          },

          question4: {
            details: "Yes, we have an API.",
            title: "Do you have an API?",
          },
        },
      },
    };
  },
};
</script>

<style scoped>

</style>
