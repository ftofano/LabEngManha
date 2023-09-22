// Cria objeto Pessoa
function Pessoa(nome, email, datanasc, matricula, foneFixo, foneCelular) {
    this.nome = nome;
    this.email = email;
    this.datanasc = datanasc;
    this.matricula = matricula;
    this.foneFixo = foneFixo;
    this.foneCelular = foneCelular;
}
//Cria Objeto Aluno
function Aluno(nome, email, datanasc, matricula, curso) {
    Pessoa.call(this, nome, email, datanasc, matricula);
    this.curso = curso;
}

//Cria Objeto Professor
function Professor(nome, email, datanasc, matricula, area_atuacao, link_lattes) {
    Pessoa.call(this, nome, email, datanasc, matricula);
    this.area_atuacao = area_atuacao;
    this.link_lattes = link_lattes;
}
// Define de o formulário responsavel pelas informações
document.addEventListener("DOMContentLoaded", function () {
    const meuForm = document.getElementById("cadForm");
  // Evita a recarga da página
    meuForm.addEventListener("submit", function (event) {
      event.preventDefault(); 
  
      // Obtenha os valores dos campos do formulário
      const nome = document.getElementById("nomeInput").value;
      const email = document.getElementById("email").value;
      const datanasc = document.getElementById("data_nascimento").value;
      const matricula = document.getElementById("matricula").value;
  
      const curso = document.getElementById("curso").value;
      const area_atuacao = document.getElementById("area_atuacao").value;
      const link_lattes = document.getElementById("link_lattes").value;
      // Verifica de Aluno foi escolhido e mostra campos adicionais
      if (document.getElementById("Aluno").checked) {
        const aluno = new Aluno(nome, email, datanasc, matricula, curso);
        mostrarInformacoes(aluno);
      //Caso for professor  escolhido e mostra campos adicionais
      } else if (document.getElementById("Professor").checked) {
        const professor = new Professor(nome, email, datanasc, matricula, area_atuacao, link_lattes);
        mostrarInformacoes(professor);
      }

      // Exiba as informações na página
      function mostrarInformacoes(objeto) {
        
        const resultado = document.getElementById("output");
        resultado.innerHTML = `<p>Nome : ${objeto.nome}</p><p>Email: ${objeto.email}</p>`;
    
        // Verifique se é Aluno ou Professor
        if (objeto instanceof Aluno) {
          resultado.innerHTML += `<p>Curso: ${objeto.curso}</p><p>Matricula: ${objeto.matricula}</p>`;
        } else if (objeto instanceof Professor) {
          resultado.innerHTML += `<p>Matricula: ${objeto.matricula}</p><p>Área de Atuação: ${objeto.area_atuacao}</p><p>Link Lattes: ${objeto.link_lattes}</p>`;
        }
      }
    });
  });

function showDiv(elem) {
    document.getElementById('prof').style.display = elem.value === "Professor" ? "block" : "none";
    document.getElementById('al').style.display = elem.value === "Aluno" ? "block" : "none";
}