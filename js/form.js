const setCursorPosition = (pos, e) => {
  e.focus();
  if (e.setSelectionRange) e.setSelectionRange(pos, pos);
  else if (e.createTextRange) {
    let range = e.createTextRange();
    range.collapse(true);
    range.moveEnd("character", pos);
    range.moveStart("character", pos);
    range.select();
  }
};

function mask(e) {
  let matrix = this.placeholder,
    i = 0,
    def = matrix.replace(/\D/g, ""),
    val = this.value.replace(/\D/g, "");
  def.length >= val.length && (val = def);
  matrix = matrix.replace(/[_\d]/g, function (a) {
    return val.charAt(i++) || "_";
  });
  this.value = matrix;
  i = matrix.lastIndexOf(val.substr(-1));
  i < matrix.length && matrix !== this.placeholder
    ? i++
    : (i = matrix.indexOf("_"));
  setCursorPosition(i, this);
}

let inputTel = document.querySelector("#online_phone");
inputTel.addEventListener("input", mask, false);
inputTel.focus();
setCursorPosition(3, inputTel);

let form = document.querySelector(".feedback");
let formInputs = document.querySelectorAll(".feedback input,textarea");
form.onsubmit = () => {
  let data = {};
  formInputs.forEach((el) => {
    data[el.name] = el.value;
  });
  data.phone = data.phone.replace(/[^0-9+]+/gi, "");
  let json = JSON.stringify(data)
  console.log(json);
  return false;
};
