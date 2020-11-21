let xyz, demo;
let impUID = localStorage.getItem("uniqueUid");

demo = impUID;

function ImportantTask() {}

function create_unfinished_task() {
  console.log(xyz);
  unfinished_task_container = document.getElementsByClassName("container")[0];
  unfinished_task_container.innerHTML = "";
  console.log(xyz);
  console.log(demo);

  let imparray = ["B", "B3", "Pvt"];

  xyz = "B3";
  //let impTask = db.collection("starflag").doc(key);

  task_array = [];
  firebase
    .database()
    .ref("/To-Do-List/" + demo + "/" + xyz)
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
        console.log(task_key);
        console.log(task_description);

        let task_decrypted_title = Decript(Math.abs(task_key), task_title);
        let task_decrypted_description = Decript(Math.abs(task_key), task_description);

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
        console.log(task_decrypted_title);
        title.innerHTML = task_decrypted_title;
        console.log(title);

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

        description = document.createElement("p");
        description.setAttribute("id", "task_description");
        description.setAttribute("contenteditable", false);
        description.innerHTML = task_decrypted_description;

        // TASK TOOLS
        task_tool = document.createElement("div");
        task_tool.setAttribute("id", "task_tool");

        unfinished_task_container.append(task_container);
        task_container.append(task_data);
        task_data.append(title);
        task_data.append(deadline);
        task_data.append(description);

        task_container.append(task_tool);
      }
    });
}

function Decript(key, to_encript) {
  let to_encript11111 = to_encript.split(".");

  to_encript11111 = to_encript11111.slice(1, to_encript11111.length);

  d2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", " ", "\t", "-", "(", ")", "{", "}", "[", "]", "<", ">", "+", ".", "'", ":", ";", "|", "!", "?", "$", "%", "&", '"', ",", "@", "=", "#", "*", "/"];
  let WithoutDotArray = [
    "@#1%%42",
    "&2^36@",
    "$%aASH2343",
    "sahd%$%^$",
    "%$*%GF%",
    "^&&^Hjj5",
    "!^%&",
    "!@!@!",
    "!#$!",
    "#%GFY$^",
    "&^%&^GFUYRUYF%$&^",
    "$^%^%#^GGFHDKJ",
    "#@*&gfuF",
    "jgj564$#@",
    "frdk4667$#",
    "53fh#$",
    "HJ57554&%",
    "JKfy6754F",
    "DS5DHF$%ds",
    "ds23478h#!$",
    "HGWIU",
    "12387192",
    "479128",
    "[$$^$^]][]",
    "{}{}{}{**",
    "**&&*",
    "%%{{{767",
    "^^JASKNA768",
    "^^##^^)",
    "{gvh^%",
    "872%$^^",
    "*&^*hvj",
    "++__kjHK",
    "~@@!@#$@",
    "||***guy",
    "y1741938cjb",
    "239182h^&d",
    "jscnak3@#s",
    "^&&^Hbq45jj5",
    "!atw4^%&",
    "qr!@!@!",
    "!#rgee$!",
    "#%GdfheraFY$^",
    "&^%25&^UYF%$&^",
    "$^%^%D423ef#^GGFHDKJ",
    "#@waeawgr*&gfuF",
    "jgjqb5564$#@",
    "frdk2q54667$#",
    "53f245vh#$",
    "HJ57356554&%",
    "JK35fy6754F",
    "DS5aegDHF$%ds",
    "ds23478hsd#!$",
    "HG436WIU",
    "12387sgd192",
    "47sg9128",
    "[$$^$^]]sg[]",
    "{}dg{}{}{**",
    "*sgd*&&*",
    "%%532{{{767",
    "^^JASK253NA768",
    "^^##234^^)",
    "!@#!GJFYD<UT}{|",
    "hbjHGU6567@$",
    "!#1$%gq",
    "32^qw@",
    "$%a71*343",
    "*$cv%$%i$",
    "%-pu%GF%",
    "^*8asjj5",
    "p1%&",
    "!@ty!",
    "!#&$q",
    "#gq%Y$^",
    "&^%&^ua^*$%$&^",
    "$^%^%hagq%KJ",
    "#@*&UA*F",
    "jgjNUI^%*$#@",
    "frdkna*7$#",
    "IA&%#$",
    "HJ56&*)&%",
    "JK&#@(54F",
    "DS^(#%ds",
    "ds23^ANA!$",
    "HA&BAIU",
    "12nuaa^*92",
    "4^*SNA28",
    "[A^*YCB]][]",
    "{}KUA&{**",
    "*&^%A*",
    "%^&a67",
  ];

  let dd = Swap(key, WithoutDotArray);

  let s = "";

  for (let i = 0; i < to_encript11111.length; i++) {
    e = to_encript11111[i];

    s = s + d2[dd.indexOf(e)];
  }
  console.log(s);
  return s;
}

function Swap(v, chooseArray) {
  let d22 = chooseArray;

  let r = v % (d2.length - 1);
  let temp, val, inp;

  for (let i = 0; i < d22.length; i++) {
    val = i % (d2.length - 1);
    temp = d22[val];
    inp = (i + r) % (d2.length - 1);

    d22[val] = d22[inp];
    d22[inp] = temp;
  }
  //console.log(d22);
  return d22;
}
