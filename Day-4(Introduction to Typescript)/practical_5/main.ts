
function showMessage() {
  const mystring: string = "I am Roshni prajapati";

  const result = document.getElementById("demo");
  if (result) {
    result.innerHTML = mystring;
  }
}

showMessage();
