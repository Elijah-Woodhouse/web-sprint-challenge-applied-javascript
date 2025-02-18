import axios from "axios";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings
  //("topics") as its only argument.
  // As an example, if the topics passed are
  //['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their
  // attributes must match the provided markup!
  // The text inside elements will be set using their
  //`textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

  const div = document.createElement("div");
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");
  const div4 = document.createElement("div");
  const div5 = document.createElement("div");

  div.classList.add("topics");
  div1.classList.add("tab");
  div2.classList.add("tab");
  div3.classList.add("tab");
  div4.classList.add("tab");
  div5.classList.add("tab");

  div.appendChild(div1);
  div.appendChild(div2);
  div.appendChild(div3);
  div.appendChild(div4);
  div.appendChild(div5);

  div1.textContent = topics[0];
  div2.textContent = topics[1];
  div3.textContent = topics[2];
  div4.textContent = topics[3];
  div5.textContent = topics[4];

  //console.log(topics[0]);

  return div;

}



const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  axios.get("http://localhost:5001/api/topics")
    .then(res =>{
      const data = res.data.topics;
      console.log(data);
      const appendItem = document.querySelector(selector);
      appendItem.appendChild(Tabs(data));
    })
    .catch(err => {
      debugger
    })
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint:
  //`http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response,
  //and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that
  //matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
