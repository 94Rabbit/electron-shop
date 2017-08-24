const shell = require('electron').shell
const os = require('os');
var shopcart = root.controller('shopcart',['$scope',function($scope){
    $scope.openFile = function(){
        // shell.showItemInFolder(os.homedir());
        shell.openExternal('https://github.com');
    };
}]);
module.exports = shopcart;