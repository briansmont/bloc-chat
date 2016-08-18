(function() {
    function ChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
            console.log('testing for chatroom user name');
            if (!currentUser || currentUser === ''){
            $uibModal.open({
                templateUrl: '/templates/login.html',
                controller: 'LoginCtrl',
                
            });
        }
    }
    
    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', ChatCookies]);
})();