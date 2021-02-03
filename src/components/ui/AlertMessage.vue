<template>
    <div class="basemessage">
        <p><base-message></base-message></p>
        <!-- <p><base-button @click="alertClose">Close</base-button></p> -->
        
        <p><base-button @click="testResultYes">JA</base-button><base-button @click="testResultNo">NEE</base-button><base-button @click="testResultNA" v-if="showButtonNA">Niet van toepassing</base-button></p>
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
            
            this.alertClose();
        },
        testResultNA() {
            const device = this.$store.getters.getTestedDevice;
            if(device === 'printer') {
                this.$store.commit('saveTestInputPrinter','not applicable');
            }
            else if(device === 'scanner') {
                this.$store.commit('saveTestInputScanner','not applicable')
            }
            else if(device === 'webcam') {
                this.$store.commit('saveTestInputWebcam','not applicable')
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
}
</style>