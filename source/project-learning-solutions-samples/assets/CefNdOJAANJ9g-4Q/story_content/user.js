function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ESeY2ytTQ3":
        Script1();
        break;
      case "6aEbvH9FzAK":
        Script2();
        break;
      case "5jrz34uGfUQ":
        Script3();
        break;
      case "60dLCZONPvI":
        Script4();
        break;
  }
}

function Script1()
{
  try{
var win=window, tries = 0, maxTries = 20;
while ((win.API_1484_11 == null) && (win.parent != null) && (win.parent != win) && tries++ < maxTries) { win = win.parent; }
if ((win.API_1484_11 == null) && (window.opener != null)) {
win=window.opener, tries = 0;
while ((win.API_1484_11 == null) && (win.parent != null) && (win.parent != win) && tries++ < maxTries) { win = win.parent;}
}
var api = win.API_1484_11;
if (api != null){

//actual scorm api call
api.SetValue("cmi.progress_measure", GetPlayer().GetVar("ProgressExportedToJs")/100.0);

}
}catch(e){}
}

function Script2()
{
  var player = GetPlayer();
var RenNumber = player.GetVar('TimerSubmit');

setInterval(function() {
if(RenNumber < 60){
RenNumber += 1;
} else {
RenNumber = 0;
} 
player.SetVar('TimerSubmit', RenNumber);
}, 1000);

}

function Script3()
{
  try{
var win=window, tries = 0, maxTries = 20;
while ((win.API_1484_11 == null) && (win.parent != null) && (win.parent != win) && tries++ < maxTries) { win = win.parent; }
if ((win.API_1484_11 == null) && (window.opener != null)) {
win=window.opener, tries = 0;
while ((win.API_1484_11 == null) && (win.parent != null) && (win.parent != win) && tries++ < maxTries) { win = win.parent;}
}
var api = win.API_1484_11;
if (api != null){
api.Commit("");
}

}catch(e){}
}

function Script4()
{
  try{
var win=window, tries = 0, maxTries = 20;
while ((win.API_1484_11 == null) && (win.parent != null) && (win.parent != win) && tries++ < maxTries) { win = win.parent; }
if ((win.API_1484_11 == null) && (window.opener != null)) {
win=window.opener, tries = 0;
while ((win.API_1484_11 == null) && (win.parent != null) && (win.parent != win) && tries++ < maxTries) { win = win.parent;}
}
var api = win.API_1484_11;
if (api != null){
if (api.GetValue("cmi.mode") == "normal"){
api.SetValue("adl.nav.request", "suspendAll");
api.Commit("");
api.Terminate("");
} else if(win.scormPlayer != null){
win.scormPlayer.ui.saveAndClose();
}

}
}catch(e){}
}

