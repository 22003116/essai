<template>
    <div v-show="Visible" @click="toggle" class="bg-white shadow rounded">
        <p class="shadow-sm font-bold">
            {{ question }}
        </p>
        <p v-if="AnswerVisible">
            {{ answer }}
        </p>
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
