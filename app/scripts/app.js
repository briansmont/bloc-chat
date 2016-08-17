(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'MainCtrl as main',
                templateUrl: '/templates/home.html'
            })
            .state('ModalInstanceCtrl', {
                url: '/',
                controller: 'ModalInstanceCtrl as modal',
                templateURL: 'templates/modal_instance.html'
        });
    }
    angular
        .module('blocChat', ['ui.router', 'firebase', 'ui.bootstrap'])
        .config(config);
})();