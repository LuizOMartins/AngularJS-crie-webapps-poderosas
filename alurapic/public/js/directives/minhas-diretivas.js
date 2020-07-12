
angular.module('minhasDiretivas',[])
.directive('meuPainel',DmeuPainel).directive('minhaFoto',DminhaFoto);

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