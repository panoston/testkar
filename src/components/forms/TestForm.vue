<template>
    <div>
        <h2>Test Formulier</h2>
        <form @submit.prevent="submitData">
            <div class="form-control">
                <label for="serial">Serienummer:</label>
                <input type="text" name="serial" id="serial" ref="serialInput">
            </div>
            <div class="form-control">
                <label for="testMonitor">Test monitor:</label>
                <base-button id="testMonitor">Test</base-button>
            </div>
            <div class="formcontrol">
                <label for="testPrinter">Test Printer:</label>
                <base-button id="testPrinter">Test</base-button>
            </div>
            <div class="formcontrol">
                <label for="testScanner">Test Scanner:</label>
                <base-button id="testScanner">Test</base-button>
            </div>
            <div class="form-control">
                <label for="testWebcam">Test Webcam:</label>
                <base-button id="testWebcam">Test</base-button>
            </div>
            <div class="form-control">
                <label for="remark">Opmerking:</label>
                <input type="text" name="remark" id="remark" ref="remarkInput">
            </div>
            <div class="form-control"><base-button @click="submitData">Print Rapport</base-button></div>

        </form>
    </div>
</template>
<script>
export default {
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
        }
    }
}
</script>
<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
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