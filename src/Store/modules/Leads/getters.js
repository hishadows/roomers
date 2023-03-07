export default {
    leads(state){
        return state.leads;
    },
    hasLeads(state){
        return state.leads && state.leads.length > 0 ;
    }
};