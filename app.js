Vue.createApp({
  data: function () {
    return {
      lists: [],
      enteredValue: ''
    };
  },
  methods: {
    addItem() {
      this.lists.push(this.enteredValue);
      this.enteredValue = '';
    },
    resetAll() {
      this.lists = [];
      this.enteredValue = '';
    },
    popLast() {
      this.lists.pop();
    }
  }
}).mount('#app');


// let inputArea = document.querySelector("#inputValue");
// let btn = document.querySelector("button");
// let btnReset = document.querySelector("#reset");
// let btnLast = document.querySelector("#removeLast");
// let ulArea = document.querySelector("ol");

// function addItem() {
//   let getValue = inputArea.value;
//   let createElement = document.createElement("li");
//   createElement.textContent = getValue;
//   ulArea.appendChild(createElement);
//   inputArea.value = "";
// }

// function reset() {
//   ulArea.innerHTML = "";
// }
// function lastItem() {
//   ulArea.removeChild(ulArea.lastElementChild);
// }

// btn.addEventListener('click', addItem);
// btnReset.addEventListener('click', reset);
// btnLast.addEventListener('click', lastItem);
