//1
const list = document.getElementById("list");
const firstElement = list.children[0];
const lastElement = list.children[list.children.length - 1];
const secondElement = list.children[1];
const thirdElement = list.children[2];
const fourthElement = list.children[3];
const modal = document.createElement("div");
modal.id = "modal";
modal.style.display = "none";
document.body.appendChild(modal);
modal.appendChild(firstElement);
modal.appendChild(lastElement);
modal.appendChild(secondElement);
modal.appendChild(fourthElement);
modal.appendChild(thirdElement);

modal.style.display = "block";
//2
const myDiv = document.getElementById("myDiv");
const myList = document.getElementById("myList");
const mySpan = document.querySelector("span");
myDiv.style.fontSize = "16px";
myList.style.display = "flex";
myList.style.flexDirection = "row";
mySpan.style.display = "none";
//3
document.querySelector("body").innerHTML = `
  <main class="mainClass check item">
  <div id="myDiv">
    <p>First paragraph</p>
  </div>
</main>
`;