const box = document.getElementById("box");
let currentNum = 1;
let numData = Array(15)
  .fill()
  .map((_, i) => {
    return {
      value: i + 1,
    };
  })
  .sort(() => Math.random() - 0.5);

alert("This is a Cross Number Game in which you have tap numbers from 1 to 15 and at the end you will get a suprise. Enjoy!!")


numData.forEach((e, i) => {
  const pad = document.createElement("button");
  pad.innerHTML = e.value;
  pad.classList.add("pad");
  pad.addEventListener("click", () => {
    if (currentNum === e.value) {
      if (currentNum === 15) {
        setTimeout(() => {
          location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
        }, 1000);
      } 
      pad.classList.add("green");
      currentNum++;
    } else {
      pad.classList.add("red");
      setTimeout(() => {
        pad.classList.remove("red");
        currentNum = 1;
        numData.forEach((e) => {
          e.pad.classList.remove("green");
        });
      }, 1000);
    }
  });
  box.append(pad);
  numData[i].pad = pad;
});
