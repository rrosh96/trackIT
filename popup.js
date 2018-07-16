var angularApp = angular.module('angularApp', []);
// var xhr = new XMLHttpRequest();
// xhr.open("POST", 'http://loc', true);
angularApp.service('httpService', ["$http", function($http){
    var self = this;
    this.postMessage = function(data){
        $http.post("http://localhost:6007/WebServices/GetNotes", data)
        .then(function(res){
            console.log(res);
        })
        .catch(function(err){
            console.log(err);
        })
    }

    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse){
            if(request.msg === "task_trackIT"){
               console.log(request.data.taskName);
               // httpService.postMessage()
               // xhr.send("1234")
               self.postMessage({"Notes":request.data.taskName})
            }
        }
    )

}])

angularApp.controller('mainController', ["httpService", function(httpService){

}])

  

