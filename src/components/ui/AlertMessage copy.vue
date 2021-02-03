<template>
    <div>
        <p>{{alertMessage}}</p>
        <base-button @click="alertClose">Close</base-button>
    </div>
</template>

<script>
// import BaseMessage from './BaseMessage.vue';
import { mapState } from 'vuex';

export default {
    data() {
        return {
            alertMessage:'',
        }
    },
    components: {
        // BaseMessage,
    },
    computed: {
        ...mapState(['showAlert']),
    },
    watch: {
        showAlert(newValue, oldValue) {
            console.log('watching showAlert ' + this.$store.state.testedDevice + ' new value ' + newValue + ' old value ' + oldValue)
            this.setAlertMessage();
        }
    },
    methods: {
        alertClose() {
            this.$store.commit('toggleShowAlert');
            this.$store.commit('clearTestedDevice');
            console.log('store.showalert ' + this.$store.state.showAlert);
        },
        setAlertMessage() {
            console.log('store.showalert ' + this.$store.state.showAlert);
            const deviceTested = this.$store.getters.getTestedDevice;
            console.log(deviceTested);

            if(deviceTested === 'monitor') {
                this.alertMessage = "Wordt de monitor aangestuurd en is er iets zichtbaar op het scherm?";
                console.log(this.alertMessage);
            }
            else if(deviceTested === 'printer') {
                this.alertMessage = "Er wordt nu een bon gegenereerd. Deze moet geprint worden op de aangesloten bonprinter.\r\nWanneer deze bon geprint is, bevestig dit dan met JA, anders klik je op nee.";
            }
            else if(deviceTested === 'scanner') {
                this.alertMessage = "Scan een barcode en kijk of dit in de textbox wordt weergegeven.\r\nKlik op JA wanneer er text in de textbox is gescand.\r\nKlik op Nee wanneer dit niet het geval is";
            }
        }
    },
    mounted() {
        this.setAlertMessage();
        console.log('state of showalert when componend is mounted ' + this.$store.state.showAlert)
    }
}
</script>

<style scoped>
div {
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: 2rem auto;
    max-width: 40rem;
}
</style>