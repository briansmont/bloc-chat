(function() {
    function MessageService($firebaseArray) {
        var MessageService = {};
        
        var messageRef = firebase.database().ref().child("messages");
        var messages = $firebaseArray(messageRef);
        
        MessageService.send = function(message) {
            console.log(message.content);
            console.log(messages);
            messages.$add({content: message.content,
                            roomId: message.roomId
                            //userName: message.userName
                        });
            console.log("message send test");
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