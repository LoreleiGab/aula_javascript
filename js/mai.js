/*
let nome = "Lorelei Lourenço";
let n1 = 35;
let n2 = 10;
//alert(nome + " tem " + n1 + " anos");
console.log(nome);
console.log(n1 * n2);
*/

/*
let frase = "Japão é o melhor time do mundo";
console.log(frase.replace("Japão","Brasil"))
console.log(frase.toUpperCase()); //deixa em maiúsculo
console.log(frase.toLowerCase()); //deixa em minúsculo
*/
/*
function soma(n1,n2){
    return n1 + n2;
}

let validar = 0;

function validaIdade(idade){
    if(idade >= 18){
        validar = true
    } else{
        validar = false
    }
    return validar;
}

let idade = prompt("Qual a sua idade?");
validaIdade(idade)
console.log(validar);
*/

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //innerHTML injeta um HTML
}

function redirecionar(){
    window.open("https://www.google.com/"); //abre numa nova guia
    window.location.href = "https://www.google.com/"; //abre na mesma guia
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){// quando carregar a página
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);//coleta o valor que foi colocado no select
}

let lista = ["maça", "pera", "laranja"];
lista.push("uva");//adciona no array
lista.pop(); //remove do array
console.log(lista);
console.log(lista[1]); //exibe só a posição 1 do array
console.log(lista.length); //mostra o tamanho do array
console.log(lista.reverse()); //exibe os itens do array na ordem reversa
console.log(lista.toString()); //converte array em string
console.log(lista.toString()[0]); //converte array em string e imprime só a primeira letra
console.log(lista.join(" | ")); //converte array em string e a separação de cada item é conforme o join


/*
let fruta = {nome:"maçã", cor:"vermelha"};
let frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
console.log(fruta);
console.log(frutas);
*/

/*
let idade = prompt("Qual sua idade?");//exibe um alert com campo de preenchimento
if (idade >= 18){
    alert("Maior de idade");
} else{
    alert("Menor de idade");
}*/

/*
let count = 0;
while (count <= 5){
    console.log(count);
    count ++;
}
*/

/*
let count;
for(count=0; count <=5; count++){
    console.log(count);
}
*/

/*
let d = new Date();
console.log(d);
console.log(d.getMonth()+1); //retorna o mês, porém precisa adicionar +1 pq ele conta do 0
console.log(d.getDay());
console.log(d.getHours());
console.log(d.getMinutes());
*/
