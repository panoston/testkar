<template>
    <div>
        <div v-html="alertMessage"></div>
        <!-- <span style="white-space: pre-line">{{ alertMessage }}</span> -->
        <p><base-button @click="printTestPage" v-if="showButtonTestPrint">Print Testpage</base-button>
        <label for="scanned" v-if="showInputScanner">Scanner input: </label><input type="text" name="scanned" id="scanned" v-if="showInputScanner">
        <base-button @click="openWebCamTestPage" v-if="showButtonWebcamTest">Open Webcam Test Page</base-button>
        </p>
    </div>
</template>

<script>
import {jsPDF} from 'jspdf';
export default {

    data() {
        return {
            alertMessage: '',
            deviceTested: '',
            showButtonTestPrint: false,
            showInputScanner: false,
            showButtonWebcamTest: false,
        }
    },
    methods: {
        setAlertMessage() {
            console.log('store.showalert ' + this.$store.state.showAlert);
            const deviceTested = this.$store.getters.getTestedDevice;
            console.log(deviceTested);

            if(deviceTested === 'monitor') {
                this.alertMessage = "Wordt de monitor aangestuurd en is er iets zichtbaar op het scherm?";
                console.log(this.alertMessage);
            }
            else if(deviceTested === 'printer') {
                this.alertMessage = "Er wordt nu een bon gegenereerd. Klik op de knop <b>Print Testpage</b>.<br>Deze moet geprint worden op de aangesloten bonprinter.<br>Wanneer deze bon geprint is, bevestig dit dan met <b>JA</b>, anders klik je op <b>NEE</b>.<br>Wanneer het apparaat niet van toepassing is, klik dan op <b>Niet van toepassing</b>.";
            }
            else if(deviceTested === 'scanner') {
                this.alertMessage = "klik in het textvak <b>Scanner input</b>. Scan een barcode en kijk of dit in de textbox wordt weergegeven.<br>Klik op <b>JA</b> wanneer er text in de textbox is gescand.<br>Klik op <b>NEE</b> wanneer dit niet het geval is.<br>Wanneer het apparaat niet van toepassing is, klik dan op <b>Niet van toepassing</b>.";
            }
            else if(deviceTested === 'webcam') {
                this.alertMessage = "Klik op de knop <b>Open Webcam Test Page</b>. Er wordt een nieuwe tab geopend. Test op deze tab de webcam.<br>Klik op <b>JA</b> Wanneer het beeld van de webcam wordt weergegeven.<br>Klik op <b>NEE</b> wanneer dit niet het geval is.<br>Wanneer het apparaat niet van toepassing is, klik dan op <b>Niet van toepassing</b>.";
            }
            else if(deviceTested === 'nfcreader') {
                this.alertMessage = "Test met een nfc kaart of de lamp van de NFC reader gaat branden.<br>Klik op <b>JA</b> wanneer het lampje op de NFC reader gaat branden.<br>Klik op <b>NEE</b> wanneer dit niet het geval is.<br>Wanneer het apparaat niet van toepassing is, klik dan op <b>Niet van toepassing</b>.";
            }
            else if(deviceTested === 'rgbled') {
                this.alertMessage = "Test of de RGB led gaat branden.<br>Klik op <b>JA</b> wanneer de RGB led gaat branden.<br>Klik op <b>NEE</b> wanneer dit niet het geval is.<br>Wanneer het apparaat niet van toepassing is, klik dan op <b>Niet van toepassing</b>.";
            }
            else if(deviceTested === 'fingerprintreader') {
                this.alertMessage = "Test of de fingerprint reader werkt.<br>Klik op <b>JA</b> wanneer deze functioneert.<br>Klik op <b>NEE</b> wanneer dit niet het geval is.<br>Wanneer het apparaat niet van toepassing is, klik dan op <b>Niet van toepassing</b>.";
            }
            else if(deviceTested === 'panpower') {
                this.alertMessage = "Test of de Pan Intellipower naar behoren werkt.<br>Klik op <b>JA</b> wanneer deze functioneert.<br>Klik op <b>NEE</b> wanneer dit niet het geval is.<br>Wanneer het apparaat niet van toepassing is, klik dan op <b>Niet van toepassing</b>.";
            }
            else if(deviceTested === 'wcd') {
                this.alertMessage = "Test of de master / slave function op de WCD naar behoren werkt.<br>Klik op <b>JA</b> wanneer deze functioneert.<br>Klik op <b>NEE</b> wanneer dit niet het geval is.<br>Wanneer het apparaat niet van toepassing is, klik dan op <b>Niet van toepassing</b>.";
            }
            else if(deviceTested === 'ventilator') {
                this.alertMessage = "Test of de ventilator naar behoren werkt.<br>Klik op <b>JA</b> wanneer deze functioneert.<br>Klik op <b>NEE</b> wanneer dit niet het geval is.<br>Wanneer het apparaat niet van toepassing is, klik dan op <b>Niet van toepassing</b>.";
            }
            else if(deviceTested === 'netwerk') {
                this.alertMessage = "Test of het netwerk naar behoren werkt.<br>Klik op <b>JA</b> wanneer deze functioneert.<br>Klik op <b>NEE</b> wanneer dit niet het geval is.<br>Wanneer het apparaat niet van toepassing is, klik dan op <b>Niet van toepassing</b>.";
            }
        },
        getShowButtonTestPrint() {
            const showButtonTestPrint = this.$store.getters.getShowBtnPrintTestPage;
            console.log('ShowButtonTestPrint status: ' + showButtonTestPrint);
            if(showButtonTestPrint === true) {
                this.showButtonTestPrint = true;
            }
            else {
                this.showButtonTestPrint = false;
            }
        },
        getShowInputScanner() {
            const showInputScanner = this.$store.getters.getShowInputScanner;
            
            if(showInputScanner === true) {
                this.showInputScanner = true;
            }
            else {
                this.showInputScanner = false;
            }
        },
        getShowBtnWebcamTest() {
           const showButtonWebcamTest = this.$store.getters.getShowButtonWebcamTest;
            
            if(showButtonWebcamTest === true) {
                this.showButtonWebcamTest = true;
            }
            else {
                this.showButtonWebcamTest = false;
            }
        },
        
        openWebCamTestPage() {
            window.open("https://nl.webcamtests.com/", "_blank");
        },
        printTestPage() {
            let pdfName = 'test bon';
            var doc = new jsPDF('p', 'mm', [70,210]);
            var lmargin = 5;
            var rmargin = 5;
            var pdfInMM = 70
            //doc.addImage('../../assets/PO_logo.png','PNG', 10, 10);
            doc.text("Pan Oston testbon", 5, 25);
            var paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar rhoncus odio. Nunc placerat ex lorem. Praesent dapibus ex quis consequat pharetra. Ut vitae rutrum mauris, at facilisis felis. Integer eget faucibus turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer gravida elit id dolor sagittis feugiat. Quisque euismod ex et pellentesque scelerisque. Phasellus rhoncus lacus a est convallis, vel mollis eros laoreet. Praesent viverra augue felis, nec condimentum odio iaculis vitae. Fusce porta velit eget ultrices facilisis. Fusce tristique malesuada tempor. Ut tristique venenatis nisi, vel finibus mauris ullamcorper ut. Proin faucibus tellus id sodales elementum. Donec elit justo, euismod sagittis pulvinar et, vehicula at lorem";

            var lines = doc.splitTextToSize(paragraph, (pdfInMM-lmargin-rmargin));
            doc.text(lmargin, 40, lines)
            doc.save(pdfName + '.pdf');
        }
    },
    mounted() {
        this.setAlertMessage();
        this.getShowButtonTestPrint();
        this.getShowInputScanner();
        this.getShowBtnWebcamTest();
        console.log('state of showalert when componend is mounted ' + this.$store.state.showAlert)
    }

}
</script>

<style scoped>
input {
  /* display: block; */
  width: 50%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #00A0E0;
  position: relative;
  border-radius: 4px;
}
</style>