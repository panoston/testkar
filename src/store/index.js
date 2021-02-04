import { createStore } from 'vuex';

const store = createStore({

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
        showBtnNA: false,
        showInputScanner: false,
        showButtonWebcamTest: false,
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
        },
        getShowInputScanner(state) {
            return state.showInputScanner;
        },
        getShowButtonWebcamTest(state) {
            return state.showButtonWebcamTest;
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
        saveTestInputMonitor(state, payload) {
            state.testMonitorInput = payload;
            state.showBtnPrintTestPage = false;
            state.showBtnNA = false;
            state.showInputScanner = false;
            state.showButtonWebcamTest = false;
        },
        saveTestInputPrinter(state, payload) {
            state.testPrinterInput = payload;
            state.showBtnPrintTestPage = false;
            state.showBtnNA = false;
            state.showInputScanner = false;
            state.showButtonWebcamTest = false;
        },
        saveTestInputScanner(state, payload) {
            state.testScannerInput = payload;
            state.showBtnPrintTestPage = false;
            state.showBtnNA = false;state.showInputScanner = false;
            state.showButtonWebcamTest = false;
        },
        saveTestInputWebcam(state, payload) {
            state.testWebCamInput = payload;
            state.showBtnPrintTestPage = false;
            state.showBtnNA = false;state.showInputScanner = false;
            state.showButtonWebcamTest = false;
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
            else if (payload === 'scanner') {
                state.showBtnNA = true;
                state.showInputScanner = true;
            }
            else if (payload === 'webcam') {
                state.showBtnNA = true;
                state.showButtonWebcamTest = true;
            }
        },
        clearTestedDevice(state) {
            state.testedDevice = "";
        }
    },
});

export default store;