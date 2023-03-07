import actions from './actions.js';
import getters from './getters.js';
import mutations from './mutations.js';

export default {
    namespaced: true,
  state(){
    return{
        leads:[
            {
               id:'first-lead',
                  title:'Accomodation for 2 girls',
                  date:'1st march',
                  address:'496 Askin ave',
                  room:'private or sharing',
                  gender:'male or female',
                  type:'basement or house or apartment',
                  utility:'included or not included',
                  rent:'$500',
                  contact:'0123 456 789',
                  description: '5 min walk to university.Very spacious and newly renovated house.'
            },

            {
             id:'second-lead',
                title:'Accomodation available for 1 person',
                date:'1st feb',
                address:'645 Randolph ave',
                room:'private or sharing',
                gender:'male or female',
                type:'basement or house or apartment',
                utility:'included or not included',
                rent:'$450',
                contact:'0123 456 789',
                description:'It is near to 1c/2 bus stops. 2 mimutes walk to university.'
            }
          ]
    };
  },

  mutations,
  actions,
  getters

   
};