gdjs.moreCode = {};
gdjs.moreCode.localVariables = [];
gdjs.moreCode.forEachIndex2 = 0;

gdjs.moreCode.forEachObjects2 = [];

gdjs.moreCode.forEachTemporary2 = null;

gdjs.moreCode.forEachTotalCount2 = 0;

gdjs.moreCode.GDlogoTXTObjects1= [];
gdjs.moreCode.GDlogoTXTObjects2= [];
gdjs.moreCode.GDlogoTXTObjects3= [];
gdjs.moreCode.GDlogoObjects1= [];
gdjs.moreCode.GDlogoObjects2= [];
gdjs.moreCode.GDlogoObjects3= [];
gdjs.moreCode.GDwhiteObjects1= [];
gdjs.moreCode.GDwhiteObjects2= [];
gdjs.moreCode.GDwhiteObjects3= [];
gdjs.moreCode.GDsearch_9595barObjects1= [];
gdjs.moreCode.GDsearch_9595barObjects2= [];
gdjs.moreCode.GDsearch_9595barObjects3= [];
gdjs.moreCode.GDwiwObjects1= [];
gdjs.moreCode.GDwiwObjects2= [];
gdjs.moreCode.GDwiwObjects3= [];
gdjs.moreCode.GDcircleObjects1= [];
gdjs.moreCode.GDcircleObjects2= [];
gdjs.moreCode.GDcircleObjects3= [];
gdjs.moreCode.GDwhite2Objects1= [];
gdjs.moreCode.GDwhite2Objects2= [];
gdjs.moreCode.GDwhite2Objects3= [];
gdjs.moreCode.GDimageObjects1= [];
gdjs.moreCode.GDimageObjects2= [];
gdjs.moreCode.GDimageObjects3= [];
gdjs.moreCode.GDdebugObjects1= [];
gdjs.moreCode.GDdebugObjects2= [];
gdjs.moreCode.GDdebugObjects3= [];
gdjs.moreCode.GDaboutObjects1= [];
gdjs.moreCode.GDaboutObjects2= [];
gdjs.moreCode.GDaboutObjects3= [];
gdjs.moreCode.GDinfoObjects1= [];
gdjs.moreCode.GDinfoObjects2= [];
gdjs.moreCode.GDinfoObjects3= [];
gdjs.moreCode.GDNew3DBoxObjects1= [];
gdjs.moreCode.GDNew3DBoxObjects2= [];
gdjs.moreCode.GDNew3DBoxObjects3= [];
gdjs.moreCode.GDdownload_9595buttonObjects1= [];
gdjs.moreCode.GDdownload_9595buttonObjects2= [];
gdjs.moreCode.GDdownload_9595buttonObjects3= [];
gdjs.moreCode.GDNewTextObjects1= [];
gdjs.moreCode.GDNewTextObjects2= [];
gdjs.moreCode.GDNewTextObjects3= [];
gdjs.moreCode.GDarrowObjects1= [];
gdjs.moreCode.GDarrowObjects2= [];
gdjs.moreCode.GDarrowObjects3= [];


gdjs.moreCode.eventsList0 = function(runtimeScene) {

};gdjs.moreCode.userFunc0x880710 = function GDJSInlineCode(runtimeScene) {
"use strict";
var data = runtimeScene.getGame().getVariables().get("dir").getAsString()
const url = "https://raw.githubusercontent.com/Michaelgde/dataBase_michealGD/main/"+data+"/txt.txt";

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.text();
  })
  .then(text => {
    console.log("File content:", text);

    // You can store the text in a GDevelop variable, or process it further
    var data = runtimeScene.getGame().getVariables().get("name").setString(text)
    
  })
  .catch(error => {
    console.error("There was a problem with the fetch operation:", error);
  });
};
gdjs.moreCode.eventsList1 = function(runtimeScene) {

{


gdjs.moreCode.userFunc0x880710(runtimeScene);

}


};gdjs.moreCode.userFunc0xbd1748 = function GDJSInlineCode(runtimeScene) {
"use strict";
var data = runtimeScene.getGame().getVariables().get("dir").getAsString()
const url = "https://raw.githubusercontent.com/Michaelgde/dataBase_michealGD/main/"+data+"/des.txt";

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.text();
  })
  .then(text => {
    console.log("File content:", text);

    // You can store the text in a GDevelop variable, or process it further
    var data = runtimeScene.getGame().getVariables().get("description").setString(text)
    
  })
  .catch(error => {
    console.error("There was a problem with the fetch operation:", error);
  });
};
gdjs.moreCode.eventsList2 = function(runtimeScene) {

{


gdjs.moreCode.userFunc0xbd1748(runtimeScene);

}


};gdjs.moreCode.mapOfGDgdjs_9546moreCode_9546GDimageObjects1Objects = Hashtable.newFrom({"image": gdjs.moreCode.GDimageObjects1});
gdjs.moreCode.mapOfGDgdjs_9546moreCode_9546GDdownload_95959595buttonObjects1Objects = Hashtable.newFrom({"download_button": gdjs.moreCode.GDdownload_9595buttonObjects1});
gdjs.moreCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{



}


};gdjs.moreCode.eventsList4 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("about"), gdjs.moreCode.GDaboutObjects1);

for (gdjs.moreCode.forEachIndex2 = 0;gdjs.moreCode.forEachIndex2 < gdjs.moreCode.GDaboutObjects1.length;++gdjs.moreCode.forEachIndex2) {
gdjs.moreCode.GDaboutObjects2.length = 0;


gdjs.moreCode.forEachTemporary2 = gdjs.moreCode.GDaboutObjects1[gdjs.moreCode.forEachIndex2];
gdjs.moreCode.GDaboutObjects2.push(gdjs.moreCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.moreCode.GDaboutObjects2.length ;i < len;++i) {
    gdjs.moreCode.GDaboutObjects2[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(3).getAsString() + gdjs.evtTools.string.newLine() + gdjs.evtTools.string.newLine() + "Description:" + gdjs.evtTools.string.newLine() + runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
}}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)) == "loading...";
if (isConditionTrue_0) {

{ //Subevents
gdjs.moreCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) == "loading...";
if (isConditionTrue_0) {

{ //Subevents
gdjs.moreCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0)) > 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("info"), gdjs.moreCode.GDinfoObjects1);
{for(var i = 0, len = gdjs.moreCode.GDinfoObjects1.length ;i < len;++i) {
    gdjs.moreCode.GDinfoObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("image"), gdjs.moreCode.GDimageObjects1);
{gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.func(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1).getAsString(), gdjs.moreCode.mapOfGDgdjs_9546moreCode_9546GDimageObjects1Objects, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("download_button"), gdjs.moreCode.GDdownload_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.moreCode.mapOfGDgdjs_9546moreCode_9546GDdownload_95959595buttonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtsExt__Iframe__Create.func(runtimeScene, "game", "https://raw.githubusercontent.com/Michaelgde/dataBase_michealGD/main/" + runtimeScene.getGame().getVariables().getFromIndex(4).getAsString() + "/download.png", 500, 500, 50, 50, false, false, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.moreCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.moreCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.moreCode.GDlogoTXTObjects1.length = 0;
gdjs.moreCode.GDlogoTXTObjects2.length = 0;
gdjs.moreCode.GDlogoTXTObjects3.length = 0;
gdjs.moreCode.GDlogoObjects1.length = 0;
gdjs.moreCode.GDlogoObjects2.length = 0;
gdjs.moreCode.GDlogoObjects3.length = 0;
gdjs.moreCode.GDwhiteObjects1.length = 0;
gdjs.moreCode.GDwhiteObjects2.length = 0;
gdjs.moreCode.GDwhiteObjects3.length = 0;
gdjs.moreCode.GDsearch_9595barObjects1.length = 0;
gdjs.moreCode.GDsearch_9595barObjects2.length = 0;
gdjs.moreCode.GDsearch_9595barObjects3.length = 0;
gdjs.moreCode.GDwiwObjects1.length = 0;
gdjs.moreCode.GDwiwObjects2.length = 0;
gdjs.moreCode.GDwiwObjects3.length = 0;
gdjs.moreCode.GDcircleObjects1.length = 0;
gdjs.moreCode.GDcircleObjects2.length = 0;
gdjs.moreCode.GDcircleObjects3.length = 0;
gdjs.moreCode.GDwhite2Objects1.length = 0;
gdjs.moreCode.GDwhite2Objects2.length = 0;
gdjs.moreCode.GDwhite2Objects3.length = 0;
gdjs.moreCode.GDimageObjects1.length = 0;
gdjs.moreCode.GDimageObjects2.length = 0;
gdjs.moreCode.GDimageObjects3.length = 0;
gdjs.moreCode.GDdebugObjects1.length = 0;
gdjs.moreCode.GDdebugObjects2.length = 0;
gdjs.moreCode.GDdebugObjects3.length = 0;
gdjs.moreCode.GDaboutObjects1.length = 0;
gdjs.moreCode.GDaboutObjects2.length = 0;
gdjs.moreCode.GDaboutObjects3.length = 0;
gdjs.moreCode.GDinfoObjects1.length = 0;
gdjs.moreCode.GDinfoObjects2.length = 0;
gdjs.moreCode.GDinfoObjects3.length = 0;
gdjs.moreCode.GDNew3DBoxObjects1.length = 0;
gdjs.moreCode.GDNew3DBoxObjects2.length = 0;
gdjs.moreCode.GDNew3DBoxObjects3.length = 0;
gdjs.moreCode.GDdownload_9595buttonObjects1.length = 0;
gdjs.moreCode.GDdownload_9595buttonObjects2.length = 0;
gdjs.moreCode.GDdownload_9595buttonObjects3.length = 0;
gdjs.moreCode.GDNewTextObjects1.length = 0;
gdjs.moreCode.GDNewTextObjects2.length = 0;
gdjs.moreCode.GDNewTextObjects3.length = 0;
gdjs.moreCode.GDarrowObjects1.length = 0;
gdjs.moreCode.GDarrowObjects2.length = 0;
gdjs.moreCode.GDarrowObjects3.length = 0;

gdjs.moreCode.eventsList4(runtimeScene);
gdjs.moreCode.GDlogoTXTObjects1.length = 0;
gdjs.moreCode.GDlogoTXTObjects2.length = 0;
gdjs.moreCode.GDlogoTXTObjects3.length = 0;
gdjs.moreCode.GDlogoObjects1.length = 0;
gdjs.moreCode.GDlogoObjects2.length = 0;
gdjs.moreCode.GDlogoObjects3.length = 0;
gdjs.moreCode.GDwhiteObjects1.length = 0;
gdjs.moreCode.GDwhiteObjects2.length = 0;
gdjs.moreCode.GDwhiteObjects3.length = 0;
gdjs.moreCode.GDsearch_9595barObjects1.length = 0;
gdjs.moreCode.GDsearch_9595barObjects2.length = 0;
gdjs.moreCode.GDsearch_9595barObjects3.length = 0;
gdjs.moreCode.GDwiwObjects1.length = 0;
gdjs.moreCode.GDwiwObjects2.length = 0;
gdjs.moreCode.GDwiwObjects3.length = 0;
gdjs.moreCode.GDcircleObjects1.length = 0;
gdjs.moreCode.GDcircleObjects2.length = 0;
gdjs.moreCode.GDcircleObjects3.length = 0;
gdjs.moreCode.GDwhite2Objects1.length = 0;
gdjs.moreCode.GDwhite2Objects2.length = 0;
gdjs.moreCode.GDwhite2Objects3.length = 0;
gdjs.moreCode.GDimageObjects1.length = 0;
gdjs.moreCode.GDimageObjects2.length = 0;
gdjs.moreCode.GDimageObjects3.length = 0;
gdjs.moreCode.GDdebugObjects1.length = 0;
gdjs.moreCode.GDdebugObjects2.length = 0;
gdjs.moreCode.GDdebugObjects3.length = 0;
gdjs.moreCode.GDaboutObjects1.length = 0;
gdjs.moreCode.GDaboutObjects2.length = 0;
gdjs.moreCode.GDaboutObjects3.length = 0;
gdjs.moreCode.GDinfoObjects1.length = 0;
gdjs.moreCode.GDinfoObjects2.length = 0;
gdjs.moreCode.GDinfoObjects3.length = 0;
gdjs.moreCode.GDNew3DBoxObjects1.length = 0;
gdjs.moreCode.GDNew3DBoxObjects2.length = 0;
gdjs.moreCode.GDNew3DBoxObjects3.length = 0;
gdjs.moreCode.GDdownload_9595buttonObjects1.length = 0;
gdjs.moreCode.GDdownload_9595buttonObjects2.length = 0;
gdjs.moreCode.GDdownload_9595buttonObjects3.length = 0;
gdjs.moreCode.GDNewTextObjects1.length = 0;
gdjs.moreCode.GDNewTextObjects2.length = 0;
gdjs.moreCode.GDNewTextObjects3.length = 0;
gdjs.moreCode.GDarrowObjects1.length = 0;
gdjs.moreCode.GDarrowObjects2.length = 0;
gdjs.moreCode.GDarrowObjects3.length = 0;


return;

}

gdjs['moreCode'] = gdjs.moreCode;
