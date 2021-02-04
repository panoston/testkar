<template>
<div>
    <base-card>
        <print-testform v-if="buttonPrintFormPressed"></print-testform>
        <test-form v-else></test-form>
    </base-card>
</div>
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
            printButtonPressed: false,
        };
    },
    computed: {
        buttonPrintFormPressed() {
            return this.$store.state.buttonPrintFormPressed;
        }

    },
}
</script>

<style scoped>

</style>