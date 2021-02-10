import { createStore } from 'vuex';

const store = createStore({

    state: {
        buttonPrintFormPressed: false,
        serialInput: "",
        testMonitorInput: "",
        testPrinterInput: "",
        testScannerInput: "",
        testWebCamInput: "",
        testNfcReaderInput: "",
        testRGBLedInput: "",
        testFingerprintReaderInput: "",
        testPanPowerInput: "",
        testWcdInput: "",
        testVentilatorInput: "",
        testNetwerkInput: "",
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
        getTestedResultNfcReader(state) {
            return state.testNfcReaderInput;                
        },
        getTestedResultRGBLed(state) {
            return state.testRGBLedInput;
        },
        getTestedResultFingerprintReader(state) {
            return state.testFingerprintReaderInput;
        },
        getTestedResultPanPower(state) {
            return state.testPanPowerInput;
        },
        getTestedResultWcd(state) {
            return state.testWcdInput;
        },
        getTestedResultVentilator(state) {
            return state.testVentilatorInput;
        },
        getTestedResultNetwerk(state) {
            return state.testNetwerkInput;
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
            state.showBtnNA = false;
            state.showInputScanner = false;
            state.showButtonWebcamTest = false;
        },
        saveTestInputWebcam(state, payload) {
            state.testWebCamInput = payload;
            state.showBtnPrintTestPage = false;
            state.showBtnNA = false;
            state.showInputScanner = false;
            state.showButtonWebcamTest = false;
        },
        saveTestInputNfcReader(state, payload) {
            state.testNfcReaderInput = payload;
            state.showBtnPrintTestPage = false;
            state.showBtnNA = false;
            state.showInputScanner = false;
            state.showButtonWebcamTest = false;
        },
        saveTestInputRGBLed(state, payload) {
            state.testRGBLedInput = payload;
            state.showBtnPrintTestPage = false;
            state.showBtnNA = false;
            state.showInputScanner = false;
            state.showButtonWebcamTest = false;
        },
        saveTestInputFingerprintReader(state, payload) {
            state.testFingerprintReaderInput = payload;
            state.showBtnPrintTestPage = false;
            state.showBtnNA = false;
            state.showInputScanner = false;
            state.showButtonWebcamTest = false;
        },
        saveTestInputPanPower(state, payload) {
            state.testPanPowerInput = payload;
            state.showBtnPrintTestPage = false;
            state.showBtnNA = false;
            state.showInputScanner = false;
            state.showButtonWebcamTest = false;
        },
        saveTestInputWcd(state, payload) {
            state.testWcdInput = payload;
            state.showBtnPrintTestPage = false;
            state.showBtnNA = false;
            state.showInputScanner = false;
            state.showButtonWebcamTest = false;
        },
        saveTestInputVentilator(state, payload) {
            state.testVentilatorInput = payload;
            state.showBtnPrintTestPage = false;
            state.showBtnNA = false;
            state.showInputScanner = false;
            state.showButtonWebcamTest = false;
        },
        saveTestInputNetwerk(state, payload) {
            state.testNetwerkInput = payload;
            state.showBtnPrintTestPage = false;
            state.showBtnNA = false;
            state.showInputScanner = false;
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
            else if (payload === 'monitor') {
                state.showBtnNA = true;
            }
            else if (payload === 'webcam') {
                state.showBtnNA = true;
                state.showButtonWebcamTest = true;
            }
            else if (payload === 'nfcreader') {
                state.showBtnNA = true;
            }
            else if (payload === 'rgbled') {
                state.showBtnNA = true;
            }
            else if (payload === 'fingerprintreader') {
                state.showBtnNA = true;
            }
            else if (payload === 'panpower') {
                state.showBtnNA = true;
            }
            else if (payload === 'wcd') {
                state.showBtnNA = true;
            }
            else if (payload === 'ventilator') {
                state.showBtnNA = true;
            }
            else if (payload === 'netwerk') {
                state.showBtnNA = true;
            }
        },
        clearTestedDevice(state) {
            state.testedDevice = "";
        }
    },
});

export default store;