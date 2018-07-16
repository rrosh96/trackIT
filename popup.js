var angularApp = angular.module('angularApp', []);
var xhr = new XMLHttpRequest();
xhr.open("POST", 'http://loc', true);



chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        if(request.msg === "task_trackIT"){
           console.log(request.data.taskName);
           // httpService.postMessage()
           xhr.send("1234")
        }
    }
)  

