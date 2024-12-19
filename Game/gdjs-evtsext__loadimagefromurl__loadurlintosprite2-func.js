
if (typeof gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite2 !== "undefined") {
  gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite2.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite2 = {};
gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite2.GDObjectObjects1= [];


gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite2.userFunc0xff5a98 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
objects[0].getRendererObject().texture



};
gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite2.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite2.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite2.GDObjectObjects1);
gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite2.userFunc0xff5a98(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite2.func = function(runtimeScene, Object, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("LoadImageFromURL"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("LoadImageFromURL"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite2.GDObjectObjects1.length = 0;

gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite2.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite2.GDObjectObjects1.length = 0;


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__LoadImageFromURL__LoadURLIntoSprite2.registeredGdjsCallbacks = [];