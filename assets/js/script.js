console.log(Vue);

const { createApp } = Vue;

createApp({
    data(){
        return{
            contacts: [
                {
                    nome: "Michele",
                    imgProfilo: `_1`,
                },
                {
                    nome: "Fabio",
                    imgProfilo: `_2`,
                },
                {
                    nome: "Samuele",
                    imgProfilo: `_3`,
                },
                {
                    nome: "Alessandro B.",
                    imgProfilo: `_4`,
                },
                {
                    nome: "Alessandro L.",
                    imgProfilo: `_5`,
                },
                {
                    nome: "Claudia",
                    imgProfilo: `_6`,
                },
                {
                    nome: "Federico",
                    imgProfilo: `_7`,
                },
                {
                    nome: "Davide",
                    imgProfilo: `_8`,
                },
            ],
        };
    },
    methods: {
    },
}).mount('#app');
