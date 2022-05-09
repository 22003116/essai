<template>
    <div v-show="Visible" class="outline-none select-text overflow-hidden rounded-3xl border text-center bg-white p-6 w-10/12 shadow-sm">
        <h2 @click="toggle" class="text-2xl font-bold">{{ title }}</h2>
        <div v-show="questionsVisible" class="flex flex-wrap gap-10 items-start text-center">
            <base-question
            :key="question"
            v-for="question in list"
            :question="question"
            :answer="getAnswer(question)"
            :search="search"
            :FatherSearched="FatherSearched"
            :admin="admin"
            @childVisible="childVisible"
            @deleteQuestion="deleteQuestion"
            class="outline-none select-text overflow-hidden rounded-3xl border text-center bg-white p-6 shadow-sm w-2/12"
            />
            <div v-if="admin" @click="addQuestion">
                <p class="text-green-600 text-3xl">+</p>
            </div>
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
            },
            admin: {
                type:Boolean,
                default: false
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
            deleteQuestion(question) {
                console.log("BaseCategory.deleteQuestion (" + this.title + " " + question);
                //console.log(this.list.indexOf(question))
                this.$emit('removeQuestionFromCategory',this.title,question);
                //this.list.splice(this.list.indexOf(question),1);
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