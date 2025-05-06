//elementos html
let $tarefa_input = document.getElementById("text.input")
let $erro_msg = document.getElementById("erro_msg")
let $tarefas_lista = document.getElementById("tarefas_lista")

function AdicionarTarefa(){
    $erro_msg.textContent = ""
    let tarefa_txt = $tarefa_input.value.trim()

    if(tarefa_txt !==""){

        //criando elementos
        let $tarefa_item = document.createElement("Li")
        let $btn_completar =document.createElement("button")
        let $btn_deletar =document.createElement("button")
        //adicionando conteudo no elemento
        $btn_completar.innerText = "completar"
        $btn_completar.classList.add("btn_completar")
        $btn_deletar.innerText = "deletar"
        $btn_deletar.classList.add("btn_deletar")
        $tarefa_item.innerText =tarefa_txt

        //adicionar o elemento na pagina
        $tarefa_item.appendChild($btn_completar)
        $tarefa_item.appendChild($btn_deletar)
        $tarefas_lista.appendChild($tarefa_item)
        
        //completar tarefa
            $btn_completar.addEventListener('click', () => {
            $tarefa_item.classList.add("tarefa_item") 
            SalvarTarefa()
        })

        // localStorage.setItem('tarefa', tarefa_txt)
        // sessionStorage.setItem('tarefa', tarefa_txt)
        //Deletar
            $btn_deletar.addEventListener('click', () => 
            $tarefa_item.remove("apagar"))
            
        $tarefa_input.value = ""
        SalvarTarefa()

    } else {
        $erro_msg.textContent = "Digite uma tarefa!"
        $erro_msg.classList.add("erro_msg")

    }

}



function SalvarTarefa(){
    let tarefas = []
    $tarefas_lista.querySelectorAll("li").forEach((li) =>{
        tarefas.push({
            texto: li.firstChild.textContent,
            completada: li.classList.contains('completa')
        })
    })
    localStorage.setItem('tarefa', JSON.stringify(tarefas))

}