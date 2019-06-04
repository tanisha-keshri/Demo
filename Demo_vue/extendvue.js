var profile = Vue.extend({
    template:  '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
    data: function(){
        return{
            firstName: 'Tanisha',
            lastName: 'keshri',
            alias: 'anshu'
        }
    }
})

new profile().$mount('#extend-vue');