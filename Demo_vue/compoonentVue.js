Vue.component('my-component',{
    data: function(){
        return {
            msg: 'Hi Tanisha'
        }
    },
    template: `
    <button v-on:click="msg='Hey You clicked Me';">Click to change the message {{msg}}</button>`
});

Vue.component('blog-post', {
    props: ['title'],
    template: '<h3> This component takes props data from it\'s parent title - {{ title }}</h3>'
})