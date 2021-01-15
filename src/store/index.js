import { createStore } from 'vuex';

const store = createStore({
    state: {
        buttonPrintFormPressed: false,
        serialInput: "",
        testMonitoInput: "",
        testPrinterInput: "",
        testScannerInput: "",
        testWebCamInput: "",
        remarkInput: "",
    },
    getters: {
        getButtonPrintStatus(state) {
            return state.buttonPrintFormPressed;
        }
    },
    actions: {},
    mutations: {
        togglePrintformButtonState(state, p) {
            state.buttonPrintFormPressed = p;
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
        }
    },
});

export default store;