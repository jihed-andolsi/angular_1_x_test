/**
 * Created by Andolsi on 28/02/2018.
 */
class homeController {
    constructor($scope, data) {
        $scope.data = data;
    }
}
homeController.$inject = ['$scope', 'data'];
export default homeController;
