window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const synth = window.speechSynthesis;
const data = [
  {
    id: "0",
    title : "Principle of Principle of Division of Work",
    desc: "According to this principle the <strong>whole work must be divided into small tasks or units</strong> and instead of assigning the whole work to one person one task or unit of work should be assigned to one person according to the capability, qualification and experience of the person. When a person is performing a part of job again and again he will become perfect and specialized in doing that and the efficiency level will improve. Fayol said not only the factory work but technical, managerial and skill jobs should also be divided into small segments for specialization.",
  },
  {
    id: "1",
    title: "Principle of Unity of Command",
    desc: "According to this principle an employee should receive orders from one boss only because if he is receiving orders from more than one boss then he will get confused and will not be able to understand that whose orders must be executed first and on the other hand, if employees is receiving orders from more bosses he gets chance to give excuses by saying that he was busy in executing the orders of other boss. To avoid confusion and to give no chance of excuse to employee, the orders must come from one boss only. If there are more bosses it can create problem of ego-clash among the superiors as every superior will want his order must be executed by the employee.",
    keywords: "",
  },
  {
    id: "2",
    title: "Principle of Discipline",
    desc: "Discipline refers to general rules, regulations for systematic working in an organisation. Discipline does not mean only rules and regulations but it also mean developing commitment in the employees towards organisation as well as towards each other. Fayol insists that discipline is required at superior as well as subordinate level. The disciplinary rules shall not be applicable only on subordinates but discipline requires goods superiors at every level, clear and fair agreement between superior and subordinates.",
    keywords: "",
  },
  {
    id: "3",
    title: "Principle of Unity of Command",
    desc: "This means an employee should have only one boss and follow his command. If an employee has to follow more than one boss, there begins a conflict of interest and can create confusion.",
    keywords: "",
  },
  {
    id: "4",
    title: "Principle of Unity of Direction",
    desc: "This means an employee should have only one boss and follow his command. If an employee has to follow more than one boss, there begins a conflict of interest and can create confusion.",
    keywords: "",
  },
  {
    id: "5",
    title: "Principle of Subordination of Individual Interest",
    desc: "This indicates a company should work unitedly towards the interest of a company rather than personal interest. Be subordinate to the purposes of an organization. This refers to the whole chain of command in a company.",
    keywords: "",
  },
  {
    id: "6",
    title: "Principle of Remuneration",
    desc: "This plays an important role in motivating the workers of a company. Remuneration can be monetary or non-monetary. However, it should be according to an individual’s efforts they have made.",
    keywords: "",
  },
  {
    id: "7",
    title: "Principle of Centralization",
    desc: "In any company, the management or any authority responsible for the decision-making process should be neutral. However, this depends on the size of an organization. Henri Fayol stressed on the point that there should be a balance between the hierarchy and division of power",
    keywords: "",
  },
  {
    id: "8",
    title: "Principle of Scalar Chain",
    desc: "Fayol on this principle highlights that the hierarchy steps should be from the top to the lowest. This is necessary so that every employee knows their immediate senior also they should be able to contact any, if needed.",
    keywords: "",
  },
  {
    id: "9",
    title: "Principle of Order",
    desc: "A company should maintain a well-defined work order to have a favourable work culture. The positive atmosphere in the workplace will boost more positive productivity",
    keywords: "",
  },
  {
    id: "10",
    title: "Principle of Equity",
    desc: "All employees should be treated equally and respectfully. It’s the responsibility of a manager that no employees face discrimination.",
    keywords: "",
  },
  {
    id: "11",
    title: "Principle of Stability",
    desc: "An employee delivers the best if they feel secure in their job. It is the duty of the management to offer job security to their employees.",
    keywords: "",
  },
  {
    id: "12",
    title: "Principle of Initiative",
    desc: "The management should support and encourage the employees to take initiatives in an organization. It will help them to increase their interest and make then worth.",
    keywords: "",
  },
  {
    id: "13",
    title: "Principle of Esprit de Corps",
    desc: "It is the responsibility of the management to motivate their employees and be supportive of each other regularly. Developing trust and mutual understanding will lead to a positive outcome and work environment.",
    keywords: "",
  },
];
const voiceBtn = document.getElementById("voiceBtn");
const searchInput = document.getElementById("searchInput");
const recognition = new SpeechRecognition();
const accordionDiv = document.getElementById("accordionDiv");
recognition.interimResults = true;
console.log(recognition);
addEventListener("beforeunload", () => {
  synth.cancel();
});
addEventListener("DOMContentLoaded", () => {
  getAccordion(data);
  voiceBtn.addEventListener("click", () => {
    recognition.start();
  });
  recognition.addEventListener("start", () => {
    voiceBtn.innerText = "Speak!!";
    voiceBtn.classList.add("btn-success");
    voiceBtn.classList.remove("btn-primary");
  });
  recognition.addEventListener("end", () => {
    voiceBtn.innerText = "Voice";
    voiceBtn.classList.add("btn-primary");
    voiceBtn.classList.remove("btn-success");
  });
  recognition.addEventListener("result", (e) => {
    const transcript = Array.from(e.results)
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join("");
    searchInput.value = transcript;
    filterAccordion();
  });
  searchInput.addEventListener("input", filterAccordion);
});
function filterAccordion() {
  synth.cancel();
  if (!searchInput.value) {
    getAccordion(data);
    return;
  }
  const filteredData = [];
  for (let i = 0; i < data.length; i++) {
    const e = data[i].title.toLowerCase();
    const searchText = searchInput.value.toLowerCase();
    if (e.includes(searchText) || searchText.includes(e)) {
      filteredData.push(data[i]);
    }
  }
  getAccordion(filteredData);
  if (filteredData.length === 1) {
    speak(filteredData[0].desc);
    document.querySelector("[data-bs-toggle]").click();
  }
}
function getAccordion(arr) {
  accordionDiv.innerHTML = "";
  arr.forEach(({ title, id, desc, keywords } , i) => {
    accordionDiv.innerHTML += `
          <div class="accordion-item my-3" id="accordionBox${id}">
          <h2 class="accordion-header" id="heading${id}">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#collapse${id}" aria-expanded="false" aria-controls="collapse${id}">${title}</button>
          </h2>
          <div id="collapse${id}" class="accordion-collapse collapse" aria-labelledby="headingOne"
          data-bs-parent="#accordionExample">
          <div class="accordion-body">${desc}<br>
          <button class="btn btn-primary mt-2" onclick="speak(data[${i}].desc)">Listen</button>
          </div>
          </div>
          </div>
      `;
  });
}

function speak(text) {
  const utt = new SpeechSynthesisUtterance(text);
  utt.rate = 1;
  utt.volume = 2;
  synth.speak(utt);
}

// git add .
// git commit -m "edited"
// git push
