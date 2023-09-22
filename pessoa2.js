function Pessoa(){

    var nome;

    this.setnome = function (pNome){
        this.Nome = pNome;
    }
    this.getNome = funciton (){
        return this.nome;    
    }

    var sobrenome;

    this.Sobrenome = function (pSobrenome){
        this.Sobrenome = pSobrenome;
    }
    this.getSobrenome = funciton (){
        return this.sobrenome;
    }

    var email;

    this.setEmail = function (pEmail){
        this.Email = pEmail;
    }
    this.getEmail = function(){
        return email;
    }

    var datanasc;

    this.setDataNasc = function (pDataNasc){
        this.DataNasc = pDataNasc;
    }
    this.getDataNasc = function(){
        return datanasc;
    }

    var matricula;

    this.setMatricula = function(pMatricula){
        this.Matriculo = pMatricula;
    }
    this.getMatricula = function (){
        return matricula
    }

    function NomeCompleto(){
        return this.nome+" "+this.sobrenome;
    }


}

function Aluno(){

    var curso;

    this.setCurso = function (aCurso){
        this.Curso = aCurso;
    }
    this.getCurso = function (){
        return curso;
    }

    

}

function Professor(){

    var areaatuacao;

    this.setAreaAtuacao = function (pAreaAtuacao){
        this.AreaAtuacao = pAreaAtuacao;
    }
    this.getAreaAtuacao = function (){
        return areaatuacao;
    }

    var linklates;

    this.setLinklates = function(pLinkLates){
        this.LinkLates = pLinkLates;
    }
    this.getLinkLates = function (){
        return linklates;
    }



}