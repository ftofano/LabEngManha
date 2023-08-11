function tipo_dado()
{    

    let entrada = prompt("Digte alguma coisa .");

    if(isNaN(entrada))
    {
        alert("Variavel do tipo string");
    }
    else
    {
        alert("variável do tipo number");

    }
}
function primo(){
    let numero = parseInt(prompt("Digite um número: "));
    let resposta = 0;
    let divisores= 0;
  
    for(let count=1 ; count<=numero ; count++)
     if(numero % count == 0)
         divisores++;
    
    if(divisores==2)
        alert("É primo");
    else
    alert("Não é primo");
  }

function par_impar()
{
    let numero = 0;
    do
    {
        numero = prompt("Digite um número inteiro positivo!");

        if(isNaN(numero));
        {
            numero = parseInt(numero);            
        } 

    }while( numero < 0)
    if(numero % 2 == 0)
    {        
        alert("O número digitado é par");
    }
    else
    {
        alert("O número digitado é impar");
    }
}

function fatorial()
{
    let numero = prompt("Digite um número inteiro positivo.");
    let resultado = 1;
    if(numero == 0 || numero == 1)
    {
        alert("fatorial do número digitado é = "+resultado);
    }
    else
    {
        for(let i = 1; i <= numero; i++)
        {
            resultado *= i;
        }
        alert("fatorial do número digitado é = "+resultado);
    }
    
} 



