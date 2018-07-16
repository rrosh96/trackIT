
var contextMenuItem = {
    "id": "trackIT",
    "title": "Add task to trackIT",
    "contexts":["selection"]
};

//
// Create a context menu item with the above details - 
// id-  is important for comparison to know whether user has clicked on out extn
// contexts - lots of contexts are available. here we are using the text selection context
// 
chrome.contextMenus.create(contextMenuItem);


//
// Add a Listener to the click event for our extension in the Context menu.
//
chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId === "trackIT" && clickData.selectionText){
       // Send the parsed data to the labview listening server 
        console.log(clickData.selectionText);
        let data = {
        	"taskName" : clickData.selectionText
        }
      //   $http.post("http://localhost:5000",data)
      //   .then((response)=>{
      //   	console.log(response);
      //   })
     	// .catch((err)=>{
     	// 	console.log(err);
     	// })
     	chrome.runtime.sendMessage({
     		msg : "task_trackIT",
     		data : {
     			"taskName" : clickData.selectionText
     		}
     	})
    }else {
    	console.log("do nothing");
    }
    
});
