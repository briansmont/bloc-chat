(function() {
    function MessageService($firebaseArray) {
        var MessageService = {};
        
        var messageRef = firebase.database().ref().child("messages");
        var messages = $firebaseArray(messageRef);
        
        MessageService.send = function(message) {
            messages.$add({content: message.content,
                            roomId: message.roomId,
                            userName: message.userName
                        });
        };
        MessageService.bind = function() {
            return messages;
        };
        
        
        MessageService.getByRoomId = function(roomId) {
            console.log(roomId);
            return $firebaseArray(messageRef.orderByChild('roomId').equalTo(roomId));
        };        
        
        
        
        return MessageService;
        
    }
    
    angular
        .module('blocChat')
        .factory('MessageService', ['$firebaseArray', MessageService]);
    
})();