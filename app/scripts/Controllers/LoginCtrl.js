(function() {
    function LoginCtrl($scope, $cookies, $uibModalInstance) {
        $scope.createUserName = function(userName) {
            if (userName && userName !== '') {
                $cookies.blocChatCurrentUser = userName;
                $uibModalInstance.close();
                console.log("create user name");
            }
            else {
                $scope.errorMessage = "Invalid Username";
            }
        };
    }
    
    angular
        .module('blocChat')
        .controller('LoginCtrl', ['$scope', '$cookies', '$uibModalInstance', LoginCtrl]);
    
})();