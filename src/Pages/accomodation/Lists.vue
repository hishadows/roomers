<template>

    <section>
        filters
    </section>

    <section>
        <ul v-if="hasLeads">
            <li v-for ="lead in filteredLeads " :key=" lead.id">{{ lead.title }}</li>
        </ul>
        <li v-else>Accomodation can't found at this location.</li>
    </section>

    

</template>
    
    <script>
    
    export default {
        computed:{
            filteredLeads(){
                return this.$store.getters['leads/leads'];
            },
            hasLeads(){
                return this.$store.getters['leads/hasLeads']
            }

        },
    }
    
</script>
    




    <style scoped>
    
    </style>