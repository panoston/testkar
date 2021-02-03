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
        showAlert: false,
        showBtnPrintTestPage: false,
        showBtnNA: false
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
        },
        getTestedResultMonitor(state) {
            return state.testMonitorInput;                
        },
        getTestedResultPrinter(state) {
            return state.testPrinterInput;                
        },
        getTestedResultScanner(state) {
            return state.testScannerInput;                
        },
        getTestedResultWebcam(state) {
            return state.testWebCamInput;                
        },
        getShowBtnPrintTestPage(state) {
            return state.showBtnPrintTestPage;
        },
        getShowBtnNA(state) {
            return state.showBtnNA;
        }
    },
    actions: {},
    mutations: {
        togglePrintformButtonState(state) {
            // state.buttonPrintFormPressed = p;
            state.buttonPrintFormPressed = !state.buttonPrintFormPressed;
        },
        toggleShowAlert(state) {
            state.showAlert = !state.showAlert;
        },
        // saveTestInput(state, {device, value}) {
        //     if (device === 'monitor') {
        //         state.testMonitorInput = value;
        //     }
        //     else if (device === 'printer') {
        //         state.testPrinterInput = value;
        //     }
        //     else if (device === 'scanner') {
        //         state.testScannerInput = value;
        //     }
        //     else if (device === 'webcam') {
        //         state.testWebCamInput = value;
        //     }

        // },
        
        saveTestInputMonitor(state, payload) {
            state.testMonitorInput = payload;
            state.showBtnPrintTestPage = false;
            state.showBtnNA = false;
        },
        saveTestInputPrinter(state, payload) {
            state.testPrinterInput = payload;
            state.showBtnPrintTestPage = false;
            state.showBtnNA = false;
        },
        saveTestInputScanner(state, payload) {
            state.testScannerInput = payload;
            state.showBtnPrintTestPage = false;
            state.showBtnNA = false;
        },
        saveTestInputWebcam(state, payload) {
            state.testWebCamInput = payload;
            state.showBtnPrintTestPage = false;
            state.showBtnNA = false;
        },
        saveRemark(state, value) {
            state.remarkInput = value;
        },
        saveSerial(state, value) {
            state.serialInput = value;
        },
        updateTestedDevice(state, payload) {
            state.testedDevice = payload;
            console.log('tested device: ' + state.testedDevice);
            if (payload !== '') {
                state.showAlert = !state.showAlert;
                console.log('Show alert state: ' + state.showAlert);
            }

            if (payload === 'printer') {
                state.showBtnPrintTestPage = true;
                state.showBtnNA = true;
            }
            else if (payload === 'scanner' || payload === 'webcam') {
                state.showBtnNA = true;
            }
        },
        clearTestedDevice(state) {
            state.testedDevice = "";
        }
    },
});

export default store;