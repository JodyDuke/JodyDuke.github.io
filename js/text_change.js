let langs = ["Node.",
      "NPM.",
      "React.",
      "Babel.",
      "Webpack.",
      "HTML5.",
      "CSS3.",
      "SASS.",
      "Git.",
      "Javascript."
    ]

// let langs = [
//   "Node.\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",
//   "NPM.\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",
//   "React.\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",
//   "Babel.\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",
//   "Webpack.\xa0\xa0\xa0\xa0",
//   "HTML5.\xa0\xa0\xa0\xa0\xa0\xa0\xa0",
//   "CSS3.\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",
//   "SCSS.\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",
//   "Git.\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0",
//   "Javascript."
// ];
let domNode = document.getElementById("text");
let count = 0;

function textChange() {
  domNode.innerHTML = langs[count];
  count++;

  if (count === langs.length) {
    count = 0;
  }
}

setInterval(textChange, 2000);
