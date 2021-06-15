gdjs.Final2Code = {};
gdjs.Final2Code.GDNewObjectObjects1= [];
gdjs.Final2Code.GDNewObjectObjects2= [];
gdjs.Final2Code.GDNewObjectObjects3= [];
gdjs.Final2Code.GDbuttonObjects1= [];
gdjs.Final2Code.GDbuttonObjects2= [];
gdjs.Final2Code.GDbuttonObjects3= [];
gdjs.Final2Code.GDGameoverObjects1= [];
gdjs.Final2Code.GDGameoverObjects2= [];
gdjs.Final2Code.GDGameoverObjects3= [];
gdjs.Final2Code.GDNewObject2Objects1= [];
gdjs.Final2Code.GDNewObject2Objects2= [];
gdjs.Final2Code.GDNewObject2Objects3= [];

gdjs.Final2Code.conditionTrue_0 = {val:false};
gdjs.Final2Code.condition0IsTrue_0 = {val:false};
gdjs.Final2Code.condition1IsTrue_0 = {val:false};
gdjs.Final2Code.condition2IsTrue_0 = {val:false};


gdjs.Final2Code.mapOfGDgdjs_46Final2Code_46GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.Final2Code.GDbuttonObjects1});gdjs.Final2Code.mapOfGDgdjs_46Final2Code_46GDbuttonObjects2Objects = Hashtable.newFrom({"button": gdjs.Final2Code.GDbuttonObjects2});gdjs.Final2Code.mapOfGDgdjs_46Final2Code_46GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.Final2Code.GDbuttonObjects1});gdjs.Final2Code.eventsList0 = function(runtimeScene) {

{


gdjs.Final2Code.condition0IsTrue_0.val = false;
{
gdjs.Final2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Final2Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Final2Code.GDbuttonObjects1, gdjs.Final2Code.GDbuttonObjects2);

{for(var i = 0, len = gdjs.Final2Code.GDbuttonObjects2.length ;i < len;++i) {
    gdjs.Final2Code.GDbuttonObjects2[i].getBehavior("Tween").addObjectScaleTween("Pressed2", 1.2, 1.2, "easeOutCubic", 400, false, true);
}
}}

}


{


gdjs.Final2Code.condition0IsTrue_0.val = false;
{
gdjs.Final2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Final2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Nivel 1", false);
}}

}


{

gdjs.copyArray(gdjs.Final2Code.GDbuttonObjects1, gdjs.Final2Code.GDbuttonObjects2);


gdjs.Final2Code.condition0IsTrue_0.val = false;
gdjs.Final2Code.condition1IsTrue_0.val = false;
{
gdjs.Final2Code.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.Final2Code.condition0IsTrue_0.val ) {
{
gdjs.Final2Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Final2Code.mapOfGDgdjs_46Final2Code_46GDbuttonObjects2Objects, runtimeScene, true, false);
}}
if (gdjs.Final2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Final2Code.GDbuttonObjects2 */
{for(var i = 0, len = gdjs.Final2Code.GDbuttonObjects2.length ;i < len;++i) {
    gdjs.Final2Code.GDbuttonObjects2[i].getBehavior("Tween").addObjectScaleTween("hover", 1.3, 1.3, "easeInSine", 400, false, true);
}
}}

}


{

/* Reuse gdjs.Final2Code.GDbuttonObjects1 */

gdjs.Final2Code.condition0IsTrue_0.val = false;
{
gdjs.Final2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Final2Code.mapOfGDgdjs_46Final2Code_46GDbuttonObjects1Objects, runtimeScene, true, true);
}if (gdjs.Final2Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Final2Code.GDbuttonObjects1 */
{for(var i = 0, len = gdjs.Final2Code.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.Final2Code.GDbuttonObjects1[i].getBehavior("Tween").addObjectScaleTween("normal", 1.2, 1.2, "easeInSine", 400, false, true);
}
}}

}


};gdjs.Final2Code.eventsList1 = function(runtimeScene) {

{


gdjs.Final2Code.condition0IsTrue_0.val = false;
{
gdjs.Final2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Final2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "FarBeyond Studio - Freebies Vol. 1 - 02 - Fight The Devil (CC-BY 4.0)2.ogg", true, 20, 0.9);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.Final2Code.GDbuttonObjects1);

gdjs.Final2Code.condition0IsTrue_0.val = false;
{
gdjs.Final2Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Final2Code.mapOfGDgdjs_46Final2Code_46GDbuttonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Final2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Final2Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.Final2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Final2Code.GDNewObjectObjects1.length = 0;
gdjs.Final2Code.GDNewObjectObjects2.length = 0;
gdjs.Final2Code.GDNewObjectObjects3.length = 0;
gdjs.Final2Code.GDbuttonObjects1.length = 0;
gdjs.Final2Code.GDbuttonObjects2.length = 0;
gdjs.Final2Code.GDbuttonObjects3.length = 0;
gdjs.Final2Code.GDGameoverObjects1.length = 0;
gdjs.Final2Code.GDGameoverObjects2.length = 0;
gdjs.Final2Code.GDGameoverObjects3.length = 0;
gdjs.Final2Code.GDNewObject2Objects1.length = 0;
gdjs.Final2Code.GDNewObject2Objects2.length = 0;
gdjs.Final2Code.GDNewObject2Objects3.length = 0;

gdjs.Final2Code.eventsList1(runtimeScene);
return;

}

gdjs['Final2Code'] = gdjs.Final2Code;
