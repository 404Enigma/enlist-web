let dummy = [
  { name: "rahul", group: "B" },
  { name: "pratyush", group: "B" },
  { name: "prakhar", group: "A" },
  { name: "sudhanshu", group: "A" },
  { name: "meena", group: "C" },
];

// let obj = {};

// dummy.map((dic) => {
//   group_val = dic["group"];
//   //console.log(group_val);

//   if (group_val in obj) {
//     //console.log("val: ", obj[group_val]);
//     obj[group_val].push(dic);
//   } else {
//     obj[group_val] = [dic];
//   }
// });

// console.log(obj);

Group_task = [
  {
    "Task-7322055502": {
      created_at: 1621239213,
      date: "1621276200",
      description: "dcscs",
      key: "-7322055502",
      title: "woah 2",
      group: "B",
    },
    "Task-9741020856": {
      created_at: 1621239201,
      date: "1621189800",
      description: "scscscsd",
      key: "-9741020856",
      title: "woah",
      group: "B",
    },
    "Task-9944327829": {
      created_at: 1621269824,
      date: "1621362600",
      description: "dsdc",
      key: "-9944327829",
      title: "dssd",
      group: "B",
    },
  },
  {
    "Task-3192706933": {
      created_at: 1621192400,
      date: "1621967400",
      description: "ddvdv",
      key: "-3192706933",
      title: "b3",
      group: "B3",
    },
  },
];

let obj = {};

Group_task.map((tasks) => {
  //console.log(typeof tasks);
  for (const dic in tasks) {
    //console.log(dic);
    let dic2 = tasks[dic];
    group_val = dic2["group"];

    if (group_val in obj) {
      obj[group_val].push(dic2);
    } else {
      obj[group_val] = [dic2];
    }
  }
});

for (const group in obj) {
  console.log(group);
  console.log(obj[group]);

  obj[group].sort((a, b) => {
    return a.date - b.date;
  });
}

console.log(obj);
// for (var i = 0; i < group_task.length; i++) {
//     var newArrayDataOfOjbect = Object.values(group_task[i]);
//     //console.log("sort: ", newArrayDataOfOjbect);

//     newArrayDataOfOjbect.sort((a, b) => {
//       return a.date - b.date;
//     });

//     final_array.push(newArrayDataOfOjbect);
//     // newArrayDataOfOjbect.map((task) => {
//     //   console.log("task: ", task);
//     //   // group_child_data[task.group] = task;
//     // });

//     let obj = {};

//     newArrayDataOfOjbect.map((task) => {
//       console.log("task -> ", task);
//       group_val = task["group"];
//       //console.log(group_val);

//       if (group_val in obj) {
//         //console.log("val: ", obj[group_val]);
//         obj[group_val].push(task);
//       } else {
//         obj[group_val] = [task];
//       }
//     });

//     console.log("oh my godddddddddd: ", obj);
//     //console.log("final", newArrayDataOfOjbect);
//   }

//Sort this object according to date property

// let array = [{ date: 1621239213 }, { date: 1621239201 }];

// array.sort((a, b) => {
//   return a.date - b.date;
// });

// let output_array =  [{ date: 1621239201  }, { date:  1621239213}];
