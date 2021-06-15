gdjs.principalCode = {};
gdjs.principalCode.GDNewObjectObjects1= [];
gdjs.principalCode.GDNewObjectObjects2= [];
gdjs.principalCode.GDNewObjectObjects3= [];
gdjs.principalCode.GDGameoverObjects1= [];
gdjs.principalCode.GDGameoverObjects2= [];
gdjs.principalCode.GDGameoverObjects3= [];
gdjs.principalCode.GDNewObject2Objects1= [];
gdjs.principalCode.GDNewObject2Objects2= [];
gdjs.principalCode.GDNewObject2Objects3= [];
gdjs.principalCode.GDNewObject3Objects1= [];
gdjs.principalCode.GDNewObject3Objects2= [];
gdjs.principalCode.GDNewObject3Objects3= [];
gdjs.principalCode.GDbuttonObjects1= [];
gdjs.principalCode.GDbuttonObjects2= [];
gdjs.principalCode.GDbuttonObjects3= [];
gdjs.principalCode.GDRightArrowRoundButtonObjects1= [];
gdjs.principalCode.GDRightArrowRoundButtonObjects2= [];
gdjs.principalCode.GDRightArrowRoundButtonObjects3= [];
gdjs.principalCode.GDTopArrowRoundButtonObjects1= [];
gdjs.principalCode.GDTopArrowRoundButtonObjects2= [];
gdjs.principalCode.GDTopArrowRoundButtonObjects3= [];
gdjs.principalCode.GDBottomArrowRoundButtonObjects1= [];
gdjs.principalCode.GDBottomArrowRoundButtonObjects2= [];
gdjs.principalCode.GDBottomArrowRoundButtonObjects3= [];
gdjs.principalCode.GDLeftArrowRoundButton2Objects1= [];
gdjs.principalCode.GDLeftArrowRoundButton2Objects2= [];
gdjs.principalCode.GDLeftArrowRoundButton2Objects3= [];
gdjs.principalCode.GDBlueBlankButtonObjects1= [];
gdjs.principalCode.GDBlueBlankButtonObjects2= [];
gdjs.principalCode.GDBlueBlankButtonObjects3= [];
gdjs.principalCode.GDNewObject4Objects1= [];
gdjs.principalCode.GDNewObject4Objects2= [];
gdjs.principalCode.GDNewObject4Objects3= [];
gdjs.principalCode.GDNewObject5Objects1= [];
gdjs.principalCode.GDNewObject5Objects2= [];
gdjs.principalCode.GDNewObject5Objects3= [];

gdjs.principalCode.conditionTrue_0 = {val:false};
gdjs.principalCode.condition0IsTrue_0 = {val:false};
gdjs.principalCode.condition1IsTrue_0 = {val:false};
gdjs.principalCode.condition2IsTrue_0 = {val:false};


gdjs.principalCode.mapOfGDgdjs_46principalCode_46GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.principalCode.GDbuttonObjects1});gdjs.principalCode.mapOfGDgdjs_46principalCode_46GDbuttonObjects2Objects = Hashtable.newFrom({"button": gdjs.principalCode.GDbuttonObjects2});gdjs.principalCode.mapOfGDgdjs_46principalCode_46GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.principalCode.GDbuttonObjects1});gdjs.principalCode.eventsList0 = function(runtimeScene) {

{


gdjs.principalCode.condition0IsTrue_0.val = false;
{
gdjs.principalCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.principalCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.principalCode.GDbuttonObjects1, gdjs.principalCode.GDbuttonObjects2);

{for(var i = 0, len = gdjs.principalCode.GDbuttonObjects2.length ;i < len;++i) {
    gdjs.principalCode.GDbuttonObjects2[i].getBehavior("Tween").addObjectScaleTween("Pressed2", 1.2, 1.2, "easeOutCubic", 400, false, true);
}
}}

}


{


gdjs.principalCode.condition0IsTrue_0.val = false;
{
gdjs.principalCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.principalCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Nivel 1", false);
}}

}


{

gdjs.copyArray(gdjs.principalCode.GDbuttonObjects1, gdjs.principalCode.GDbuttonObjects2);


gdjs.principalCode.condition0IsTrue_0.val = false;
gdjs.principalCode.condition1IsTrue_0.val = false;
{
gdjs.principalCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.principalCode.condition0IsTrue_0.val ) {
{
gdjs.principalCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.principalCode.mapOfGDgdjs_46principalCode_46GDbuttonObjects2Objects, runtimeScene, true, false);
}}
if (gdjs.principalCode.condition1IsTrue_0.val) {
/* Reuse gdjs.principalCode.GDbuttonObjects2 */
{for(var i = 0, len = gdjs.principalCode.GDbuttonObjects2.length ;i < len;++i) {
    gdjs.principalCode.GDbuttonObjects2[i].getBehavior("Tween").addObjectScaleTween("hover", 1.3, 1.3, "easeInSine", 400, false, true);
}
}}

}


{

/* Reuse gdjs.principalCode.GDbuttonObjects1 */

gdjs.principalCode.condition0IsTrue_0.val = false;
{
gdjs.principalCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.principalCode.mapOfGDgdjs_46principalCode_46GDbuttonObjects1Objects, runtimeScene, true, true);
}if (gdjs.principalCode.condition0IsTrue_0.val) {
/* Reuse gdjs.principalCode.GDbuttonObjects1 */
{for(var i = 0, len = gdjs.principalCode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.principalCode.GDbuttonObjects1[i].getBehavior("Tween").addObjectScaleTween("normal", 1.2, 1.2, "easeInSine", 400, false, true);
}
}}

}


};gdjs.principalCode.eventsList1 = function(runtimeScene) {

{


gdjs.principalCode.condition0IsTrue_0.val = false;
{
gdjs.principalCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.principalCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "sky-man.ogg", true, 5, 0.9);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.principalCode.GDbuttonObjects1);

gdjs.principalCode.condition0IsTrue_0.val = false;
{
gdjs.principalCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.principalCode.mapOfGDgdjs_46principalCode_46GDbuttonObjects1Objects, runtimeScene, true, false);
}if (gdjs.principalCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.principalCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.principalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.principalCode.GDNewObjectObjects1.length = 0;
gdjs.principalCode.GDNewObjectObjects2.length = 0;
gdjs.principalCode.GDNewObjectObjects3.length = 0;
gdjs.principalCode.GDGameoverObjects1.length = 0;
gdjs.principalCode.GDGameoverObjects2.length = 0;
gdjs.principalCode.GDGameoverObjects3.length = 0;
gdjs.principalCode.GDNewObject2Objects1.length = 0;
gdjs.principalCode.GDNewObject2Objects2.length = 0;
gdjs.principalCode.GDNewObject2Objects3.length = 0;
gdjs.principalCode.GDNewObject3Objects1.length = 0;
gdjs.principalCode.GDNewObject3Objects2.length = 0;
gdjs.principalCode.GDNewObject3Objects3.length = 0;
gdjs.principalCode.GDbuttonObjects1.length = 0;
gdjs.principalCode.GDbuttonObjects2.length = 0;
gdjs.principalCode.GDbuttonObjects3.length = 0;
gdjs.principalCode.GDRightArrowRoundButtonObjects1.length = 0;
gdjs.principalCode.GDRightArrowRoundButtonObjects2.length = 0;
gdjs.principalCode.GDRightArrowRoundButtonObjects3.length = 0;
gdjs.principalCode.GDTopArrowRoundButtonObjects1.length = 0;
gdjs.principalCode.GDTopArrowRoundButtonObjects2.length = 0;
gdjs.principalCode.GDTopArrowRoundButtonObjects3.length = 0;
gdjs.principalCode.GDBottomArrowRoundButtonObjects1.length = 0;
gdjs.principalCode.GDBottomArrowRoundButtonObjects2.length = 0;
gdjs.principalCode.GDBottomArrowRoundButtonObjects3.length = 0;
gdjs.principalCode.GDLeftArrowRoundButton2Objects1.length = 0;
gdjs.principalCode.GDLeftArrowRoundButton2Objects2.length = 0;
gdjs.principalCode.GDLeftArrowRoundButton2Objects3.length = 0;
gdjs.principalCode.GDBlueBlankButtonObjects1.length = 0;
gdjs.principalCode.GDBlueBlankButtonObjects2.length = 0;
gdjs.principalCode.GDBlueBlankButtonObjects3.length = 0;
gdjs.principalCode.GDNewObject4Objects1.length = 0;
gdjs.principalCode.GDNewObject4Objects2.length = 0;
gdjs.principalCode.GDNewObject4Objects3.length = 0;
gdjs.principalCode.GDNewObject5Objects1.length = 0;
gdjs.principalCode.GDNewObject5Objects2.length = 0;
gdjs.principalCode.GDNewObject5Objects3.length = 0;

gdjs.principalCode.eventsList1(runtimeScene);
return;

}

gdjs['principalCode'] = gdjs.principalCode;
