(function() {
    function HomeCtrl(Room) {
       this.rooms = Room; 

    }
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
});