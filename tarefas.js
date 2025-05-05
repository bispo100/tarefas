//elementos html
let $tarefa_input = document.getElementById("text.input")
let $erro_msg = document.getElementById("erro_msg")
let $tarefas_lista = document.getElementById("tarefas_lista")

function AdicionarTarefa(){
    $erro_msg.textContent = ""
    let tarefa_txt = $tarefa_input.value.trim()

    if(tarefa_txt !==""){

        //criando elementos
        let $tarefa_item = document.createElement("li")
        let $btn_completar =document.createElement("button")
        let $btn_deletar =document.createElement("button")
        //adicionando conteudo no elemento
        $tarefa_item.innerText =tarefa_txt
        $btn_completar.innerText = "completar"
        $btn_deletar.innerText = "deletar"

        //adicionar o elemento na pagina
        $tarefa_item.appendChild($btn_completar)
        $tarefa_item.appendChild($btn_deletar)
        $tarefas_lista.appendChild($tarefa_item)
        
        //completar
        $btn_completar.addEventListener('click', () => $tarefa_item.classList.add("colorir"))

        //Deletar
        $btn_deletar.addEventListener('click', () => $tarefa_item.remove())


        $tarefa_input.value = ""

    } else {
        $erro_msg.textContent = "Digite uma tarefa!"

    }

}
