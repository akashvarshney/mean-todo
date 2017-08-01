//create a service for todo operations
angular.module('todoService', [])
    .factory('Todo',['$http',function($http){
        return{
            get: function(){
                return $http.get('api/todos');
            },
            create: function(){
                return $http.post('api/todos',todoData);
            },
            delete:function(){
                return $http.delete('api/todos'+ id);
            }
        }
    }]);