// get elements
const heading = document.getElementById("heading");
const subheading = document.getElementById("subheading");
const container = document.getElementById("container");
const btnSetHeading = document.getElementById("btn-0");
const valSetHeading = document.getElementById("val-0");
const btnSetSubheading = document.getElementById("btn-1");
const valSetSubheading = document.getElementById("val-1");
const btnAddParagraph = document.getElementById("btn-2");
const valAddParagraph = document.getElementById("val-2");
const btnSetBackgroundColor = document.getElementById("btn-3");
const valSetBackgroundColor = document.getElementById("val-3");
const btnSetForegroundColor = document.getElementById("btn-4");
const valSetForegroundColor = document.getElementById("val-4");
const btnSetFontSize = document.getElementById("btn-5");
const valSetFontSize = document.getElementById("val-5");
const btnSetFontWeight = document.getElementById("btn-6");
const valSetFontWeight = document.getElementById("val-6");
const btnSetFontStyle = document.getElementById("btn-7");
const valSetFontStyle = document.getElementById("val-7");
const btnSetTextDecoration = document.getElementById("btn-8");
const valSetTextDecoration = document.getElementById("val-8");
const btnReset = document.getElementById("btn-9");

// set heading
btnSetHeading.addEventListener("click", () => {
  let val = valSetHeading.value.trim();
  valSetHeading.value = "";
  if (!val) return;

  heading.innerText = val;
});

// set subheading
btnSetSubheading.addEventListener("click", () => {
  let val = valSetSubheading.value.trim();
  valSetSubheading.value = "";
  if (!val) return;

  subheading.innerText = val;
});

// add paragraph
btnAddParagraph.addEventListener("click", () => {
  let val = valAddParagraph.value.trim();
  valAddParagraph.value = "";
  if (!val) return;

  let p = document.createElement("p");
  p.innerText = val;
  container.appendChild(p);
});

// set background color
btnSetBackgroundColor.addEventListener("click", () => {
  let val = valSetBackgroundColor.value;
  document.body.style.backgroundColor = val;
});

// set foreground color
btnSetForegroundColor.addEventListener("click", () => {
  let val = valSetForegroundColor.value;
  document.body.style.color = val;
});

// set font size
btnSetFontSize.addEventListener("click", () => {
  let val = valSetFontSize.value;
  document.body.style.fontSize = val + "px";
});

// set font weight
btnSetFontWeight.addEventListener("click", () => {
  let val = valSetFontWeight.value;
  document.body.style.fontWeight = val;
});

// set font style
btnSetFontStyle.addEventListener("click", () => {
  let val = valSetFontStyle.value;
  if (val == 0) {
    document.body.style.fontStyle = "normal";
  } else if (val == 1) {
    document.body.style.fontStyle = "italic";
  }
});

// set text decoration
btnSetTextDecoration.addEventListener("click", () => {
  let val = valSetTextDecoration.value;
  if (val == 0) {
    document.body.style.textDecoration = "none";
  } else if (val == 1) {
    document.body.style.textDecoration = "underline";
  } else if (val == 2) {
    document.body.style.textDecoration = "line-through";
  } else if (val == 3) {
    document.body.style.textDecoration = "overline";
  }
});

// reset
btnReset.addEventListener("click", () => {
  heading.innerText = "Heading";
  subheading.innerText = "Subheading";
  container.innerHTML = "";
  document.body.style.backgroundColor = "#ffffff";
  document.body.style.color = "#000000";
  document.body.style.fontSize = "16px";
  document.body.style.fontWeight = "400";
  document.body.style.fontStyle = "normal";
  document.body.style.textDecoration = "none";
});
