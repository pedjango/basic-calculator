// insert data into input-field
function insertData(button_id) {
  return (document.getElementById("input-field").value += button_id);
}

// calculate what is in the input-field
function calc() {
  let Q = document.getElementById("input-field").value;
  let P = eval(Q);

  if (Q == "") {
    document.getElementById("output-field").value = "";
  } else {
    if ((P * 10) % 10 == 0) {
      document.getElementById("output-field").value = Q + " = " + P.toFixed();
    } else {
      document.getElementById("output-field").value = Q + " = " + P.toFixed(2);
    }
  }
}

// clear the screen
function cls() {
  document.getElementById("input-field").value = "";
  // document.getElementById("output-field").value = "";
}

// clear the last character
function cl_last() {
  let Q = document.getElementById("input-field").value;
  document.getElementById("input-field").value = Q.slice(0, -1);
  /*
    let str = "12345.00";
    str = str.slice(0, -1); 
    console.log(str);
  */
}
