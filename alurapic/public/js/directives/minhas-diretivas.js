
angular.module('minhasDiretivas',[])
.directive('meuPainel',DmeuPainel)
.directive('minhaFoto',DminhaFoto)
.directive('meuBotaoPerigo',meuBotaoPerigo);

function DmeuPainel(){
    var ddo = {};
    ddo.restric = "AE";
    // A - atributo
    // E - element

    ddo.transclude = true;
    ddo.scope = {
        titulo: '@'
    };
    ddo.templateUrl = 'js/directives/meu-painel.html';
    return ddo;
}

function DminhaFoto(){
    var ddo = {};
    ddo.restric = "AE";
    // A - atributo
    // E - element

    ddo.transclude = true;
    ddo.scope = {
        url: '@',
        titulo: '@'
    };

    ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';

    return ddo;
}


function meuBotaoPerigo (){
    var ddo =  {};

    ddo.restric = "E";
    ddo.scope =  {
        nome: '@',
        acao: '&'
    };

    ddo.template = '<button ng-click="acao(foto)" class="btn btn-danger btn-block">{{nome}}</button>';

    return ddo;
}