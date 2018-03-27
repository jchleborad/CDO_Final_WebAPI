class ShoppingCartController {
    constructor($scope, $http, ngCart) {
        ngCart.setTaxRate(8.60); //City of Phoenix current rate 12/2017
        ngCart.setShipping(0.00); //Digital download, no shipping costs
    }
}
angular.module('myApp').controller('myCtrl', ShoppingCartController);






//class ShoppingCartController {
//    constructor() {
//    }
//}