<template>
    <div class="outline-none select-text overflow-hidden rounded-md border text-center bg-white p-6 shadow-sm">
        <h2 @click="toggle">{{ list.title }}</h2>
        <div v-show="visible" class="flex flex-wrap gap-10 items-start text-center">
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

<script>
    import BaseQuestion from './BaseQuestion.vue';
    import { mapGetters } from 'vuex'
    export default {
        props: {
            list: {
                type: Array,
                required: true,
            },
            keepOpened: {
                type: Boolean,
                required: false,
            },
        },
        computed: {
            typesOfQuestions() {
            return this.$store.state.categories
            },
            ...mapGetters([
            'questions'
            ])
        },
        data() {
            return {
                visible: true
            }
        },
        methods: {
            toggle() {
                if(!this.keepOpened)
                {
                    this.visible = !this.visible
                }
            },
            getAnswer(index) {
            return this.questions.filter(element => element.question === index)[0].answer
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>