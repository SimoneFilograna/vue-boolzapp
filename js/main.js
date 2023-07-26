"use strict"

const { createApp } = Vue

createApp({
    data() {
        return {
            userContact: null,

            searchUser: "",

            myMessage: {
                date: "",
                message: "",
                status: "sent",
            },

            answerMex: {
                date: "",
                message: "Non ti rispondo perchè il gatto ha mangiato uno squalo nel cortile accanto",
                status: "received",
            },


            contatti: [
                {
                    name: "Michele",
                    avatar: "_1",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Hai portato a spasso il cane?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Ricordati di dargli da mangiare",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 16:15:22",
                            message: "Tutto fatto!",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Fabio",
                    avatar: "_2",
                    messages: [
                        {
                            date: "20/03/2020 16:30:00",
                            message: "Ciao come stai?",
                            status: "sent",
                        },
                        {
                            date: "20/03/2020 16:30:55",
                            message: "Bene grazie! Stasera ci vediamo?",
                            status: "received",
                        },
                        {
                            date: "20/03/2020 16:35:00",
                            message: "Mi piacerebbe ma devo andare a fare la spesa.",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Samuele",
                    avatar: "_3",
                    messages: [
                        {
                            date: "28/03/2020 10:10:40",
                            message: "La Marianna va in campagna",
                            status: "received",
                        },
                        {
                            date: "28/03/2020 10:20:10",
                            message: "Sicuro di non aver sbagliato chat?",
                            status: "sent",
                        },
                        {
                            date: "28/03/2020 16:15:22",
                            message: "Ah scusa!",
                            status: "received",
                        },
                    ],
                },
                {
                    name: "Luisa",
                    avatar: "_4",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            message: "Lo sai che ha aperto una nuova pizzeria?",
                            status: "sent",
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            message: "Si, ma preferirei andare al cinema",
                            status: "received",
                        },
                    ],
                },
            ]
        }       
    },
    methods: {

        //funzione che permette di selezionare ogni singolo user all'interno della lista
        onClickUser(singleContact){
            this.userContact = singleContact
            console.log(this.userContact)
        },

        //funzione che pusha il clone senza reattività all'interno dell'array

        sendMessage(arrayToPush){

            //pusho il clone dell'input per eliminare la reattività
            const newMex = {...this.myMessage};
            console.log(newMex)
            arrayToPush.push(newMex);
            console.log(arrayToPush);

            //creo un clone della risposta  
            const NewAnsw = {...this.answerMex};

            //imposto il timeout
            setTimeout(function(){
                arrayToPush.push(NewAnsw)
            }, 1500)
            
            //svuoto l'input
            this.myMessage.message = ""  
        },  
    },

    //utilizzo il computed per agire sugli elementi reattivi della lista con filtri in tempo reale
    computed: {
        filteredContact(){
            return this.contatti.filter(singleContact => singleContact.name.toLowerCase().includes(this.searchUser.toLowerCase()))
        }
    },

    //imposto un beforeMount, in modo da adare un valore a userContact iniziale
    beforeMount() {
        this.userContact = this.contatti[0]
    },


}).mount('#app')