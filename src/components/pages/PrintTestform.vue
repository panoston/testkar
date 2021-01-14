<template>
    
</template>

<script>
export default {
    data() {
        return {
            serial: "",
            checkMonitor: false,
            checkPrinter: false,
            checkScanner: false,
            checkWebcam: false
        };
    },
    provide() {
        return {
            PrintTestform: this.PrintTestform,
        };
    },
    methods: {
        PrintTestForm() {

        }
    },
}
</script>

<style scoped>

</style>