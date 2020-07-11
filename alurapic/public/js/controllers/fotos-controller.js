angular.module('alurapic').controller('FotosController',function($scope, $http){
  
    $scope.fotos = [];

    
     $http.get('v1/fotos').sucess(function(fotos){
        $scope.fotos = fotos;
     }).error(function(erro){
        console.log(erro);
     });

    /*
    promise.then(function(retorno){
       $scope.fotos = retorno.data; 
    }).catch(function(error){
        console.log(error)
    });
    */



});