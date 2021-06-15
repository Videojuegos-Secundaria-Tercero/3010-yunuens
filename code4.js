gdjs.FinalCode = {};
gdjs.FinalCode.GDNewObjectObjects1= [];
gdjs.FinalCode.GDNewObjectObjects2= [];
gdjs.FinalCode.GDNewObjectObjects3= [];
gdjs.FinalCode.GDbuttonObjects1= [];
gdjs.FinalCode.GDbuttonObjects2= [];
gdjs.FinalCode.GDbuttonObjects3= [];
gdjs.FinalCode.GDGameoverObjects1= [];
gdjs.FinalCode.GDGameoverObjects2= [];
gdjs.FinalCode.GDGameoverObjects3= [];

gdjs.FinalCode.conditionTrue_0 = {val:false};
gdjs.FinalCode.condition0IsTrue_0 = {val:false};
gdjs.FinalCode.condition1IsTrue_0 = {val:false};
gdjs.FinalCode.condition2IsTrue_0 = {val:false};


gdjs.FinalCode.mapOfGDgdjs_46FinalCode_46GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.FinalCode.GDbuttonObjects1});gdjs.FinalCode.mapOfGDgdjs_46FinalCode_46GDbuttonObjects2Objects = Hashtable.newFrom({"button": gdjs.FinalCode.GDbuttonObjects2});gdjs.FinalCode.mapOfGDgdjs_46FinalCode_46GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.FinalCode.GDbuttonObjects1});gdjs.FinalCode.eventsList0 = function(runtimeScene) {

{


gdjs.FinalCode.condition0IsTrue_0.val = false;
{
gdjs.FinalCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.FinalCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.FinalCode.GDbuttonObjects1, gdjs.FinalCode.GDbuttonObjects2);

{for(var i = 0, len = gdjs.FinalCode.GDbuttonObjects2.length ;i < len;++i) {
    gdjs.FinalCode.GDbuttonObjects2[i].getBehavior("Tween").addObjectScaleTween("Pressed2", 1.2, 1.2, "easeOutCubic", 400, false, true);
}
}}

}


{


gdjs.FinalCode.condition0IsTrue_0.val = false;
{
gdjs.FinalCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.FinalCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Nivel 1", false);
}}

}


{

gdjs.copyArray(gdjs.FinalCode.GDbuttonObjects1, gdjs.FinalCode.GDbuttonObjects2);


gdjs.FinalCode.condition0IsTrue_0.val = false;
gdjs.FinalCode.condition1IsTrue_0.val = false;
{
gdjs.FinalCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.FinalCode.condition0IsTrue_0.val ) {
{
gdjs.FinalCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FinalCode.mapOfGDgdjs_46FinalCode_46GDbuttonObjects2Objects, runtimeScene, true, false);
}}
if (gdjs.FinalCode.condition1IsTrue_0.val) {
/* Reuse gdjs.FinalCode.GDbuttonObjects2 */
{for(var i = 0, len = gdjs.FinalCode.GDbuttonObjects2.length ;i < len;++i) {
    gdjs.FinalCode.GDbuttonObjects2[i].getBehavior("Tween").addObjectScaleTween("hover", 1.3, 1.3, "easeInSine", 400, false, true);
}
}}

}


{

/* Reuse gdjs.FinalCode.GDbuttonObjects1 */

gdjs.FinalCode.condition0IsTrue_0.val = false;
{
gdjs.FinalCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FinalCode.mapOfGDgdjs_46FinalCode_46GDbuttonObjects1Objects, runtimeScene, true, true);
}if (gdjs.FinalCode.condition0IsTrue_0.val) {
/* Reuse gdjs.FinalCode.GDbuttonObjects1 */
{for(var i = 0, len = gdjs.FinalCode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.FinalCode.GDbuttonObjects1[i].getBehavior("Tween").addObjectScaleTween("normal", 1.2, 1.2, "easeInSine", 400, false, true);
}
}}

}


};gdjs.FinalCode.eventsList1 = function(runtimeScene) {

{


gdjs.FinalCode.condition0IsTrue_0.val = false;
{
gdjs.FinalCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.FinalCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "sky-man.ogg", true, 5, 0.9);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.FinalCode.GDbuttonObjects1);

gdjs.FinalCode.condition0IsTrue_0.val = false;
{
gdjs.FinalCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.FinalCode.mapOfGDgdjs_46FinalCode_46GDbuttonObjects1Objects, runtimeScene, true, false);
}if (gdjs.FinalCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.FinalCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.FinalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FinalCode.GDNewObjectObjects1.length = 0;
gdjs.FinalCode.GDNewObjectObjects2.length = 0;
gdjs.FinalCode.GDNewObjectObjects3.length = 0;
gdjs.FinalCode.GDbuttonObjects1.length = 0;
gdjs.FinalCode.GDbuttonObjects2.length = 0;
gdjs.FinalCode.GDbuttonObjects3.length = 0;
gdjs.FinalCode.GDGameoverObjects1.length = 0;
gdjs.FinalCode.GDGameoverObjects2.length = 0;
gdjs.FinalCode.GDGameoverObjects3.length = 0;

gdjs.FinalCode.eventsList1(runtimeScene);
return;

}

gdjs['FinalCode'] = gdjs.FinalCode;
