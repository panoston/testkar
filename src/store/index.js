import { createStore } from 'vuex';
import testForm from './modules/testForm.js';

const store = createStore({
    modules: {
        tests: testForm,
    }
});

export default store;