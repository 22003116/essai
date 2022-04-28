<template>
    <div @click="toggle" class="bg-white shadow rounded">
        <p class="shadow-sm font-bold">
            {{ question }}
        </p>
        <p v-if="visible">
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
        },
        data() {
            return {
                visible: false
            }
        },
        methods: {
            toggle() {
                if(!this.keepOpened)
                {
                    this.visible = !this.visible
                }
            }
        },
        created() {
            if(this.keepOpened){
                this.visible = true
            }
        }
    }
</script>
