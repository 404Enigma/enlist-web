let xyz, demo;
let impUID = localStorage.getItem("uniqueUid");

demo = impUID;

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

        let timeon16 = day16 + " " + month16;
        let timeon1 = day1 + " " + month1;

        if (timeon16 == task_date) {
          let userRef16 = firebase.database().ref("/To-Do-List/" + demo + "/" + xyz + "/" + "Task" + uniqkey);

          userRef16.remove();
        }
        if (timeon1 == task_date) {
          let userRef1 = firebase.database().ref("All-Tasks" + "/" + xyz + "/" + "Task" + uniqkey);

          userRef1.remove();
        }
      }
    });
}
