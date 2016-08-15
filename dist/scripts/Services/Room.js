(function() {
    function Room($firebaseArray) {
        var Room = {};
        
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        
        Room.all = rooms;
        
        Room.addRoom = function(room) {
            rooms.$add({ roomName: "zzz" })
        };
        
        
        Room.bind = function() {
            return rooms;
        };
       
        
        
        return Room;
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();