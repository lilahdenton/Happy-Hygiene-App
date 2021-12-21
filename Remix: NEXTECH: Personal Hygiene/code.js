//LILAH DENTON
//CALL FUNCTIONS
welcomeScreen();
//WELCOME SCREEN: calls to login screen after "continue" is clicked
function welcomeScreen() {
  onEvent("continue", "click", function( ) {
    setScreen("Login");
    loginScreen();
  });
}
//LOGIN SCREEN: calls to tasks screen (name/email vars)
function loginScreen() {
  var email = getText("emailBox");
  onEvent("nextButton", "click", function( ) {
    setScreen("tasks");
    taskScreen();
  });
}
//TASK SCREEN: where the user picks the tasks they want added to their to-do list
var toDoList = [];
function taskScreen() {
  var name = getText("nameBox");
  setText("nameLabel", "Hi "+name+"!" );
  
  toDoList=[];
  console.log(toDoList);
  //button select
  //for each button: give red outline, add to array...
  onEvent("brushTeeth", "click", function( ) {
    console.log("brush teeth button clicked");
    setProperty("brushTeeth", "border-width", 3);
    appendItem(toDoList, "brush teeth");
  });
  onEvent("shower", "mousedown", function( ) {
    console.log("shower button clicked");
    setProperty("shower", "border-width", 3);
    appendItem(toDoList, "shower");
  });
  onEvent("washHands", "click", function( ) {
    console.log("wash hands button clicked");
    setProperty("washHands", "border-width", 3);
    appendItem(toDoList, "wash hands");
  });
  onEvent("getDressed", "click", function( ) {
    console.log("get dressed button clicked");
    setProperty("getDressed", "border-width", 3);
    appendItem(toDoList, "get dressed");
  });
  onEvent("floss", "click", function( ) {
    console.log("floss button clicked");
    setProperty("floss", "border-width", 3);
    appendItem(toDoList, "floss");
  });
  onEvent("breakfast", "click", function( ) {
    console.log("breakfast button clicked");
    setProperty("breakfast", "border-width", 3);
    appendItem(toDoList, "eat breakfast");
  });
  onEvent("nails", "click", function( ) {
    console.log("nails button clicked");
    setProperty("nails", "border-width", 3);
    appendItem(toDoList, "trim your nails");
  });
  onEvent("shave", "click", function( ) {
    console.log("shave button clicked");
    setProperty("shave", "border-width", 3);
    appendItem(toDoList, "shave");
  });
  onEvent("deodorant", "click", function( ) {
    console.log("deodorant button clicked");
    setProperty("deodorant", "border-width", 3);
    appendItem(toDoList, "deodorant");
  });
  
  onEvent("nextTask", "click", function( ) {
    setScreen("homescreen");
    console.log(toDoList);
    homescreen();
  });
}

function homescreen() {
  setProperty("homeBTN1", "border-width", 3);
  console.log("HOME SCREEN FUNCTION");
  var name = getText("nameBox");
  setProperty("helloLabel", "text", "Hello "+name+"!");
  buttons();
  onEvent("logoHS", "click", function( ) {
    hideElement("iconLabel");
    showElement("toothHS");
    showElement("toothHS2");
    showElement("toothHS3");
    onEvent("logoHS", "click", function( ) {
      showElement("iconLabel");
      hideElement("toothHS");
      hideElement("toothHS2");
      hideElement("toothHS3");
    });
  });
  
}

function toDoListScreen() {
  setProperty("toDoListBTN2", "border-width", 3);
  console.log("TO DO LIST SCREEN FUNCTION");
  buttons();
  setProperty("task1", "text", toDoList[0]);
  setProperty("task2", "text", toDoList[1]);
  setProperty("task3", "text", toDoList[2]);
  setProperty("task4", "text", toDoList[3]);
  setProperty("task5", "text", toDoList[4]);
  //show prizes
  checkPrizes();
  
  onEvent("fullListBTN", "click", function( ) {
    setScreen("fullListScreen");
    fullListScreen();
  });
  onEvent("logoTDL", "click", function( ) {
    showElement("soapyTDL2");
    showElement("soapyTDL");
    showElement("soapyTDL3");
    onEvent("logoTDL", "click", function( ) {
      hideElement("soapyTDL");
      hideElement("soapyTDL2");
      hideElement("soapyTDL3");
    });
  });
}

function prizesScreen() {
  setProperty("prizesBTN3", "border-width", 3);
  console.log("PRIZES SCREEN FUNCTION");
  checkPrizes();
  buttons();
  //characters: click for description
  onEvent("mrToothBW", "click", function( ) {
    showElement("MrToothDescription");
    onEvent("MrToothDescription", "click", function( ) {
      hideElement("MrToothDescription");
    });
  });
  onEvent("soapyBW", "click", function( ) {
    showElement("soapyDescription");
    onEvent("soapyDescription", "click", function( ) {
      hideElement("soapyDescription");
    });
  });
  onEvent("bananaBW", "click", function( ) {
    showElement("bananaDescription");
    onEvent("bananaDescription", "click", function( ) {
      hideElement("bananaDescription");
    });
  });
  //trophies: click for description
  onEvent("all5BW", "click", function( ) {
    showElement("all5Description");
    onEvent("all5Description", "click", function( ) {
      hideElement("all5Description");
    });
  });
  onEvent("charBW", "click", function( ) {
    showElement("charDescription");
    onEvent("charDescription", "click", function( ) {
      hideElement("charDescription");
    });
  });
  onEvent("everythingBW", "click", function( ) {
    showElement("everythingDescription");
    onEvent("everythingDescription", "click", function( ) {
      hideElement("everythingDescription");
    });
  });
}

//settings: edit the main five tasks...edit name...reset awards 
function settingsScreen() {
  setProperty("settingsBTN4", "border-width", 3);
  console.log("SETTINGS SCREEN FUNCTION");
  onEvent("logoSS", "click", function( ) {
    showElement("bananaSS");
    showElement("bananaSS2");
    showElement("bananaSS3");
    onEvent("logoSS", "click", function( ) {
      hideElement("bananaSS");
      hideElement("bananaSS2");
      hideElement("bananaSS3");
    });
  });
  buttons();
  reset();
  onEvent("changeNameBTN", "click", function( ) {
    setScreen("Login");
    loginScreen();
  });
  onEvent("changeBTN", "click", function( ) {
    //hide buttons
    hideElement("changeBTN");
    hideElement("changeNameBTN");
    hideElement("resetBTN");
    //show list
    showElement("changeLabel");
    showElement("backSettingsBTN");
    showElement("checkbox1");
    showElement("checkbox2");
    showElement("checkbox3");
    showElement("checkbox4");
    showElement("checkbox5");
    showElement("checkbox6");
    showElement("checkbox7");
    showElement("checkbox8");
    showElement("checkbox9");
    
    showElement("label4");
    showElement("label5");
    showElement("label6");
    showElement("label7");
    showElement("label8");
    showElement("label9");
    showElement("label10");
    showElement("label11");
    showElement("label12");
  
    onEvent("backSettingsBTN", "click", function( ) {
      //show buttons
    showElement("changeBTN");
    showElement("changeNameBTN");
    showElement("resetBTN");
    //hide list
    hideElement("changeLabel");
    hideElement("backSettingsBTN");
    hideElement("checkbox1");
    hideElement("checkbox2");
    hideElement("checkbox3");
    hideElement("checkbox4");
    hideElement("checkbox5");
    hideElement("checkbox6");
    hideElement("checkbox7");
    hideElement("checkbox8");
    hideElement("checkbox9");
    
    hideElement("label4");
    hideElement("label5");
    hideElement("label6");
    hideElement("label7");
    hideElement("label8");
    hideElement("label9");
    hideElement("label10");
    hideElement("label11");
    hideElement("label12");
    });
    newTasks();
    
  });
  
  function newTasks() {
    toDoList=[];
    console.log(toDoList);
    onEvent("checkbox1", "click", function( ) {
      appendItem(toDoList, "brush your teeth");
    });
    onEvent("checkbox2", "click", function( ) {
      appendItem(toDoList, "floss");
    });
    onEvent("checkbox3", "click", function( ) {
      appendItem(toDoList, "shower");
    });
    onEvent("checkbox4", "click", function( ) {
      appendItem(toDoList, "wash your hands");
    });
    onEvent("checkbox5", "click", function( ) {
      appendItem(toDoList, "get dressed");
    });
    onEvent("checkbox6", "click", function( ) {
      appendItem(toDoList, "trim your nails");
    });
    onEvent("checkbox7", "click", function( ) {
      appendItem(toDoList, "shave");
    });
    onEvent("checkbox8", "click", function( ) {
      appendItem(toDoList, "wear deodorant");
    });
    onEvent("checkbox9", "click", function( ) {
      appendItem(toDoList, "eat breakfast");
    });
  }
  //reset button: resets everything to original values
  function reset() {
    onEvent("resetBTN", "click", function( ) {
      setScreen("Welcome");
      console.log(toDoList);
      setProperty("nameBox", "text", "");
      setProperty("emailBox", "text", "");
      //set all boxes to no border 
      setProperty("brushTeeth", "border-width", 0);
      setProperty("breakfast", "border-width", 0);
      setProperty("deodorant", "border-width", 0);
      setProperty("floss", "border-width", 0);
      setProperty("getDressed", "border-width", 0);
      setProperty("nails", "border-width", 0);
      setProperty("shave", "border-width", 0);
      setProperty("shower", "border-width", 0);
      setProperty("washHands", "border-width", 0);
      setChecked("checkBox1", false);
      welcomeScreen();
      
    });
  }
}

//FULL to do list
//if all check -- good job
//return to to do list screen (back button)
function fullListScreen() {
  checkPrizes();
  onEvent("backBTN", "click", function( ) {
    setScreen("toDoListScreen");
    toDoListScreen();
  });
}

//buttons: this function controls all the navigation buttons at the bottom of the screen
function buttons() {
  //HOME BUTTON
  onEvent(("homeBTN1"), "click", function( ) {
  setScreen("homescreen");
  setProperty("homeBTN1", "border-width", 3);
  console.log("home button clicked");
  });
  onEvent(("homeBTN2"), "click", function( ) {
  setScreen("homescreen");
  setProperty("homeBTN1", "border-width", 3);
  console.log("home button clicked");
  });
  onEvent(("homeBTN3"), "click", function( ) {
  setScreen("homescreen");
  setProperty("homeBTN1", "border-width", 3);
  console.log("home button clicked");
  });
  onEvent(("homeBTN4"), "click", function( ) {
  setScreen("homescreen");
  setProperty("homeBTN1", "border-width", 3);
  console.log("home button clicked");
  });
  
  //TO DO LIST BUTTON
  onEvent(("toDoListBTN1"), "click", function( ) {
  setScreen("toDoListScreen");
  console.log("to do list clicked");
  toDoListScreen();
  });
  onEvent(("toDoListBTN2"), "click", function( ) {
  setScreen("toDoListScreen");
  console.log("to do list clicked");
  toDoListScreen();
  });
  onEvent(("toDoListBTN3"), "click", function( ) {
  setScreen("toDoListScreen");
  console.log("to do list clicked");
  toDoListScreen();
  });
  onEvent(("toDoListBTN4"), "click", function( ) {
  setScreen("toDoListScreen");
  console.log("to do list clicked");
  toDoListScreen();
  });
  
  //PRIZE BUTTON
  onEvent("prizesBTN1", "click", function( ) {
  setScreen("prizesScreen");
  console.log("prizes button clicked");
  prizesScreen();
  });
  onEvent("prizesBTN2", "click", function( ) {
  setScreen("prizesScreen");
  console.log("prizes button clicked");
  prizesScreen();
  });
  onEvent("prizesBTN3", "click", function( ) {
  setScreen("prizesScreen");
  console.log("prizes button clicked");
  prizesScreen();
  });
  onEvent("prizesBTN4", "click", function( ) {
  setScreen("prizesScreen");
  console.log("prizes button clicked");
  prizesScreen();
  });
  //SETTINGS BUTTON
  onEvent("settingsBTN1", "click", function( ) {
  setScreen("settingsScreen");
  console.log("settings button clicked");
  settingsScreen();
  });
  onEvent("settingsBTN2", "click", function( ) {
  setScreen("settingsScreen");
  console.log("settings button clicked");
  settingsScreen();
  });
  onEvent("settingsBTN3", "click", function( ) {
    setScreen("settingsScreen");
    settingsScreen();
  });
  onEvent("settingsBTN4", "click", function( ) {
  setScreen("settingsScreen");
  console.log("settings button clicked");
  settingsScreen();
  });
}
//check prizes: checks to see if prizes are done, shows awards
function checkPrizes() {
  
  //if brush teeth and floss --- show Mr Tooth
  if (getChecked("FLbrushTeethBox")&&getChecked("FLflossBox")) {
    showElement("MrToothCOLOR");
    console.log("Mr Tooth was won!");
  }
  
  //if wash hands and shower --- show Soapy
  if (getChecked("FLhandsBox")&&getChecked("FLshowerBox")) {
    showElement("soapyCOLOR");
    console.log("Soapy was won!");
  }
  
  //if eat breakfast -- show nana banana
  if (getChecked("FLbreakfastBox")) {
    showElement("bananaCOLOR");
    console.log("Nana Banana was won!");
  }
  
  //if all five tasks check -- show all 5 
  if (getChecked("task1Box") && getChecked("task2Box")&&getChecked("task3Box")&&getChecked("task4Box")&&getChecked("task5Box")) {
    showElement("all5COLOR");
  }
  
  //if all characters show in color -- show Char trophy
  if (!getProperty("MrToothCOLOR", "hidden")&&!getProperty("soapyCOLOR", "hidden")&&!getProperty("bananaCOLOR", "hidden")) {
    showElement("charCOLOR");
    console.log("char trophy has been won");
  } else {
    console.log("char trophy has not been won");
  }
  
  //if char trophy and all 5 -- ultimate 
  if ((!getProperty("charCOLOR", "hidden")&&!getProperty("all5COLOR","hidden"))) {
    showElement("everythingCOLOR");
  }
}
