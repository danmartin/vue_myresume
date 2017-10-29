new Vue({
    el: '#resume_id',
    data: {
        resume: {},
        isLoaded: false
    },
    mounted: function() {
        this.fetchResume();        
    },
    // Methods we want to use in our application are registered here
    methods: {
        fetchResume: function() {
            this.$http.get('/vue_myresume/assets/data/resume.json').then(function(response) {
                this.resume = response.body; 
                this.isLoaded = true;
            });
        }
    }
});