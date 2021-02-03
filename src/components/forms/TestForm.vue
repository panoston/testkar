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
                <base-button id="testMonitor" @click="testDeviceButton('monitor')" v-if="showButtonMonitor">Test</base-button>
                <img class="result" src="../../assets/green-check.png" v-if="showMonitorResultOk">
                <img class="result" src="../../assets/red-x.png" v-if="showMonitorResultNOk">
                </label>
            </div>
            <div class="formcontrol">
                <label for="testPrinter"><span>Test Printer:</span>
                <base-button id="testPrinter" @click="testDeviceButton('printer')" v-if="showButtonPrinter">Test</base-button>
                <img class="result" src="../../assets/green-check.png" v-if="showPrinterResultOk">
                <img class="result" src="../../assets/red-x.png" v-if="showPrinterResultNOk">
                <img class="result" src="../../assets/na.png" v-if="showPrinterResultNA">
                </label>
            </div>
            <div class="formcontrol">
                <label for="testScanner"><span>Test Scanner:</span>
                <base-button id="testScanner" @click="testDeviceButton('scanner')" v-if="showButtonScanner">Test</base-button>
                <img class="result" src="../../assets/green-check.png" v-if="showScannerResultOk">
                <img class="result" src="../../assets/red-x.png" v-if="showScannerResultNOk">
                <img class="result" src="../../assets/na.png" v-if="showScannerResultNA">
                </label>
            </div>
            <div class="form-control">
                <label for="testWebcam"><span>Test Webcam:</span>
                <base-button id="testWebcam" @click="testDeviceButton('webcam')" v-if="showButtonWebCam">Test</base-button>
                <img class="result" src="../../assets/green-check.png" v-if="showWebcamResultOk">
                <img class="result" src="../../assets/red-x.png" v-if="showWebcamResultNOk">
                <img class="result" src="../../assets/na.png" v-if="showWebcamResultNA">
                </label>
            </div>
            <div class="form-control">
                <label for="remark"><span>Opmerking:</span>
                <input type="text" name="remark" id="remark" ref="remarkInput">
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
            
            // this.$store.commit('toggleShowAlert');
        },        
        // getTestResult(device) {
        //     // const testedDevice = device;
        //     if(device === 'monitor') {
        //         const testDeviceInput = this.$store.getters.getTestResultMonitor;    
        //     }
        //     else if(device === 'printer') {
        //         const testDeviceInput = this.$store.getters.getTestResultPrinter;    
        //     }
        //     else if(device === 'scanner') {
        //         const testDeviceInput = this.$store.getters.getTestResultScanner;    
        //     }
        //     else if(device === 'webcam') {
        //         const testDeviceInput = this.$store.getters.getTestResultWebcam;    
        //     }

        //     if (testDeviceInput === 'Ja') {
        //         return true;
        //     }
        //     else if(testDeviceInput === 'Nee') {
        //         return false;
        //     }
        //     console.log(testDeviceInput)
        // }
    }
}
</script>
<style scoped>
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
  border: 1px solid #ccc;
  position: relative;
  left: 60px;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}

.result {
    width: 25px;
}
</style>