// Stampare in pagina un item per ogni elemento contenuto in un array. OK!

// Ogni item ha una icona "x" associata: cliccando su di essa, 
// l'item viene rimosso dalla lista. OK!

// Predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio 
// oppure ciccando su un pulsante, il testo digitato sarà aggiunto alla lista. OK!



var app = new Vue({

    el: '#app',

    data: {

        listaSpesa : ["Pasta", "Dentifricio", "Patatine", "Carta Igienica", "Pesto",],

        listaElementiComprati : [],

        elementoListaAggiunto : "",
    },  

    methods: {


        eliminaElemento : function(elemento ,index){
            this.listaSpesa.splice(index, 1);
            this.listaElementiComprati.push(elemento);
        },

        elementoErrato : function(elemento, index){
            this.listaElementiComprati.splice(index, 1);
            this.listaSpesa.push(elemento)
            
        },

        aggiungiElementoDellaSpesa : function() {
            if(this.elementoListaAggiunto.trim().length > 0) {
                this.listaSpesa.push(this.elementoListaAggiunto.trim());
                this.elementoListaAggiunto = ""
            }
            
        },

    },
  });
  