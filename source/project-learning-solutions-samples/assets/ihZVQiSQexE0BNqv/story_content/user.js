function ExecuteScript(strId)
{
  switch (strId)
  {
      case "639qS6luUN6":
        Script1();
        break;
      case "5YfcVzYG4Dd":
        Script2();
        break;
      case "5w9Q8cGJJTr":
        Script3();
        break;
      case "5pwn42SOz4B":
        Script4();
        break;
      case "6AJcmo9WvX1":
        Script5();
        break;
      case "6AcVrNrNm84":
        Script6();
        break;
      case "66uupFEu36S":
        Script7();
        break;
      case "6BRg7WlGk8j":
        Script8();
        break;
      case "6IWe3JODSum":
        Script9();
        break;
      case "6lPPh8pYJFO":
        Script10();
        break;
      case "626IQubjTUu":
        Script11();
        break;
      case "5emI8GQOCIE":
        Script12();
        break;
      case "5vzA6sUV5h1":
        Script13();
        break;
      case "6K03TcMJ6IG":
        Script14();
        break;
      case "61s9qTVOVUk":
        Script15();
        break;
      case "6BDIBQvvS13":
        Script16();
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

function Script5()
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

function Script6()
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

function Script7()
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

function Script8()
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

function Script9()
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

function Script10()
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

function Script11()
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

function Script12()
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

function Script13()
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

function Script14()
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

function Script15()
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

function Script16()
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

