function saludo() {
    //funciones anónimas
}

var nombre = function () {
}

console.log(saludo + nombre())

var mensaje = {
    texto: function () { //funcion anonima
        return 'buen dia'
    }
}

console.log(mensaje)

//no usar funciones anonimas sin parámetros o sin comparaciones
console.log(typeof saludo())
console.log(saludo)//definicion de la funcion
console.log(saludo())//ejecucion de la funcion

//var , let const

var i = 8 //supuesta variablw global
function f() {
    for (let i = 0; i < 6; i++) {// var¡able local
        console.log(i)
    }
}

f()
console.log(i)


const arregloletras = ['a', 'b', 'c', 'd']
console.log(arregloletras)
arregloletras.push('e')
console.log(arregloletras)


const dato = {
    nombre: 'Israel',
    apellido: 'Pérez',
    universidad: 'Poli'
}
console.log(dato)

const sueldo = 30

//sueldo=234 no se puede sobreescribir una constante

function doble(n) {
    return n * 2
}

console.log(doble(3))

//funciones flecha 'FAT ARROW FUNCTIONS'
//estas funciones siempre son anónimas
//sintaxis
//(param1,.....,paramN)=>(sentencias)
//(param1,.....,paramN)=>expresion (return )
var dobleN = n => n * 2
console.log(dobleN(5))

const elem = ['Cu', 'H', 'Na', 'K']


var res1 = elem.map((elemento1) => {
    return elemento1.length
})


console.log(res1)


const suma = (num1, num2) => {
    return num1 + num2
}

function sumar(num1, num2) {
    return num1 + num2
}

console.log(suma(2, 9))

console.log(sumar(3, 6))


const cuadrado = x => x * x
//const cuadrado=(x)=> {x*x} Hacen lo mismo
console.log(cuadrado(13))


const arreglosElementos = elem
    .map( //permite crear un nuevo elemento, mutar cada elemento del arreglo
        valorActual => {
            return valorActual + '.-'
        }
    ).forEach(
        valorNuevo => console.log(valorNuevo)
    )

console.log(arreglosElementos)


const arregloNumeros = [1, 2, 10, 6, 4, 8, 9, 0]

const filtrarNumeros = arregloNumeros
    .filter(n => (n % 2 === 0))

console.log(filtrarNumeros)

console.log(1 == '1') //copara valores
console.log(1 === 1)//compara tipos de datos
console.log('' == 0)


const findIndex = arregloNumeros
    .findIndex(n=>n===0)

console.log('indice num igual a 0: ',findIndex)


const resultadoEvery = arregloNumeros
    .every(n => n > 1)
console.log('todos los valores son mayores que 1:', resultadoEvery)



const reduceArreglo= arregloNumeros
.reduce(
    (valorActualNumero,valorActualArreglo)=>{
        return valorActualNumero+valorActualArreglo
    }
)

console.log(reduceArreglo)