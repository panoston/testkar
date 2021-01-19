<template>
    <div>
        {{ alertMessage }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            alertMessage: '',
        }
    },
    watch: {
        deviceTested() {
            const deviceTested = this.$store.getters.deviceTested;
            console.log(deviceTested);

            if(deviceTested === 'monitor') {
                this.alertMessage = "Wordt de monitor aangestuurd en is er iets zichtbaar?";
                console.log(this.alertMessage);
            }
            else if(deviceTested === 'printer') {
                this.alertMessage = "Er wordt nu een bon gegenereert. Deze moet geprint worden op de aangesloten bonprinter.\r\nWanneer deze bon geprint is, bevestig dit dan met JA, anders klik je op nee.";
            }
        }
    },
}
</script>

<style scoped>
div {
    border-radius: 12px;
    /* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26); */
    padding: 1rem;
    margin: 2rem auto;
    max-width: 40rem;
}
</style>