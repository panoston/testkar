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
                </label>
            </div>
            <div class="formcontrol">
                <label for="testPrinter"><span>Test Printer:</span>
                <base-button id="testPrinter" @click="testDeviceButton('printer')" v-if="showButtonPrinter">Test</base-button>
                </label>
            </div>
            <div class="formcontrol">
                <label for="testScanner"><span>Test Scanner:</span>
                <base-button id="testScanner" @click="testDeviceButton('scanner')" v-if="showButtonScanner">Test</base-button>
                </label>
            </div>
            <div class="form-control">
                <label for="testWebcam"><span>Test Webcam:</span>
                <base-button id="testWebcam" @click="testDeviceButton('webcam')" v-if="showButtonWebCam">Test</base-button>
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
            console.log(this.$store.state.buttonPrintFormPressed);
        },
        testDeviceButton(device) {
            this.$store.commit('updateTestedDevice',device);
            this.$store.commit('toggleShowAlert');
        }
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
</style>