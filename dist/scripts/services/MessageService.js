(function() {
    function MessageService($firebaseArray) {
        var MessageService = {};
        
        var messageRef = firebase.database().ref().child("messages");
        var messages = $firebaseArray(messageRef);
        
        MessageService.sendMessage = function(message) {
            messages.$add({username: message.username,
                          content: message.content,
                          sentAt: firebase.ServerValue.TIMESTAMP,
                          roomId: room 
                          });
        };
        MessageService.bind = function() {
            return messages;
        };
        
        return MessageService;
        
    }
    
    angular
        .module('blocChat')
        .factory('MessageService', ['$firebaseArray', MessageService]);
    
})();