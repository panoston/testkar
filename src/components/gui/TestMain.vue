<template>
    <base-card>
        <print-testform v-if="isButtonPrintPressed"></print-testform>
        <test-form v-else></test-form>
    </base-card>
</template>

<script>
import TestForm from '../forms/TestForm.vue';
import PrintTestform from '../forms/PrintTestform.vue';

export default {
    components: {
        TestForm,
        PrintTestform,
    },
    data() {
        return {
            inputIsInvalid: false,
            // isbuttonPrintPressed: false,
        };
    },
    computed: {
        isButtonPrintPressed() {
            return this.$store.getters.getButtonPrintStatus;
        }
    }
}
</script>

<style scoped>

</style>