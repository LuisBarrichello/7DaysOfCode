const nome = document.querySelector('.input-nome').value;
const idade = document.querySelector('.input-idade').value;
const linguagem = document.querySelector('.input-linguagem').value;
const button = document.querySelector('#submit-date');

button.addEventListener('click', criaSection);

function criaSection () {
    var section = document.createElement('section')
    section.className = 'section'

    section.innerHTML = `
                            <p>Olá ${nome.value}, você tem ${idade.value} anos e já está aprendendo ${linguagem.value}!</p>
                            <p>Você gosta de estudar ${linguagem.value}?</p>
                            <form action="">
                                <label for="sim" class="sim">Sim</label>
                                <input type="radio" name="opcao" id="sim" value="Sim">

                                <label for="nao" class="nao">Sim</label>
                                <input type="radio" name="opcao" id="nao" value="Não">

                            </form>
                        `;
    
    document.body.appendChild(section);

    var div = document.createElement('div')
    div.className = 'div'

    var inputSim = document.querySelector('sim');
    var inputNao = document.querySelector('nao');

    if (inputSim.value == 'Sim') {
        div.innerHTML = `<p>Muito bom! Continue estudando e você terá muito sucesso.</p>`
    } else
        if (inputNao.value == 'Não') {
        div.innerHTML = `<p>Ahh que pena... Já tentou aprender outras linguagens?</p>`
    }
}