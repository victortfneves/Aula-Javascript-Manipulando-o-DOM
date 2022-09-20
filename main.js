import BotaoConclui from './concluiTarefa'

import BotaoDeleta from './deletaTarefa'

const criarTarefa = (evento) => {
// Quando criamos uma "Real Function" devemos usar essa setinha => na declaração: Ex. qualQuerCoisa = () => {bloco de instrução}//
    evento.preventDefault();

    const lista = document.querySelector('[data-list]');

    const input = document.querySelector('[data-form-input]');

    const valor = input.value 
    // Aqui em baixo temos o procedimento para a criação automática de <li> e <p> para acrescentar item à lista no site//
    const tarefa = document.createElement('li');

    tarefa.classList.add('task');

    const conteudo = `<p class="content">${valor}</p>`

    tarefa.innerHTML = conteudo 

    tarefa.appendChild(BotaoConclui()); 

    tarefa.appendChild(BotaoDeleta());
    
    lista.appendChild(tarefa);
    
    input.value = "" 
}
    
    const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa ); 
