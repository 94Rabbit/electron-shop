var home = root.controller('home',['$scope',function($scope){

    $scope.locate = function(){
        ipcRenderer.send('locate','location');
    };

}]);
module.exports = home;
