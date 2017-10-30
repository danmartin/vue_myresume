new Vue({
    el: '#resume_id',
    data: {
        resume: {},
        isLoaded: false,
        bool: {0:false,1:false,2:false,3:false,4:false,5:false,6:false,7:false,8:false,9:false}
    },
    mounted: function() {
        this.fetchResume();        
    },
    methods: {
        dateFormat: function(date){
            if(date == 'Present') return date
            let d = new Date(date),
                months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                m = months[d.getMonth()];
            return m + " " + d.getFullYear()
        },
        fetchResume: function() {
            this.$http.get('/vue_myresume/assets/data/resume.json').then(function(response) {
                this.resume = response.body; 
                this.isLoaded = true;
            });
        },
        status: function(key) {
            console.log(this.bool[key])
            return this.bool[key] === undefined || !this.bool[key] ? "More Details \u00bb" : "\u00ab Less Details";
        },
        toggle: function (key) {
            if(this.bool[key] !== undefined) {
                this.bool[key] = !this.bool[key];
            } else {
                this.bool[key] = true;
            }
            console.log(this.bool[key])
            console.log(this.bool)
        }
    }
});