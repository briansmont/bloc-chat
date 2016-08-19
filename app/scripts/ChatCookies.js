(function() {
    function ChatCookies($cookies, $uibModal) {
        var userName = $cookies.get('blocChatCurrentUser');
        if (!userName || userName === ''){
            $uibModal.open({
                templateUrl: '/templates/login.html',
                controller: function ($scope, $cookies, $uibModalInstance) {
                    $scope.createUserName = function(userName) {
                        if (userName && userName !== '') {
                            $cookies.blocChatCurrentUser = userName;
                            $uibModalInstance.close();
                        } else {
                            $scope.errorMessage = "Invalid Username";
                        }
                    };
                },
                size: 'sm',
                keyboard: false,
                backdrop: 'static'
            });
        }
    }
    
    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', ChatCookies]);
})();