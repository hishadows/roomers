import {createStore} from 'vuex';

import leadsModule from './modules/Leads/index.js';

const store = createStore({
    modules: {
        leads: leadsModule
    }
});

export default store;