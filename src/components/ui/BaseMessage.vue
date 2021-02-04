<template>
    <div>
        {{ alertMessage }}
        <p><base-button @click="printTestPage" v-if="showButtonTestPrint">Print Testpage</base-button>
        <label for="scanned" v-if="showInputScanner">Scanner input:</label><input type="text" name="scanned" id="scanned" v-if="showInputScanner">
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
                this.alertMessage = "Er wordt nu een bon gegenereerd. Deze moet geprint worden op de aangesloten bonprinter.Wanneer deze bon geprint is, bevestig dit dan met JA, anders klik je op nee. Wanneer het apparaat niet van toepassing is, klik dan op Niet van toepassing.";
            }
            else if(deviceTested === 'scanner') {
                this.alertMessage = "Scan een barcode en kijk of dit in de textbox wordt weergegeven.Klik op JA wanneer er text in de textbox is gescand.Klik op Nee wanneer dit niet het geval is. Wanneer het apparaat niet van toepassing is, klik dan op Niet van toepassing.";
            }
            else if(deviceTested === 'webcam') {
                this.alertMessage = "Wordt het beeld van de webcam op het scherm weergegeven? Klik op JA Wanneer het beeld van de webcam wordt weergegeven. Klik op NEE wanneer dit niet het geval is. Wanneer het apparaat niet van toepassing is, klik dan op Niet van toepassing.";
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