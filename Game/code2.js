gdjs.html5Code = {};
gdjs.html5Code.localVariables = [];
gdjs.html5Code.GDscreen_9595sizeObjects1= [];
gdjs.html5Code.GDscreen_9595sizeObjects2= [];
gdjs.html5Code.GDscreen_9595sizeObjects3= [];
gdjs.html5Code.GDscreen_9595sizeXObjects1= [];
gdjs.html5Code.GDscreen_9595sizeXObjects2= [];
gdjs.html5Code.GDscreen_9595sizeXObjects3= [];
gdjs.html5Code.GDscreen_9595sizeYObjects1= [];
gdjs.html5Code.GDscreen_9595sizeYObjects2= [];
gdjs.html5Code.GDscreen_9595sizeYObjects3= [];
gdjs.html5Code.GDlunchObjects1= [];
gdjs.html5Code.GDlunchObjects2= [];
gdjs.html5Code.GDlunchObjects3= [];
gdjs.html5Code.GDlunch2Objects1= [];
gdjs.html5Code.GDlunch2Objects2= [];
gdjs.html5Code.GDlunch2Objects3= [];
gdjs.html5Code.GDheadPathObjects1= [];
gdjs.html5Code.GDheadPathObjects2= [];
gdjs.html5Code.GDheadPathObjects3= [];
gdjs.html5Code.GDheadPath2Objects1= [];
gdjs.html5Code.GDheadPath2Objects2= [];
gdjs.html5Code.GDheadPath2Objects3= [];
gdjs.html5Code.GDuserNameObjects1= [];
gdjs.html5Code.GDuserNameObjects2= [];
gdjs.html5Code.GDuserNameObjects3= [];
gdjs.html5Code.GDNewTextObjects1= [];
gdjs.html5Code.GDNewTextObjects2= [];
gdjs.html5Code.GDNewTextObjects3= [];
gdjs.html5Code.GDpathObjects1= [];
gdjs.html5Code.GDpathObjects2= [];
gdjs.html5Code.GDpathObjects3= [];
gdjs.html5Code.GDNewText2Objects1= [];
gdjs.html5Code.GDNewText2Objects2= [];
gdjs.html5Code.GDNewText2Objects3= [];
gdjs.html5Code.GDwallPaperObjects1= [];
gdjs.html5Code.GDwallPaperObjects2= [];
gdjs.html5Code.GDwallPaperObjects3= [];


gdjs.html5Code.mapOfGDgdjs_9546html5Code_9546GDlunchObjects1Objects = Hashtable.newFrom({"lunch": gdjs.html5Code.GDlunchObjects1});
gdjs.html5Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2))).includes("/");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("screen_size"), gdjs.html5Code.GDscreen_9595sizeObjects2);
{gdjs.evtsExt__Iframe__Create.func(runtimeScene, "game", "file://" + runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() + runtimeScene.getScene().getVariables().getFromIndex(2).getAsString(), (( gdjs.html5Code.GDscreen_9595sizeObjects2.length === 0 ) ? 0 :gdjs.html5Code.GDscreen_9595sizeObjects2[0].getWidth()), (( gdjs.html5Code.GDscreen_9595sizeObjects2.length === 0 ) ? 0 :gdjs.html5Code.GDscreen_9595sizeObjects2[0].getHeight()), (( gdjs.html5Code.GDscreen_9595sizeObjects2.length === 0 ) ? 0 :gdjs.html5Code.GDscreen_9595sizeObjects2[0].getX()), (( gdjs.html5Code.GDscreen_9595sizeObjects2.length === 0 ) ? 0 :gdjs.html5Code.GDscreen_9595sizeObjects2[0].getY()), false, false, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !((gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2))).includes("/"));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("screen_size"), gdjs.html5Code.GDscreen_9595sizeObjects1);
{gdjs.evtsExt__Iframe__Create.func(runtimeScene, "game", runtimeScene.getGame().getVariables().getFromIndex(6).getAsString(), (( gdjs.html5Code.GDscreen_9595sizeObjects1.length === 0 ) ? 0 :gdjs.html5Code.GDscreen_9595sizeObjects1[0].getWidth()), (( gdjs.html5Code.GDscreen_9595sizeObjects1.length === 0 ) ? 0 :gdjs.html5Code.GDscreen_9595sizeObjects1[0].getHeight()), (( gdjs.html5Code.GDscreen_9595sizeObjects1.length === 0 ) ? 0 :gdjs.html5Code.GDscreen_9595sizeObjects1[0].getX()), (( gdjs.html5Code.GDscreen_9595sizeObjects1.length === 0 ) ? 0 :gdjs.html5Code.GDscreen_9595sizeObjects1[0].getY()), false, false, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{runtimeScene.getScene().getVariables().getFromIndex(4).setBoolean(true);
}}

}


};gdjs.html5Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};gdjs.html5Code.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__AuthorizedPlatformsValidation__CheckExecution.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("lunch"), gdjs.html5Code.GDlunchObjects1);
gdjs.copyArray(runtimeScene.getObjects("lunch2"), gdjs.html5Code.GDlunch2Objects1);
gdjs.copyArray(runtimeScene.getObjects("screen_size"), gdjs.html5Code.GDscreen_9595sizeObjects1);
{for(var i = 0, len = gdjs.html5Code.GDscreen_9595sizeObjects1.length ;i < len;++i) {
    gdjs.html5Code.GDscreen_9595sizeObjects1[i].setCenterXInScene(gdjs.evtTools.window.getWindowInnerWidth() / 2);
}
}{for(var i = 0, len = gdjs.html5Code.GDlunchObjects1.length ;i < len;++i) {
    gdjs.html5Code.GDlunchObjects1[i].setCenterXInScene(gdjs.evtTools.window.getWindowInnerWidth() / 2);
}
}{for(var i = 0, len = gdjs.html5Code.GDlunch2Objects1.length ;i < len;++i) {
    gdjs.html5Code.GDlunch2Objects1[i].setCenterXInScene(gdjs.evtTools.window.getWindowInnerWidth() / 2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("lunch"), gdjs.html5Code.GDlunchObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.html5Code.mapOfGDgdjs_9546html5Code_9546GDlunchObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "disk");
}
{ //Subevents
gdjs.html5Code.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("screen_sizeX"), gdjs.html5Code.GDscreen_9595sizeXObjects1);
gdjs.copyArray(runtimeScene.getObjects("screen_sizeY"), gdjs.html5Code.GDscreen_9595sizeYObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.toNumber((( gdjs.html5Code.GDscreen_9595sizeXObjects1.length === 0 ) ? "" :gdjs.html5Code.GDscreen_9595sizeXObjects1[0].getText())) > 250);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.toNumber((( gdjs.html5Code.GDscreen_9595sizeYObjects1.length === 0 ) ? "" :gdjs.html5Code.GDscreen_9595sizeYObjects1[0].getText())) > 250);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("screen_size"), gdjs.html5Code.GDscreen_9595sizeObjects1);
/* Reuse gdjs.html5Code.GDscreen_9595sizeXObjects1 */
/* Reuse gdjs.html5Code.GDscreen_9595sizeYObjects1 */
{for(var i = 0, len = gdjs.html5Code.GDscreen_9595sizeObjects1.length ;i < len;++i) {
    gdjs.html5Code.GDscreen_9595sizeObjects1[i].getBehavior("Resizable").setSize(gdjs.evtTools.common.toNumber((( gdjs.html5Code.GDscreen_9595sizeXObjects1.length === 0 ) ? "" :gdjs.html5Code.GDscreen_9595sizeXObjects1[0].getText())), gdjs.evtTools.common.toNumber((( gdjs.html5Code.GDscreen_9595sizeYObjects1.length === 0 ) ? "" :gdjs.html5Code.GDscreen_9595sizeYObjects1[0].getText())));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "F12");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), true, false);
}
if (isConditionTrue_0) {
{gdjs.evtsExt__Iframe__Delete.func(runtimeScene, "game", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.html5Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "F12");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(4), false, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.html5Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.html5Code.GDscreen_9595sizeObjects1.length = 0;
gdjs.html5Code.GDscreen_9595sizeObjects2.length = 0;
gdjs.html5Code.GDscreen_9595sizeObjects3.length = 0;
gdjs.html5Code.GDscreen_9595sizeXObjects1.length = 0;
gdjs.html5Code.GDscreen_9595sizeXObjects2.length = 0;
gdjs.html5Code.GDscreen_9595sizeXObjects3.length = 0;
gdjs.html5Code.GDscreen_9595sizeYObjects1.length = 0;
gdjs.html5Code.GDscreen_9595sizeYObjects2.length = 0;
gdjs.html5Code.GDscreen_9595sizeYObjects3.length = 0;
gdjs.html5Code.GDlunchObjects1.length = 0;
gdjs.html5Code.GDlunchObjects2.length = 0;
gdjs.html5Code.GDlunchObjects3.length = 0;
gdjs.html5Code.GDlunch2Objects1.length = 0;
gdjs.html5Code.GDlunch2Objects2.length = 0;
gdjs.html5Code.GDlunch2Objects3.length = 0;
gdjs.html5Code.GDheadPathObjects1.length = 0;
gdjs.html5Code.GDheadPathObjects2.length = 0;
gdjs.html5Code.GDheadPathObjects3.length = 0;
gdjs.html5Code.GDheadPath2Objects1.length = 0;
gdjs.html5Code.GDheadPath2Objects2.length = 0;
gdjs.html5Code.GDheadPath2Objects3.length = 0;
gdjs.html5Code.GDuserNameObjects1.length = 0;
gdjs.html5Code.GDuserNameObjects2.length = 0;
gdjs.html5Code.GDuserNameObjects3.length = 0;
gdjs.html5Code.GDNewTextObjects1.length = 0;
gdjs.html5Code.GDNewTextObjects2.length = 0;
gdjs.html5Code.GDNewTextObjects3.length = 0;
gdjs.html5Code.GDpathObjects1.length = 0;
gdjs.html5Code.GDpathObjects2.length = 0;
gdjs.html5Code.GDpathObjects3.length = 0;
gdjs.html5Code.GDNewText2Objects1.length = 0;
gdjs.html5Code.GDNewText2Objects2.length = 0;
gdjs.html5Code.GDNewText2Objects3.length = 0;
gdjs.html5Code.GDwallPaperObjects1.length = 0;
gdjs.html5Code.GDwallPaperObjects2.length = 0;
gdjs.html5Code.GDwallPaperObjects3.length = 0;

gdjs.html5Code.eventsList2(runtimeScene);
gdjs.html5Code.GDscreen_9595sizeObjects1.length = 0;
gdjs.html5Code.GDscreen_9595sizeObjects2.length = 0;
gdjs.html5Code.GDscreen_9595sizeObjects3.length = 0;
gdjs.html5Code.GDscreen_9595sizeXObjects1.length = 0;
gdjs.html5Code.GDscreen_9595sizeXObjects2.length = 0;
gdjs.html5Code.GDscreen_9595sizeXObjects3.length = 0;
gdjs.html5Code.GDscreen_9595sizeYObjects1.length = 0;
gdjs.html5Code.GDscreen_9595sizeYObjects2.length = 0;
gdjs.html5Code.GDscreen_9595sizeYObjects3.length = 0;
gdjs.html5Code.GDlunchObjects1.length = 0;
gdjs.html5Code.GDlunchObjects2.length = 0;
gdjs.html5Code.GDlunchObjects3.length = 0;
gdjs.html5Code.GDlunch2Objects1.length = 0;
gdjs.html5Code.GDlunch2Objects2.length = 0;
gdjs.html5Code.GDlunch2Objects3.length = 0;
gdjs.html5Code.GDheadPathObjects1.length = 0;
gdjs.html5Code.GDheadPathObjects2.length = 0;
gdjs.html5Code.GDheadPathObjects3.length = 0;
gdjs.html5Code.GDheadPath2Objects1.length = 0;
gdjs.html5Code.GDheadPath2Objects2.length = 0;
gdjs.html5Code.GDheadPath2Objects3.length = 0;
gdjs.html5Code.GDuserNameObjects1.length = 0;
gdjs.html5Code.GDuserNameObjects2.length = 0;
gdjs.html5Code.GDuserNameObjects3.length = 0;
gdjs.html5Code.GDNewTextObjects1.length = 0;
gdjs.html5Code.GDNewTextObjects2.length = 0;
gdjs.html5Code.GDNewTextObjects3.length = 0;
gdjs.html5Code.GDpathObjects1.length = 0;
gdjs.html5Code.GDpathObjects2.length = 0;
gdjs.html5Code.GDpathObjects3.length = 0;
gdjs.html5Code.GDNewText2Objects1.length = 0;
gdjs.html5Code.GDNewText2Objects2.length = 0;
gdjs.html5Code.GDNewText2Objects3.length = 0;
gdjs.html5Code.GDwallPaperObjects1.length = 0;
gdjs.html5Code.GDwallPaperObjects2.length = 0;
gdjs.html5Code.GDwallPaperObjects3.length = 0;


return;

}

gdjs['html5Code'] = gdjs.html5Code;
