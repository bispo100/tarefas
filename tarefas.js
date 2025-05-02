//elementos html
let $tarefa_input = document.getElementById("text.input")
let $erro_msg = document.getElementById("erro_msg")
let $tarefas_lista = document.getElementById("tarefas_lista")

function AdicionarTarefa(){
    let tarefa_txt = $tarefa_input.value.trim()

    //criando elementos
    let $tarefa_item = document.createElement("li")
    
    //adicionando conteudo no elemento
    $tarefa_item.innerText =tarefa_txt

    //adicionar o elemento na pagina
    $tarefas_lista.appendChild($tarefa_item)
    $tarefa_input.value = ""

}
