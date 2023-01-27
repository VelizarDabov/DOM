function addItem() {
  const item = document.getElementById("newItemText").value;
  const newLi = document.createElement("li");

  newLi.textContent = item;
  const deleteBtn = document.createElement("a");
  deleteBtn.href = "#";
  deleteBtn.textContent = "[Delete]";

  deleteBtn.addEventListener("click", () => newLi.remove());
  newLi.appendChild(deleteBtn);
  const list = document.getElementById("items");

  list.appendChild(newLi);
}
