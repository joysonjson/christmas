const text = document.querySelectorAll("#byjoy path");
console.log("Text", text);
for (let i = 0; i < text.length; i++) {
  console.log(text[i].getTotalLength());
}
