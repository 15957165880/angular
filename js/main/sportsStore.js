angular.module("sportsStore", [])
.controller("sportsStoreContrl",["$scope","$http",function($scope,$http){
	$scope.data={
		products:[
			{name:"Product #1",description:"A product",category:"Category #1",price:100},
			{name:"Product #2",description:"B product",category:"Category #2",price:110},
			{name:"Product #3",description:"C product",category:"Category #3",price:120},
			{name:"Product #4",description:"D product",category:"Category #4",price:130}
		]
	}
}])

