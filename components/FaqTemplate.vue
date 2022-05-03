<template>
  <div class="faq-section">
    <!-- <template>
      <div data-aos="zoom-in">
        {{ legend }}
      </div>
    </template> -->

    <template>
      <base-category :key="list.title" v-for="list in categories" :title="list.title" :list="list.questions">
      </base-category>
    </template>
  </div>
</template>

<script>
  import BaseCategory from './Base/BaseCategory.vue';
  import { mapGetters } from 'vuex'
  export default {
    components: { BaseCategory },
    computed: {
      ...mapGetters([
        'categories',
      ])
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