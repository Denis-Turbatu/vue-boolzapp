console.log(Vue);

const { createApp } = Vue;

createApp({
    data(){
        return{
            prova: "Hello World!",
            
        };
    },
    methods: {
    },
}).mount('#app');
