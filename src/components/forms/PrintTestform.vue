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
            doc.text("NFC Reader ", 25, 110);
            doc.text(this.$store.state.testNfcReaderInput, 125, 110);
            doc.text("Fingerprint Reader ", 25, 120);
            doc.text(this.$store.state.testFingerprintReaderInput, 125, 120);
            doc.text("RGB Led ", 25, 130);
            doc.text(this.$store.state.testRGBLedInput, 125, 130);
            doc.text("Pan Intellipower ", 25, 140);
            doc.text(this.$store.state.testRGBLedInput, 125, 140);
            doc.text("Wcd Master/Slave ", 25, 150);
            doc.text(this.$store.state.testWcdInput, 125, 150);
            doc.text("Ventilator ", 25, 160);
            doc.text(this.$store.state.testVentilatorInput, 125, 160);
            doc.text("Netwerk ", 25, 170);
            doc.text(this.$store.state.testNetwerkInput, 125, 170);
            doc.text("Opmerking", 25, 195);
            doc.text(this.$store.state.remarkInput, 25, 205);
            // draw some rectangles
            doc.rect(20,63,doc.internal.pageSize.width - 40,113);
            doc.rect(20, 188, doc.internal.pageSize.width - 40, 50);
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