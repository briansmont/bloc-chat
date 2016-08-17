(function() {
    function MainCtrl($uibModal, Room, MessageService, $scope) {
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
        
        ctrl.setRoom = function(room) {
            $scope.roomTitle = room.name;
            Room.getMessages(room.$id, function(messages) {
                $scope.messages = messages;
            });
        };
        ctrl.createMessage = function() {
            MessageService.addRoom(ctrl.message);
        }
        
        
    }
    angular
        .module('blocChat')
        .controller('MainCtrl', ['$uibModal', 'Room', 'MessageService', '$scope', MainCtrl]);
})();