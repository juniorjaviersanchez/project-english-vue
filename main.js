const appAlphabet = Vue.createApp({
    data() {
        return{
            work   : '',
            alphabet : new Map([ [ 'a', 'ei'], ['b', 'vi'], [ 'c', 'ci'], ['d', 'di'], ['e', 'i'], [ 'f', 'ef'], ['g', 'gi'] , ['h', 'eich'], [ 'i', 'ai'], ['j', 'jei'] , ['k', 'key'], [ 'l', 'el'], ['m', 'em'] , ['n', 'en'], [ 'o', 'ou'], ['p', 'pi'] , ['q', 'qiu'], [ 'r', 'ar'], ['s', 'es'] , ['t', 'ti'], [ 'u', 'iu'], ['v', 'vi'] , ['w', 'dobliu'], [ 'x', 'ex'], ['y', 'uai'] , ['z', 'dzi']  ]),
            lyrics : new Map()
        }
    },
    methods: {
        /**
         * Método para convertir una palabra, en su pronunciación en inglés.
         */
        convert() {
            this.lyrics = new Map();
            if(this.work){
                let el = this;
                let result = this.work.split('');
                result.forEach(function (x) {
                    x = x.toLowerCase();
                    if(el.alphabet.has(x)){
                        el.lyrics.set(x, el.alphabet.get(x));
                    }
                });
            }
        }
    },
    computed: {
        colorCantidad(){
            return 'text-success';
        }
    }
});

const appAnA = Vue.createApp({
    data() {
        return{
            work      : '',
            exception :  new Map([['honest', 'An'], ['hologram', 'An']]),
            result    : '',
            showResult: false
        }
    },
    methods: {
        /**
         * Método para convertir una palabra, en su pronunciación en inglés.
         */
        convertWork() {
            let el = this;
            el.result = "";

            if(el.work.length > 0){
                firtsLetter = el.work.substr(0,1);
                if( el.exception.has(el.work.toLowerCase()) ){
                    el.result = el.exception.get(el.work.toLowerCase()) + " " + el.work;
                }else{
                    if(['a','e','i','o','u'].includes(firtsLetter.toLowerCase())){
                        el.result = 'An ' + el.work;
                    }else{
                        el.result = 'A ' + el.work;
                    }
                }
                el.showResult = true;
            }else{
                el.showResult = false;
            }

        }
    },
    computed: {
        colorCantidad(){
            return 'text-success';
        }
    }
});