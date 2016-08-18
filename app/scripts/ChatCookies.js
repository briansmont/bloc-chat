(function() {
    function ChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        console.log(currentUser);
        if (!currentUser || currentUser === ''){
            $uibModal.open({
                templateUrl: '/templates/login.html',
                controller: 'LoginCtrl',
                size: 'sm'
            });
            console.log("modal should open");
        }
    }
    
    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', ChatCookies]);
})();