const formDados = document.getElementById('formulario')
let usuarios = []

formDados.addEventListener('submit', function(evento){
    evento.preventDefault()

    if(!validarCheckbox()){
        return
    }

    const formulario = new FormData(formDados)//captura os pares de chave e valor (nome: Fulano)
    const usuario = {}

    formulario.forEach((value, key) => {

        if (!Array.isArray(usuario[key])) {//inicia um array caso não exista
            usuario[key] = [];
        }

        if (formDados.querySelector(`[name="${key}"]`).type === 'radio') {            
            const radioSelecionado = formDados.querySelector(`input[name="${key}"]:checked`)
            usuario[key] = formDados.querySelector(`label[for="${radioSelecionado.id}"]`).innerText
        } else {
            usuario[key].push(value)
        }
    })
    usuarios.push(usuario)
    console.log(usuario)
    formDados.reset()
});

let interesses = []
function validarCheckbox() {
    const interesse = document.querySelectorAll('input[type=checkbox]')
    let selecionado = false
    
    interesse.forEach((checkbox) => {
        if (checkbox.checked) {
            selecionado = true;
            interesses.push(checkbox.value);
        }
    })

    if (!selecionado){
        alert('Selecione pelo menos uma área de interesse!')
        return false
    }                                                           
    return true
}