var pacientes = document.querySelectorAll(".paciente"); // buscando todos os pacientes

var tabela = document.querySelector("table"); // pegando o pai

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut"); // add uma class no final p/ ter uma transição quando apagar

    // fazendo com que o js espere um pouco p/ executar a função abaixo
    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500); // dps que esperar 0.5s -> o js remove o elemento 
}); 

// tabela.addEventListener("dblclick", function(event) {
//     // colocando o event no pai(na tabela dos pacientes) -> quando o pai for clicado -> event.target mostra o filho que foi clicado
//     var alvoEvento = event.target;
//     var paiDoAlvo = alvoEvento.parentNode;
//     // pegando o pai(tr = paciente) de quem foi clicado(td) e removendo
//     paiDoAlvo.remove(); 
// })

// pacientes.forEach(function(paciente) {
//     paciente.addEventListener("dblclick", function() { // p/ cada paciente eu quero colocar um eventListener de duplo click e quando isso       ocorrer eu quero chamar a function p/ remover um paciente
//         console.log("Fui clicado 2 vzs");
//         this.remove(); // this -> aponta p/ quem acionou o event 
//     });
// }); 