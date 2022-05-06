<template>
    <div v-show="Visible" class="bg-white shadow rounded">
        <div v-if="!admin" @click="toggle">
            <p class="shadow-sm font-bold">
                {{ question }}
            </p>
            <p v-if="AnswerVisible">
                {{ answer }}
            </p>
        </div>
        <div v-else>
            <div @click="toggle">
                <p class="shadow-sm font-bold">
                    {{ question }}
                </p>
                <p v-if="AnswerVisible">
                    {{ answer }}
                </p>
            </div>

            <div class="flex-initial">
                <p class="text-red-600 text-xl" @click="deleteQuestion">
                    X
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            question: {
                type: String,
                required: true,
            },
            answer: {
                type: String,
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
            FatherSearched: {
                type: Boolean,
                required: true
            },
            admin: {
                type:Boolean,
                default: false
            }
        },
        data() {
            return {
                AnswerVisible: false,
                Visible: true
            }
        },
        methods: {
            toggle() {
                if(!this.keepOpened)
                {
                    this.AnswerVisible = !this.AnswerVisible
                }
            },
            deleteQuestion() {
                console.log("BaseQuestion.deleteQuestion (" + this.question);
                this.$emit('deleteQuestion', this.question);
            }
        },
        created() {
            if(this.keepOpened){
                this.visible = true
            }
        },
        watch: {
            search(newValue) {
                if(!this.FatherSearched && newValue !== '' && !this.answer.toLowerCase().includes(newValue.toLowerCase()) && !this.question.toLowerCase().includes(newValue.toLowerCase()))
                {
                    this.Visible = false;
                }
                else{
                    this.Visible = true;
                    this.$emit('childVisible')
                }
            }
        },
    }
</script>
