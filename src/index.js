function Validate(){
  if (
    document.getElementById("keyword").value == "Octopi" &&
    document.getElementById("number").value ==
      document.getElementById("extra").value
  ) {
    document.getElementById("result").value = "HAGS HAGS HAGS";
  } else {
    document.getElementById("result").value = "Incorrect";
  }
}

document.getElementById("submit").addEventListener("click", Validate);
