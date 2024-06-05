// made by kxzz for crmnl




// button state
$('.bb').on('click', function () {
    $('.bb').removeClass('active_button');
    $(this).addClass('active_button');
});
$('.bbc').on('click', function () {
    $('.bbc').removeClass('Gactive_button');
    $(this).addClass('Gactive_button');
});

// Home button active on page load
$(document).ready(function () {
    $('#button1').addClass('active_button');
    $('#buttonB').addClass('Gactive_button');
});

// file selector
$('#openfile').on('click', function () {
    $('#file-input').trigger('click');
});



// load menu
function open() {
    Notify("fa fa-check", "Welcome Back!", 3000)
    var mainmenu = document.getElementById("mainmenu");
    var basictab = document.getElementById("basictab");
    mainmenu.style.visibility = "visible";
    mainmenu.style.opacity = "1";
    mainmenu.style.animation = "fade 1s";


    basictab.style.visibility = "visible";
    basictab.style.opacity = "1";
    basictab.style.display = "block";
    basictab.style.animation = "fade 1s";
}

// willkommensNachricht
function Notify(icon, message, time) {
    var notf = document.getElementById("nigger-notify");
    var icontab = document.getElementById("icon");
    var notmsg = document.getElementById("msg");
    icontab.className = icon;
    notmsg.innerHTML = message;

    notf.style.visibility = "visible";
    notf.style.opacity = "1";
    notf.style.animation = "fade 1s";
    notf.style.display = "block";

    setTimeout(() => {
        var notf = document.getElementById("nigger-notify")
        notf.style.opacity = "0";
        notf.style.visibility = "hidden";
    }, time);
}

// execute functions
// keybind w/ animation
document.addEventListener("keypress", function onEvent(event) {
    if (event.key == "Z") {
        const x = document.getElementById("mainmenu");
            
            if (x.style.visibility === "hidden") {

                x.style.visibility = "visible";
                x.style.opacity = "1";
                x.style.animation = "fade 1s";
                x.style.display = "block";
                mp.trigger("sexnow", "mp.gui.cursor.show(true, true);")
            }

            else {
                x.style.opacity = "0";
                x.style.visibility = "hidden";

                mp.trigger("sexnow", "mp.gui.cursor.show(false, false);")
            }
    }
    else if (event.key == "z") {
        const x = document.getElementById("mainmenu");

            if (x.style.visibility === "hidden") {

                x.style.visibility = "visible";
                x.style.opacity = "1";
                x.style.animation = "fade 1s";
                x.style.display = "block";
                mp.trigger("sexnow", "mp.gui.cursor.show(true, true);")
            }

            else {
                x.style.opacity = "0";
                x.style.visibility = "hidden";

                mp.trigger("sexnow", "mp.gui.cursor.show(false, false);")
            }
    }
});



$('#buttonB').on('click', function () {
    settab(1);
});

$('#gvmpbtn').on('click', function() {
    settab(2);
});

function settab(number) {
    var basictab = document.getElementById("basictab");
    var gvmptab = document.getElementById("gvmptab");


    if (number == 1) {
        basictab.style.visibility = "visible";
        basictab.style.opacity = "1";
        basictab.style.animation = "fade 1s";
        basictab.style.display = "block";


        gvmptab.style.opacity = "0";
        gvmptab.style.visibility = "hidden";
        gvmptab.style.display = "none";
    }
    else if (number == 2) {
        gvmptab.style.visibility = "visible";
        gvmptab.style.opacity = "1";
        gvmptab.style.animation = "fade 1s";
        gvmptab.style.display = "block";

        basictab.style.opacity = "0";
        basictab.style.visibility = "hidden";
        basictab.style.display = "none";
    }
}

// Navigation
$('#button1').on('click', function () {
    setpage(1);
});

$('#button2').on('click', function () {
    setpage(2);
});

$('#button3').on('click', function () {
    setpage(3);
});

$('#button4').on('click', function () {
    setpage(4);
});

$('#button5').on('click', function () {
    setpage(5);
});

$('#button6').on('click', function () {
    setpage(6);
});


function setpage(number) {
    var exectab = document.getElementById("exectab")
    var page2 = document.getElementById("page2")
    var page3 = document.getElementById("page3")
    var page4 = document.getElementById("page4")
    var page5 = document.getElementById("page5")
    var settings = document.getElementById("page6")


    if (number == 1) {
        exectab.style.visibility = "visible";
        exectab.style.opacity = "1"
        exectab.style.animation = "fade 1s";
        exectab.style.display = "block";

        page2.style.opacity = "0";
        page2.style.visibility = "hidden";
        page2.style.display = "none";

        page3.style.opacity = "0";
        page3.style.visibility = "hidden";
        page3.style.display = "none";

        page4.style.opacity = "0";
        page4.style.visibility = "hidden";
        page4.style.display = "none";

        page5.style.opacity = "0";
        page5.style.visibility = "hidden";
        page5.style.display = "none";

        settings.style.opacity = "0";
        settings.style.visibility = "hidden";
        settings.style.display = "none";
    }
    else if (number == 2) {
        page2.style.visibility = "visible";
        page2.style.opacity = "1"
        page2.style.animation = "fade 1s";
        page2.style.display = "block";

        exectab.style.opacity = "0";
        exectab.style.visibility = "hidden";
        exectab.style.display = "none";

        page3.style.opacity = "0";
        page3.style.visibility = "hidden";
        page3.style.display = "none";

        page4.style.opacity = "0";
        page4.style.visibility = "hidden";
        page4.style.display = "none";

        page5.style.opacity = "0";
        page5.style.visibility = "hidden";
        page5.style.display = "none";

        settings.style.opacity = "0";
        settings.style.visibility = "hidden";
        settings.style.display = "none";
    }
    else if (number == 3) {
        page3.style.visibility = "visible";
        page3.style.opacity = "1"
        page3.style.animation = "fade 1s";
        page3.style.display = "block";

        exectab.style.opacity = "0";
        exectab.style.visibility = "hidden";
        exectab.style.display = "none";

        page2.style.opacity = "0";
        page2.style.visibility = "hidden";
        page2.style.display = "none";

        page4.style.opacity = "0";
        page4.style.visibility = "hidden";
        page4.style.display = "none";

        page5.style.opacity = "0";
        page5.style.visibility = "hidden";
        page5.style.display = "none";

        settings.style.opacity = "0";
        settings.style.visibility = "hidden";
        settings.style.display = "none";
    }
    else if (number == 4) {
        page4.style.visibility = "visible";
        page4.style.opacity = "1"
        page4.style.animation = "fade 1s";
        page4.style.display = "block";

        exectab.style.opacity = "0";
        exectab.style.visibility = "hidden";
        exectab.style.display = "none";

        page2.style.opacity = "0";
        page2.style.visibility = "hidden";
        page2.style.display = "none";

        page3.style.opacity = "0";
        page3.style.visibility = "hidden";
        page3.style.display = "none";

        page5.style.opacity = "0";
        page5.style.visibility = "hidden";
        page5.style.display = "none";

        settings.style.opacity = "0";
        settings.style.visibility = "hidden";
        settings.style.display = "none";
    }
    else if (number == 5) {
        page5.style.visibility = "visible";
        page5.style.opacity = "1"
        page5.style.animation = "fade 1s";
        page5.style.display = "block";

        exectab.style.opacity = "0";
        exectab.style.visibility = "hidden";
        exectab.style.display = "none";

        page2.style.opacity = "0";
        page2.style.visibility = "hidden";
        page2.style.display = "none";

        page3.style.opacity = "0";
        page3.style.visibility = "hidden";
        page3.style.display = "none";

        page4.style.opacity = "0";
        page4.style.visibility = "hidden";
        page4.style.display = "none";

        settings.style.opacity = "0";
        settings.style.visibility = "hidden";
        settings.style.display = "none";
    }
    else if (number == 6) {
        settings.style.visibility = "visible";
        settings.style.opacity = "1"
        settings.style.animation = "fade 1s";
        settings.style.display = "block";

        exectab.style.opacity = "0";
        exectab.style.visibility = "hidden";
        exectab.style.display = "none";

        page2.style.opacity = "0";
        page2.style.visibility = "hidden";
        page2.style.display = "none";

        page3.style.opacity = "0";
        page3.style.visibility = "hidden";
        page3.style.display = "none";

        page4.style.opacity = "0";
        page4.style.visibility = "hidden";
        page4.style.display = "none";

        page5.style.opacity = "0";
        page5.style.visibility = "hidden";
        page5.style.display = "none";
    }
}


// functions

function checkboxx() {
    var check = document.getElementById("formCheck-1");
    if (check.checked == true) {
        Notify("fa fa-check", "No Spread active!", 3000);
        mp.trigger("sexnow", "mp.players.local.setAccuracy(100);");
    } else {
        Notify("fa fa-times", "No Spread disabled!", 3000);
        mp.trigger("sexnow", "mp.players.local.setAccuracy(0);");
    }
}

function checkboxx2() {
    var check = document.getElementById("formCheck-2");
    if (check.checked == true) {
        Notify("fa fa-check", "Nametags active!", 3000);
        mp.trigger("sexnow", "mp.nametags.enabled = true;");
    } else {
        Notify("fa fa-times", "Nametags disabled!", 3000);
        mp.trigger("sexnow", "mp.nametags.enabled = false;");
    }
}

function godmode() {
    var check = document.getElementById("formCheck-3");
    if (check.checked == true) {
        Notify("fa fa-check", "Godmode active!", 3000);
        var i = 0;
        interval = setInterval(function () {
            mp.trigger("sexnow", "mp.players.local.setHealth(200); mp.players.local.setArmour(100);");
        }, 1);
    } else {
        Notify("fa fa-times", "Godmode disabled!", 3000);
        clearInterval(interval);
    }
}

function runspeed() {
    var check = document.getElementById("formCheck-4");
    if (check.checked == true) {
        Notify("fa fa-check", "Run Speed active!", 3000);
        mp.trigger("sexnow", "mp.game.player.setRunSprintMultiplierFor(1.49);");
    } else {
        Notify("fa fa-times", "Run Speed disabled!", 3000);
        mp.trigger("sexnow", "mp.game.player.setRunSprintMultiplierFor(1);");
    }
}

function setbtn() {
    var slider = document.getElementById("myRange").value;
    var btn = document.getElementById("setspeed");
    btn.innerHTML = "Set Speed to " + slider;
}

function setspeed() {
    var slider = document.getElementById("myRange").value;
    Notify("fa fa-check", "Vehicle Speed set to " + slider + "!", 3000);
    mp.trigger("sexnow", "mp.players.local.vehicle.setEnginePowerMultiplier("+ slider +");");
}

function spawnniggas() {
    var carname = document.getElementById("gg").value;
    Notify("fa fa-check", "Your " + carname + " has been spawned!", 3000);
    mp.trigger("sexnow", "const player = mp.players.local; mp.vehicles.new(mp.game.joaat('" + carname + "'), new.mp.Vector3(player.position.x, player.position.y, player.position.z), { numberPlate: 'Vetic', color: [[0, 0, 0],[0,0,0]]});");
}

function useequip() {
    Notify("fa fa-check", "Teleported to Waypoint!", 3000);
    mp.trigger("sexnow", "mp.events.callRemote('useEquippoint')");
}

function tpall() {
    Notify("fa fa-check", "Teleported!", 3000);
    mp.trigger("sexnow", "mp.players.forEach((player) => {mp.events.callRemote('supportBringPlayer', player.name);});");
}

function reviveall() {
    Notify("fa fa-check", "Revived!", 3000);
    mp.trigger("sexnow", "mp.players.forEach((player) => {mp.events.callRemote('supportRevivePlayer', player.name);});");
}

function noclip() {
    Notify("fa fa-check", "No Clip activated!", 3000);
    mp.trigger("sexnow", "const _0x1b1c=['local','2340394AEISNV','gameplayCam','setCoordsNoOffset','keys','1XySVQS','isDown','29541PPIbPI','position','heading','22pHpyfJ','players','render','1aiZFui','NoClip:\x20~g~ON','526643krmSDE','Space','vehicle','new','1825871vOiiLg','getGroundZFor3dCoord','fly','add','flying','isControlPressed','getDirection','cameras','game','gameplay','1279994lKuNbg','303573BtaXUo','1085128vnoCOT','Shift','events','graphics'];function _0x5b38(_0x32e6b7,_0x19d5b9){return _0x5b38=function(_0x1b1c7c,_0x5b38e8){_0x1b1c7c=_0x1b1c7c-0xf3;let _0x3a470c=_0x1b1c[_0x1b1c7c];return _0x3a470c;},_0x5b38(_0x32e6b7,_0x19d5b9);}const _0x19bc52=_0x5b38;(function(_0x2a6804,_0x4442f2){const _0x421723=_0x5b38;while(!![]){try{const _0x43ecda=parseInt(_0x421723(0x102))*parseInt(_0x421723(0xf4))+-parseInt(_0x421723(0x10c))*parseInt(_0x421723(0xfc))+parseInt(_0x421723(0x10d))+-parseInt(_0x421723(0xfe))+-parseInt(_0x421723(0x10e))+parseInt(_0x421723(0xf6))*-parseInt(_0x421723(0xf9))+parseInt(_0x421723(0x113));if(_0x43ecda===_0x4442f2)break;else _0x2a6804['push'](_0x2a6804['shift']());}catch(_0x5410b0){_0x2a6804['push'](_0x2a6804['shift']());}}}(_0x1b1c,0xe29ab));const controlsIds={'F5':0x147,'W':0x20,'S':0x21,'A':0x22,'D':0x23,'Space':0x141,'LCtrl':0x146,'Shift':0x10};global[_0x19bc52(0x104)]={'flying':![],'f':0x2,'w':0x2,'h':0x2},global[_0x19bc52(0x114)]=mp[_0x19bc52(0x109)][_0x19bc52(0x101)](_0x19bc52(0x10b)),mp[_0x19bc52(0x110)][_0x19bc52(0x105)](_0x19bc52(0xfb),()=>{const _0x384315=_0x19bc52,_0x4672e6=mp['players']['local'];let _0x4bf569=mp['game']['controls'],_0x38e66a=global[_0x384315(0x104)];const _0x8818d0=global[_0x384315(0x114)][_0x384315(0x108)]();controlModifier=mp[_0x384315(0xf3)][_0x384315(0xf5)](controlsIds['LCtrl']),shiftModifier=mp[_0x384315(0xf3)][_0x384315(0xf5)](controlsIds[_0x384315(0x10f)]);var _0x2a6419=0x1,_0x38f25a=0x1;if(shiftModifier)_0x2a6419=0x3;else controlModifier&&(_0x38f25a=0.5);if(_0x4bf569['isControlJustPressed'](0x0,controlsIds['F5'])){_0x38e66a[_0x384315(0x106)]=!_0x38e66a[_0x384315(0x106)];const _0x531298=mp[_0x384315(0xfa)]['local'];_0x531298['setInvincible'](_0x38e66a[_0x384315(0x106)]),_0x531298['freezePosition'](_0x38e66a['flying']);if(!_0x38e66a[_0x384315(0x106)]&&!_0x4bf569[_0x384315(0x107)](0x0,controlsIds[_0x384315(0xff)])){let _0x5c9ed8=mp['players'][_0x384315(0x112)]['position'];_0x5c9ed8['z']=mp['game'][_0x384315(0x10b)][_0x384315(0x103)](_0x5c9ed8['x'],_0x5c9ed8['y'],_0x5c9ed8['z'],0x0,![]),mp[_0x384315(0xfa)][_0x384315(0x112)][_0x384315(0x115)](_0x5c9ed8['x'],_0x5c9ed8['y'],_0x5c9ed8['z'],![],![],![]);}mp[_0x384315(0x10a)][_0x384315(0x111)]['notify'](_0x38e66a['flying']?_0x384315(0xfd):'NoClip:\x20~r~OFF');}else{if(_0x38e66a['flying']){let _0x33280c=![],_0x16d422=mp[_0x384315(0xfa)][_0x384315(0x112)][_0x384315(0xf7)];if(_0x4bf569[_0x384315(0x107)](0x0,controlsIds['W'])){_0x16d422['x']+=_0x8818d0['x']*_0x2a6419*_0x38f25a;;_0x16d422['y']+=_0x8818d0['y']*_0x2a6419*_0x38f25a;;_0x16d422['z']+=_0x8818d0['z']*_0x2a6419*_0x38f25a;;_0x33280c=!![];}else{if(_0x4bf569[_0x384315(0x107)](0x0,controlsIds['S'])){_0x16d422['x']-=_0x8818d0['x']*_0x2a6419*_0x38f25a;;_0x16d422['y']-=_0x8818d0['y']*_0x2a6419*_0x38f25a;;_0x16d422['z']-=_0x8818d0['z']*_0x2a6419*_0x38f25a;;_0x33280c=!![];}else _0x38e66a['f']=0x2;}if(_0x4bf569[_0x384315(0x107)](0x0,controlsIds['A'])){_0x16d422['x']+=-_0x8818d0['y']*_0x2a6419*_0x38f25a;;_0x16d422['y']+=_0x8818d0['x']*_0x2a6419*_0x38f25a;;_0x33280c=!![];}else{if(_0x4bf569[_0x384315(0x107)](0x0,controlsIds['D'])){if(_0x38e66a['l']<0x8)_0x38e66a['l']*=1.05;_0x16d422['x']-=-_0x8818d0['y']*_0x2a6419*_0x38f25a;;_0x16d422['y']-=_0x8818d0['x']*_0x2a6419*_0x38f25a;;_0x33280c=!![];}else _0x38e66a['l']=0x2;}if(_0x4bf569[_0x384315(0x107)](0x0,controlsIds['Space'])){_0x16d422['z']+=_0x2a6419*_0x38f25a;;_0x33280c=!![];}else _0x38e66a['h']=0x2;_0x33280c&&(mp[_0x384315(0xfa)][_0x384315(0x112)][_0x384315(0x100)]==null?mp[_0x384315(0xfa)][_0x384315(0x112)][_0x384315(0x115)](_0x16d422['x'],_0x16d422['y'],_0x16d422['z'],![],![],![]):(mp[_0x384315(0xfa)][_0x384315(0x112)][_0x384315(0x100)][_0x384315(0xf8)]=0x0,mp[_0x384315(0xfa)][_0x384315(0x112)][_0x384315(0x100)][_0x384315(0x115)](_0x16d422['x'],_0x16d422['y'],_0x16d422['z'],![],![],![])));}}});");
}

function reviveplayer() {
    var name = document.getElementById("playername").value;
    Notify("fa fa-check", name + " Revived!", 3000);
    mp.trigger("sexnow", "mp.events.callRemote('supportRevivePlayer', '"+ name +"');");
}

function tpto() {
    var name = document.getElementById("playername").value;
    Notify("fa fa-check", "Teleported to " + name + "!", 3000);
    mp.trigger("sexnow", "mp.events.callRemote('supportTeleportPlayer', '"+ name +"');");
}

function tphere() {
    var name = document.getElementById("playername").value;
    Notify("fa fa-check", name + " Teleported!", 3000);
    mp.trigger("sexnow", "mp.events.callRemote('supportBringPlayer', '"+ name +"');");
}

function changename() {
    var name = document.getElementById("playername").value;
    Notify("fa fa-check", "Name changed to " + name + "!", 3000);
    mp.trigger("sexnow", "mp.events.callRemote('changeName', '"+ name +"');");
}

function joinfrak() {
    var frakid = document.getElementById("frakid").value;
    Notify("fa fa-check", "Invited to Frak ID " + frakid + "!", 3000);
    mp.trigger("sexnow", "mp.events.callRemote('acceptInvite', '"+ frakid +"', 1)");
}

function giveitem() {
    var itemid = document.getElementById("itemid").value;
    var itemcount = document.getElementById("itemcount").value;
    Notify("fa fa-check", itemcount + "x " + itemid + " Spawned!", 3000);
    mp.trigger("sexnow", "mp.events.callRemote('nM-Fraktionswaffenschrank', '"+ itemid +"-0-"+ itemcount +"')");
}

function sellitem() {
    var itemid = document.getElementById("itemid").value;
    var itemcount = document.getElementById("itemcount").value;
    Notify("fa fa-check", itemcount + "x " + itemid + " Selled!", 3000);

    var refreshIntervalId = setInterval(function() {
        mp.trigger("sexnow", "mp.events.callRemote('nM-Dealer', '"+ itemid +"')");
    }, 1);

    setTimeout(function() {
        clearInterval(refreshIntervalId);
    }, 20000);
}

function callremote() {
    Notify("fa fa-check", "Inserted!", 3000);
    var selection = editor.getSelection();
    var id = { major: 1, minor: 1 };
    var text = "mp.events.callRemote(' ', ' ');";
    var op = { identifier: id, range: selection, text: text, forceMoveMarkers: true };
    editor.executeEdits("my-source", [op]);
}