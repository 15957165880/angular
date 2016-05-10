angular.module("cart", [])
.factory("cart",function(){
	var cartData=[];
	return{
		addProduct:function(id,name,price){
			var ifAddedItem=false;
			for(var i=0;i< cartData.length;i++){
				if(cartData[i]==id){
					cartData[i].count++;
					ifAddedItem=true;
					break;
				}
			}
			if(!ifAddedItem){
				cartData.push({
					count:1,id:id,price:price,name:name
				})
			}
		},
		removeProduct:function(id){
			for(var i=0;i< cartData.length;i++){
				if(cartData[i]==id){
					cartData.splice(i,1)
					break;
				}
			}
		},
		getProducts:function(){
			return cartData;
		}
	}
})
.directive("cartSummary",function(cart){
	return{
		restrict:"E",
		templateUrl:"html/cart/cartSummary.html",
		controller:function($scope){
			var cartData=cart.getProducts();
			$scope.total=function(){
				var total=0;
				for(var i=0;i<cartData.length;i++){
					total+=(cartData[i].price*cartData[i].count)
				}
				return total;
			}
			$scope.itemCount=function(){
				var total=0;
				for(var i=0;i<cartData.length;i++){
					total+=cartData[i].count
				}
				return total;
			}
		}
	}
})





