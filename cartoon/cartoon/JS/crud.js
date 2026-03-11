function bd() { 
    let data = [
        {id:1,nome:"John Wick", login:"wick", senha: "1234", email:"wick@ig.com" }, //00
        {id:2, nome: "Lia" , login:"lia.sanva", senha: "123456", email:"lia@ig.com" }, //01
        {id:3, nome: "Bernardo" , login:"bernardo.sanva", senha: "123456", email:"bernards@ig.com" } //02
    
    ]

    let json = JSON.stringify(data)
    localStorage.setItem("meubanco", json)

         return json
}

function adicionar() {
    let bd = JSON.parse(localStorage.getItem("meubanco"))

    let ids = Date.now()
    let nome = document.querySelector("#nome").value
    let lg = document.querySelector("#login").value
    let sn  =   document.querySelector("#senha").value
    let mail =  document.querySelector("#email").value

    let cad = {id:ids, nome: nome, login:lg, senha:sn, email: mail}
    bd.push(cad)
    let json = JSON.stringify(bd)
    localStorage.setItem("meubanco", json )

    let cad1 =  {id:ids, nome: "Lia" , login:"lia.sanva", senha: "123456", email:"lia@ig.com" }
}


//const dados = bd()

//console.log(dados)

