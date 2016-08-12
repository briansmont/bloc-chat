(function() {
    function HomeCtrl(Room) {
        var ctrl = this;
        ctrl.rooms = Room.all; 

    }
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();