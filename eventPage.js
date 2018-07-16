
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
// post the selected Text to the listening server.
//
//
const postData = (url = `http://localhost:6007/WebServices/GetNotes`, data = {}) => {
  // Default options are marked with *
    return fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, same-origin, *omit
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response => console.log("Successfully fetched with :", response)) // parses response to JSON
    .catch(error => console.error(`Fetch Error =\n`, error));
};


//
// Add a Listener to the click event for our extension in the Context menu.
//
chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId === "trackIT" && clickData.selectionText){
       // Send the parsed data to the labview listening server 
        console.log(clickData.selectionText);
        let data = {
        	"Notes" : clickData.selectionText
        }
        postData("http://localhost:6007/WebServices/GetNotes", data);
        
    }else {
    	console.log("do nothing");
    }
    
});
