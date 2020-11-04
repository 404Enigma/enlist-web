// document.onkeydown = function(e) {
//   if(event.keyCode == 123) {
//   return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
//   return false;
//   }
//   if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
//   return false;
//   }
//   if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
//   return false;
//   }
//   }

let prN = localStorage.getItem("PRN");
let prnnn = prN;
console.log(prnnn);

//localStorage.setItem("bypassPRN", prN);

let q = localStorage.getItem("uniqueUid");
console.log(q);
let xyz, demo;
// xyz = "B";
console.log(xyz);
demo = q;
let parsedBase64Key, encryptedData;
console.log(demo);
let flag = 0;
var task;
let uniqkey, finalDate;

let encrypted, encryptKey;
var db = firebase.firestore();

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var Currentdate = today.getDate() + " " + today.getMonth() + " " + today.getFullYear();

let ZeroDate = today.getDate();
if (ZeroDate === 1 || ZeroDate === 2 || ZeroDate === 3 || ZeroDate === 4 || ZeroDate === 5 || ZeroDate === 6 || ZeroDate === 7 || ZeroDate === 8 || ZeroDate === 9) {
  ZeroDate = "0" + ZeroDate;
  Currentdate = ZeroDate + " " + today.getMonth() + " " + today.getFullYear();
} else {
  Currentdate = ZeroDate + " " + today.getMonth() + " " + today.getFullYear();
}
//console.log(Currentdate);
let dateC = Currentdate.split(" ");
let dayC = dateC[0];
let monthC = dateC[1];
let yearC = dateC[2];

let montharrayC = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

for (let i = 0; i < montharrayC.length; i++) {
  if (i === Number(monthC)) {
    monthC = montharrayC[i];
  }
}
Currentdate = dayC + " " + monthC + " " + yearC;

let a = document.getElementById("B");
let c = document.getElementById("B2");
let d = document.getElementById("B3");

// function allowAlphaNumericSpace(thisInput) {
//   thisInput.value = thisInput.value.split(/[^a-zA-Z0-9 ]/).join("");
// }

function popup_alltasks(sent, time, color) {
  console.log("Popup finction");
  let pass = document.getElementById("pop-upppp");
  let A = document.createElement("div");
  console.log(color);
  A.setAttribute("class", color);
  A.setAttribute("role", "alert");
  A.setAttribute("id", "popup");
  A.innerHTML = sent;
  pass.append(A);
  console.log("Execute");
  setTimeout(function () {
    $(".alert")
      .fadeTo(500, 0)
      .slideUp(500, function () {
        $(this).remove();
      });
  }, time);
}

function popup_alltasks2(sent, time, color) {
  console.log("Popup finction");
  let pass = document.getElementById("pop-uppppppppp");
  let A = document.createElement("div");
  console.log(color);
  A.setAttribute("class", color);
  A.setAttribute("role", "alert");
  A.setAttribute("id", "popup");
  A.innerHTML = sent;
  pass.append(A);
  console.log("Execute");
  setTimeout(function () {
    $(".alert")
      .fadeTo(500, 0)
      .slideUp(500, function () {
        $(this).remove();
      });
  }, time);
}

firebase.auth().onAuthStateChanged(function (user) {
  console.log("12345");
  if (user !== null) {
    demo = user.uid;
    console.log(user.uid);

    if (Number(prnnn) == 19070122120 || Number(prnnn) == 19070122126 || Number(prnnn) == 19070122129 || Number(prnnn) == 19070122134) {
      let arr = ["B", "B1", "B2", "B3"];
      for (let i = 0; i < arr.length; i++) {
        xyz = arr[i];
        console.log(xyz);
        var updates1 = {};
        updates1["/Source/" + xyz + "/" + demo] = Number(prnnn);
        firebase.database().ref().update(updates1);
      }
    } else if (Number(prnnn) >= 19070122073 && Number(prnnn) <= 19070122095) {
      xyz = "B1";

      var updates1 = {};
      updates1["/Source/" + xyz + "/" + demo] = Number(prnnn);
      firebase.database().ref().update(updates1);
      //create_unfinished_task();
    } else if (Number(prnnn) >= 19070122096 && Number(prnnn) <= 19070122119) {
      xyz = "B2";

      var updates1 = {};
      updates1["/Source/" + xyz + "/" + demo] = Number(prnnn);
      firebase.database().ref().update(updates1);
      //create_unfinished_task();
    } else if (Number(prnnn) >= 19070122120 && Number(prnnn) <= 19070122145) {
      xyz = "B3";

      var updates1 = {};
      updates1["/Source/" + xyz + "/" + demo] = Number(prnnn);
      firebase.database().ref().update(updates1);
      //create_unfinished_task();
    }

    xyz = "B";
    var updates1 = {};
    updates1["/Source/" + xyz + "/" + demo] = Number(prnnn);
    firebase.database().ref().update(updates1);
  } else {
    // alert("Please login");
    popup_alltasks2("Please login !", 4000, "alert alert-warning");
    setTimeout(function () {
      window.location.assign("main.html");
    }, 3000);
  }
});

function signOut() {
  xyz = "";
  task_array = [];

  firebase.auth().signOut();
}

function onloadEverytime() {
  console.log("holaaaaaaaaaaaaaaaaaa");
  let message = document.getElementById("task_input_container");
  message.innerHTML = "Hola Amigos";
  return;
}

function CS_B() {
  xyz = "B";
  let personal = document.getElementById("personalList");
  let shared = document.getElementById("sharedList");
  let hello = document.getElementById("hello");

  personal.style.visibility = "visible";
  shared.style.visibility = "visible";
  hello.style.visibility = "visible";
  personal.disabled = false;
  shared.disabled = false;
  update_alert.style.visibility = "visible";
  update_alert.disabled = false;
  var updates1 = {};
  updates1["/Source/" + xyz + "/" + demo] = Number(prnnn);
  firebase.database().ref().update(updates1);
  create_unfinished_task();
}

function CS_B1() {
  xyz = "B1";

  let personal = document.getElementById("personalList");
  let shared = document.getElementById("sharedList");
  let hello = document.getElementById("hello");

  personal.style.visibility = "visible";
  shared.style.visibility = "visible";
  hello.style.visibility = "visible";
  personal.disabled = false;
  shared.disabled = false;
  update_alert.style.visibility = "visible";
  update_alert.disabled = false;

  var updates1 = {};
  updates1["/Source/" + xyz + "/" + demo] = Number(prnnn);
  firebase.database().ref().update(updates1);
  create_unfinished_task();
}

function CS_B2() {
  xyz = "B2";

  let personal = document.getElementById("personalList");
  let shared = document.getElementById("sharedList");
  let hello = document.getElementById("hello");

  personal.style.visibility = "visible";
  shared.style.visibility = "visible";
  hello.style.visibility = "visible";
  personal.disabled = false;
  shared.disabled = false;
  update_alert.style.visibility = "visible";
  update_alert.disabled = false;

  var updates1 = {};
  updates1["/Source/" + xyz + "/" + demo] = Number(prnnn);
  firebase.database().ref().update(updates1);
  create_unfinished_task();
}

function CS_B3() {
  xyz = "B3";

  let personal = document.getElementById("personalList");
  let shared = document.getElementById("sharedList");
  let hello = document.getElementById("hello");

  personal.style.visibility = "visible";
  shared.style.visibility = "visible";
  hello.style.visibility = "visible";
  personal.disabled = false;
  shared.disabled = false;
  update_alert.style.visibility = "visible";
  update_alert.disabled = false;

  var updates1 = {};
  updates1["/Source/" + xyz + "/" + demo] = Number(prnnn);
  firebase.database().ref().update(updates1);
  create_unfinished_task();
}

function Class() {
  if (Number(prnnn) >= 19070122073 && Number(prnnn) <= 19070122145) {
    CS_B();
    document.getElementById("finish_task_header").innerHTML = "CS-B";
  }
}

function Division() {
  if (Number(prnnn) == 19070122120 || Number(prnnn) == 19070122126 || Number(prnnn) == 19070122129) {
    CS_B1();
    CS_B2();
    CS_B3();
    document.getElementById("finish_task_header").innerHTML = "Admin";
  } else if (Number(prnnn) >= 19070122073 && Number(prnnn) <= 19070122095) {
    CS_B1();
    document.getElementById("finish_task_header").innerHTML = "CS-B1";
  } else if (Number(prnnn) >= 19070122096 && Number(prnnn) <= 19070122119) {
    CS_B2();
    document.getElementById("finish_task_header").innerHTML = "CS-B2";
  } else if (Number(prnnn) >= 19070122120 && Number(prnnn) <= 19070122145) {
    CS_B3();
    document.getElementById("finish_task_header").innerHTML = "CS-B3";
  }
}

// function heading() {
//   console.log("aaaaaaaaaaaaaa");
//   // date_picker();
//   if (Number(prnnn) == 19070122120 || Number(prnnn) == 19070122126) {
//     document.getElementById("finish_task_header").innerHTML = "Admin";
//     document.getElementById("division").innerHTML = "Admin";
//   } else if (Number(prnnn) >= 19070122073 && Number(prnnn) <= 19070122095) {
//     document.getElementById("division").innerHTML = "CS-B1";
//   } else if (Number(prnnn) >= 19070122096 && Number(prnnn) <= 19070122119) {
//     document.getElementById("division").innerHTML = "CS-B2";
//   } else if (Number(prnnn) >= 19070122120 && Number(prnnn) <= 19070122145) {
//     document.getElementById("division").innerHTML = "CS-B3";
//   }
// }

function Swap(v, chooseArray) {
  let d22 = chooseArray;

  let r = v % (d2.length - 1);
  let temp, val, inp;

  // console.log(d22.length);

  //for i in range(0,len(d),1):
  for (let i = 0; i < d22.length; i++) {
    val = i % (d2.length - 1);
    temp = d22[val];
    inp = (i + r) % (d2.length - 1);

    //console.log(d2.length);
    // console.log(val);
    // console.log(inp);
    d22[val] = d22[inp];
    d22[inp] = temp;
  }

  //console.log(typeof d22);
  return d22;
}

function setlonglist() {
  let d = [".@#1%%42", ".&2^36@", ".$%aASH2343", ".sahd%$%^$", ".%$*%GF%", ".^&&^Hjj5", ".!^%&", ".!@!@!", ".!#$!", ".#%GFY$^", ".&^%&^GFUYRUYF%$&^", ".$^%^%#^GGFHDKJ", ".#@*&gfuF", ".jgj564$#@", ".frdk4667$#", ".53fh#$", ".HJ57554&%", ".JKfy6754F", ".DS5DHF$%ds", ".ds23478h#!$", ".HGWIU", ".12387192", ".479128", ".[$$^$^]][]", ".{}{}{}{**", ".**&&*", ".%%{{{767", ".^^JASKNA768", ".^^##^^)", ".{gvh^%", ".872%$^^", ".*&^*hvj", ".++__kjHK", ".~@@!@#$@", ".||***guy", ".y1741938cjb", ".239182h^&d", ".jscnak3@#s", ".^&&^Hbq45jj5", ".!atw4^%&", ".qr!@!@!", ".!#rgee$!", ".#%GdfheraFY$^", ".&^%25&^UYF%$&^", ".$^%^%D423ef#^GGFHDKJ", ".#@waeawgr*&gfuF", ".jgjqb5564$#@", ".frdk2q54667$#", ".53f245vh#$", ".HJ57356554&%", ".JK35fy6754F", ".DS5aegDHF$%ds", ".ds23478hsd#!$", ".HG436WIU", ".12387sgd192", ".47sg9128", ".[$$^$^]]sg[]", ".{}dg{}{}{**", ".*sgd*&&*", ".%%532{{{767", ".^^JASK253NA768", ".^^##234^^)", ".!@#!GJFYD<UT}{|", ".hbjHGU6567@$"];
  return d;
}

function fetchlonglist() {
  let d = ["@#1%%42", "&2^36@", "$%aASH2343", "sahd%$%^$", "%$*%GF%", "^&&^Hjj5", "!^%&", "!@!@!", "!#$!", "#%GFY$^", "&^%&^GFUYRUYF%$&^", "$^%^%#^GGFHDKJ", "#@*&gfuF", "jgj564$#@", "frdk4667$#", "53fh#$", "HJ57554&%", "JKfy6754F", "DS5DHF$%ds", "ds23478h#!$", "HGWIU", "12387192", "479128", "[$$^$^]][]", "{}{}{}{**", "**&&*", "%%{{{767", "^^JASKNA768", "^^##^^)", "{gvh^%", "872%$^^", "*&^*hvj", "++__kjHK", "~@@!@#$@", "||***guy", "y1741938cjb", "239182h^&d", "jscnak3@#s", "^&&^Hbq45jj5", "!atw4^%&", "qr!@!@!", "!#rgee$!", "#%GdfheraFY$^", "&^%25&^UYF%$&^", "$^%^%D423ef#^GGFHDKJ", "#@waeawgr*&gfuF", "jgjqb5564$#@", "frdk2q54667$#", "53f245vh#$", "HJ57356554&%", "JK35fy6754F", "DS5aegDHF$%ds", "ds23478hsd#!$", "HG436WIU", "12387sgd192", "47sg9128", "[$$^$^]]sg[]", "{}dg{}{}{**", "*sgd*&&*", "%%532{{{767", "^^JASK253NA768", "^^##234^^)", "!@#!GJFYD<UT}{|", "hbjHGU6567@$"];
  return d;
}

function Encript(character, Dotarray, KEY) {
  //key = uniquekey
  KEY = Math.abs(KEY);
  //let key = Math.abs(uniqkey);
  //#random.randint(10000,1000000)
  //let d = [".@#1%%42", ".&2^36@", ".$%aASH2343", ".sahd%$%^$", ".%$*%GF%", ".^&&^Hjj5", ".!^%&", ".!@!@!", ".!#$!", ".#%GFY$^", ".&^%&^GFUYRUYF%$&^", ".$^%^%#^GGFHDKJ", ".#@*&gfuF", ".jgj564$#@", ".frdk4667$#", ".53fh#$", ".HJ57554&%", ".JKfy6754F", ".DS5DHF$%ds", ".ds23478h#!$", ".HGWIU", ".12387192", ".479128", ".[$$^$^]][]", ".{}{}{}{**", ".**&&*", ".%%{{{767", ".^^JASKNA768", ".^^##^^)", ".{gvh^%", ".872%$^^", ".*&^*hvj", ".++__kjHK", ".~@@!@#$@", ".||***guy", ".y1741938cjb", ".239182h^&d", ".jscnak3@#s", ".^&&^Hbq45jj5", ".!atw4^%&", ".qr!@!@!", ".!#rgee$!", ".#%GdfheraFY$^", ".&^%25&^UYF%$&^", ".$^%^%D423ef#^GGFHDKJ", ".#@waeawgr*&gfuF", ".jgjqb5564$#@", ".frdk2q54667$#", ".53f245vh#$", ".HJ57356554&%", ".JK35fy6754F", ".DS5aegDHF$%ds", ".ds23478hsd#!$", ".HG436WIU", ".12387sgd192", ".47sg9128", ".[$$^$^]]sg[]", ".{}dg{}{}{**", ".*sgd*&&*", ".%%532{{{767", ".^^JASK253NA768", ".^^##234^^)", ".!@#!GJFYD<UT}{|", ".hbjHGU6567@$"];

  //let d = setlonglist();
  //console.log(d);
  //console.log(typeof d);
  //console.log(d.length);

  let Dotarray1 = [".@#1%%42", ".&2^36@", ".$%aASH2343", ".sahd%$%^$", ".%$*%GF%", ".^&&^Hjj5", ".!^%&", ".!@!@!", ".!#$!", ".#%GFY$^", ".&^%&^GFUYRUYF%$&^", ".$^%^%#^GGFHDKJ", ".#@*&gfuF", ".jgj564$#@", ".frdk4667$#", ".53fh#$", ".HJ57554&%", ".JKfy6754F", ".DS5DHF$%ds", ".ds23478h#!$", ".HGWIU", ".12387192", ".479128", ".[$$^$^]][]", ".{}{}{}{**", ".**&&*", ".%%{{{767", ".^^JASKNA768", ".^^##^^)", ".{gvh^%", ".872%$^^", ".*&^*hvj", ".++__kjHK", ".~@@!@#$@", ".||***guy", ".y1741938cjb", ".239182h^&d", ".jscnak3@#s", ".^&&^Hbq45jj5", ".!atw4^%&", ".qr!@!@!", ".!#rgee$!", ".#%GdfheraFY$^", ".&^%25&^UYF%$&^", ".$^%^%D423ef#^GGFHDKJ", ".#@waeawgr*&gfuF", ".jgjqb5564$#@", ".frdk2q54667$#", ".53f245vh#$", ".HJ57356554&%", ".JK35fy6754F", ".DS5aegDHF$%ds", ".ds23478hsd#!$", ".HG436WIU", ".12387sgd192", ".47sg9128", ".[$$^$^]]sg[]", ".{}dg{}{}{**", ".*sgd*&&*", ".%%532{{{767", ".^^JASK253NA768", ".^^##234^^)", ".!@#!GJFYD<UT}{|", ".hbjHGU6567@$"];

  d2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", " ", "\t"];

  let swappedlist = Swap(KEY, Dotarray1);

  let val = "";
  let e;
  //for e in sent:
  //console.log(character.length);
  for (let i = 0; i < character.length; i++) {
    //console.log(i);
    e = character[i];
    //console.log(e);
    val = val + swappedlist[d2.indexOf(e)];
    // console.log(val);
  }

  return val;
}
//i = input("Enter Your Sentance : ");

//let abcd = ".sahd%$%^$.sahd%$%^$.sahd%$%^$.sahd%$%^$.sahd%$%^$.sahd%$%^$.sahd%$%^$.sahd%$%^$.sahd%$%^$.sahd%$%^$.sahd%$%^$.sahd%$%^$.sahd%$%^$.sahd%$%^$.sahd%$%^$";

//Decript(634234281900, abcd);

function Decript(key, to_encript) {
  //console.log(to_encript);
  let to_encript11111 = to_encript.split(".");
  //let d = fetchlonglist;
  //to_encript=to_encript[1:]
  to_encript11111 = to_encript11111.slice(1, to_encript11111.length);

  d2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", " ", "\t"];
  let WithoutDotArray = ["@#1%%42", "&2^36@", "$%aASH2343", "sahd%$%^$", "%$*%GF%", "^&&^Hjj5", "!^%&", "!@!@!", "!#$!", "#%GFY$^", "&^%&^GFUYRUYF%$&^", "$^%^%#^GGFHDKJ", "#@*&gfuF", "jgj564$#@", "frdk4667$#", "53fh#$", "HJ57554&%", "JKfy6754F", "DS5DHF$%ds", "ds23478h#!$", "HGWIU", "12387192", "479128", "[$$^$^]][]", "{}{}{}{**", "**&&*", "%%{{{767", "^^JASKNA768", "^^##^^)", "{gvh^%", "872%$^^", "*&^*hvj", "++__kjHK", "~@@!@#$@", "||***guy", "y1741938cjb", "239182h^&d", "jscnak3@#s", "^&&^Hbq45jj5", "!atw4^%&", "qr!@!@!", "!#rgee$!", "#%GdfheraFY$^", "&^%25&^UYF%$&^", "$^%^%D423ef#^GGFHDKJ", "#@waeawgr*&gfuF", "jgjqb5564$#@", "frdk2q54667$#", "53f245vh#$", "HJ57356554&%", "JK35fy6754F", "DS5aegDHF$%ds", "ds23478hsd#!$", "HG436WIU", "12387sgd192", "47sg9128", "[$$^$^]]sg[]", "{}dg{}{}{**", "*sgd*&&*", "%%532{{{767", "^^JASK253NA768", "^^##234^^)", "!@#!GJFYD<UT}{|", "hbjHGU6567@$"];

  let dd = Swap(key, WithoutDotArray);

  //console.log(typeof dd);
  let s = "";
  //for e in to_encript:
  //console.log(to_encript11111);
  //console.log(to_encript11111.length);
  for (let i = 0; i < to_encript11111.length; i++) {
    e = to_encript11111[i];
    // console.log(e);
    // console.log(dd.indexOf(e));
    // console.log(d2[dd.indexOf(e)]);
    s = s + d2[dd.indexOf(e)];
  }
  //console.log(s);
  return s;
}

function task_done(task, task_tool) {
  finished_task_container = document.getElementsByClassName("container")[1];

  //var key = task.getAttribute("data-key");
  uniqkey = "-" + Math.floor(1000000000 + Math.random() * 9000000000);

  title = task.childNodes[0].childNodes[0];
  deadline = task.childNodes[0].childNodes[1];

  task.removeChild(task_tool);
  flag = 1;
  task_delete(task);
}

function task_edit(task, edit_button) {
  //console.log("aaaaaaaaaaaaaaaaaa");

  edit_button.setAttribute("id", "task_edit_button_editing");
  edit_button.setAttribute("onclick", "finish_edit(this.parentElement.parentElement, this)");

  title = task.childNodes[0].childNodes[0];
  title.setAttribute("contenteditable", true);
  title.setAttribute("id", "title_editing");
  title.setAttribute("onkeypress", "allowAlphaNumericSpace(event); return (this.innerText.length < 21)");

  // title.setAttribute("onkeypress", "");
  //title.setAttribute("maxLength ", "21");
  //console.log(title);

  // let encrypttttttttttt = Encript();
  // title = encrypttttttttttt;
  // console.log("vvvvvvvvvvvvvvvvvv");

  deadline = task.childNodes[0].childNodes[1];
  deadline.setAttribute("contenteditable", true);
  deadline.setAttribute("id", "date_editing");
  deadline.disabled = false;
  deadline.append(dateDisplay);

  console.log(deadline.innerHTML);
  console.log(dateDisplay.innerHTML);

  description = task.childNodes[0].childNodes[2];
  description.setAttribute("contenteditable", true);
  description.setAttribute("id", "description_editing");
  description.focus();
  description.setAttribute("onkeypress", "allowAlphaNumericSpace(event); return (this.innerText.length < 21)");
}

function finish_edit(task, edit_button) {
  edit_button.setAttribute("id", "task_edit_button");
  edit_button.setAttribute("onclick", "task_edit(this.parentElement.parentElement, this)");

  title = task.childNodes[0].childNodes[0];
  title.setAttribute("contenteditable", false);
  title.setAttribute("id", "task_title");
  title.disabled = true;
  //title.setAttribute("maxlength", 21);
  // title.maxLength = "21";

  console.log(title);

  deadline = task.childNodes[0].childNodes[1];
  deadline.setAttribute("contenteditable", false);
  deadline.setAttribute("id", "task_date");
  deadline.disabled = true;

  let date_edit = dateDisplay.value.split("-");
  let day_edit = date_edit[2];
  let month_edit = date_edit[1];
  let year_edit = date_edit[0];

  var montharray_edit = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  for (let i = 0; i < montharray_edit.length; i++) {
    if (i === Number(month_edit)) {
      month_edit = montharray_edit[i - 1];
    }
  }

  let finalDate_edit = day_edit + " " + month_edit;
  console.log(day_edit);
  console.log(month_edit);
  console.log(finalDate_edit);
  console.log(input_box.value.length);
  console.log(finalDate_edit.length);

  let slice_deadline = deadline.innerHTML.slice(0, 6);
  console.log(slice_deadline);

  deadline.innerHTML = finalDate_edit;

  description = task.childNodes[0].childNodes[2];
  description.setAttribute("contenteditable", false);
  description.setAttribute("id", "task_description");
  console.log(deadline.innerHTML);
  console.log(dateDisplay.innerHTML);

  var key = task.getAttribute("data-key");
  //console.log(key);
  var task_obj = {
    title: task.childNodes[0].childNodes[0].innerHTML,
    deadline: task.childNodes[0].childNodes[1].innerHTML,
    key: key,
    description: task.childNodes[0].childNodes[2].innerHTML,
  };

  console.log(task_obj.deadline);

  let DotArray = [".@#1%%42", ".&2^36@", ".$%aASH2343", ".sahd%$%^$", ".%$*%GF%", ".^&&^Hjj5", ".!^%&", ".!@!@!", ".!#$!", ".#%GFY$^", ".&^%&^GFUYRUYF%$&^", ".$^%^%#^GGFHDKJ", ".#@*&gfuF", ".jgj564$#@", ".frdk4667$#", ".53fh#$", ".HJ57554&%", ".JKfy6754F", ".DS5DHF$%ds", ".ds23478h#!$", ".HGWIU", ".12387192", ".479128", ".[$$^$^]][]", ".{}{}{}{**", ".**&&*", ".%%{{{767", ".^^JASKNA768", ".^^##^^)", ".{gvh^%", ".872%$^^", ".*&^*hvj", ".++__kjHK", ".~@@!@#$@", ".||***guy", ".y1741938cjb", ".239182h^&d", ".jscnak3@#s", ".^&&^Hbq45jj5", ".!atw4^%&", ".qr!@!@!", ".!#rgee$!", ".#%GdfheraFY$^", ".&^%25&^UYF%$&^", ".$^%^%D423ef#^GGFHDKJ", ".#@waeawgr*&gfuF", ".jgjqb5564$#@", ".frdk2q54667$#", ".53f245vh#$", ".HJ57356554&%", ".JK35fy6754F", ".DS5aegDHF$%ds", ".ds23478hsd#!$", ".HG436WIU", ".12387sgd192", ".47sg9128", ".[$$^$^]]sg[]", ".{}dg{}{}{**", ".*sgd*&&*", ".%%532{{{767", ".^^JASK253NA768", ".^^##234^^)", ".!@#!GJFYD<UT}{|", ".hbjHGU6567@$"];

  console.log(task_obj.title);
  console.log(task_obj.description);

  let encryptTitle = Encript(task_obj.title, DotArray, task_obj.key);
  task_obj.title = encryptTitle;

  let encryptDescription = Encript(task_obj.description, DotArray, task_obj.key);
  task_obj.description = encryptDescription;

  console.log(task_obj.title);
  console.log(task_obj.description);
  //console.log(uniqkey);
  uniqkey = key;

  var updates = {};
  updates["/To-Do-List/" + demo + "/" + xyz + "/" + "Task" + uniqkey] = task_obj;
  firebase.database().ref().update(updates);

  popup_alltasks("Task has been edited !", 2000, "alert alert-info");
}

function task_delete(task) {
  key = task.getAttribute("data-key");
  task_to_remove = firebase.database().ref("To-Do-List/" + demo + "/" + xyz + "/" + "Task" + key);
  task_to_remove.remove();

  // remove from html view or whatevesss
  task.remove();
  if (flag == 1) {
    popup_alltasks("Task has been Completed !", 2000, "alert alert-success");
    flag = 0;
  } else {
    popup_alltasks("Task has been Deleted !", 2000, "alert alert-danger");
    flag = 0;
  }
}

function updateAll() {
  //console.log("aaaaa");
  firebase
    .database()
    .ref("All-Tasks" + "/" + xyz)
    .once(
      "value",
      function (snapshot) {
        //console.log(snapshot.val());

        firebase
          .database()
          .ref("/To-Do-List/" + demo + "/" + xyz)
          .set(snapshot.val());
      },
      function (errorObject) {
        //console.log("The read failed: " + errorObject.code);
      }
    );
  popup_alltasks("Task has been Updated !", 2000, "alert alert-info");
  create_unfinished_task();
  // var updates = {};
  // updates["/To-Do-List/" + demo + "/" + xyz + "/" + "Task" + uniqkey] = task_obj;
  // firebase.database().ref().update(updates);
}

let UIDDDD;

function Pvt() {
  // var user = firebase.auth().currentUser;

  // if (user != null) {
  //   name = user.displayName;
  //   demo = user.uid;
  //   console.log(demo);
  // }

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      UIDDDD = user.uid;
      console.log(UIDDDD);

      let personal = document.getElementById("personalList");
      let shared = document.getElementById("sharedList");
      let hello = document.getElementById("hello");
      let update_alert = document.getElementById("update_alert");

      personal.style.visibility = "hidden";
      shared.style.visibility = "hidden";
      personal.disabled = true;
      shared.disabled = true;
      hello.style.visibility = "hidden";
      update_alert.style.visibility = "hidden";
      update_alert.disabled = true;

      xyz = "Pvt";
      document.getElementById("finish_task_header").innerHTML = "Personal";
      console.log(demo);
      create_unfinished_task();
      console.log("yupieee");
    } else {
      // No user is signed in.
    }
  });
}

let dateDisplay;

function create_unfinished_task() {
  console.log(xyz);
  unfinished_task_container = document.getElementsByClassName("container")[0];
  unfinished_task_container.innerHTML = "";
  console.log(xyz);
  console.log(demo);

  task_array = [];
  firebase
    .database()
    .ref("To-Do-List/" + demo + "/" + xyz)
    .once("value", function (snapshot) {
      snapshot.forEach(function (childSnapshot) {
        var childKey = childSnapshot.uniqkey;
        var childData = childSnapshot.val();
        task_array.push(Object.values(childData));
      });
      console.log("aaaaa");
      console.log(task_array);
      for (var i, i = 0; i < task_array.length; i++) {
        task_date = task_array[i][0];
        task_title = task_array[i][3];
        task_key = task_array[i][2];
        task_description = task_array[i][1];
        console.log(xyz);
        console.log(task_title);
        console.log(task_array);
        console.log(xyz);
        let task_decrypted_title = Decript(Math.abs(task_key), task_title);

        let task_decrypted_description = Decript(Math.abs(task_key), task_description);

        //console.log(Math.abs(task_key));

        //console.log(task_decrypted_title);

        task_container = document.createElement("div");
        task_container.setAttribute("class", "task_container");
        task_container.setAttribute("data-key", task_key);

        // TASK DATA
        task_data = document.createElement("div");
        task_data.setAttribute("id", "task_data");

        title = document.createElement("p");
        title.setAttribute("id", "task_title");
        title.setAttribute("contenteditable", false);

        task_data.append(title);
        //title.innerHTML = decrypted.toString(CryptoJS.enc.Utf8);
        //title.innerHTML = decryptedText;
        //console.log(task_decrypted_title);
        title.innerHTML = task_decrypted_title;

        console.log(title);
        //console.log("title = ", title);

        dateDisplay = document.createElement("input");
        dateDisplay.setAttribute("id", "task_displaydate");
        dateDisplay.setAttribute("contenteditable", true);
        dateDisplay.innerHTML = task_date;
        dateDisplay.setAttribute("type", "date");

        deadline = document.createElement("p");
        deadline.setAttribute("id", "task_date");
        deadline.setAttribute("contenteditable", false);
        deadline.innerHTML = task_date;
        deadline.disabled = true;

        // var dateControl = document.querySelector("#input_date");

        description = document.createElement("p");
        description.setAttribute("id", "task_description");
        description.setAttribute("contenteditable", false);
        description.innerHTML = task_decrypted_description;

        // TASK TOOLS
        task_tool = document.createElement("div");
        task_tool.setAttribute("id", "task_tool");

        task_done_button = document.createElement("button");
        task_done_button.setAttribute("id", "task_done_button");
        task_done_button.setAttribute("onclick", "task_done(this.parentElement.parentElement, this.parentElement)");
        fa_done = document.createElement("i");
        fa_done.setAttribute("class", "fa fa-check fa-2x");

        task_edit_button = document.createElement("button");
        task_edit_button.setAttribute("id", "task_edit_button");
        task_edit_button.setAttribute("onclick", "task_edit(this.parentElement.parentElement, this)");

        fa_edit = document.createElement("i");
        fa_edit.setAttribute("class", "fas fa-edit fa-2x");

        task_delete_button = document.createElement("button");
        task_delete_button.setAttribute("id", "task_delete_button");
        task_delete_button.setAttribute("onclick", "task_delete(this.parentElement.parentElement)");
        fa_delete = document.createElement("i");
        fa_delete.setAttribute("class", "fa fa-trash fa-2x");

        unfinished_task_container.append(task_container);
        task_container.append(task_data);
        task_data.append(title);
        task_data.append(deadline);
        task_data.append(description);

        task_container.append(task_tool);
        task_tool.append(task_done_button);
        task_done_button.append(fa_done);
        task_tool.append(task_edit_button);
        task_edit_button.append(fa_edit);
        task_tool.append(task_delete_button);
        task_delete_button.append(fa_delete);

        let todaytime16 = new Date();
        let todaytime1 = new Date();
        todaytime16.setDate(todaytime16.getDate() - 16);
        todaytime1.setDate(todaytime1.getDate() - 1);
        //console.log(todaytime16.toUTCString());

        let timestring16 = todaytime16.toUTCString();
        let timestring1 = todaytime1.toUTCString();
        let time16 = timestring16.split(" ");
        let time1 = timestring1.split(" ");
        let day16 = time16[1];
        let month16 = time16[2];
        let day1 = time1[1];
        let month1 = time1[2];
        //console.log(day16);
        //console.log(month16);
        let timeon16 = day16 + " " + month16;
        let timeon1 = day1 + " " + month1;
        // console.log(timeon16);
        // console.log(timeon1);
        // console.log(task_date);

        if (timeon16 == task_date) {
          //console.log("daaaaaaaaaaaaaaaaaaaaaaaaaaaam");
          //task_done();
          let userRef16 = firebase.database().ref("/To-Do-List/" + demo + "/" + xyz + "/" + "Task" + uniqkey);
          //console.log(userRef16);
          userRef16.remove();
        }
        if (timeon1 == task_date) {
          //console.log("daaaaaaaaaaaaaaaaaaaaaaaaaaaam");
          //task_done();
          let userRef1 = firebase.database().ref("All-Tasks" + "/" + xyz + "/" + "Task" + uniqkey);
          //console.log(userRef1);
          userRef1.remove();
        }
      }
    });
}

function date_picker() {
  console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
  var cdate = new Date();
  cdate.setDate(cdate.getDate());

  $("#input_date").datepicker({
    // format: "yyyy-mm-dd",
    // setStartDate: "-2m",
    // endDate: "+2d",
    minDate: cdate,
  });
}

function add_task() {
  console.log(xyz);
  if (xyz !== null) {
    console.log("Date entered");
    input_box = document.getElementById("input_box");
    input_date = document.getElementById("input_date");
    input_description = document.getElementById("input_description");

    uniqkey = "-" + Math.floor(1000000000 + Math.random() * 9000000000);
    //console.log(uniqkey);

    var dateControl = document.querySelector("#input_date");
    date = dateControl.value.split("/");
    let day = date[1];
    let month = date[0];
    let year = date[2];

    var montharray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    for (let i = 0; i < montharray.length; i++) {
      if (i === Number(month)) {
        month = montharray[i - 1];
      }
    }

    finalDate = day + " " + month;
    console.log(day);

    console.log(month);

    console.log(finalDate);
    console.log(input_box.value.length);
    console.log(finalDate.length);

    if (input_box.value.length != 0) {
      if (typeof day != "undefined" && typeof month != "undefined") {
        task = {
          title: input_box.value,
          deadline: finalDate,
          key: uniqkey,
          description: input_description.value,
        };

        var user = firebase.auth().currentUser;

        if (user != null) {
          name = user.displayName;
          uid = user.uid;
        }

        const docRef = db.doc("AnalysisB/" + time);
        docRef
          .set({
            date: Currentdate,
            title: input_box.value,
            name: name,
          })
          .then(function (docRef) {})
          .catch(function (error) {
            console.error("Error adding document: ", error);
          });

        let personal = document.getElementById("personalList");
        let shared = document.getElementById("sharedList");
        //console.log(task.title.value);
        console.log(uniqkey);

        if (xyz === "Pvt") {
          let DotArrayPersonalPrivate = [".@#1%%42", ".&2^36@", ".$%aASH2343", ".sahd%$%^$", ".%$*%GF%", ".^&&^Hjj5", ".!^%&", ".!@!@!", ".!#$!", ".#%GFY$^", ".&^%&^GFUYRUYF%$&^", ".$^%^%#^GGFHDKJ", ".#@*&gfuF", ".jgj564$#@", ".frdk4667$#", ".53fh#$", ".HJ57554&%", ".JKfy6754F", ".DS5DHF$%ds", ".ds23478h#!$", ".HGWIU", ".12387192", ".479128", ".[$$^$^]][]", ".{}{}{}{**", ".**&&*", ".%%{{{767", ".^^JASKNA768", ".^^##^^)", ".{gvh^%", ".872%$^^", ".*&^*hvj", ".++__kjHK", ".~@@!@#$@", ".||***guy", ".y1741938cjb", ".239182h^&d", ".jscnak3@#s", ".^&&^Hbq45jj5", ".!atw4^%&", ".qr!@!@!", ".!#rgee$!", ".#%GdfheraFY$^", ".&^%25&^UYF%$&^", ".$^%^%D423ef#^GGFHDKJ", ".#@waeawgr*&gfuF", ".jgjqb5564$#@", ".frdk2q54667$#", ".53f245vh#$", ".HJ57356554&%", ".JK35fy6754F", ".DS5aegDHF$%ds", ".ds23478hsd#!$", ".HG436WIU", ".12387sgd192", ".47sg9128", ".[$$^$^]]sg[]", ".{}dg{}{}{**", ".*sgd*&&*", ".%%532{{{767", ".^^JASK253NA768", ".^^##234^^)", ".!@#!GJFYD<UT}{|", ".hbjHGU6567@$"];

          let encryptTitle = Encript(input_box.value, DotArrayPersonalPrivate, uniqkey);
          task.title = encryptTitle;

          console.log(input_description.value);
          let encryptDescription = Encript(input_description.value, DotArrayPersonalPrivate, uniqkey);
          task.description = encryptDescription;

          var personal_Tasks = {};
          personal_Tasks["/To-Do-List/" + demo + "/" + xyz + "/" + "Task" + uniqkey] = task;
          firebase.database().ref().update(personal_Tasks);
          create_unfinished_task();
        } else {
          if (personal.checked) {
            let DotArrayPersonal = [".@#1%%42", ".&2^36@", ".$%aASH2343", ".sahd%$%^$", ".%$*%GF%", ".^&&^Hjj5", ".!^%&", ".!@!@!", ".!#$!", ".#%GFY$^", ".&^%&^GFUYRUYF%$&^", ".$^%^%#^GGFHDKJ", ".#@*&gfuF", ".jgj564$#@", ".frdk4667$#", ".53fh#$", ".HJ57554&%", ".JKfy6754F", ".DS5DHF$%ds", ".ds23478h#!$", ".HGWIU", ".12387192", ".479128", ".[$$^$^]][]", ".{}{}{}{**", ".**&&*", ".%%{{{767", ".^^JASKNA768", ".^^##^^)", ".{gvh^%", ".872%$^^", ".*&^*hvj", ".++__kjHK", ".~@@!@#$@", ".||***guy", ".y1741938cjb", ".239182h^&d", ".jscnak3@#s", ".^&&^Hbq45jj5", ".!atw4^%&", ".qr!@!@!", ".!#rgee$!", ".#%GdfheraFY$^", ".&^%25&^UYF%$&^", ".$^%^%D423ef#^GGFHDKJ", ".#@waeawgr*&gfuF", ".jgjqb5564$#@", ".frdk2q54667$#", ".53f245vh#$", ".HJ57356554&%", ".JK35fy6754F", ".DS5aegDHF$%ds", ".ds23478hsd#!$", ".HG436WIU", ".12387sgd192", ".47sg9128", ".[$$^$^]]sg[]", ".{}dg{}{}{**", ".*sgd*&&*", ".%%532{{{767", ".^^JASK253NA768", ".^^##234^^)", ".!@#!GJFYD<UT}{|", ".hbjHGU6567@$"];

            let encryptTitle = Encript(input_box.value, DotArrayPersonal, uniqkey);
            task.title = encryptTitle;

            console.log(input_description.value);
            let encryptDescription = Encript(input_description.value, DotArrayPersonal, uniqkey);
            task.description = encryptDescription;

            var updates = {};
            updates["/To-Do-List/" + demo + "/" + xyz + "/" + "Task" + uniqkey] = task;
            firebase.database().ref().update(updates);
            create_unfinished_task();
          } else if (shared.checked) {
            console.log(task.title);
            //console.log(encryptedData);
            let DotArrayShared = [".@#1%%42", ".&2^36@", ".$%aASH2343", ".sahd%$%^$", ".%$*%GF%", ".^&&^Hjj5", ".!^%&", ".!@!@!", ".!#$!", ".#%GFY$^", ".&^%&^GFUYRUYF%$&^", ".$^%^%#^GGFHDKJ", ".#@*&gfuF", ".jgj564$#@", ".frdk4667$#", ".53fh#$", ".HJ57554&%", ".JKfy6754F", ".DS5DHF$%ds", ".ds23478h#!$", ".HGWIU", ".12387192", ".479128", ".[$$^$^]][]", ".{}{}{}{**", ".**&&*", ".%%{{{767", ".^^JASKNA768", ".^^##^^)", ".{gvh^%", ".872%$^^", ".*&^*hvj", ".++__kjHK", ".~@@!@#$@", ".||***guy", ".y1741938cjb", ".239182h^&d", ".jscnak3@#s", ".^&&^Hbq45jj5", ".!atw4^%&", ".qr!@!@!", ".!#rgee$!", ".#%GdfheraFY$^", ".&^%25&^UYF%$&^", ".$^%^%D423ef#^GGFHDKJ", ".#@waeawgr*&gfuF", ".jgjqb5564$#@", ".frdk2q54667$#", ".53f245vh#$", ".HJ57356554&%", ".JK35fy6754F", ".DS5aegDHF$%ds", ".ds23478hsd#!$", ".HG436WIU", ".12387sgd192", ".47sg9128", ".[$$^$^]]sg[]", ".{}dg{}{}{**", ".*sgd*&&*", ".%%532{{{767", ".^^JASK253NA768", ".^^##234^^)", ".!@#!GJFYD<UT}{|", ".hbjHGU6567@$"];

            let encryptTitle = Encript(input_box.value, DotArrayShared, uniqkey);
            task.title = encryptTitle;

            console.log(input_description.value);
            let encryptDescription = Encript(input_description.value, DotArrayShared, uniqkey);
            task.description = encryptDescription;

            // let encryptDescription = Encript(input_description.value, DotArrayPersonal, uniqkey);
            // task.title = encryptDescription;

            ref = firebase.database().ref();

            var urlRef = ref.child("Source/" + xyz);

            urlRef.once("value", function (snapshot) {
              snapshot.forEach(function (child) {
                let allchild = child.key;
                //console.log(allchild);
                keySplittedArray = allchild.split(" ");

                for (let i = 0; i < keySplittedArray.length; i++) {
                  var updates = {};
                  updates["/To-Do-List/" + keySplittedArray[i] + "/" + xyz + "/" + "Task" + uniqkey] = task;

                  firebase.database().ref().update(updates);
                }
              });
            });

            // firebase ref
            var All_Tasks = {};
            All_Tasks["All-Tasks" + "/" + xyz + "/" + "Task" + uniqkey] = task;
            firebase.database().ref().update(All_Tasks);
            create_unfinished_task();
          }
        }
        input_box.value = "";
        input_date.value = "";
        input_description.value = "";

        // desc.ref1 = new Firebase(desc.userRef + "/" + desc.oldGender + "/" + uid);
        // desc.ref2 = new Firebase(desc.userRef + "/" + desc.gender + "/" + uid);
      } else {
        popup_alltasks("Enter deadline!!!", 2000, "alert alert-danger");
      }
    } else {
      popup_alltasks("Enter title!!!", 2000, "alert alert-danger");
    }
  }
}

function allowAlphaNumericSpace(e) {
  console.log("call hua");
  var code = "charCode" in e ? e.charCode : e.keyCode;
  if (
    !(code == 32) && // space
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123)
  ) {
    // lower alpha (a-z)
    e.preventDefault();
  }
}

function on_load() {
  if (xyz === "Pvt") {
    Pvt();
  }
}
