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
            $scope.roomTitle = room.roomName;
            console.log(room.roomName);
            var messages = MessageService.getByRoomId(room.$id);
        };
        ctrl.sendMessage = function(message) {
            message.roomId = $scope.roomId;
            MessageService.send(message);
        };
        
        
    }
    angular
        .module('blocChat')
        .controller('MainCtrl', ['$uibModal', 'Room', 'MessageService', '$scope', MainCtrl]);
})();