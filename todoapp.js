(() => {
  let todos = [...document.querySelectorAll("div.todo-item")];
  todos.map((todo) => {
    todo.addEventListener("click", () => {
      todo.classList.toggle("completed");
      var [checkbox, text] = todo.children;
      checkbox.checked = !checkbox.checked;
    })
  });
})();
