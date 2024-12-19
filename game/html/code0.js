gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.forEachIndex2 = 0;

gdjs.Untitled_32sceneCode.forEachObjects2 = [];

gdjs.Untitled_32sceneCode.forEachTemporary2 = null;

gdjs.Untitled_32sceneCode.forEachTotalCount2 = 0;

gdjs.Untitled_32sceneCode.GDlogoTXTObjects1= [];
gdjs.Untitled_32sceneCode.GDlogoTXTObjects2= [];
gdjs.Untitled_32sceneCode.GDlogoTXTObjects3= [];
gdjs.Untitled_32sceneCode.GDlogoTXTObjects4= [];
gdjs.Untitled_32sceneCode.GDlogoTXTObjects5= [];
gdjs.Untitled_32sceneCode.GDlogoObjects1= [];
gdjs.Untitled_32sceneCode.GDlogoObjects2= [];
gdjs.Untitled_32sceneCode.GDlogoObjects3= [];
gdjs.Untitled_32sceneCode.GDlogoObjects4= [];
gdjs.Untitled_32sceneCode.GDlogoObjects5= [];
gdjs.Untitled_32sceneCode.GDwhiteObjects1= [];
gdjs.Untitled_32sceneCode.GDwhiteObjects2= [];
gdjs.Untitled_32sceneCode.GDwhiteObjects3= [];
gdjs.Untitled_32sceneCode.GDwhiteObjects4= [];
gdjs.Untitled_32sceneCode.GDwhiteObjects5= [];
gdjs.Untitled_32sceneCode.GDsearch_9595barObjects1= [];
gdjs.Untitled_32sceneCode.GDsearch_9595barObjects2= [];
gdjs.Untitled_32sceneCode.GDsearch_9595barObjects3= [];
gdjs.Untitled_32sceneCode.GDsearch_9595barObjects4= [];
gdjs.Untitled_32sceneCode.GDsearch_9595barObjects5= [];
gdjs.Untitled_32sceneCode.GDwiwObjects1= [];
gdjs.Untitled_32sceneCode.GDwiwObjects2= [];
gdjs.Untitled_32sceneCode.GDwiwObjects3= [];
gdjs.Untitled_32sceneCode.GDwiwObjects4= [];
gdjs.Untitled_32sceneCode.GDwiwObjects5= [];
gdjs.Untitled_32sceneCode.GDcircleObjects1= [];
gdjs.Untitled_32sceneCode.GDcircleObjects2= [];
gdjs.Untitled_32sceneCode.GDcircleObjects3= [];
gdjs.Untitled_32sceneCode.GDcircleObjects4= [];
gdjs.Untitled_32sceneCode.GDcircleObjects5= [];
gdjs.Untitled_32sceneCode.GDwhite2Objects1= [];
gdjs.Untitled_32sceneCode.GDwhite2Objects2= [];
gdjs.Untitled_32sceneCode.GDwhite2Objects3= [];
gdjs.Untitled_32sceneCode.GDwhite2Objects4= [];
gdjs.Untitled_32sceneCode.GDwhite2Objects5= [];
gdjs.Untitled_32sceneCode.GDimageObjects1= [];
gdjs.Untitled_32sceneCode.GDimageObjects2= [];
gdjs.Untitled_32sceneCode.GDimageObjects3= [];
gdjs.Untitled_32sceneCode.GDimageObjects4= [];
gdjs.Untitled_32sceneCode.GDimageObjects5= [];
gdjs.Untitled_32sceneCode.GDdebugObjects1= [];
gdjs.Untitled_32sceneCode.GDdebugObjects2= [];
gdjs.Untitled_32sceneCode.GDdebugObjects3= [];
gdjs.Untitled_32sceneCode.GDdebugObjects4= [];
gdjs.Untitled_32sceneCode.GDdebugObjects5= [];
gdjs.Untitled_32sceneCode.GDaboutObjects1= [];
gdjs.Untitled_32sceneCode.GDaboutObjects2= [];
gdjs.Untitled_32sceneCode.GDaboutObjects3= [];
gdjs.Untitled_32sceneCode.GDaboutObjects4= [];
gdjs.Untitled_32sceneCode.GDaboutObjects5= [];
gdjs.Untitled_32sceneCode.GDinfoObjects1= [];
gdjs.Untitled_32sceneCode.GDinfoObjects2= [];
gdjs.Untitled_32sceneCode.GDinfoObjects3= [];
gdjs.Untitled_32sceneCode.GDinfoObjects4= [];
gdjs.Untitled_32sceneCode.GDinfoObjects5= [];


gdjs.Untitled_32sceneCode.userFunc0xf7a9a8 = function GDJSInlineCode(runtimeScene) {
"use strict";
const repo = "Michaelgde/dataBase_michealGD";  // Replace with your GitHub username/repository
const path = "";    // Path to the folder in the repository (leave empty for the root)
const branch = "main";               // Branch name (e.g., main, master)
let q = '"'


fetch(`https://api.github.com/repos/${repo}/contents/${path}?ref=${branch}`)
  .then(response => response.json())
  .then(data => {
    if (Array.isArray(data)) {
      // Loop through and log the file names
      data.forEach(file => {
        if (file.type === "file") {
          console.log("File name:", file.name);
        } else if (file.type === "dir") {
          console.log("Directory name:", file.name);
          runtimeScene.getVariables().get("jsonCheck").setString(runtimeScene.getVariables().get("jsonCheck").getAsString()+","+q+file.name+q)
        }
      });

      // Example: Store the list of file names in a GDevelop variable
      const fileNames = data.filter(file => file.type === "file").map(file => file.name);
      const dirNames = data.filter(file => file.type === "dir").map(file => file.name);
      runtimeScene.getVariables().get("data").fromJSObject(dirNames);
      runtimeScene.getVariables().get("refresh").setString("y")
    } else {
      console.error("Failed to retrieve the directory contents:", data.message);
    }
  })
  .catch(error => {
    console.error("Error fetching directory contents:", error);
  });


};
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.userFunc0xf7a9a8(runtimeScene);

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.Untitled_32sceneCode.asyncCallback10447708 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(9).setBoolean(true);
}gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback10447708(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.asyncCallback10448700 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(9).setBoolean(false);
}gdjs.Untitled_32sceneCode.localVariables.length = 0;
}
gdjs.Untitled_32sceneCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Untitled_32sceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.Untitled_32sceneCode.asyncCallback10448700(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Untitled_32sceneCode.userFunc0xbaf820 = function GDJSInlineCode(runtimeScene) {
"use strict";
const repo = "Michaelgde/dataBase_michealGD";  // Replace with your GitHub username/repository
const path = "";    // Path to the folder in the repository (leave empty for the root)
const branch = "main";               // Branch name (e.g., main, master)
let q = '"'


fetch(`https://api.github.com/repos/${repo}/contents/${path}?ref=${branch}`)
  .then(response => response.json())
  .then(data => {
    if (Array.isArray(data)) {
      // Loop through and log the file names
      data.forEach(file => {
        if (file.type === "file") {
          console.log("File name:", file.name);
        } else if (file.type === "dir") {
          console.log("Directory name:", file.name);
          runtimeScene.getVariables().get("jsonCheck").setString(runtimeScene.getVariables().get("jsonCheck").getAsString()+","+q+file.name+q)
        }
      });

      // Example: Store the list of file names in a GDevelop variable
      const fileNames = data.filter(file => file.type === "file").map(file => file.name);
      const dirNames = data.filter(file => file.type === "dir").map(file => file.name);
      runtimeScene.getVariables().get("data").fromJSObject(dirNames);
      runtimeScene.getVariables().get("refresh").setString("y")
    } else {
      console.error("Failed to retrieve the directory contents:", data.message);
    }
  })
  .catch(error => {
    console.error("Error fetching directory contents:", error);
  });


};
gdjs.Untitled_32sceneCode.eventsList3 = function(runtimeScene) {

{


gdjs.Untitled_32sceneCode.userFunc0xbaf820(runtimeScene);

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDimageObjects3Objects = Hashtable.newFrom({"image": gdjs.Untitled_32sceneCode.GDimageObjects3});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDaboutObjects3Objects = Hashtable.newFrom({"about": gdjs.Untitled_32sceneCode.GDaboutObjects3});
gdjs.Untitled_32sceneCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0)) == gdjs.Untitled_32sceneCode.localVariables[0].getFromIndex(0).getAsNumber();
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setString("");
}}

}


};gdjs.Untitled_32sceneCode.userFunc0x8471a8 = function GDJSInlineCode(runtimeScene) {
"use strict";
var data = runtimeScene.getVariables().get("data").getChildAt(runtimeScene.getVariables().get("count").getAsNumber()).getAsString()
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
    runtimeScene.getVariables().get("txt").getChildAt(runtimeScene.getVariables().get("count").getAsNumber()).setString(text);
    runtimeScene.getVariables().get("count").add(1)
  })
  .catch(error => {
    console.error("There was a problem with the fetch operation:", error);
  });
};
gdjs.Untitled_32sceneCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{


const repeatCount3 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0));
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {
gdjs.copyArray(gdjs.Untitled_32sceneCode.GDaboutObjects1, gdjs.Untitled_32sceneCode.GDaboutObjects3);

gdjs.copyArray(gdjs.Untitled_32sceneCode.GDimageObjects1, gdjs.Untitled_32sceneCode.GDimageObjects3);


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDimageObjects3Objects, 30, gdjs.Untitled_32sceneCode.localVariables[0].getFromIndex(1).getAsNumber(), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDaboutObjects3Objects, 30, gdjs.Untitled_32sceneCode.localVariables[0].getFromIndex(1).getAsNumber() + 96, "");
}{runtimeScene.getScene().getVariables().getFromIndex(5).setString("https://raw.githubusercontent.com/Michaelgde/dataBase_michealGD/main/" + runtimeScene.getScene().getVariables().getFromIndex(0).getChild(gdjs.Untitled_32sceneCode.localVariables[0].getFromIndex(0).getAsNumber()).getAsString() + "/download.png");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(6), "https://raw.githubusercontent.com/Michaelgde/dataBase_michealGD/main/" + runtimeScene.getScene().getVariables().getFromIndex(0).getChild(gdjs.Untitled_32sceneCode.localVariables[0].getFromIndex(0).getAsNumber()).getAsString() + "/download.png");
}{gdjs.evtTools.variable.valuePush(runtimeScene.getScene().getVariables().getFromIndex(8), runtimeScene.getScene().getVariables().getFromIndex(0).getChild(gdjs.Untitled_32sceneCode.localVariables[0].getFromIndex(0).getAsNumber()).getAsString());
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDimageObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDimageObjects3[i].returnVariable(gdjs.Untitled_32sceneCode.GDimageObjects3[i].getVariables().getFromIndex(0)).setNumber(gdjs.Untitled_32sceneCode.localVariables[0].getFromIndex(0).getAsNumber());
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDaboutObjects3.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDaboutObjects3[i].returnVariable(gdjs.Untitled_32sceneCode.GDaboutObjects3[i].getVariables().getFromIndex(0)).setNumber(gdjs.Untitled_32sceneCode.localVariables[0].getFromIndex(0).getAsNumber());
}
}{gdjs.Untitled_32sceneCode.localVariables[0].getFromIndex(0).add(1);
}{gdjs.Untitled_32sceneCode.localVariables[0].getFromIndex(1).add(140);
}
{ //Subevents: 
gdjs.Untitled_32sceneCode.eventsList4(runtimeScene);} //Subevents end.
}
}

}


{


gdjs.Untitled_32sceneCode.userFunc0x8471a8(runtimeScene);

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDimageObjects1Objects = Hashtable.newFrom({"image": gdjs.Untitled_32sceneCode.GDimageObjects1});
gdjs.Untitled_32sceneCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "more");
}}

}


};gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDimageObjects2Objects = Hashtable.newFrom({"image": gdjs.Untitled_32sceneCode.GDimageObjects2});
gdjs.Untitled_32sceneCode.eventsList7 = function(runtimeScene) {

};gdjs.Untitled_32sceneCode.eventsList8 = function(runtimeScene) {

};gdjs.Untitled_32sceneCode.eventsList9 = function(runtimeScene) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setString("\"");
variables._declare("q", variable);
}
gdjs.Untitled_32sceneCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setString(gdjs.Untitled_32sceneCode.localVariables[0].getFromIndex(0).getAsString() + "type" + gdjs.Untitled_32sceneCode.localVariables[0].getFromIndex(0).getAsString());
}{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getScene().getVariables().getFromIndex(0));
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}
gdjs.Untitled_32sceneCode.localVariables.pop();

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0)) < 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(9), false, false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0)) < 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(9), true, false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Untitled_32sceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setString("\"");
variables._declare("q", variable);
}
gdjs.Untitled_32sceneCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(9), true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10444012);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setString(gdjs.Untitled_32sceneCode.localVariables[0].getFromIndex(0).getAsString() + "type" + gdjs.Untitled_32sceneCode.localVariables[0].getFromIndex(0).getAsString());
}{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getScene().getVariables().getFromIndex(0));
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList3(runtimeScene);} //End of subevents
}
gdjs.Untitled_32sceneCode.localVariables.pop();

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3))).includes(",");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2)) == "y";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0)) == "type";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14323820);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getScene().getVariables().getFromIndex(6));
}{gdjs.evtTools.network.jsonToVariableStructure("[" + runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() + "]", runtimeScene.getScene().getVariables().getFromIndex(0));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2)) == "y";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0)) == "type";
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.variableRemoveAt(runtimeScene.getScene().getVariables().getFromIndex(0), 0);
}}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("counter", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(200);
variables._declare("Yplacement", variable);
}
gdjs.Untitled_32sceneCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0)) > 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(2)) == "y";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(0)) != "type";
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14327868);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("about"), gdjs.Untitled_32sceneCode.GDaboutObjects1);
gdjs.copyArray(runtimeScene.getObjects("image"), gdjs.Untitled_32sceneCode.GDimageObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDimageObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDimageObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getScene().getVariables().getFromIndex(6));
}{gdjs.evtTools.variable.variableClearChildren(runtimeScene.getScene().getVariables().getFromIndex(8));
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDaboutObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDaboutObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(0);
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList5(runtimeScene);} //End of subevents
}
gdjs.Untitled_32sceneCode.localVariables.pop();

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("debug"), gdjs.Untitled_32sceneCode.GDdebugObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDdebugObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDdebugObjects1[i].getBehavior("Text").setText("data[]==> " + gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(0)) + gdjs.evtTools.string.newLine() + "img[]==> " + gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(6)) + gdjs.evtTools.string.newLine() + "txt[]==> " + gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getScene().getVariables().getFromIndex(8)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("image"), gdjs.Untitled_32sceneCode.GDimageObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDimageObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDimageObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(1).setString(runtimeScene.getScene().getVariables().getFromIndex(6).getChild(((gdjs.Untitled_32sceneCode.GDimageObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDimageObjects1[0].getVariables()).getFromIndex(0).getAsNumber()).getAsString());
}{runtimeScene.getGame().getVariables().getFromIndex(4).setString(runtimeScene.getScene().getVariables().getFromIndex(0).getChild(((gdjs.Untitled_32sceneCode.GDimageObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDimageObjects1[0].getVariables()).getFromIndex(0).getAsNumber()).getAsString());
}{runtimeScene.getGame().getVariables().getFromIndex(3).setString("loading...");
}{runtimeScene.getGame().getVariables().getFromIndex(2).setString("loading...");
}
{ //Subevents
gdjs.Untitled_32sceneCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("image"), gdjs.Untitled_32sceneCode.GDimageObjects1);

for (gdjs.Untitled_32sceneCode.forEachIndex2 = 0;gdjs.Untitled_32sceneCode.forEachIndex2 < gdjs.Untitled_32sceneCode.GDimageObjects1.length;++gdjs.Untitled_32sceneCode.forEachIndex2) {
gdjs.Untitled_32sceneCode.GDimageObjects2.length = 0;


gdjs.Untitled_32sceneCode.forEachTemporary2 = gdjs.Untitled_32sceneCode.GDimageObjects1[gdjs.Untitled_32sceneCode.forEachIndex2];
gdjs.Untitled_32sceneCode.GDimageObjects2.push(gdjs.Untitled_32sceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite.func(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(6).getChild(((gdjs.Untitled_32sceneCode.GDimageObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDimageObjects2[0].getVariables()).getFromIndex(0).getAsNumber()).getAsString(), gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDimageObjects2Objects, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("about"), gdjs.Untitled_32sceneCode.GDaboutObjects1);

for (gdjs.Untitled_32sceneCode.forEachIndex2 = 0;gdjs.Untitled_32sceneCode.forEachIndex2 < gdjs.Untitled_32sceneCode.GDaboutObjects1.length;++gdjs.Untitled_32sceneCode.forEachIndex2) {
gdjs.Untitled_32sceneCode.GDaboutObjects2.length = 0;


gdjs.Untitled_32sceneCode.forEachTemporary2 = gdjs.Untitled_32sceneCode.GDaboutObjects1[gdjs.Untitled_32sceneCode.forEachIndex2];
gdjs.Untitled_32sceneCode.GDaboutObjects2.push(gdjs.Untitled_32sceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDaboutObjects2.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDaboutObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(8).getChild(gdjs.Untitled_32sceneCode.GDaboutObjects2[i].getVariables().getFromIndex(0).getAsNumber()).getAsString());
}
}}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getScene().getVariables().getFromIndex(0)) > 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("info"), gdjs.Untitled_32sceneCode.GDinfoObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDinfoObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDinfoObjects1[i].hide();
}
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDlogoTXTObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDlogoTXTObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDlogoTXTObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDlogoTXTObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDlogoTXTObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDlogoObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDlogoObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDlogoObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDlogoObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDlogoObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDwhiteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDwhiteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDwhiteObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDwhiteObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDwhiteObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDsearch_9595barObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDsearch_9595barObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDsearch_9595barObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDsearch_9595barObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDsearch_9595barObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDwiwObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDwiwObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDwiwObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDwiwObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDwiwObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDcircleObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDcircleObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDcircleObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDcircleObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDcircleObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDwhite2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDwhite2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDwhite2Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDwhite2Objects4.length = 0;
gdjs.Untitled_32sceneCode.GDwhite2Objects5.length = 0;
gdjs.Untitled_32sceneCode.GDimageObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDimageObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDimageObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDimageObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDimageObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDdebugObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDdebugObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDdebugObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDdebugObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDdebugObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDaboutObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDaboutObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDaboutObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDaboutObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDaboutObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDinfoObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDinfoObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDinfoObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDinfoObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDinfoObjects5.length = 0;

gdjs.Untitled_32sceneCode.eventsList9(runtimeScene);
gdjs.Untitled_32sceneCode.GDlogoTXTObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDlogoTXTObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDlogoTXTObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDlogoTXTObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDlogoTXTObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDlogoObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDlogoObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDlogoObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDlogoObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDlogoObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDwhiteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDwhiteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDwhiteObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDwhiteObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDwhiteObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDsearch_9595barObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDsearch_9595barObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDsearch_9595barObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDsearch_9595barObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDsearch_9595barObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDwiwObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDwiwObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDwiwObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDwiwObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDwiwObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDcircleObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDcircleObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDcircleObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDcircleObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDcircleObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDwhite2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDwhite2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDwhite2Objects3.length = 0;
gdjs.Untitled_32sceneCode.GDwhite2Objects4.length = 0;
gdjs.Untitled_32sceneCode.GDwhite2Objects5.length = 0;
gdjs.Untitled_32sceneCode.GDimageObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDimageObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDimageObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDimageObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDimageObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDdebugObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDdebugObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDdebugObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDdebugObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDdebugObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDaboutObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDaboutObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDaboutObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDaboutObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDaboutObjects5.length = 0;
gdjs.Untitled_32sceneCode.GDinfoObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDinfoObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDinfoObjects3.length = 0;
gdjs.Untitled_32sceneCode.GDinfoObjects4.length = 0;
gdjs.Untitled_32sceneCode.GDinfoObjects5.length = 0;


return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
