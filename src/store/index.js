import { createStore } from 'vuex';
// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

const store = createStore({
// const store = new Vuex.store({
    state: {
        buttonPrintFormPressed: false,
        serialInput: "",
        testMonitorInput: "",
        testPrinterInput: "",
        testScannerInput: "",
        testWebCamInput: "",
        remarkInput: "",
        testedDevice: "",
        showAlert: false
    },
    getters: {
        getButtonPrintStatus(state) {
            return state.buttonPrintFormPressed;
        },
        getTestMonitorInput(state) {
            return state.testMonitorInput;
        },
        getTestedDevice(state) {
            return state.testedDevice;
        }
    },
    actions: {},
    mutations: {
        togglePrintformButtonState(state) {
            // state.buttonPrintFormPressed = p;
            state.buttonPrintFormPressed = true;
        },
        toggleShowAlert(state) {
            state.showAlert = !state.showAlert;
        },
        saveTestMonitorInput(state, device, value) {
            if (device === 'monitor') {
                state.testMonitorInput = value;
            }
            else if (device === 'printer') {
                state.testPrinterInput = value;
            }
            else if (device === 'scanner') {
                state.testScannerInput = value;
            }
            else if (device === 'webcam') {
                state.testWebCamInput = value;
            }

        },
        saveRemark(state, value) {
            state.remarkInput = value;
        },
        saveSerial(state, value) {
            state.serialInput = value;
        },
        updateTestedDevice(state, device) {
            state.testedDevice = device;
        },
        clearTestedDevice(state) {
            state.testedDevice = "";
        }
    },
});

export default store;