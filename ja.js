var het = 0;
here
function func1() {
  het += 1;
  document.getElementById('het').innerHTML = het;
};
function func2() {
  het += -1;
  document.getElementById('het').innerHTML = het;
};
function func3() {
  het -= het;
  document.getElementById('het').innerHTML = het;
}
