(function() {
    function Room($firebaseArray) {
        var Room = {};
        
        var roomRef = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(roomRef);
        var messageRef = firebase.database().ref().child("messages");
        var messages = $firebaseArray(messageRef);
        
        
        
        Room.all = rooms;
        
        Room.addRoom = function(room) {
            rooms.$add({ roomName: room })
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