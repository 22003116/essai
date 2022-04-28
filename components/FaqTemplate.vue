<template>
  <div class="faq-section">
    <!-- <template>
      <div data-aos="zoom-in">
        {{ legend }}
      </div>
    </template> -->

    <template>
      <div :key="list.title" v-for="list in typesOfQuestions">
        {{ list.title }}
        <div class="flex flex-wrap gap-10 items-start text-center">
            <base-question
            :key="question.title"
            v-for="question in list.questions"
            :question="question.title"
            :answer="question.details"
            class="outline-none select-text overflow-hidden rounded-md border text-center bg-white p-6 shadow-sm w-72"
            />
        </div>
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
      typesOfQuestions: 
      [
        {
          title: "Frequently Asked Questions",
          questions: [
             {
              details:
                "Yes, once logged go to your settings. Under “Subscription” you can choose to upgrade or cancel your plan at any time.",
              title: "Can I upgrade or cancel my plan later?",
            },

            {
              details:
                "Yes, you can easily download leads into an Excel .csv file, or you can export leads directly to your CRM.",
              title: "Can I export my leads to Excel?",
            },

            {
              details: "Yes, and we offer a 25% discount for paying annually.",
              title: "Do you have annual plans?",
            },

            {
              details: "Yes, we have an API.",
              title: "Do you have an API?",
            },
          ],
        },
      ]
    };
  },
};
</script>