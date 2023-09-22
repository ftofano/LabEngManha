//Classe carro
class Carro {

    //Construtor da classe
    constructor(marca, modelo, ano, cor, km, valor_fipe, placa) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
        this.km = km,
        this.valor_fipe = valor_fipe;
        this.placa = placa;
    }
    
    //Metodo anos utilizados
    anosUtilizados(placa) {
        var dataAtual = new Date();
        var anoAtual = dataAtual.getFullYear();
        var anosDoCarro = 0;

        for (var i = 0; i < vet_car.length; i++) {
            if (placa == vet_car[i].placa) {
                var ano_carro = vet_car[i].ano;
                anosDoCarro = anoAtual - ano_carro;
                return anosDoCarro;
            }
        }

        if (anosDoCarro == 0) {
            return "Veículo não encontrado.";
        }
    }

    valorMercado(placa) {
        
        for (var i = 0; i < vet_car.length; i++) {
            if (placa == vet_car[i].placa) {
                
                if(vet_car[i].km < 30000 ){
                    return vet_car[i].valor_fipe * 1.1;
                }
                else if(vet_car[i].km > 30000  && vet_car[i].km <=50000  ){
                    return vet_car[i].valor_fipe;
                }
                else if(vet_car[i].km > 50000){
                    return vet_car[i].valor_fipe / 1.1;
                }                              
            }
        }

    }
}

let vet_car = [];

// Função para adicionar um carro ao vetor
function adicionaCarro(marca, modelo, ano, cor, km, valor_fipe, placa) {
    vet_car.push(new Carro(marca, modelo, ano, cor, km, valor_fipe, placa));
}

// Adicionar evento de envio para o formulário de adicionar carro
document.addEventListener("DOMContentLoaded", function () {
    const meuForm = document.getElementById("CarForm");
    meuForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita a recarga da página

        // Obter valores do formulário
        const marca = document.getElementById("marca").value;
        const modelo = document.getElementById("modelo").value;
        const ano = parseInt(document.getElementById("ano").value);
        const cor = document.getElementById("cor").value;
        const km = parseInt(document.getElementById("km_rodado").value);
        const valor_fipe = parseFloat(document.getElementById("valor_fipe").value);
        const placa = document.getElementById("placa").value;

        // Adicionar o carro ao vetor
        adicionaCarro(marca, modelo, ano, cor, km, valor_fipe, placa);

        // Limpar o formulário
        document.getElementById("CarForm").reset();
    });

    // Adicionar evento de clique para o botão de pesquisa
    document.getElementById("search-button").addEventListener("click", function () {
        // Obter valor da placa de pesquisa
        const placa_pesquisa = document.getElementById("placa_pesquisa").value;
        // Criar uma instância de Carro
        const carro = new Carro();
        // Obter anos de uso e valor de mercado
        const anosUso = carro.anosUtilizados(placa_pesquisa);
        const valorMercado = carro.valorMercado(placa_pesquisa);
        // Exibir os resultados na div "resultadoPesquisa"
        const resultadoPesquisa = document.getElementById("resultadoPesquisa");
        resultadoPesquisa.innerHTML = `<p>Placa: ${placa_pesquisa}</p>
        <p>Anos de uso: ${anosUso}</p><p>Valor de Mercado: ${valorMercado}</p>`;
    });
});
