var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    console.log("Buscando pacientes...");

    var xhr = new XMLHttpRequest(); // objeto responsavel por fazer requisições http

    // fzd uma requisiçaõ do tipo GET p/ o endereço mostrado
    xhr.open("GET", "https://api-pacientes.herokuapp.com/paci1entes"); 

    // p/ mostrar os dados da respostas no console
    // Para os dados serem exibidos, após o envio da requisição, devemos escutar um evento específico que é acionado quando a requisição termina e a sua resposta é carregada. Ao escutarmos o evento, carregaremos a resposta da requisição - que no caso, serão nossos dados.
    xhr.addEventListener("load", function() {

        var erroAjax = document.querySelector("#erro-ajax");
        // testando se a requisição deu certo(código/status)
        if(xhr.status == 200) {
            erroAjax.classList.add("invisivel"); //deixa invisivel

            var resposta = xhr.responseText;

            var pacientes = JSON.parse(resposta); // transformando de json(string do arquivo) p/ objetos em js
    
            // p/ cada pacienteS chama a função p/ add os pacientes buscados na tabela 
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente); 
            }); 
        } else {
            console.log(xhr.status); // mostra o código do erro
            console.log(xhr.responseText); // mostra o texto do erro
            erroAjax.classList.remove("invisivel"); // quando ocorrer um erro -> tirar a class invisivel p/ aparecer a mensagem de erro
        }
 
    }); 

    xhr.send(); // pega a requisição que foi criada e envia ela
});  