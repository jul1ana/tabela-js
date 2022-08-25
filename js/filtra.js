var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() { // escuta o evento de input -> cada letra que eu digito no filtrar
    // pegando o valor do campo -> as letras que estou digitando nele
    console.log(this.value); // this.value -> conteúdo de texto do meu campo
    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0) { // se digitaram no campo de filtrar -> faz a filtragem c/ for
        for(var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome"); // buscando dentro do tr e do td a classe info-nome
            var nome = tdNome.textContent; // extraindo o conteúdo de texto dessa classe

            // criando a expressao regular , 1° coisa p/ buscar : conteúdo de texto(this.value), 2° como quer q busque(i = aceita buscar por minusculo e maiusculo)
            var expressao = new RegExp(this.value, "i");
            
            // se o nome for diferente no this.value -> escondo ele , se for igual eu mostro
            if(!expressao.test(nome)) { // testando se no nome vai ter algum pedaço da mh expressao
                paciente.classList.add("invisivel"); // add a classe que faz sumir o nome 
            } else {
                paciente.classList.remove("invisivel"); // removo a classe que faz sumir o nome
            }
        };
    } else { // se não tem nada digitado -> remove a class invisivel de cada paciente
        for(var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel"); 
        }
    }
}); 