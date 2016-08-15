(function() {
    function ModalInstanceCtrl($uibModalInstance, Room, $scope) {
        var ModalCtrl = this;
        
        ModalCtrl.addRoom = function(room) {
            Room.addRoom(room);
        };
        
        $scope.createRoom = function() {
            ModalCtrl.addRoom($scope.room);
            $uibModalInstance.close();
        };
        $scope.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    }
    
    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', 'Room', '$scope', ModalInstanceCtrl]);
    
})();