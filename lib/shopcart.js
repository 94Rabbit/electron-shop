const shell = require('electron').shell;
const os = require('os');
const mysql = require('mysql');
const db = require('./connection');
const apiUrl = require('./apiConfig');
var shopcart = root.controller('shopcart',['$scope','$http',function($scope,$http){
    $scope.num = 16;
    $scope.openFile = function(){
        // shell.showItemInFolder(os.homedir());
        shell.openExternal('https://github.com');
    };
    $scope.setTableLayout =  function(){
        alert('setTableLayout');
    };
    $scope.setListLayout =  function() {
        alert('setListLayout');
    };
    $http.get( apiUrl + 'getProduct.php',{cache:true})
        .then((res=>{
           $scope.data = res.data;
        }),(res)=>{
            $scope.data = res.data;
        });
    $scope.loadData = function () {
       // $scope.isTrue = !$scope.isTrue;
        alert('123');
    };
    $scope.name =  db.query("select * from `user`",(err,data)=>{
        $scope.username =  'welcome,' + data[0].name;
    });
    $scope.openDb = function(){
        db.query("select * from `user`",(err,data)=>{
            $scope.username = data[0].name;
        });
    };
    $scope.hover = function(){
        $scope.unhover = !  $scope.unhover;
    }
}]);
module.exports = shopcart;