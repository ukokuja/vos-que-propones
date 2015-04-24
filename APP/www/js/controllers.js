angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
        $scope.partidos = partidos;
        $scope.candidatos = candidatos;
        $scope.propuestas = propuestas;
        angular.forEach($scope.propuestas, function(value, key){
            value.codigo = key;
        });
        $scope.temas = temitas;
        $scope.selected = {
            show: false
        }
        $scope.select = function(code){
            if(!$scope.selected.show){
                $scope.selected = $scope.temas[code];
                $scope.selected.show = true;
                $scope.selected.code = code;
            }else{
                if(code == $scope.selected.code){
                    $scope.selected.show = false;
                    $scope.selected.code = -10;
                }else{
                    $scope.selected = $scope.temas[code];
                    $scope.selected.show = true;
                    $scope.selected.code = code;
                }
            }
        }
        $scope.count = function(val){
            return val;
        }
        console.log(candidatos);

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
            if(!$scope.temas[propuesta.tema.codigo].propuestas)
                $scope.temas[propuesta.tema.codigo].propuestas = [];
            $scope.temas[propuesta.tema.codigo].propuestas.push(propuesta);
        })

    })
    .controller('ChatPropuestaCtrl', function($scope, $stateParams) {
        $scope.partidos = partidos;
        $scope.candidatos = candidatos;
        $scope.propuestas = propuestas;
        angular.forEach($scope.propuestas, function(value, key){
            value.codigo = key;
        });
        $scope.temas = temitas;
        $scope.propuesta = $scope.propuestas[$stateParams.propuesta]

    })
.controller('ChatsCtrl', function($scope) {
        $scope.partidos = partidos;
        $scope.candidatos = candidatos;
        $scope.propuestas = propuestas;
        angular.forEach($scope.propuestas, function(value, key){
            value.codigo = key;
        });
        console.log(candidatos);
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
})

.controller('ChatDetailCtrl', function($scope, $stateParams) {
        $scope.partidos = partidos;
        $scope.candidatos = candidatos;
        $scope.propuestas = propuestas;
        angular.forEach($scope.propuestas, function(value, key){
            value.codigo = key;
        });
        $scope.temas = temitas;
        $scope.selected = {
            show: false
        }
        $scope.select = function(code){
            if(!$scope.selected.show){
                $scope.selected = $scope.temas[code];
                $scope.selected.show = true;
                $scope.selected.code = code;
            }else{
                if(code == $scope.selected.code){
                    $scope.selected.show = false;
                    $scope.selected.code = -10;
                }else{
                    $scope.selected = $scope.temas[code];
                    $scope.selected.show = true;
                    $scope.selected.code = code;
                }
            }
        }
        $scope.count = function(val){
            return val;
        }
        console.log(candidatos);

        angular.forEach($scope.candidatos, function(candidato){
            if(!$scope.partidos[candidato.partido].candidatos)
                $scope.partidos[candidato.partido].candidatos = [];
            $scope.partidos[candidato.partido].candidatos.push(candidato);

        })

        angular.forEach($scope.propuestas, function(propuesta){
            if(propuesta.candidato == $stateParams.candidato){
                if(!$scope.candidatos[propuesta.candidato].propuestas)
                    $scope.candidatos[propuesta.candidato].propuestas = []
                $scope.candidatos[propuesta.candidato].propuestas.push(propuesta);
                if(!$scope.temas[propuesta.tema.codigo].propuestas)
                    $scope.temas[propuesta.tema.codigo].propuestas = [];
                $scope.temas[propuesta.tema.codigo].propuestas.push(propuesta);
            }
            $scope.candidato = $scope.candidatos[$stateParams.candidato];
        })

})

.controller('AccountCtrl', function($scope) {
        $scope.partidos = partidos;
        $scope.candidatos = candidatos;
        $scope.propuestas = propuestas;
        angular.forEach($scope.propuestas, function(value, key){
            value.codigo = key;
        });
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
