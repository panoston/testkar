<template>
    <div>
        <base-button @click="submitPrintData">Print Testbon</base-button>
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
            var doc = new jsPDF('p', 'mm', [297,210]);
            //doc.addImage('../../assets/PO_logo.png','PNG', 10, 10);
            doc.text("Pan Oston Kiosk testresultaten", 25, 25);
            doc.text("Serienummer kiosk: " + this.$store.state.serialInput, 25, 40);
            doc.setFont(undefined,'bold');
            doc.text("Apparaat", 25, 60);
            doc.text("Resultaat test", 125, 60);
            doc.setFont(undefined,'normal');
            doc.text("Monitor ", 25, 70);
            doc.text(this.$store.state.testMonitorInput, 125, 70);
            doc.text("Printer ", 25, 80);
            doc.text(this.$store.state.testPrinterInput, 125, 80);
            doc.text("Scanner ", 25, 90);
            doc.text(this.$store.state.testScannerInput, 125, 90);
            doc.text("Webcam ", 25, 100);
            doc.text(this.$store.state.testWebCamInput, 125, 100);
            doc.text("Opmerking", 25, 125);
            doc.text(this.$store.state.remarkInput, 25, 135);
            // draw some rectangles
            doc.rect(20,53,doc.internal.pageSize.width - 40,53);
            doc.rect(20, 118, doc.internal.pageSize.width - 40, 50);
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