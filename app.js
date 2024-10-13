var inp;
var input = document.getElementById('inp');
var result = document.getElementById('result');
var players = document.getElementById('players');
var playtwon = document.getElementById('playtwon');
var playonen = document.getElementById('playonen');
var dismain;
var ple = document.getElementById('ple');
var restart = document.getElementById('restart');
var playnow = document.getElementById('playnow');
var main = document.getElementById('main');
var space = document.getElementById('space-bro');
function btnmain() {
    inp = input.value;
    dismain = document.getElementById('dismain');
    dismain.innerText = parseInt(inp);
    inp;
    var btnmainv = document.getElementById('btnmainv');
    btnmainv.setAttribute('disabled', 'true');
    // console.log(inp);
    playonen.style.display = ('inline');
    playtwon.style.display = ('inline');
    inputfeild.style.display = ('none');
    dismain.style.display = ('flex');
    return;
};
var count = 0;
function btn1() {
    count++;
    var dis1 = document.getElementById('dis1');
    dis1.innerText = parseInt(count);
    count;
    // console.log(count);
    // console.log(inp);
    if (inp == count) {
        // alert('moiz bhi');
        var playone = nameone + ' is win! <br>GOOD. '
        result.innerHTML = playone;
        space.style.display = ('flex');
        var btn1v = document.getElementById('btn1');
        btn1v.setAttribute('disabled', 'true');
        var btn1vb = document.getElementById('btn1vb');
        btn1vb.setAttribute('disabled', 'true');
        // 
        var btn2v = document.getElementById('btn2');
        btn2v.setAttribute('disabled', 'true');
        var btn2vb = document.getElementById('btn2vb');
        btn2vb.setAttribute('disabled', 'true');
        var btn2v = document.getElementById('btn2');
        btn2v.setAttribute('disabled', 'true');
        var btn2vb = document.getElementById('btn2vb');
        btn2vb.setAttribute('disabled', 'true');
        restart.style.display = ('inline');
        playnow.style.display = ('none');
        dismain.style.display = ('none');
        main.style.flexDirection = ('row');
    }
};
function btn1s() {
    count--;
    var dis1 = document.getElementById('dis1');
    dis1.innerText = parseInt(count);
    // console.log(count);
    // console.log(inp);
    if (inp == count) {
        // alert('moiz bhi -')
        var playone = nameone + ' is win! GOOD. '
        result.innerText = playone;
        space.style.display = ('flex');
        var btn1v = document.getElementById('btn1');
        btn1v.setAttribute('disabled', 'true');
        var btn1vb = document.getElementById('btn1vb');
        btn1vb.setAttribute('disabled', 'true');
        // 
        var btn2v = document.getElementById('btn2');
        btn2v.setAttribute('disabled', 'true');
        var btn2vb = document.getElementById('btn2vb');
        btn2vb.setAttribute('disabled', 'true');
        var btn2v = document.getElementById('btn2');
        btn2v.setAttribute('disabled', 'true');
        var btn2vb = document.getElementById('btn2vb');
        btn2vb.setAttribute('disabled', 'true');
        restart.style.display = ('inline');
        playnow.style.display = ('none');
        dismain.style.display = ('none');
        main.style.flexDirection = ('row');
    }
};
var cont = 0;
function btn2() {
    cont++;
    var dis2 = document.getElementById('dis2');
    dis2.innerText = parseInt(cont);
    cont;
    // console.log(cont);
    // console.log(inp);
    if (inp == cont) {
        // alert('moiz bhi one ')
        var playtwo = nametwo + ' is win! GOOD. '
        result.innerText = playtwo;
        space.style.display = ('flex');
        var btn2v = document.getElementById('btn2');
        btn2v.setAttribute('disabled', 'true');
        var btn2vb = document.getElementById('btn2vb');
        btn2vb.setAttribute('disabled', 'true');
        // 
        var btn1v = document.getElementById('btn1');
        btn1v.setAttribute('disabled', 'true');
        var btn1vb = document.getElementById('btn1vb');
        btn1vb.setAttribute('disabled', 'true');
        var btn1v = document.getElementById('btn1');
        btn1v.setAttribute('disabled', 'true');
        var btn1vb = document.getElementById('btn1vb');
        btn1vb.setAttribute('disabled', 'true');
        restart.style.display = ('inline');
        playnow.style.display = ('none');
        dismain.style.display = ('none');
        main.style.flexDirection = ('row');
    }
};
function btn2s() {
    cont--;
    var dis2 = document.getElementById('dis2');
    dis2.innerText = parseInt(cont);
    // console.log(cont);
    // console.log(inp);
    if (inp == cont) {
        // alert('moiz bhi one -')
        var playtwo = nametwo + ' is win! GOOD. '
        result.innerText = playtwo;
        space.style.display = ('flex');
        var btn2v = document.getElementById('btn2');
        btn2v.setAttribute('disabled', 'true');
        var btn2vb = document.getElementById('btn2vb');
        btn2vb.setAttribute('disabled', 'true');
        // 
        var btn1v = document.getElementById('btn1');
        btn1v.setAttribute('disabled', 'true');
        var btn1vb = document.getElementById('btn1vb');
        btn1vb.setAttribute('disabled', 'true');
        var btn1v = document.getElementById('btn1');
        btn1v.setAttribute('disabled', 'true');
        var btn1vb = document.getElementById('btn1vb');
        btn1vb.setAttribute('disabled', 'true');
        restart.style.display = ('inline');
        playnow.style.display = ('none');
        dismain.style.display = ('none');
        main.style.flexDirection = ('row');
    }
}
var nameone;
var nameinp = document.getElementById('inpname');
var stylenone = document.getElementById('playnamesty');
var stylenone1 = document.getElementById('playnamestye');
var playonen = document.getElementById('playonen');
var playonet = document.getElementById('playone');
var playonef = document.getElementById('playtwo');
var dis1isthe = document.getElementById('dis1');
var btn1isthe = document.getElementById('btn1');
var btn1vbisthe = document.getElementById('btn1vb');
var dis2isthe = document.getElementById('dis2');
var btn2isthe = document.getElementById('btn2');
var btn2vbisthe = document.getElementById('btn2vb');
// function nameoneis() {
//     nameone = nameinp.value;
//     var disname = document.getElementById('namedis');
//     disname.innerText = nameone;
//     nameone;
//     stylenone.style.display = ("none");
//     // playonen.style.display = ('flex');
//     // playonen.style.flexDirection = ('row');
//     playonet.style.flexDirection = ("column");
//     // console.log(nameone)
//     dis1isthe.style.width = ('200px');
//     btn1isthe.style.width = ('200px');
//     btn1vbisthe.style.width = ('200px');
//     inputfeild.style.display = ('flex');
// };
var nametwo;
var nameinptwo = document.getElementById('inpnametwo');
var distwoname;
var inputfeild = document.getElementById('inputfeild');
var namesave = document.getElementById('namesave');
function nametwois() {
    nametwo = nameinptwo.value;
    distwoname = document.getElementById('nametwodis');
    distwoname.innerText = nametwo;
    nametwo;
    stylenone1.style.display = ("none");
    dis2isthe.style.width = ('200px');
    btn2isthe.style.width = ('200px');
    btn2vbisthe.style.width = ('200px');
    playonef.style.flexDirection = ("column");
    inputfeild.style.display = ('flex');

    // console.log(nameone)

    nameone = nameinp.value;
    var disname = document.getElementById('namedis');
    disname.innerText = nameone;
    nameone;
    stylenone.style.display = ("none");
    // playonen.style.display = ('flex');
    // playonen.style.flexDirection = ('row');
    playonet.style.flexDirection = ("column");
    // console.log(nameone)
    dis1isthe.style.width = ('200px');
    btn1isthe.style.width = ('200px');
    btn1vbisthe.style.width = ('200px');
    inputfeild.style.display = ('flex');
    namesave.style.display = ('none');
    ple.style.display = ('none');
};
function restartnow() {
    Screen.apply(restart);
}