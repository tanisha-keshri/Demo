// import hello from 'hello.vue';

new Vue({ //binds the view and the model(data)
    el: '#app', // attaches with the dom with ID app 
    data: {     // all the data is defined in this secction
        message: 'Hello Vue.js!',
        tools: [
          {text: "javaScript"},
          {text: "typeScript"},
          {text: "webpack"},
          {text: "Angular"},
          {text: "How could you forget Vue :/"}
        ],
        newTool: "",
        flag: true
    },
    methods: {
    greet: function (event) {
      this.message += "boom";
    },
    say: function (msg){
    	this.message = msg;
    },
    addTool: function (){
    	text = this.newTool.trim();
      if(text){
      this.tools.push({text: text});
      this.newTool = "";
      }
    }
    }
})

// build large-scale applications composed of small, self-contained, and often reusable components