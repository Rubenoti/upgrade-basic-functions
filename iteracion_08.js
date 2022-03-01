const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];

let array = [];

function repeatCounter(param) {
    let counter = 0;
    for (let i = 0; i < param.length; i++) {
        counter = 0;
        if (!array.includes(param[i])) {
            for (let j = 0; j < param.length; j++) {
                if (param[i] === param[j]) {
                    counter++;
                }
            }
            console.log("La palabra " + "-" + param[i] + "-" + " se repite " + counter + " veces");
        }
        array.push(param[i]);

    }
}
repeatCounter(counterWords);