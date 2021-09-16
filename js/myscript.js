// Stampare in pagina un item per ogni elemento contenuto in un array. OK!

// Ogni item ha una icona "x" associata: cliccando su di essa, 
// l'item viene rimosso dalla lista. OK!

// Predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio 
// oppure ciccando su un pulsante, il testo digitato sarà aggiunto alla lista.





var app = new Vue({

    el: '#app',

    data: {

        listaSpesa : ["Pasta", "Dentifricio", "Patatine", "Carta Igienica", "Pesto", "Sapone",],

        elementoListaAggiunto : "",
    },  

    methods: {

        eliminaElemento : function(index){
            this.listaSpesa.splice(index, 1);
        },

    },
  });
  