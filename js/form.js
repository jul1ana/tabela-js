var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente); 

    console.log(erros); 
    if(erros.length > 0) { // se o tamanho da string for maior que 0 -> teve erro
        exibeMensagensDeErro(erros); // vai pegar meu array de erros e p/ cada item desse array será criado uma li e adicionar na sua ul "mensagens-erro"

        return; // dando o return vazio, ele sai da funçao sem adicionar o paciente inválido na tabela
    } 
    
    // adicionando o paciente na tabela 
    adicionaPacienteNaTabela(paciente); 
    
    form.reset(); 

    // limpando a ul toda vez que eu add um novo paciente
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = ""; 

}); 

function adicionaPacienteNaTabela(paciente) {

    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}

function exibeMensagensDeErro(erros) { // p cada item -> pego a minha ul e coloco esse item lá dentro como uma li
    var ul = document.querySelector("#mensagens-erro");

    // limpando a ul p/ não acumular os li quando já tiver concertado o erro
    ul.innerHTML = ""; 
    
    erros.forEach(function(erro) { // p cada item do meu array -> executa essa função que recebe o item "erro"
        var li = document.createElement("li"); // e cria uma li
        // texto dessa li será o meu erro
        li.textContent = erro; // preenchendo com o valor do erro
        ul.appendChild(li); // e pega essa li e coloca dentro da ul 
    });  
}

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {
    //Cria TR
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    //Cria as TD's e a adiciona dentro da TR
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    // retorna a TR
    return pacienteTr;  
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function validaPaciente(paciente) {

    // declarando um array de erros
    var erros = []; 

    // colocando aviso de erro se o campo não for preenchido
    if(paciente.nome.length == 0) erros.push("Nome não pode estar vazio!"); 

    if(paciente.peso.length == 0) erros.push("Peso não pode estar vazio!"); 

    if(paciente.altura.length == 0) erros.push("Altura não pode estar vazia!");

    if(paciente.gordura.length == 0) erros.push("Gordura não pode estar vazia!"); 

    // se o peso não for válido
    if(!validaPeso(paciente.peso)) erros.push("Peso é inválido!");  // colocando dentro do array 

    if(!validaAltura(paciente.altura)) erros.push("Altura é inválida!");  

    return erros; // retornando no final o array com todos os erros
}