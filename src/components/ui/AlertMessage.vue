<template>
    <div class="basemessage">
        <p><base-message></base-message></p>
        <!-- <p><base-button @click="alertClose">Close</base-button></p> -->
        <div>
            <base-button @click="testResultYes" class="alert-button">JA</base-button><base-button @click="testResultNo" class="alert-button">NEE</base-button><base-button @click="testResultNA" v-if="showButtonNA" class="alert-button">Niet van toepassing</base-button>
        </div>
    </div>
</template>

<script>
import BaseMessage from './BaseMessage.vue';
// import { mapState } from 'vuex';

export default {
    data() {
        return {
            alertMessage:'',
            showButtonNA: false,
        }
    },
    components: {
        BaseMessage,
    },
    // computed: {
    //     ...mapState(['showAlert']),
    // },
    // watch: {
    //     showAlert(newValue, oldValue) {
    //         console.log('watching showAlert ' + this.$store.state.testedDevice + ' new value ' + newValue + ' old value ' + oldValue)
    //         this.setAlertMessage();
    //     }
    // },
    methods: {
        alertClose() {
            this.$store.commit('toggleShowAlert');
            this.$store.commit('clearTestedDevice');
            console.log('store.showalert ' + this.$store.state.showAlert);
        },
        testResultYes() {
            console.log('Test result: Passed');
            const device = this.$store.getters.getTestedDevice;
            if(device === 'monitor') {
                this.$store.commit('saveTestInputMonitor','passed');
            }
            else if(device === 'printer') {
                this.$store.commit('saveTestInputPrinter','passed');
            }
            else if(device === 'scanner') {
                this.$store.commit('saveTestInputScanner','passed');
            }
            else if(device === 'webcam') {
                this.$store.commit('saveTestInputWebcam', 'passed');
            }
            else if(device === 'nfcreader') {
                this.$store.commit('saveTestInputNfcReader', 'passed');
            }
            else if(device === 'rgbled') {
                this.$store.commit('saveTestInputRGBLed', 'passed');
            }
            else if(device === 'fingerprintreader') {
                this.$store.commit('saveTestInputFingerprintReader', 'passed');
            }
            else if(device === 'panpower') {
                this.$store.commit('saveTestInputPanPower', 'passed');
            }
            else if(device === 'wcd') {
                this.$store.commit('saveTestInputWcd', 'passed');
            }
            else if(device === 'ventilator') {
                this.$store.commit('saveTestInputVentilator', 'passed');
            }
            else if(device === 'netwerk') {
                this.$store.commit('saveTestInputNetwerk', 'passed');
            }
            this.alertClose();
        },
        testResultNo() {
            console.log('Test result: Failed');
            const device = this.$store.getters.getTestedDevice;
            if(device === 'monitor') {
                this.$store.commit('saveTestInputMonitor','failed');
            }
            else if(device === 'printer') {
                this.$store.commit('saveTestInputPrinter','failed');
            }
            else if(device === 'scanner') {
                this.$store.commit('saveTestInputScanner','failed');
            }
            else if(device === 'webcam') {
                this.$store.commit('saveTestInputWebcam', 'failed');
            }
            else if(device === 'nfcreader') {
                this.$store.commit('saveTestInputNfcReader', 'failed');
            }
            else if(device === 'rgbled') {
                this.$store.commit('saveTestInputRGBLed', 'failed');
            }
            else if(device === 'fingerprintreader') {
                this.$store.commit('saveTestInputFingerprintReader', 'failed');
            }
            else if(device === 'panpower') {
                this.$store.commit('saveTestInputPanPower', 'failed');
            }
            else if(device === 'wcd') {
                this.$store.commit('saveTestInputWcd', 'failed');
            }
            else if(device === 'ventilator') {
                this.$store.commit('saveTestInputVentilator', 'failed');
            }
            else if(device === 'netwerk') {
                this.$store.commit('saveTestInputNetwerk', 'failed');
            }
            this.alertClose();
        },
        testResultNA() {
            const device = this.$store.getters.getTestedDevice;
            if(device === 'printer') {
                this.$store.commit('saveTestInputPrinter','not applicable');
            }
            else if(device === 'monitor') {
                this.$store.commit('saveTestInputMonitor','not applicable')
            }
            else if(device === 'scanner') {
                this.$store.commit('saveTestInputScanner','not applicable')
            }
            else if(device === 'webcam') {
                this.$store.commit('saveTestInputWebcam','not applicable')
            }
            else if(device === 'nfcreader') {
                this.$store.commit('saveTestInputNfcReader','not applicable')
            }
            else if(device === 'rgbled') {
                this.$store.commit('saveTestInputRGBLed','not applicable')
            }
            else if(device === 'fingerprintreader') {
                this.$store.commit('saveTestInputFingerprintReader','not applicable')
            }
            else if(device === 'panpower') {
                this.$store.commit('saveTestInputPanPower','not applicable')
            }
            else if(device === 'wcd') {
                this.$store.commit('saveTestInputWcd','not applicable')
            }
            else if(device === 'ventilator') {
                this.$store.commit('saveTestInputVentilator','not applicable')
            }
            else if(device === 'netwerk') {
                this.$store.commit('saveTestInputNetwerk','not applicable')
            }
            this.alertClose();
        },
        getShowButtonNA() {
            const showButtonNA = this.$store.getters.getShowBtnNA;
            console.log('showButtonNA status: ' + showButtonNA);
            if(showButtonNA === true) {
                this.showButtonNA = true;
            }
            else {
                this.showButtonNA = false;
            }
        },
     },
    mounted() {
        this.getShowButtonNA();
    }
}
</script>

<style scoped>
.basemessage {
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: 2rem auto;
    max-width: 40rem;
    transition: all 5s ease-in-out;
}
.overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    transition: opacity 500ms;
    visibility: hidden;
    opacity: 0;
}
.overlay:target {
  visibility: visible;
  opacity: 1;
}

</style>