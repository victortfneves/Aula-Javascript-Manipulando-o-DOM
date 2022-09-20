//CRIANDO O BOTÃO DELETA APARTIR DAQUI//
const BotaoDeleta = () => {

    const botaoDeleta = document.createElement('button');

    botaoDeleta.innerText = "Deletar"

    botaoDeleta.addEventListener('click', deletarTarefa);

    const deletarTarefa = (evento) => {
        
        const botaoDeleta  = evento.target 

        const tarefaCompleta = botaoDeleta.parentElement
        
        tarefaCompleta.remove();

                return botaoDeleta
        
    } 
}

export default BotaoDeleta
