<template>
    <alert-message v-if="showAlert"></alert-message>
    <div>
        <h2>Test Formulier</h2>
        <form @submit.prevent="submitData">
            <div class="form-control">
                <label for="serial"><span>Serienummer:</span>
                <input type="text" name="serial" id="serial" ref="serialInput">
                </label>
            </div>
            <div class="form-control">
                <label for="testMonitor"><span>Test monitor:</span>
                <base-button id="testMonitor" @click="testDeviceButton('monitor')" v-if="showButtonMonitor" class="basebutton">Test</base-button>
                <img class="result" src="../../assets/green-check.png" v-if="showMonitorResultOk">
                <img class="result" src="../../assets/red-x.png" v-if="showMonitorResultNOk">
                <img class="result" src="../../assets/na.png" v-if="showMonitorResultNA">
                </label>
            </div>
            <div class="formcontrol">
                <label for="testPrinter"><span>Test Printer:</span>
                <base-button id="testPrinter" @click="testDeviceButton('printer')" v-if="showButtonPrinter" class="basebutton">Test</base-button>
                <img class="result" src="../../assets/green-check.png" v-if="showPrinterResultOk">
                <img class="result" src="../../assets/red-x.png" v-if="showPrinterResultNOk">
                <img class="result" src="../../assets/na.png" v-if="showPrinterResultNA">
                </label>
            </div>
            <div class="formcontrol">
                <label for="testScanner"><span>Test Scanner:</span>
                <base-button id="testScanner" @click="testDeviceButton('scanner')" v-if="showButtonScanner" class="basebutton">Test</base-button>
                <img class="result" src="../../assets/green-check.png" v-if="showScannerResultOk">
                <img class="result" src="../../assets/red-x.png" v-if="showScannerResultNOk">
                <img class="result" src="../../assets/na.png" v-if="showScannerResultNA">
                </label>
            </div>
            <div class="form-control">
                <label for="testWebcam"><span>Test Webcam:</span>
                <base-button id="testWebcam" @click="testDeviceButton('webcam')" v-if="showButtonWebCam" class="basebutton">Test</base-button>
                <img class="result" src="../../assets/green-check.png" v-if="showWebcamResultOk">
                <img class="result" src="../../assets/red-x.png" v-if="showWebcamResultNOk">
                <img class="result" src="../../assets/na.png" v-if="showWebcamResultNA">
                </label>
            </div>
            <div class="form-control">
                <label for="testNfcReader"><span>Test NFC Reader:</span>
                <base-button id="testNfcReader" @click="testDeviceButton('nfcreader')" v-if="showButtonNfcReader" class="basebutton">Test</base-button>
                <img class="result" src="../../assets/green-check.png" v-if="showNfcReaderResultOk">
                <img class="result" src="../../assets/red-x.png" v-if="showNfcReaderResultNOk">
                <img class="result" src="../../assets/na.png" v-if="showNfcReaderResultNA">
                </label>
            </div>
            <div class="form-control">
                <label for="testFingerprintReader"><span>Test Fingerprint Reader:</span>
                <base-button id="testFingerprintReader" @click="testDeviceButton('fingerprintreader')" v-if="showButtonFingerprintReader" class="basebutton">Test</base-button>
                <img class="result" src="../../assets/green-check.png" v-if="showFingerprintReaderResultOk">
                <img class="result" src="../../assets/red-x.png" v-if="showFingerprintReaderResultNOk">
                <img class="result" src="../../assets/na.png" v-if="showFingerprintReaderResultNA">
                </label>
            </div>
            <div class="form-control">
                <label for="testRGBLed"><span>Test RGB Led:</span>
                <base-button id="testRGBLed" @click="testDeviceButton('rgbled')" v-if="showButtonRGBLed" class="basebutton">Test</base-button>
                <img class="result" src="../../assets/green-check.png" v-if="showRGBLedResultOk">
                <img class="result" src="../../assets/red-x.png" v-if="showRGBLedResultNOk">
                <img class="result" src="../../assets/na.png" v-if="showRGBLedResultNA">
                </label>
            </div>
            <div class="form-control">
                <label for="testPanPower"><span>Pan Intellipower:</span>
                <base-button id="testPanPower" @click="testDeviceButton('panpower')" v-if="showButtonPanPower" class="basebutton">Test</base-button>
                <img class="result" src="../../assets/green-check.png" v-if="showPanPowerResultOk">
                <img class="result" src="../../assets/red-x.png" v-if="showPanPowerResultNOk">
                <img class="result" src="../../assets/na.png" v-if="showPanPowerResultNA">
                </label>
            </div>
            <div class="form-control">
                <label for="testWCDMasterSlave"><span>WCD Master / Slave:</span>
                <base-button id="testWCDMasterSlave" @click="testDeviceButton('wcd')" v-if="showButtonWcd" class="basebutton">Test</base-button>
                <img class="result" src="../../assets/green-check.png" v-if="showWcdResultOk">
                <img class="result" src="../../assets/red-x.png" v-if="showWcdResultNOk">
                <img class="result" src="../../assets/na.png" v-if="showWcdResultNA">
                </label>
            </div>
            <div class="form-control">
                <label for="testVentilator"><span>Ventilator:</span>
                <base-button id="testVentilator" @click="testDeviceButton('ventilator')" v-if="showButtonVentilator" class="basebutton">Test</base-button>
                <img class="result" src="../../assets/green-check.png" v-if="showVentilatorResultOk">
                <img class="result" src="../../assets/red-x.png" v-if="showVentilatorResultNOk">
                <img class="result" src="../../assets/na.png" v-if="showVentilatorResultNA">
                </label>
            </div>
            <div class="form-control">
                <label for="testNetwerk"><span>Netwerk:</span>
                <base-button id="testNetwerk" @click="testDeviceButton('netwerk')" v-if="showButtonNetwerk" class="basebutton">Test</base-button>
                <img class="result" src="../../assets/green-check.png" v-if="showNetwerkResultOk">
                <img class="result" src="../../assets/red-x.png" v-if="showNetwerkResultNOk">
                <img class="result" src="../../assets/na.png" v-if="showNetwerkResultNA">
                </label>
            </div>
            <div class="form-control">
                <label for="remark"><span>Opmerking:</span>
                <textarea name="remark" id="remark" ref="remarkInput"></textarea>
                
                </label>
            </div>
            <div class="form-control"><base-button @click="submitData">Print Rapport</base-button></div>

        </form>
    </div>
</template>
<script>
import alertMessage from '../ui/AlertMessage.vue';

export default {
    components: {
        alertMessage,
    },
    data() {
        return {

        }
    },
    computed: {
        showAlert() {
            const showAlertFromStore = this.$store.state.showAlert;
            return showAlertFromStore;
        },
        showButtonMonitor() {
            const testedDevice = this.$store.state.testedDevice;
            const testMonitorInput = this.$store.state.testMonitorInput;

            if (testedDevice === 'monitor' || testMonitorInput !== '') {
                return false;
            }
            else {
                return true;
            }
        },
        showButtonPrinter() {
            const testedDevice = this.$store.state.testedDevice;
            const testPrinterInput = this.$store.state.testPrinterInput;

            if (testedDevice === 'printer' || testPrinterInput !== '') {
                return false;
            }
            else {
                return true;
            }
        },
        showButtonScanner() {
            const testedDevice = this.$store.state.testedDevice;
            const testScannerInput = this.$store.state.testScannerInput;

            if (testedDevice === 'scanner' || testScannerInput !== '') {
                return false;
            }
            else {
                return true;
            }
        },
        showButtonWebCam() {
            const testedDevice = this.$store.state.testedDevice;
            const testWebCamInput = this.$store.state.testWebCamInput;

            if (testedDevice === 'webcam' || testWebCamInput !== '') {
                return false;
            }
            else {
                return true;
            }
        },
        showButtonNfcReader() {
            const testedDevice = this.$store.state.testedDevice;
            const testNfcReaderInput = this.$store.state.testNfcReaderInput;

            if (testedDevice === 'nfcreader' || testNfcReaderInput !== '') {
                return false;
            }
            else {
                return true;
            }
        },
        showButtonFingerprintReader() {
            const testedDevice = this.$store.state.testedDevice;
            const testFingerprintReaderInput = this.$store.state.testFingerprintReaderInput;

            if (testedDevice === 'fingerprintreader' || testFingerprintReaderInput !== '') {
                return false;
            }
            else {
                return true;
            }
        },          
        showButtonRGBLed() {
            const testedDevice = this.$store.state.testedDevice;
            const testRGBLedInput = this.$store.state.testRGBLedInput;

            if (testedDevice === 'rgbled' || testRGBLedInput !== '') {
                return false;
            }
            else {
                return true;
            }
        },
        showButtonPanPower() {
            const testedDevice = this.$store.state.testedDevice;
            const testPanPowerInput = this.$store.state.testPanPowerInput;

            if (testedDevice === 'panpower' || testPanPowerInput !== '') {
                return false;
            }
            else {
                return true;
            }
        },
        showButtonWcd() {
            const testedDevice = this.$store.state.testedDevice;
            const testWcdInput = this.$store.state.testWcdInput;

            if (testedDevice === 'wcd' || testWcdInput !== '') {
                return false;
            }
            else {
                return true;
            }
        },
        showButtonNetwerk() {
            const testedDevice = this.$store.state.testedDevice;
            const testNetwerkInput = this.$store.state.testNetwerkInput;

            if (testedDevice === 'netwerk' || testNetwerkInput !== '') {
                return false;
            }
            else {
                return true;
            }
        },
        showButtonVentilator() {
            const testedDevice = this.$store.state.testedDevice;
            const testVentilatorInput = this.$store.state.testVentilatorInput;

            if (testedDevice === 'ventilator' || testVentilatorInput !== '') {
                return false;
            }
            else {
                return true;
            }
        },
        showMonitorResultOk() {
            const resultMonitorInput = this.$store.getters.getTestedResultMonitor;
            if(resultMonitorInput === 'passed') {
                return true;
            }
            else {
                return false;
            }
        },
        showMonitorResultNOk() {
            const resultMonitorInput = this.$store.getters.getTestedResultMonitor;
            if(resultMonitorInput === 'failed') {
                return true;
            }
            else {
                return false;
            }
        },
        showMonitorResultNA() {
            const resultMonitorInput = this.$store.getters.getTestedResultMonitor;
            if(resultMonitorInput === 'not applicable') {
                return true;
            }
            else {
                return false;
            }
        },
        showPrinterResultOk() {
            const resultPrinterInput = this.$store.getters.getTestedResultPrinter;
            if(resultPrinterInput === 'passed') {
                return true;
            }
            else {
                return false;
            }
        },
        showPrinterResultNOk() {
            const resultPrinterInput = this.$store.getters.getTestedResultPrinter;
            if(resultPrinterInput === 'failed') {
                return true;
            }
            else {
                return false;
            }
        },
        showPrinterResultNA() {
            const resultPrinterInput = this.$store.getters.getTestedResultPrinter;
            if(resultPrinterInput === 'not applicable') {
                return true;
            }
            else {
                return false;
            }
        },
        showScannerResultOk() {
            const resultScannerInput = this.$store.getters.getTestedResultScanner;
            if(resultScannerInput === 'passed') {
                return true;
            }
            else {
                return false;
            }
        },
        showScannerResultNOk() {
            const resultScannerInput = this.$store.getters.getTestedResultScanner;
            if(resultScannerInput === 'failed') {
                return true;
            }
            else {
                return false;
            }
        },
        showScannerResultNA() {
            const resultScannerInput = this.$store.getters.getTestedResultScanner;
            if(resultScannerInput === 'not applicable') {
                return true;
            }
            else {
                return false;
            }
        },
        showWebcamResultOk() {
            const resultWebcamInput = this.$store.getters.getTestedResultWebcam;
            if(resultWebcamInput === 'passed') {
                return true;
            }
            else {
                return false;
            }
        },
        showWebcamResultNOk() {
            const resultWebcamInput = this.$store.getters.getTestedResultWebcam;
            if(resultWebcamInput === 'failed') {
                return true;
            }
            else {
                return false;
            }
        },
        showWebcamResultNA() {
            const resultWebcamInput = this.$store.getters.getTestedResultWebcam;
            if(resultWebcamInput === 'not applicable') {
                return true;
            }
            else {
                return false;
            }
        },
        showFingerprintReaderResultOk() {
            const resultFingerprintReaderInput = this.$store.getters.getTestedResultFingerprintReader;
            if(resultFingerprintReaderInput === 'passed') {
                return true;
            }
            else {
                return false;
            }
        },
        showFingerprintReaderResultNOk() {
            const resultFingerprintReaderInput = this.$store.getters.getTestedResultFingerprintReader;
            if(resultFingerprintReaderInput === 'failed') {
                return true;
            }
            else {
                return false;
            }
        },
        showFingerprintReaderResultNA() {
            const resultFingerprintReaderInput = this.$store.getters.getTestedResultFingerprintReader;
            if(resultFingerprintReaderInput === 'not applicable') {
                return true;
            }
            else {
                return false;
            }
        },
        showNfcReaderResultOk() {
            const resultNfcReaderInput = this.$store.getters.getTestedResultNfcReader;
            if(resultNfcReaderInput === 'passed') {
                return true;
            }
            else {
                return false;
            }
        },
        showNfcReaderResultNOk() {
            const resultNfcReaderInput = this.$store.getters.getTestedResultNfcReader;
            if(resultNfcReaderInput === 'failed') {
                return true;
            }
            else {
                return false;
            }
        },
        showNfcReaderResultNA() {
            const resultNfcReaderInput = this.$store.getters.getTestedResultNfcReader;
            if(resultNfcReaderInput === 'not applicable') {
                return true;
            }
            else {
                return false;
            }
        },
        showRGBLedResultOk() {
            const resultRGBLedInput = this.$store.getters.getTestedResultRGBLed;
            if(resultRGBLedInput === 'passed') {
                return true;
            }
            else {
                return false;
            }
        },
        showRGBLedResultNOk() {
            const resultRGBLedInput = this.$store.getters.getTestedResultRGBLed;
            if(resultRGBLedInput === 'failed') {
                return true;
            }
            else {
                return false;
            }
        },
        showRGBLedResultNA() {
            const resultRGBLedInput = this.$store.getters.getTestedResultRGBLed;
            if(resultRGBLedInput === 'not applicable') {
                return true;
            }
            else {
                return false;
            }
        },
        showPanPowerResultOk() {
            const resultPanPowerInput = this.$store.getters.getTestedResultPanPower;
            if(resultPanPowerInput === 'passed') {
                return true;
            }
            else {
                return false;
            }
        },
        showPanPowerResultNOk() {
            const resultPanPowerInput = this.$store.getters.getTestedResultPanPower;
            if(resultPanPowerInput === 'failed') {
                return true;
            }
            else {
                return false;
            }
        },
        showPanPowerResultNA() {
            const resultPanPowerInput = this.$store.getters.getTestedResultPanPower;
            if(resultPanPowerInput === 'not applicable') {
                return true;
            }
            else {
                return false;
            }
        },
        showWcdResultOk() {
            const resultWcdInput = this.$store.getters.getTestedResultWcd;
            if(resultWcdInput === 'passed') {
                return true;
            }
            else {
                return false;
            }
        },
        showWcdResultNOk() {
            const resultWcdInput = this.$store.getters.getTestedResultWcd;
            if(resultWcdInput === 'failed') {
                return true;
            }
            else {
                return false;
            }
        },
        showWcdResultNA() {
            const resultWcdInput = this.$store.getters.getTestedResultWcd;
            if(resultWcdInput === 'not applicable') {
                return true;
            }
            else {
                return false;
            }
        },
        showVentilatorResultOk() {
            const resultVentilatorInput = this.$store.getters.getTestedResultVentilator;
            if(resultVentilatorInput === 'passed') {
                return true;
            }
            else {
                return false;
            }
        },
        showVentilatorResultNOk() {
            const resultVentilatorInput = this.$store.getters.getTestedResultVentilator;
            if(resultVentilatorInput === 'failed') {
                return true;
            }
            else {
                return false;
            }
        },
        showVentilatorResultNA() {
            const resultVentilatorInput = this.$store.getters.getTestedResultVentilator;
            if(resultVentilatorInput === 'not applicable') {
                return true;
            }
            else {
                return false;
            }
        },
        showNetwerkResultOk() {
            const resultNetwerkInput = this.$store.getters.getTestedResultNetwerk;
            if(resultNetwerkInput === 'passed') {
                return true;
            }
            else {
                return false;
            }
        },
        showNetwerkResultNOk() {
            const resultNetwerkInput = this.$store.getters.getTestedResultNetwerk;
            if(resultNetwerkInput === 'failed') {
                return true;
            }
            else {
                return false;
            }
        },
        showNetwerkResultNA() {
            const resultNetwerkInput = this.$store.getters.getTestedResultNetwerk;
            if(resultNetwerkInput === 'not applicable') {
                return true;
            }
            else {
                return false;
            }
        }

    },
    methods: {
        submitData() {
            const enteredSerialNumber = this.$refs.serialInput.value;
            const enteredRemark = this.$refs.remarkInput.value;

            if (enteredSerialNumber.trim() === '') {
                this.inputIsInvalid = true;
                return;
            }

            this.$store.commit('togglePrintformButtonState', true);
            this.$store.commit('saveRemark', enteredRemark );
            this.$store.commit('saveSerial', enteredSerialNumber);
        },
        testDeviceButton(device) {
            this.$store.commit('updateTestedDevice',device);
        },        

    }
}
</script>
<style scoped>
body {
    background-size: cover;
}
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  text-align: left;
}

input,
textarea {
  /* display: block; */
  width: 50%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #00A0E0;
  position: relative;
  border-radius: 4px;
}
input {
    left: 150px;
}
input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}
textarea {
    width: 100%;
    height: 150px;
    padding: 12px 20px;
    box-sizing: border-box;
    resize: none;
    left: 0px;
    margin-top: 5px;
}
.form-control {
  margin: 1rem 0;
}

.result {
    width: 25px;
    margin-left: 150px;
}
.basebutton {
    margin-left: 150px;
}
</style>