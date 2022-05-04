<template>
    <div v-show="Visible" class="outline-none select-text overflow-hidden rounded-3xl border text-center bg-white p-6 w-10/12 shadow-sm">
        <h2 @click="toggle">{{ title }}</h2>
        <div v-show="questionsVisible" class="flex flex-wrap gap-10 items-start text-center">
            <base-question
            :key="question"
            v-for="question in list"
            :question="question"
            :answer="getAnswer(question)"
            :search="search"
            :FatherSearched="FatherSearched"
            @childVisible="childVisible"
            class="outline-none select-text overflow-hidden rounded-3xl border text-center bg-white p-6 shadow-sm w-2/12"
            />
        </div>
    </div>
</template>

<script>
    import BaseQuestion from './BaseQuestion.vue';
    import { mapGetters } from 'vuex'
    export default {
        components: { BaseQuestion },
        props: {
            title: {
                type: String,
                required: true
            },
            list: {
                type: Array,
                required: true,
            },
            keepOpened: {
                type: Boolean,
                required: false,
            },
            search: {
                type: String,
                default: ""
            }
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
                Visible: true,
                questionsVisible: true,
                FatherSearched: false
            }
        },
        methods: {
            childVisible() {
                this.Visible = true;
            },
            toggle() {
                if(!this.keepOpened)
                {
                    this.questionsVisible = !this.questionsVisible
                }
            },
            getAnswer(index) {
            return this.questions.filter(element => element.question === index)[0].answer
            }
        },
        watch: {
            search(newValue) {
                if(newValue !== '' && !this.title.toLowerCase().includes(newValue.toLowerCase()))
                {
                    this.Visible = false;
                    this.FatherSearched = false;
                }
                else{
                    this.Visible = true;
                    this.FatherSearched = true;
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>