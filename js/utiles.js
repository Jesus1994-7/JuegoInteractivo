//funciones utiles para otros
const funciones = {

    minMax: (n,min,max) => {
        return Math.max(Math.min(n,max), min);
    },

    random(min,max){
        return Math.floor(Math.random()*(max-min) + min);
    }
}

const resolveIn = delay =>
new Promise(res => setTimeout(() => res(delay), delay));