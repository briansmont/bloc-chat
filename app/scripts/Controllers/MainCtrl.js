(function() {
    function MainCtrl($uibModal, Room, MessageService, $scope, $cookies) {
        var ctrl = this;
        ctrl.rooms = Room.bind(); 
        ctrl.currentRoom = null;
        ctrl.room$id = null;
        
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
            ctrl.currentRoom = room;
            console.log(ctrl.currentRoom);
            $scope.roomTitle = room.roomName;
            console.log(room.roomName);
            $scope.messages = MessageService.getByRoomId(room.$id);
            $scope.roomId = room.$id;
            //ctrl.room$id = room.$id;
        };
        ctrl.sendMessage = function(message) {
            message.userName = $cookies.get('blocChatCurrentUser');
            message.roomId = $scope.roomId;
            MessageService.send(message);
            message.content = $scope.message.content;
        };
        
        
    }
    angular
        .module('blocChat')
        .controller('MainCtrl', ['$uibModal', 'Room', 'MessageService', '$scope', '$cookies', MainCtrl]);
})();