const form=document.getElementById('formulario');
const nomeCliente= document.getElementById('nome');
let formEvalido = false;

function validaNome( nomeCompleto){
    const nomeComoArrey = nomeCompleto.split(' ');
    return nomeComoArrey.length >= 2;
}


let linhas ='';


form.addEventListener('submit',function (e){
    e.preventDefault();
    
    formEvalido = validaNome(nomeCliente.value);
    if(formEvalido){
    const agendadook = document.querySelector('.ageok');
    agendadook.style.display='block';   
    
    
    adicionaLinha();
} else{
    const erroNome = document.querySelector('.nomeErro');
    erroNome.style.display ='block';
    nomeClient.value = '';
    contat.value = '';  

}



})

function adicionaLinha(){
    const nomeClient=document.getElementById('nome');
    const contat=document.getElementById('contato');

    let linha = '<tr>';
    linha += `<td>${nomeClient.value}</td>`;
    linha += `<td>${contat.value}</td>`;
    linha +=`</tr>`;
    linhas += linha
    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;
    nomeClient.value = '';
    contat.value = '';


}
nomeCliente.addEventListener('keyup',function(e){
    formEvalido = validaNome(e.target.value);

    if(!formEvalido){const erroNome = document.querySelector('.nomeErro');
    erroNome.style.display ='block';
        
    }
    else{const erroNome = document.querySelector('.nomeErro');
    erroNome.style.display ='none';
    }
});