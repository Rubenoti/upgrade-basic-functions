const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];
function finderName(param, valor) {

    for (let i = 0; i < param.length; i++) {
        if (valor === param[i]) {
            return true;
        } else { return false; }
    }
}
console.log(finderName(nameFinder, "Peter"));
