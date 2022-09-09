// variable declaration
let userId, email, customEvent, customAttribute;

// function to create a as unique random uuid as possible
function createUID() {
    generated_id = Date.now().toString(32) + Math.random().toString(16);
    console.log(generated_id);
    return generated_id;
};

//might need to implement api identify user to ensure one email goes back to the initial created uuid
function getUser() {
  braze.getUser().getUserId(function(userId) {
    console.log('The user is ' + userId);
    let currentUser = "User ID : " + userId;
    document.getElementById('displayCurrentUser').innerHTML = currentUser;
  });

};

function getDevice() {
  braze.getDeviceId(function(deviceId) {
    console.log('The device id is ' + deviceId);
    let currentId = "DeviceId : " + deviceId;
    document.getElementById('displayCurrentId').innerHTML = currentId;
    });
};

//Change User
document.getElementById("changeUser_button").addEventListener("click", function(){
  alert('Created new account!', 'success');

  userId = createUID();
  userEmail = document.getElementById("email_input").value;
    
  //this will create a new user profile
  braze.changeUser(userId);
  braze.getUser().setEmail(userEmail);


  getUser();
});

//test user 1gbfcoa7q0.1f27276901484
//test user  1gbdsj8tt0.a73ecbc475a9a

//changeuser but for user id
document.getElementById("login_button").addEventListener("click", function(){
  alert('Logging in existing account', 'success');

  userId = document.getElementById("userid_input").value;
  //this is to login and change user to an existing identified user
  braze.changeUser(userId);

  getUser();
  
});

//log custom attribtue
document.getElementById("customAttribute_button").addEventListener("click", function() {
  alert('Submitted Custom Attribute', 'success');

  customAttrName = document.getElementById("customattribute_name").value;
  customAttrValue = document.getElementById("customattribute_value").value;

  braze.getUser().setCustomUserAttribute(customAttrName, customAttrValue);

});

document.getElementById("customEvent_button").addEventListener("click", function() {
  alert('Submitted Custom Event', 'success');

  customEventName = document.getElementById("customevent_name").value;
  customEventValue = document.getElementById("customevent_value").value;
  console.log(customEventName, customEventValue);

  if (customEventValue === "") {
    braze.logCustomEvent(customEventName);
    //console.log('sent custom event no property');
  } else {
    braze.logCustomEvent(customEventName, {customEventValue});
    //console.log('sent custom event with property');
  }

});

// documentation:
// https://www.braze.com/docs/developer_guide/platform_integration_guides/web/in-app_messaging/in-app_message_delivery/#minimum-time-interval-between-triggers
// https://js.appboycdn.com/web-sdk/latest/doc/classes/braze.inappmessage.html#triggerid
// https://js.appboycdn.com/web-sdk/latest/doc/classes/braze.modalmessage.html
// https://js.appboycdn.com/web-sdk/latest/doc/classes/braze.inappmessagebutton.html
// https://js.appboycdn.com/web-sdk/latest/doc/classes/braze.fullscreenmessage.html
// https://js.appboycdn.com/web-sdk/latest/doc/modules/braze.html#subscribetoinappmessage
// https://www.braze.com/docs/developer_guide/platform_integration_guides/web/in-app_messaging/customization/custom_styling
// https://js.appboycdn.com/web-sdk/latest/doc/modules/braze.html#subscribetocontentcardsupdates
// https://js.appboycdn.com/web-sdk/latest/doc/modules/braze.html#showcontentcards
// https://www.braze.com/docs/developer_guide/platform_integration_guides/web/in-app_messaging/in-app_message_delivery/#manual-in-app-message-display