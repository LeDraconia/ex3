function verificarCampo(){
    
    let select = document.querySelector("select").value

    if(select == 'desabilitado'){

    document.querySelector("input").disable = true

    let msg = document.getElementById("mensagem")

    msg.innerText = "DESABILITADO"

    msg.style.backgroundColor = "red"

    msg.style.color = "white"
     } else{

        document.querySelector("input").disable = false

        let msg = document.getElementById("mensagem")

        msg.innerText = ""
     }


}
