function insert(number){
        //exibe os numeros digitados no paragrafo
        document.getElementById("results").innerHTML += number        
}


function clean(){

    //limpa os numeros digitados
    document.getElementById("results").innerHTML = ""
}

function calc(){

    //atribui o resultado calculado em uma variavel
    let result = eval(document.getElementById("results").innerHTML)

    //caso não tenha nenhum valor digitado não acontece nada
    if(result === undefined){

    }else{
        //exibe o resultado calculado
        document.getElementById("results").innerHTML = result
    }

}

function cancelEntry(){

    //atribui os numeros digitados em uma variavel
    let result = document.getElementById("results").innerHTML

    //remove o ultimo caractere da string
    document.getElementById("results").innerHTML = result.substring(0, result.length -1)
}

