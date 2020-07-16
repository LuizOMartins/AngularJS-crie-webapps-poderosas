angular.module('alurapic').controller('FotosController',function($scope, $http){
  
    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';

     $http.get('v1/fotos').success(function(fotos){
        $scope.fotos = fotos;
     }).error(function(erro){
        console.log(erro);
     });

     $scope.remover = function(foto){
        $http.delete('v1/fotos/'+ foto._id)
        .success(function(){
         
         var indiceFoto = $scope.fotos.indexOf(foto);
         $scope.fotos.splice(indiceFoto,1);
         
         console.log('Foto Removida com sucesso');
         $scope.mensagem = 'Foto removida com sucesso.';

        }).error(function(){
         console.log('Não foi possível remover a foto');
         $scope.mensagem = 'Não foi possível remover a foto: '+foto.titulo;

        });


     };



    /*
    promise.then(function(retorno){
       $scope.fotos = retorno.data; 
    }).catch(function(error){
        console.log(error)
    });
    */

});