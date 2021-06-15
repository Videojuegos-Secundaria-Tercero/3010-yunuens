gdjs.Nivel_321Code = {};
gdjs.Nivel_321Code.GDbg1Objects1= [];
gdjs.Nivel_321Code.GDbg1Objects2= [];
gdjs.Nivel_321Code.GDbg1Objects3= [];
gdjs.Nivel_321Code.GDbg2Objects1= [];
gdjs.Nivel_321Code.GDbg2Objects2= [];
gdjs.Nivel_321Code.GDbg2Objects3= [];
gdjs.Nivel_321Code.GDbg4Objects1= [];
gdjs.Nivel_321Code.GDbg4Objects2= [];
gdjs.Nivel_321Code.GDbg4Objects3= [];
gdjs.Nivel_321Code.GDbg3Objects1= [];
gdjs.Nivel_321Code.GDbg3Objects2= [];
gdjs.Nivel_321Code.GDbg3Objects3= [];
gdjs.Nivel_321Code.GDbg5Objects1= [];
gdjs.Nivel_321Code.GDbg5Objects2= [];
gdjs.Nivel_321Code.GDbg5Objects3= [];
gdjs.Nivel_321Code.GDbg6Objects1= [];
gdjs.Nivel_321Code.GDbg6Objects2= [];
gdjs.Nivel_321Code.GDbg6Objects3= [];
gdjs.Nivel_321Code.GDPrincessObjects1= [];
gdjs.Nivel_321Code.GDPrincessObjects2= [];
gdjs.Nivel_321Code.GDPrincessObjects3= [];
gdjs.Nivel_321Code.GDYellowFloorObjects1= [];
gdjs.Nivel_321Code.GDYellowFloorObjects2= [];
gdjs.Nivel_321Code.GDYellowFloorObjects3= [];
gdjs.Nivel_321Code.GDmovesObjects1= [];
gdjs.Nivel_321Code.GDmovesObjects2= [];
gdjs.Nivel_321Code.GDmovesObjects3= [];
gdjs.Nivel_321Code.GDNewObject2Objects1= [];
gdjs.Nivel_321Code.GDNewObject2Objects2= [];
gdjs.Nivel_321Code.GDNewObject2Objects3= [];
gdjs.Nivel_321Code.GDNewObject3Objects1= [];
gdjs.Nivel_321Code.GDNewObject3Objects2= [];
gdjs.Nivel_321Code.GDNewObject3Objects3= [];
gdjs.Nivel_321Code.GDCoinObjects1= [];
gdjs.Nivel_321Code.GDCoinObjects2= [];
gdjs.Nivel_321Code.GDCoinObjects3= [];
gdjs.Nivel_321Code.GDBigcoinObjects1= [];
gdjs.Nivel_321Code.GDBigcoinObjects2= [];
gdjs.Nivel_321Code.GDBigcoinObjects3= [];
gdjs.Nivel_321Code.GDcoinsObjects1= [];
gdjs.Nivel_321Code.GDcoinsObjects2= [];
gdjs.Nivel_321Code.GDcoinsObjects3= [];
gdjs.Nivel_321Code.GDBoxObjects1= [];
gdjs.Nivel_321Code.GDBoxObjects2= [];
gdjs.Nivel_321Code.GDBoxObjects3= [];
gdjs.Nivel_321Code.GDGreenSubstanceFlatCeilingObjects1= [];
gdjs.Nivel_321Code.GDGreenSubstanceFlatCeilingObjects2= [];
gdjs.Nivel_321Code.GDGreenSubstanceFlatCeilingObjects3= [];
gdjs.Nivel_321Code.GDbalaObjects1= [];
gdjs.Nivel_321Code.GDbalaObjects2= [];
gdjs.Nivel_321Code.GDbalaObjects3= [];
gdjs.Nivel_321Code.GDNewObject6Objects1= [];
gdjs.Nivel_321Code.GDNewObject6Objects2= [];
gdjs.Nivel_321Code.GDNewObject6Objects3= [];
gdjs.Nivel_321Code.GDNewObjectObjects1= [];
gdjs.Nivel_321Code.GDNewObjectObjects2= [];
gdjs.Nivel_321Code.GDNewObjectObjects3= [];
gdjs.Nivel_321Code.GDBlueBirdObjects1= [];
gdjs.Nivel_321Code.GDBlueBirdObjects2= [];
gdjs.Nivel_321Code.GDBlueBirdObjects3= [];
gdjs.Nivel_321Code.GDIndustrialPlatformCenterObjects1= [];
gdjs.Nivel_321Code.GDIndustrialPlatformCenterObjects2= [];
gdjs.Nivel_321Code.GDIndustrialPlatformCenterObjects3= [];
gdjs.Nivel_321Code.GDDoorObjects1= [];
gdjs.Nivel_321Code.GDDoorObjects2= [];
gdjs.Nivel_321Code.GDDoorObjects3= [];

gdjs.Nivel_321Code.conditionTrue_0 = {val:false};
gdjs.Nivel_321Code.condition0IsTrue_0 = {val:false};
gdjs.Nivel_321Code.condition1IsTrue_0 = {val:false};
gdjs.Nivel_321Code.condition2IsTrue_0 = {val:false};
gdjs.Nivel_321Code.conditionTrue_1 = {val:false};
gdjs.Nivel_321Code.condition0IsTrue_1 = {val:false};
gdjs.Nivel_321Code.condition1IsTrue_1 = {val:false};
gdjs.Nivel_321Code.condition2IsTrue_1 = {val:false};


gdjs.Nivel_321Code.eventsList0 = function(runtimeScene) {

{


gdjs.Nivel_321Code.condition0IsTrue_0.val = false;
{
{gdjs.Nivel_321Code.conditionTrue_1 = gdjs.Nivel_321Code.condition0IsTrue_0;
gdjs.Nivel_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14484476);
}
}if (gdjs.Nivel_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Simple Jump 001.wav", false, 25, 1);
}}

}


};gdjs.Nivel_321Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Nivel_321Code.GDPrincessObjects1, gdjs.Nivel_321Code.GDPrincessObjects2);


gdjs.Nivel_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_321Code.GDPrincessObjects2.length;i<l;++i) {
    if ( gdjs.Nivel_321Code.GDPrincessObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Nivel_321Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_321Code.GDPrincessObjects2[k] = gdjs.Nivel_321Code.GDPrincessObjects2[i];
        ++k;
    }
}
gdjs.Nivel_321Code.GDPrincessObjects2.length = k;}if (gdjs.Nivel_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Nivel_321Code.GDPrincessObjects2 */
{for(var i = 0, len = gdjs.Nivel_321Code.GDPrincessObjects2.length ;i < len;++i) {
    gdjs.Nivel_321Code.GDPrincessObjects2[i].setAnimationName("Run");
}
}}

}


{

/* Reuse gdjs.Nivel_321Code.GDPrincessObjects1 */

gdjs.Nivel_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_321Code.GDPrincessObjects1.length;i<l;++i) {
    if ( !(gdjs.Nivel_321Code.GDPrincessObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Nivel_321Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_321Code.GDPrincessObjects1[k] = gdjs.Nivel_321Code.GDPrincessObjects1[i];
        ++k;
    }
}
gdjs.Nivel_321Code.GDPrincessObjects1.length = k;}if (gdjs.Nivel_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Nivel_321Code.GDPrincessObjects1 */
{for(var i = 0, len = gdjs.Nivel_321Code.GDPrincessObjects1.length ;i < len;++i) {
    gdjs.Nivel_321Code.GDPrincessObjects1[i].setAnimationName("Idle");
}
}}

}


};gdjs.Nivel_321Code.mapOfGDgdjs_46Nivel_95321Code_46GDPrincessObjects1Objects = Hashtable.newFrom({"Princess": gdjs.Nivel_321Code.GDPrincessObjects1});gdjs.Nivel_321Code.mapOfGDgdjs_46Nivel_95321Code_46GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.Nivel_321Code.GDCoinObjects1});gdjs.Nivel_321Code.mapOfGDgdjs_46Nivel_95321Code_46GDPrincessObjects1Objects = Hashtable.newFrom({"Princess": gdjs.Nivel_321Code.GDPrincessObjects1});gdjs.Nivel_321Code.mapOfGDgdjs_46Nivel_95321Code_46GDBigcoinObjects1Objects = Hashtable.newFrom({"Bigcoin": gdjs.Nivel_321Code.GDBigcoinObjects1});gdjs.Nivel_321Code.mapOfGDgdjs_46Nivel_95321Code_46GDbalaObjects2Objects = Hashtable.newFrom({"bala": gdjs.Nivel_321Code.GDbalaObjects2});gdjs.Nivel_321Code.mapOfGDgdjs_46Nivel_95321Code_46GDbalaObjects1Objects = Hashtable.newFrom({"bala": gdjs.Nivel_321Code.GDbalaObjects1});gdjs.Nivel_321Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Nivel_321Code.GDPrincessObjects1, gdjs.Nivel_321Code.GDPrincessObjects2);


gdjs.Nivel_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_321Code.GDPrincessObjects2.length;i<l;++i) {
    if ( !(gdjs.Nivel_321Code.GDPrincessObjects2[i].isFlippedX()) ) {
        gdjs.Nivel_321Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_321Code.GDPrincessObjects2[k] = gdjs.Nivel_321Code.GDPrincessObjects2[i];
        ++k;
    }
}
gdjs.Nivel_321Code.GDPrincessObjects2.length = k;}if (gdjs.Nivel_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Nivel_321Code.GDPrincessObjects2 */
gdjs.copyArray(runtimeScene.getObjects("bala"), gdjs.Nivel_321Code.GDbalaObjects2);
{for(var i = 0, len = gdjs.Nivel_321Code.GDPrincessObjects2.length ;i < len;++i) {
    gdjs.Nivel_321Code.GDPrincessObjects2[i].getBehavior("FireBullet").Fire((gdjs.Nivel_321Code.GDPrincessObjects2[i].getPointX("bala")), (gdjs.Nivel_321Code.GDPrincessObjects2[i].getPointY("bala")), gdjs.Nivel_321Code.mapOfGDgdjs_46Nivel_95321Code_46GDbalaObjects2Objects, 0, 500, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

/* Reuse gdjs.Nivel_321Code.GDPrincessObjects1 */

gdjs.Nivel_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_321Code.GDPrincessObjects1.length;i<l;++i) {
    if ( gdjs.Nivel_321Code.GDPrincessObjects1[i].isFlippedX() ) {
        gdjs.Nivel_321Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_321Code.GDPrincessObjects1[k] = gdjs.Nivel_321Code.GDPrincessObjects1[i];
        ++k;
    }
}
gdjs.Nivel_321Code.GDPrincessObjects1.length = k;}if (gdjs.Nivel_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Nivel_321Code.GDPrincessObjects1 */
gdjs.copyArray(runtimeScene.getObjects("bala"), gdjs.Nivel_321Code.GDbalaObjects1);
{for(var i = 0, len = gdjs.Nivel_321Code.GDPrincessObjects1.length ;i < len;++i) {
    gdjs.Nivel_321Code.GDPrincessObjects1[i].getBehavior("FireBullet").Fire((gdjs.Nivel_321Code.GDPrincessObjects1[i].getPointX("bala")), (gdjs.Nivel_321Code.GDPrincessObjects1[i].getPointY("bala")), gdjs.Nivel_321Code.mapOfGDgdjs_46Nivel_95321Code_46GDbalaObjects1Objects, 180, 500, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.Nivel_321Code.mapOfGDgdjs_46Nivel_95321Code_46GDPrincessObjects1Objects = Hashtable.newFrom({"Princess": gdjs.Nivel_321Code.GDPrincessObjects1});gdjs.Nivel_321Code.mapOfGDgdjs_46Nivel_95321Code_46GDBlueBirdObjects1Objects = Hashtable.newFrom({"BlueBird": gdjs.Nivel_321Code.GDBlueBirdObjects1});gdjs.Nivel_321Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Nivel_321Code.GDBlueBirdObjects1, gdjs.Nivel_321Code.GDBlueBirdObjects2);

gdjs.copyArray(gdjs.Nivel_321Code.GDPrincessObjects1, gdjs.Nivel_321Code.GDPrincessObjects2);


gdjs.Nivel_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_321Code.GDBlueBirdObjects2.length;i<l;++i) {
    if ( gdjs.Nivel_321Code.GDBlueBirdObjects2[i].getX() > (( gdjs.Nivel_321Code.GDPrincessObjects2.length === 0 ) ? 0 :gdjs.Nivel_321Code.GDPrincessObjects2[0].getPointX("")) ) {
        gdjs.Nivel_321Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_321Code.GDBlueBirdObjects2[k] = gdjs.Nivel_321Code.GDBlueBirdObjects2[i];
        ++k;
    }
}
gdjs.Nivel_321Code.GDBlueBirdObjects2.length = k;}if (gdjs.Nivel_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Nivel_321Code.GDPrincessObjects2 */
{for(var i = 0, len = gdjs.Nivel_321Code.GDPrincessObjects2.length ;i < len;++i) {
    gdjs.Nivel_321Code.GDPrincessObjects2[i].getBehavior("Tween").addObjectPositionTween("HitS", (gdjs.Nivel_321Code.GDPrincessObjects2[i].getPointX("")) - 200, (gdjs.Nivel_321Code.GDPrincessObjects2[i].getPointY("")) - 20, "easeOutQuad", 500, false);
}
}}

}


{

/* Reuse gdjs.Nivel_321Code.GDBlueBirdObjects1 */
/* Reuse gdjs.Nivel_321Code.GDPrincessObjects1 */

gdjs.Nivel_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_321Code.GDBlueBirdObjects1.length;i<l;++i) {
    if ( gdjs.Nivel_321Code.GDBlueBirdObjects1[i].getX() < (( gdjs.Nivel_321Code.GDPrincessObjects1.length === 0 ) ? 0 :gdjs.Nivel_321Code.GDPrincessObjects1[0].getPointX("")) ) {
        gdjs.Nivel_321Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_321Code.GDBlueBirdObjects1[k] = gdjs.Nivel_321Code.GDBlueBirdObjects1[i];
        ++k;
    }
}
gdjs.Nivel_321Code.GDBlueBirdObjects1.length = k;}if (gdjs.Nivel_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Nivel_321Code.GDPrincessObjects1 */
{for(var i = 0, len = gdjs.Nivel_321Code.GDPrincessObjects1.length ;i < len;++i) {
    gdjs.Nivel_321Code.GDPrincessObjects1[i].getBehavior("Tween").addObjectPositionTween("HitS", (gdjs.Nivel_321Code.GDPrincessObjects1[i].getPointX("")) + 200, (gdjs.Nivel_321Code.GDPrincessObjects1[i].getPointY("")) - 20, "easeOutQuad", 500, false);
}
}}

}


};gdjs.Nivel_321Code.mapOfGDgdjs_46Nivel_95321Code_46GDBlueBirdObjects1Objects = Hashtable.newFrom({"BlueBird": gdjs.Nivel_321Code.GDBlueBirdObjects1});gdjs.Nivel_321Code.mapOfGDgdjs_46Nivel_95321Code_46GDbalaObjects1Objects = Hashtable.newFrom({"bala": gdjs.Nivel_321Code.GDbalaObjects1});gdjs.Nivel_321Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Nivel_321Code.GDBlueBirdObjects1, gdjs.Nivel_321Code.GDBlueBirdObjects2);

gdjs.copyArray(gdjs.Nivel_321Code.GDbalaObjects1, gdjs.Nivel_321Code.GDbalaObjects2);


gdjs.Nivel_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_321Code.GDbalaObjects2.length;i<l;++i) {
    if ( gdjs.Nivel_321Code.GDbalaObjects2[i].getX() > (( gdjs.Nivel_321Code.GDBlueBirdObjects2.length === 0 ) ? 0 :gdjs.Nivel_321Code.GDBlueBirdObjects2[0].getPointX("")) ) {
        gdjs.Nivel_321Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_321Code.GDbalaObjects2[k] = gdjs.Nivel_321Code.GDbalaObjects2[i];
        ++k;
    }
}
gdjs.Nivel_321Code.GDbalaObjects2.length = k;}if (gdjs.Nivel_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Nivel_321Code.GDBlueBirdObjects2 */
{}}

}


{

/* Reuse gdjs.Nivel_321Code.GDBlueBirdObjects1 */
/* Reuse gdjs.Nivel_321Code.GDbalaObjects1 */

gdjs.Nivel_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_321Code.GDbalaObjects1.length;i<l;++i) {
    if ( gdjs.Nivel_321Code.GDbalaObjects1[i].getX() < (( gdjs.Nivel_321Code.GDBlueBirdObjects1.length === 0 ) ? 0 :gdjs.Nivel_321Code.GDBlueBirdObjects1[0].getPointX("")) ) {
        gdjs.Nivel_321Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_321Code.GDbalaObjects1[k] = gdjs.Nivel_321Code.GDbalaObjects1[i];
        ++k;
    }
}
gdjs.Nivel_321Code.GDbalaObjects1.length = k;}if (gdjs.Nivel_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Nivel_321Code.GDBlueBirdObjects1 */
{}}

}


};gdjs.Nivel_321Code.eventsList5 = function(runtimeScene) {

{

/* Reuse gdjs.Nivel_321Code.GDBlueBirdObjects1 */

gdjs.Nivel_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_321Code.GDBlueBirdObjects1.length;i<l;++i) {
    if ( gdjs.Nivel_321Code.GDBlueBirdObjects1[i].hasAnimationEnded() ) {
        gdjs.Nivel_321Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_321Code.GDBlueBirdObjects1[k] = gdjs.Nivel_321Code.GDBlueBirdObjects1[i];
        ++k;
    }
}
gdjs.Nivel_321Code.GDBlueBirdObjects1.length = k;}if (gdjs.Nivel_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Nivel_321Code.GDBlueBirdObjects1 */
{for(var i = 0, len = gdjs.Nivel_321Code.GDBlueBirdObjects1.length ;i < len;++i) {
    gdjs.Nivel_321Code.GDBlueBirdObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Nivel_321Code.eventsList6 = function(runtimeScene) {

{


{
}

}


};gdjs.Nivel_321Code.mapOfGDgdjs_46Nivel_95321Code_46GDPrincessObjects1Objects = Hashtable.newFrom({"Princess": gdjs.Nivel_321Code.GDPrincessObjects1});gdjs.Nivel_321Code.mapOfGDgdjs_46Nivel_95321Code_46GDIndustrialPlatformCenterObjects1Objects = Hashtable.newFrom({"IndustrialPlatformCenter": gdjs.Nivel_321Code.GDIndustrialPlatformCenterObjects1});gdjs.Nivel_321Code.mapOfGDgdjs_46Nivel_95321Code_46GDPrincessObjects1Objects = Hashtable.newFrom({"Princess": gdjs.Nivel_321Code.GDPrincessObjects1});gdjs.Nivel_321Code.mapOfGDgdjs_46Nivel_95321Code_46GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.Nivel_321Code.GDDoorObjects1});gdjs.Nivel_321Code.eventsList7 = function(runtimeScene) {

{

/* Reuse gdjs.Nivel_321Code.GDDoorObjects1 */

gdjs.Nivel_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_321Code.GDDoorObjects1.length;i<l;++i) {
    if ( gdjs.Nivel_321Code.GDDoorObjects1[i].hasAnimationEnded() ) {
        gdjs.Nivel_321Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_321Code.GDDoorObjects1[k] = gdjs.Nivel_321Code.GDDoorObjects1[i];
        ++k;
    }
}
gdjs.Nivel_321Code.GDDoorObjects1.length = k;}if (gdjs.Nivel_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Nivel 2", false);
}}

}


};gdjs.Nivel_321Code.eventsList8 = function(runtimeScene) {

{


gdjs.Nivel_321Code.condition0IsTrue_0.val = false;
{
gdjs.Nivel_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Nivel_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "loopTwo.wav", true, 20, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Princess"), gdjs.Nivel_321Code.GDPrincessObjects1);

gdjs.Nivel_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_321Code.GDPrincessObjects1.length;i<l;++i) {
    if ( gdjs.Nivel_321Code.GDPrincessObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Nivel_321Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_321Code.GDPrincessObjects1[k] = gdjs.Nivel_321Code.GDPrincessObjects1[i];
        ++k;
    }
}
gdjs.Nivel_321Code.GDPrincessObjects1.length = k;}if (gdjs.Nivel_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Nivel_321Code.GDPrincessObjects1 */
{for(var i = 0, len = gdjs.Nivel_321Code.GDPrincessObjects1.length ;i < len;++i) {
    gdjs.Nivel_321Code.GDPrincessObjects1[i].setAnimationName("Jump");
}
}
{ //Subevents
gdjs.Nivel_321Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Princess"), gdjs.Nivel_321Code.GDPrincessObjects1);

gdjs.Nivel_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_321Code.GDPrincessObjects1.length;i<l;++i) {
    if ( gdjs.Nivel_321Code.GDPrincessObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Nivel_321Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_321Code.GDPrincessObjects1[k] = gdjs.Nivel_321Code.GDPrincessObjects1[i];
        ++k;
    }
}
gdjs.Nivel_321Code.GDPrincessObjects1.length = k;}if (gdjs.Nivel_321Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Nivel_321Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Princess"), gdjs.Nivel_321Code.GDPrincessObjects1);

gdjs.Nivel_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_321Code.GDPrincessObjects1.length;i<l;++i) {
    if ( gdjs.Nivel_321Code.GDPrincessObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Nivel_321Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_321Code.GDPrincessObjects1[k] = gdjs.Nivel_321Code.GDPrincessObjects1[i];
        ++k;
    }
}
gdjs.Nivel_321Code.GDPrincessObjects1.length = k;}if (gdjs.Nivel_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Nivel_321Code.GDPrincessObjects1 */
{for(var i = 0, len = gdjs.Nivel_321Code.GDPrincessObjects1.length ;i < len;++i) {
    gdjs.Nivel_321Code.GDPrincessObjects1[i].setAnimationName("Fall");
}
}}

}


{


gdjs.Nivel_321Code.condition0IsTrue_0.val = false;
{
gdjs.Nivel_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Nivel_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Princess"), gdjs.Nivel_321Code.GDPrincessObjects1);
{for(var i = 0, len = gdjs.Nivel_321Code.GDPrincessObjects1.length ;i < len;++i) {
    gdjs.Nivel_321Code.GDPrincessObjects1[i].flipX(false);
}
}}

}


{


gdjs.Nivel_321Code.condition0IsTrue_0.val = false;
{
gdjs.Nivel_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Nivel_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Princess"), gdjs.Nivel_321Code.GDPrincessObjects1);
{for(var i = 0, len = gdjs.Nivel_321Code.GDPrincessObjects1.length ;i < len;++i) {
    gdjs.Nivel_321Code.GDPrincessObjects1[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Princess"), gdjs.Nivel_321Code.GDPrincessObjects1);

gdjs.Nivel_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_321Code.GDPrincessObjects1.length;i<l;++i) {
    if ( gdjs.Nivel_321Code.GDPrincessObjects1[i].getBehavior("PlatformerObject").isOnLadder() ) {
        gdjs.Nivel_321Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_321Code.GDPrincessObjects1[k] = gdjs.Nivel_321Code.GDPrincessObjects1[i];
        ++k;
    }
}
gdjs.Nivel_321Code.GDPrincessObjects1.length = k;}if (gdjs.Nivel_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Nivel_321Code.GDPrincessObjects1 */
{for(var i = 0, len = gdjs.Nivel_321Code.GDPrincessObjects1.length ;i < len;++i) {
    gdjs.Nivel_321Code.GDPrincessObjects1[i].setAnimationName("Shoot");
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Princess"), gdjs.Nivel_321Code.GDPrincessObjects1);
gdjs.copyArray(runtimeScene.getObjects("coins"), gdjs.Nivel_321Code.GDcoinsObjects1);
{gdjs.evtTools.camera.centerCameraWithinLimits(runtimeScene, (gdjs.Nivel_321Code.GDPrincessObjects1.length !== 0 ? gdjs.Nivel_321Code.GDPrincessObjects1[0] : null), 0, -(800), 7150, 600, true, "", 0);
}{for(var i = 0, len = gdjs.Nivel_321Code.GDcoinsObjects1.length ;i < len;++i) {
    gdjs.Nivel_321Code.GDcoinsObjects1[i].setString("coins: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.Nivel_321Code.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Princess"), gdjs.Nivel_321Code.GDPrincessObjects1);

gdjs.Nivel_321Code.condition0IsTrue_0.val = false;
{
gdjs.Nivel_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nivel_321Code.mapOfGDgdjs_46Nivel_95321Code_46GDPrincessObjects1Objects, gdjs.Nivel_321Code.mapOfGDgdjs_46Nivel_95321Code_46GDCoinObjects1Objects, false, runtimeScene, false);
}if (gdjs.Nivel_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Nivel_321Code.GDCoinObjects1 */
{for(var i = 0, len = gdjs.Nivel_321Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs.Nivel_321Code.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Simple Coin 006.wav", false, 25, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bigcoin"), gdjs.Nivel_321Code.GDBigcoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Princess"), gdjs.Nivel_321Code.GDPrincessObjects1);

gdjs.Nivel_321Code.condition0IsTrue_0.val = false;
{
gdjs.Nivel_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nivel_321Code.mapOfGDgdjs_46Nivel_95321Code_46GDPrincessObjects1Objects, gdjs.Nivel_321Code.mapOfGDgdjs_46Nivel_95321Code_46GDBigcoinObjects1Objects, false, runtimeScene, false);
}if (gdjs.Nivel_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Nivel_321Code.GDBigcoinObjects1 */
{for(var i = 0, len = gdjs.Nivel_321Code.GDBigcoinObjects1.length ;i < len;++i) {
    gdjs.Nivel_321Code.GDBigcoinObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(10);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Coin 001.wav", false, 22, 1);
}}

}


{


{
}

}


{


gdjs.Nivel_321Code.condition0IsTrue_0.val = false;
{
gdjs.Nivel_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.Nivel_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Princess"), gdjs.Nivel_321Code.GDPrincessObjects1);
{for(var i = 0, len = gdjs.Nivel_321Code.GDPrincessObjects1.length ;i < len;++i) {
    gdjs.Nivel_321Code.GDPrincessObjects1[i].setAnimationName("Shoot");
}
}
{ //Subevents
gdjs.Nivel_321Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueBird"), gdjs.Nivel_321Code.GDBlueBirdObjects1);
gdjs.copyArray(runtimeScene.getObjects("Princess"), gdjs.Nivel_321Code.GDPrincessObjects1);

gdjs.Nivel_321Code.condition0IsTrue_0.val = false;
{
gdjs.Nivel_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nivel_321Code.mapOfGDgdjs_46Nivel_95321Code_46GDPrincessObjects1Objects, gdjs.Nivel_321Code.mapOfGDgdjs_46Nivel_95321Code_46GDBlueBirdObjects1Objects, false, runtimeScene, false);
}if (gdjs.Nivel_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Nivel_321Code.GDPrincessObjects1 */
{for(var i = 0, len = gdjs.Nivel_321Code.GDPrincessObjects1.length ;i < len;++i) {
    gdjs.Nivel_321Code.GDPrincessObjects1[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Nivel_321Code.GDPrincessObjects1.length ;i < len;++i) {
    gdjs.Nivel_321Code.GDPrincessObjects1[i].setAnimationName("Hurt");
}
}{for(var i = 0, len = gdjs.Nivel_321Code.GDPrincessObjects1.length ;i < len;++i) {
    gdjs.Nivel_321Code.GDPrincessObjects1[i].getBehavior("Flash").Flash(0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Nivel_321Code.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Princess"), gdjs.Nivel_321Code.GDPrincessObjects1);

gdjs.Nivel_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_321Code.GDPrincessObjects1.length;i<l;++i) {
    if ( gdjs.Nivel_321Code.GDPrincessObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Nivel_321Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_321Code.GDPrincessObjects1[k] = gdjs.Nivel_321Code.GDPrincessObjects1[i];
        ++k;
    }
}
gdjs.Nivel_321Code.GDPrincessObjects1.length = k;}if (gdjs.Nivel_321Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Final", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueBird"), gdjs.Nivel_321Code.GDBlueBirdObjects1);
gdjs.copyArray(runtimeScene.getObjects("bala"), gdjs.Nivel_321Code.GDbalaObjects1);

gdjs.Nivel_321Code.condition0IsTrue_0.val = false;
gdjs.Nivel_321Code.condition1IsTrue_0.val = false;
{
gdjs.Nivel_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nivel_321Code.mapOfGDgdjs_46Nivel_95321Code_46GDBlueBirdObjects1Objects, gdjs.Nivel_321Code.mapOfGDgdjs_46Nivel_95321Code_46GDbalaObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Nivel_321Code.condition0IsTrue_0.val ) {
{
{gdjs.Nivel_321Code.conditionTrue_1 = gdjs.Nivel_321Code.condition1IsTrue_0;
gdjs.Nivel_321Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(14499212);
}
}}
if (gdjs.Nivel_321Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Nivel_321Code.GDBlueBirdObjects1 */
/* Reuse gdjs.Nivel_321Code.GDbalaObjects1 */
{for(var i = 0, len = gdjs.Nivel_321Code.GDBlueBirdObjects1.length ;i < len;++i) {
    gdjs.Nivel_321Code.GDBlueBirdObjects1[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Nivel_321Code.GDbalaObjects1.length ;i < len;++i) {
    gdjs.Nivel_321Code.GDbalaObjects1[i].deleteFromScene(runtimeScene);
}
}{}
{ //Subevents
gdjs.Nivel_321Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlueBird"), gdjs.Nivel_321Code.GDBlueBirdObjects1);

gdjs.Nivel_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_321Code.GDBlueBirdObjects1.length;i<l;++i) {
    if ( gdjs.Nivel_321Code.GDBlueBirdObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Nivel_321Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_321Code.GDBlueBirdObjects1[k] = gdjs.Nivel_321Code.GDBlueBirdObjects1[i];
        ++k;
    }
}
gdjs.Nivel_321Code.GDBlueBirdObjects1.length = k;}if (gdjs.Nivel_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Nivel_321Code.GDBlueBirdObjects1 */
{for(var i = 0, len = gdjs.Nivel_321Code.GDBlueBirdObjects1.length ;i < len;++i) {
    gdjs.Nivel_321Code.GDBlueBirdObjects1[i].setAnimationName("Dead");
}
}
{ //Subevents
gdjs.Nivel_321Code.eventsList5(runtimeScene);} //End of subevents
}

}


{


{

{ //Subevents
gdjs.Nivel_321Code.eventsList6(runtimeScene);} //End of subevents
}

}


{


{
{}{}{}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Princess"), gdjs.Nivel_321Code.GDPrincessObjects1);

gdjs.Nivel_321Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Nivel_321Code.GDPrincessObjects1.length;i<l;++i) {
    if ( gdjs.Nivel_321Code.GDPrincessObjects1[i].getBehavior("FireBullet").HasJustFired((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Nivel_321Code.condition0IsTrue_0.val = true;
        gdjs.Nivel_321Code.GDPrincessObjects1[k] = gdjs.Nivel_321Code.GDPrincessObjects1[i];
        ++k;
    }
}
gdjs.Nivel_321Code.GDPrincessObjects1.length = k;}if (gdjs.Nivel_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Nivel_321Code.GDPrincessObjects1 */
{for(var i = 0, len = gdjs.Nivel_321Code.GDPrincessObjects1.length ;i < len;++i) {
    gdjs.Nivel_321Code.GDPrincessObjects1[i].setAnimationName("Shoot");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("IndustrialPlatformCenter"), gdjs.Nivel_321Code.GDIndustrialPlatformCenterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Princess"), gdjs.Nivel_321Code.GDPrincessObjects1);

gdjs.Nivel_321Code.condition0IsTrue_0.val = false;
{
gdjs.Nivel_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nivel_321Code.mapOfGDgdjs_46Nivel_95321Code_46GDPrincessObjects1Objects, gdjs.Nivel_321Code.mapOfGDgdjs_46Nivel_95321Code_46GDIndustrialPlatformCenterObjects1Objects, false, runtimeScene, false);
}if (gdjs.Nivel_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Nivel_321Code.GDPrincessObjects1 */
{for(var i = 0, len = gdjs.Nivel_321Code.GDPrincessObjects1.length ;i < len;++i) {
    gdjs.Nivel_321Code.GDPrincessObjects1[i].getBehavior("Health").Hit(3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.Nivel_321Code.GDDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("Princess"), gdjs.Nivel_321Code.GDPrincessObjects1);

gdjs.Nivel_321Code.condition0IsTrue_0.val = false;
{
gdjs.Nivel_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nivel_321Code.mapOfGDgdjs_46Nivel_95321Code_46GDPrincessObjects1Objects, gdjs.Nivel_321Code.mapOfGDgdjs_46Nivel_95321Code_46GDDoorObjects1Objects, false, runtimeScene, false);
}if (gdjs.Nivel_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Nivel_321Code.GDDoorObjects1 */
{for(var i = 0, len = gdjs.Nivel_321Code.GDDoorObjects1.length ;i < len;++i) {
    gdjs.Nivel_321Code.GDDoorObjects1[i].setAnimationName("Open");
}
}
{ //Subevents
gdjs.Nivel_321Code.eventsList7(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.Nivel_321Code.GDCoinObjects1);
{for(var i = 0, len = gdjs.Nivel_321Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs.Nivel_321Code.GDCoinObjects1[i].setAnimationName("Coin");
}
}}

}


};

gdjs.Nivel_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Nivel_321Code.GDbg1Objects1.length = 0;
gdjs.Nivel_321Code.GDbg1Objects2.length = 0;
gdjs.Nivel_321Code.GDbg1Objects3.length = 0;
gdjs.Nivel_321Code.GDbg2Objects1.length = 0;
gdjs.Nivel_321Code.GDbg2Objects2.length = 0;
gdjs.Nivel_321Code.GDbg2Objects3.length = 0;
gdjs.Nivel_321Code.GDbg4Objects1.length = 0;
gdjs.Nivel_321Code.GDbg4Objects2.length = 0;
gdjs.Nivel_321Code.GDbg4Objects3.length = 0;
gdjs.Nivel_321Code.GDbg3Objects1.length = 0;
gdjs.Nivel_321Code.GDbg3Objects2.length = 0;
gdjs.Nivel_321Code.GDbg3Objects3.length = 0;
gdjs.Nivel_321Code.GDbg5Objects1.length = 0;
gdjs.Nivel_321Code.GDbg5Objects2.length = 0;
gdjs.Nivel_321Code.GDbg5Objects3.length = 0;
gdjs.Nivel_321Code.GDbg6Objects1.length = 0;
gdjs.Nivel_321Code.GDbg6Objects2.length = 0;
gdjs.Nivel_321Code.GDbg6Objects3.length = 0;
gdjs.Nivel_321Code.GDPrincessObjects1.length = 0;
gdjs.Nivel_321Code.GDPrincessObjects2.length = 0;
gdjs.Nivel_321Code.GDPrincessObjects3.length = 0;
gdjs.Nivel_321Code.GDYellowFloorObjects1.length = 0;
gdjs.Nivel_321Code.GDYellowFloorObjects2.length = 0;
gdjs.Nivel_321Code.GDYellowFloorObjects3.length = 0;
gdjs.Nivel_321Code.GDmovesObjects1.length = 0;
gdjs.Nivel_321Code.GDmovesObjects2.length = 0;
gdjs.Nivel_321Code.GDmovesObjects3.length = 0;
gdjs.Nivel_321Code.GDNewObject2Objects1.length = 0;
gdjs.Nivel_321Code.GDNewObject2Objects2.length = 0;
gdjs.Nivel_321Code.GDNewObject2Objects3.length = 0;
gdjs.Nivel_321Code.GDNewObject3Objects1.length = 0;
gdjs.Nivel_321Code.GDNewObject3Objects2.length = 0;
gdjs.Nivel_321Code.GDNewObject3Objects3.length = 0;
gdjs.Nivel_321Code.GDCoinObjects1.length = 0;
gdjs.Nivel_321Code.GDCoinObjects2.length = 0;
gdjs.Nivel_321Code.GDCoinObjects3.length = 0;
gdjs.Nivel_321Code.GDBigcoinObjects1.length = 0;
gdjs.Nivel_321Code.GDBigcoinObjects2.length = 0;
gdjs.Nivel_321Code.GDBigcoinObjects3.length = 0;
gdjs.Nivel_321Code.GDcoinsObjects1.length = 0;
gdjs.Nivel_321Code.GDcoinsObjects2.length = 0;
gdjs.Nivel_321Code.GDcoinsObjects3.length = 0;
gdjs.Nivel_321Code.GDBoxObjects1.length = 0;
gdjs.Nivel_321Code.GDBoxObjects2.length = 0;
gdjs.Nivel_321Code.GDBoxObjects3.length = 0;
gdjs.Nivel_321Code.GDGreenSubstanceFlatCeilingObjects1.length = 0;
gdjs.Nivel_321Code.GDGreenSubstanceFlatCeilingObjects2.length = 0;
gdjs.Nivel_321Code.GDGreenSubstanceFlatCeilingObjects3.length = 0;
gdjs.Nivel_321Code.GDbalaObjects1.length = 0;
gdjs.Nivel_321Code.GDbalaObjects2.length = 0;
gdjs.Nivel_321Code.GDbalaObjects3.length = 0;
gdjs.Nivel_321Code.GDNewObject6Objects1.length = 0;
gdjs.Nivel_321Code.GDNewObject6Objects2.length = 0;
gdjs.Nivel_321Code.GDNewObject6Objects3.length = 0;
gdjs.Nivel_321Code.GDNewObjectObjects1.length = 0;
gdjs.Nivel_321Code.GDNewObjectObjects2.length = 0;
gdjs.Nivel_321Code.GDNewObjectObjects3.length = 0;
gdjs.Nivel_321Code.GDBlueBirdObjects1.length = 0;
gdjs.Nivel_321Code.GDBlueBirdObjects2.length = 0;
gdjs.Nivel_321Code.GDBlueBirdObjects3.length = 0;
gdjs.Nivel_321Code.GDIndustrialPlatformCenterObjects1.length = 0;
gdjs.Nivel_321Code.GDIndustrialPlatformCenterObjects2.length = 0;
gdjs.Nivel_321Code.GDIndustrialPlatformCenterObjects3.length = 0;
gdjs.Nivel_321Code.GDDoorObjects1.length = 0;
gdjs.Nivel_321Code.GDDoorObjects2.length = 0;
gdjs.Nivel_321Code.GDDoorObjects3.length = 0;

gdjs.Nivel_321Code.eventsList8(runtimeScene);
return;

}

gdjs['Nivel_321Code'] = gdjs.Nivel_321Code;
