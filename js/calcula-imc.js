// p/ "pegar" a class título
var titulo = document.querySelector(".titulo");

// p/ modificar o conteúdo de texto da class
titulo.textContent = "Aparecida Nutricionista"; 

// buscando na class paciente o primeiro paciente
var paciente = document.querySelector("#primeiro-paciente");

// buscando TODOS que tem a class paciente
var pacientes = document.querySelectorAll(".paciente"); 

for(var i = 0; i < pacientes.length; i++) { // percorrendo o tamanho(length) da minha lista inteira de paciente

    // significa que a variavel paciente será cada item que ta dentro da lista de paciente
    var paciente = pacientes[i]; 

    // buscando na class paciente o peso
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent; // pegando apenas o valor do peso

    // buscando na class paciente a altura
    var tdAltura = paciente.querySelector(".info-altura")
    var altura = tdAltura.textContent;

    // calculando IMC 
    var tdImc = paciente.querySelector(".info-imc");

    // usando os operadores lógicos
    var pesoEhValido = validaPeso(peso); // true ou false
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido) { // entrando no if se o peso for inválido
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!"; // mostrando na tabela ' Peso inválido! '

        // alterando a cor da linha caso tenha algum erro
        // buscando e adicionando uma class pelo js
        paciente.classList.add("paciente-invalido"); // obs.: paciente é minha tr (ou seja, a linha!) | a class paciente invalido foi criada primeiramente no index.css 
    } 

    if(!alturaEhValida) { // só entra no if se for false
        console.log("Altura inválida!"); 
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida!"; 
        paciente.classList.add("paciente-invalido"); 
    }

    // se a altura e o peso são válidos -> ocorre a conta do IMC 
    if(alturaEhValida && pesoEhValido) { //  && -> E 
        var imc = calculaImc(peso, altura); 

        // colocando o valor da variável calculada
        tdImc.textContent = imc; 
    }
} 

function validaPeso(peso) { // se tá validado ou não
    if(peso >= 0 && peso < 1000) {
        return true; 
    } else {
        return false; 
    }
}

function validaAltura(altura) {
    if(altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false; 
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2); // quero apenas 2 casas decimais 
}