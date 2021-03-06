const date = new Date();

var myObject = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        vero: true,
        cc:'cc',
        age: 19,
        number:0,
        giorno: date.getDate(),
        disabledB:true,
        dataIMG: 'data:image/png;base64,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',
        mese: date.getMonth() + 1,
        anno: date.getFullYear(),
        variabilepersonale: '<h3>SEMPLICE HTML5</h3>',
        nome:'',
        selezionato:0
},
    computed: {  //serve per richimare le funzioni in htm direttamente al posto delle variabili
        limite: function(){  // con questo metodo si possono emettere le parentesi
            if(this.number < 0){
                return "MINORE";
            }
            else{
                return "MAGGIORE";
            }
        }
    },
    watch: {
        number: function(value){ //serve per osservare la i movimenti di una variabile
            if(value == 3){
                console.log("dY");
            }
        }
    },
    methods: {
        aumenta:function(){
            this.number=this.number+this.age;
        },
        decrementa:function(){
            this.number--;
            if(this.number <= -4){
                this.disabledB = false;
            }

        },
        alert:function(){
            alert("ooo");
        },
        keyup:function(){
            alert(this.number);
        }
        
    }
})