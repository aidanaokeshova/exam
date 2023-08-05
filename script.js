let inp1 = document.querySelector(".inp1");
let inp2 = document.querySelector(".inp2");
let img = document.querySelector(".img");

let btn = document.querySelector(".btn");
let block = document.querySelector(".block");
task();
btn.addEventListener("click", () => {
  let obj = {
    name: inp1.value,
    lastName: inp2.value,
    image: img.value,
  };
  let data = JSON.parse(localStorage.getItem("contact")) || [];
  data.push(obj);
//   console.log(data);
  localStorage.setItem("contact", JSON.stringify(data));
  task();
});
function task() {
  let newData = JSON.parse(localStorage.getItem("contact")) || [];
  block.innerHTML = "";
  newData.forEach((el, index) => {
    let con = document.createElement("div");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let img1 = document.createElement("img");
    
    let btn = document.createElement("button");
    let editBtn = document.createElement("button");

    img1.src = el.image;
    p1.innerText = el.name;
    p2.innerText = el.lastName;
    btn.innerText = "delete";
    editBtn.innerText = "edite";

    con.append(p1);
    con.append(p2);
    con.append(img1);
    con.append(btn);
    con.append(editBtn);

    block.append(con);

    btn.addEventListener("click", () => {
      delBtn(index);
    });
    editBtn.addEventListener("click", () => {
      edit(index);
    });
  });
}
function delBtn(index) {
  let data = JSON.parse(localStorage.getItem("contact")) || [];
  data.splice(index, 1);
  localStorage.setItem("contact", JSON.stringify(data));
  task();
}

//!edite
let editinput1 = document.querySelector(".edit_input1");
let editinput2 = document.querySelector(".edit_input2");
let editinput3 = document.querySelector(".edit_input3");
let editBtn = document.querySelector(".edit_btn");

function edit(index) {
  let data = JSON.parse(localStorage.getItem("contact")) || [];
  editinput1.setAttribute("id", index);
  editinput2.setAttribute("id", index);
  editinput3.setAttribute("id", index);

  editinput1.value = data[index].name
  editinput2.value = data[index].lastName
  editinput3.value = data[index].image
}
editBtn.addEventListener("click", () => {
  let data = JSON.parse(localStorage.getItem("contact")) || [];

  let nameId = editinput1.value;
  let lastNameId = editinput2.value;
  let imageId = editinput3.value;

  let newObj = {
    name: editinput1.value,
    lastName: editinput2.value,
    image: editinput3.value,
  };
  data.splice(nameId, 1, newObj);
  data.splice(lastNameId, 1, newObj);
  data.splice(imageId, 1, newObj);

  localStorage.setItem("contact", JSON.stringify(data));
  read();
});
