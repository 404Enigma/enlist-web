// document.onkeydown = function(e) {
//     if(event.keyCode == 123) {
//     return false;
//     }
//     if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
//     return false;
//     }
//     if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
//     return false;
//     }
//     if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
//     return false;
//     }
//     }

var prnn = document.getElementById("prn");
let PRNlength = prnn.value.length;
var favoritemovie;

function signInWithGoogle() {
  favoritemovie = prnn.value;
  sessionStorage.setItem("favoriteMovie", favoritemovie);

  if (prnn.value === "") {
    alert("Please enter the PRN");
  } else {
    if (prnn.value.length !== 3) {
      alert("Please enter a 3 digit PRN");
    } else {
      signIn();
    }
  }
}

function signIn() {
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      var token = result.credential.accessToken;
      var user = result.user;

      let btechEmail = user.email.split("@");
      if (btechEmail[1] === "sitpune.edu.in") {
        let flag = 0;

        switch (prnn.value) {
          //CS-B
          case "19070122126":
            if (user.email === "prakhar.agarwal.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122119":
            if (user.email === "aditya.padir.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122105":
            if (user.email === "akshay.mategaonkar.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122108":
            if (user.email === "amaan.mithani.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122102":
            if (user.email === "ashwin.mandilk.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122124":
            if (user.email === "deep.patoliya.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122073":
            if (user.email === "jashn.anand.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122074":
            if (user.email === "jatin.raghuvanshi.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122076":
            if (
              user.email === "joseph.anjilimoottil.btech2019@sitpune.edu.in"
            ) {
              flag = 1;
            }
            break;
          case "19070122077":
            if (user.email === "jugal.shroff.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122078":
            if (user.email === "kanishka.kataria.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122079":
            if (user.email === "kanishka.mishra.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122080":
            if (user.email === "kapish.pashine.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122081":
            if (user.email === "karan.samant.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122082":
            if (user.email === "kartik.mudaliar.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122087":
            if (user.email === "kashif.ahmed.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122084":
            if (user.email === "kashif.dar.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122085":
            if (user.email === "kavan.batavia.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122086":
            if (user.email === "kenil.patwa.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122122":
            if (user.email === "keny.patel.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122089":
            if (user.email === "komal.gandhi.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122090":
            if (user.email === "komil.singhal.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122133":
            if (user.email === "rachita.sinha.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122134":
            if (user.email === "rahul.mansharamani.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122083":
            if (user.email === "raja.kartik.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122135":
            if (user.email === "rajveer.singh.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122136":
            if (user.email === "rashmi.meena.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122137":
            if (user.email === "ratnesh.jain.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122138":
            if (user.email === "reva.chinchalkar.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122139":
            if (user.email === "riya.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122141":
            if (user.email === "rohit.raj.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122100":
            if (user.email === "ronak.malkan.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122142":
            if (user.email === "rubhav.mahendru.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122116":
            if (user.email === "rushin.nemlawala.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122143":
            if (user.email === "s.easwaran.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122145":
            if (user.email === "sai.ventrapragada.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122094":
            if (user.email === "sameer.kumar.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122121":
            if (user.email === "saumya.paramar.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122075":
            if (user.email === "saurabh.jawanjal.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122112":
            if (user.email === "shobhit.mudkhedkar.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122120":
            if (user.email === "sudhanshu.pandey.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122088":
            if (user.email === "suprit.kolse.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122125":
            if (user.email === "suyash.phatak.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122123":
            if (user.email === "yash.patil.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122091":
            if (user.email === "kothari.devendra.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122092":
            if (user.email === "kshitij.tripathi.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122093":
            if (user.email === "kumar.himanshu.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122095":
            if (user.email === "kushagra.maheshwari.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122096":
            if (user.email === "kushal.limdi.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122097":
            if (user.email === "lisanne.dlima.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122098":
            if (user.email === "maanav.bhavsar.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122099":
            if (user.email === "mahamat.chamchadine.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122101":
            if (user.email === "manasi.seta.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122103":
            if (user.email === "manish.kumar.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122104":
            if (user.email === "mannya.sharma.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122106":
            if (user.email === "mebanphira.cajee.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122107":
            if (user.email === "midhushi.tiwari.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122109":
            if (user.email === "mohammad.ahmadi.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122110":
            if (user.email === "mouzou.essowazam.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122113":
            if (user.email === "naman.pandya.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122114":
            if (user.email === "nazia.malik.btech201@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122115":
            if (user.email === "neeraj.chouhan.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122117":
            if (user.email === "nishita.agrawal.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122118":
            if (user.email === "nitya.mehta.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122127":
            if (user.email === "prakhar.patel.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122128":
            if (user.email === "prasanna.jain.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122129":
            if (user.email === "pratyush.jain.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122130":
            if (user.email === "pratyush.sinha.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122131":
            if (user.email === "pratyush.vats.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070122132":
            if (user.email === "preksha.asati.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;

          //IT
          case "19070124024":
            if (user.email === "harsh.guleria.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124075":
            if (user.email === "yeshasvi.yeshasvi.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124072":
            if (user.email === "aniket.thorat.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124042":
            if (user.email === "vivek.nathani.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124039":
            if (user.email === "sharad.maurya.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124009":
            if (user.email === "arayan.gupta.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124008":
            if (user.email === "anooshak.chowdhury.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124004":
            if (user.email === "akashdip.neogi.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124022":
            if (user.email === "sahil.gupte.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124064":
            if (user.email === "simran.mehta.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124013":
            if (user.email === "kunal.chakate.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124003":
            if (user.email === "adnan.shaikh.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124019":
            if (user.email === "durgesh.vyas.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124018":
            if (user.email === "aditya.deshpande.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124017":
            if (user.email === "vedant.deshmukh.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124050":
            if (user.email === "yogeshwar.pawade.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124033":
            if (user.email === "rohit.kembhavi.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124063":
            if (user.email === "siddhi.deo.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124046":
            if (user.email === "kairav.panchal.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124005":
            if (user.email === "luqmani.ali.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124074":
            if (user.email === "swanand.wagh.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070120467":
            if (user.email === "sudhanshu.mahara.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124035":
            if (user.email === "geeta.kokadwar.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124002":
            if (user.email === "achintya.singh.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124057":
            if (user.email === "sarvottam.sarvottam.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124006":
            if (user.email === "anirudh.rohilla.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124032":
            if (user.email === "kartikay.sharma.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124129":
            if (user.email === "utkrisht.trivedi.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124021":
            if (user.email === "govinda.giri.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124070":
            if (user.email === "tanvi.vijay.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124062":
            if (user.email === "siddhant.bhalla.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "20070124503":
            if (user.email === "akshay.katiyar.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124048":
            if (user.email === "shambhavi.patil.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124026":
            if (user.email === "ishan.doshi.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124012":
            if (user.email === "sakshi.budhia.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124054":
            if (user.email === "rakshit.singhal.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124053":
            if (user.email === "priyanshul.govil.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124011":
            if (user.email === "bhavya.upadhyay.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124029":
            if (user.email === "puneet.shankar.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124034":
            if (user.email === "nikhil.thakkar.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124044":
            if (user.email === "keshav.grover.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124060":
            if (user.email === "basavaraj.shreyas.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124068":
            if (
              user.email === "shraddha.suryawanshi.btech2019@sitpune.edu.in"
            ) {
              flag = 1;
            }
            break;
          case "19070124058":
            if (user.email === "satyakam.patel.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124007":
            if (user.email === "ankita.udgata.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124059":
            if (user.email === "shivam.patil.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124056":
            if (user.email === "sanjeev.sarthak.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124049":
            if (
              user.email === "paulami.bhattacharya.btech2019@sitpune.edu.in"
            ) {
              flag = 1;
            }
            break;
          case "19070124025":
            if (user.email === "husain.rasool.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124031":
            if (user.email === "jinay.sheth.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124045":
            if (user.email === "om.nankar.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124036":
            if (user.email === "alnoor.lalani.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124066":
            if (user.email === "amish.singh.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124055":
            if (user.email === "rishav.bhattacharya.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124030":
            if (user.email === "jaymin.patil.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124073":
            if (user.email === "vanshika.kushwaha.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124016":
            if (user.email === "sumit.deore.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124037":
            if (user.email === "ruchira.lokhande.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124065":
            if (
              user.email === "tejaswini.singanamala.btech2019@sitpune.edu.in"
            ) {
              flag = 1;
            }
            break;
          case "19070124051":
            if (user.email === "pranav.nale.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124027":
            if (user.email === "priyanka.iyer.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124061":
            if (user.email === "shreyas.mishra.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124052":
            if (user.email === "priyanshu.phukan.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19079124020":
            if (user.email === "anubhav.gagare.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124010":
            if (user.email === "aryan.mansani.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124028":
            if (user.email === "jahanvi.singh.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124041":
            if (user.email === "naman.nihal.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124015":
            if (user.email === "sneha.darade.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124043":
            if (user.email === "nevil.tanna.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124001":
            if (user.email === "abhinav.gaikwad.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124040":
            if (user.email === "shahuraj.mohite.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124069":
            if (user.email === "tanmay.chaturvedi.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124047":
            if (user.email === "harsh.patel.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;
          case "19070124071":
            if (user.email === "tathagata.singharoy.btech2019@sitpune.edu.in") {
              flag = 1;
            }
            break;

          default:
            alert("Enter valid PRN");
            flag = 0;
        }

        if (flag === 1) {
          window.location.assign("./home.html");
        } else {
          alert("Please enter you PRN");
        }
      } else {
        alert("Enter btech email");
        function signOut() {
          firebase.auth().signOut();
        }
      }
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
}
