let d2;

function Swap(v, d) {
  let s = "+";
  let r = v % (len(d2) - 1);
  let temp, val, inp;

  //for i in range(0,len(d),1):
  for (let i = 0; i < len(d); i++) {
    val = i % (len(d2) - 1);
    temp = d[val];
    inp = (i + r) % (len(d2) - 1);
    d[val] = d[inp];
    d[inp] = temp;
    //#print(d,)
    return d;
  }
}

function Encript(sent) {
  let key = 634234281900;
  //#random.randint(10000,1000000)

  let d = [
    ".@#1%%42",
    ".&2^36@",
    ".$%aASH2343",
    ".sahd%$%^$",
    ".%$*%GF%",
    ".^&&^Hjj5",
    ".!^%&",
    ".!@!@!",
    ".!#$!",
    ".#%GFY$^",
    ".&^%&^GFUYRUYF%$&^",
    ".$^%^%#^GGFHDKJ",
    ".#@*&gfuF",
    ".jgj564$#@",
    ".frdk4667$#",
    ".53fh#$",
    ".HJ57554&%",
    ".JKfy6754F",
    ".DS5DHF$%ds",
    ".ds23478h#!$",
    ".HGWIU",
    ".12387192",
    ".479128",
    ".[$$^$^]][]",
    ".{}{}{}{**",
    ".**&&*",
    ".%%{{{767",
    ".^^JASKNA768",
    ".^^##^^)",
    ".{gvh^%",
    ".872%$^^",
    ".*&^*hvj",
    ".++__kjHK",
    ".~@@!@#$@",
    ".||***guy",
    ".y1741938cjb",
    ".239182h^&d",
    ".jscnak3@#s",

    ".^&&^Hbq45jj5",
    ".!atw4^%&",
    ".qr!@!@!",
    ".!#rgee$!",
    ".#%GdfheraFY$^",
    ".&^%25&^UYF%$&^",
    ".$^%^%D423ef#^GGFHDKJ",
    ".#@waeawgr*&gfuF",
    ".jgjqb5564$#@",
    ".frdk2q54667$#",
    ".53f245vh#$",
    ".HJ57356554&%",
    ".JK35fy6754F",
    ".DS5aegDHF$%ds",
    ".ds23478hsd#!$",
    ".HG436WIU",
    ".12387sgd192",
    ".47sg9128",
    ".[$$^$^]]sg[]",
    ".{}dg{}{}{**",
    ".*sgd*&&*",
    ".%%532{{{767",
    ".^^JASK253NA768",
    ".^^##234^^)",
    ".!@#!GJFYD<UT}{|",
    ".hbjHGU6567@$",
    ".JBKJ^%&^6476",
  ];

  d2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", " ", "\t", "  "];

  let dd = Swap(key, d);

  let val = "";
  //for e in sent:
  for (let i = 0; i < sent.len(); i++) {
    e = sent[i];
    val = val + dd[d2.indexOf(e)];

    return [val, key];
  }
}
i = input("Enter Your Sentance : ");

let Encripted = Encript(i);

// print('Encript : ',Encripted[0])
// print('KEY : ',Encripted[1])
console.log(Encripted[0]);
console.log(Encripted[1]);

function Decript(key, to_encript) {
  d = [
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
    "JBKJ^%&^6476",
  ];

  let to_encript = to_encript.split(".");
  //to_encript=to_encript[1:]
  to_encript = to_encript.slice(1);

  d2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", " ", "\t", "  "];

  dd = Swap(key, d);

  let s = "";
  //for e in to_encript:
  for (let i = 0; i < to_encript.len(); i++) {
    s = s + d2[dd.indexOf(e)];
  }
  print(s);
}

Decript(Encripted[1], Encripted[0]);
