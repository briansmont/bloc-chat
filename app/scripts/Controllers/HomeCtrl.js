(function() {
    function HomeCtrl($uibModal, Room) {
        var ctrl = this;
        ctrl.rooms = Room.bind(); 
        
        ctrl.open = function() {
            $uibModal.open({
                templateUrl: '/templates/modal_instance.html',
                controller: 'ModalInstanceCtrl',
                resolve: {
                    rooms: function() {
                        return ctrl.rooms;
                    }
                }
            });
        };
        
        
    }
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$uibModal', 'Room', HomeCtrl]);
})();