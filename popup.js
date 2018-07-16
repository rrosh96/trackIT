var angularApp = angular.module('angularApp', []);


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
        if(request.msg === "task_trackIT"){
           console.log(request.data.taskName);

        }
    }
)  