<template>
    <base-card>
        <print-testform v-if="buttonPrintFormPressed"></print-testform>
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
            printButtonPressed: false,
            // isbuttonPrintPressed: false,
        };
    },
    computed: {
        buttonPrintFormPressed() {
            return this.$store.state.buttonPrintFormPressed;
        }
        // getButtonPrintStatus() {
        //     // this.printButtonPressed = !this.printButtonPressed;
        //     // return this.$store.getters.getButtonPrintStatus;
        //     console.log(this.$store.getters.getButtonPrintStatus);
        //     return this.$store.getters.getButtonPrintStatus;
        //     // console.log(this.$store.getters.getButtonPrintStatus);
        // }
    },
    // watch: {
    //     isButtonPrintPressed() {
    //         this.printButtonPressed = !this.printButtonPressed;
    //         console.log(this.printButtonPressed);
    //     }
    // }
}
</script>

<style scoped>

</style>