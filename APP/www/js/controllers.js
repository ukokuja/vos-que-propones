angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
        $scope.partidos = partidos;
        $scope.candidatos = candidatos;
        $scope.propuestas = propuestas;
        angular.forEach($scope.candidatos, function(candidato){
            if(!$scope.partidos[candidato.partido].candidatos)
                $scope.partidos[candidato.partido].candidatos = [];
            $scope.partidos[candidato.partido].candidatos.push(candidato);

        })
        angular.forEach($scope.propuestas, function(propuesta){
            if(!$scope.partidos[propuesta.partido].propuestas)
                $scope.partidos[propuesta.partido].propuestas = []
            $scope.partidos[propuesta.partido].propuestas.push(propuesta);
            if(!$scope.candidatos[propuesta.candidato].propuestas)
                $scope.candidatos[propuesta.candidato].propuestas = []
            $scope.candidatos[propuesta.candidato].propuestas.push(propuesta);
        })
});
