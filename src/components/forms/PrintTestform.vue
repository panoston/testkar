<template>
    <div>
       <h1>Print Testform</h1>
       <form @submit.prevent="submitData">
            <div class="form-control"><base-button @click="submitPrintData">Print Rapport</base-button></div>
            <div class="form-control"><base-button @click="submitBack">Terug</base-button></div>
       </form>
    </div>
</template>

<script>
import {jsPDF} from 'jspdf';


export default {
    data() {
        return {

        };
    },
    provide() {
        return {
            PrintTestform: this.PrintTestform,
        };
    },
    methods: {
        submitPrintData() {
            this.createPDF();
        },
        createPDF() {
            let pdfName = 'test';
            var doc = new jsPDF();
            // doc.addImage('../../assets/PO_logo.png','PNG', 10, 10);
            doc.text("Hallo Wereld", 25, 30);
            doc.text("Pan Oston Kiosk testresultaten", 25, 25);
            doc.save(pdfName + '.pdf');
        },
        submitBack() {
            this.$store.commit('togglePrintformButtonState', false);
        },
    },
}
</script>

<style scoped>

</style>