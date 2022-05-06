<template>
  <div class="faq-section">
    <input type="text" class="bg-gray-300" v-model="search">

    <template>
      <base-category 
        :key="list.title" 
        v-for="list in categories" 
        :admin="admin"
        :title="list.title" 
        :list="list.questions" 
        :search="search"/>
    </template>
  </div>
</template>

<script>
  import BaseCategory from './Base/BaseCategory.vue';
  import { mapGetters } from 'vuex'
  export default {
    props: {
      admin: {
        type:Boolean,
        default: false
      }
    },
    components: { BaseCategory },
    computed: {
      ...mapGetters([
        'categories',
      ])
    },
    data() {
      return {
        search: "",
        legend: "We are here to support you"
      };
    },
  };
</script>