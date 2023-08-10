function tipo_dado()
{
    

    let entrada = prompt("Digte algo .");

    if(!isNaN(entrada))
    {
        alert("Variavel do tipo string");
    }
    else
    {
        alert("variável do tipo number");

    }
}

function par_impar()
{
    do
    {
        numero = prompt("Digite um número inteiro positivo!")

    }while(isNaN(numero) && numero > 0)
    if(numero % 2 == 0)
    {
        alert("O número digitado é par")

    }
    else
    {
        alert("O número digitado é impar")
    }
}
