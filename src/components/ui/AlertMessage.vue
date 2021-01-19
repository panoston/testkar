<template>
    <div>
        <base-message></base-message>
        <base-button @click="alertClose">Close</base-button>
    </div>
</template>

<script>
import BaseMessage from './BaseMessage.vue';

export default {
    components: {
        BaseMessage,
    },
    methods: {
        alertClose() {
            this.$store.commit('toggleShowAlert');
            this.$store.commit('clearTestedDevice');
            console.log(this.$store.state.showAlert);
        }
    },
}
</script>

<style scoped>
div {
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: 2rem auto;
    max-width: 40rem;
}
</style>