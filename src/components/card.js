import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`,
  //`authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes
  //must match the provided markup exactly!
  // The text inside elements will be set using their
  // `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user
  //clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>

  const div = document.createElement("div");
  const div2 = document.createElement("div");
  const div3 = document.createElement("div");
  const div4 = document.createElement("div");
  const image = document.createElement("img");
  const span = document.createElement("span");

  div.classList.add("card");
  div2.classList.add("headline");
  div3.classList.add("author");
  div4.classList.add("img-container");
  image.classList.add("img-container");


  div.appendChild(div2);
  div.appendChild(div3);
  div3.appendChild(div4);
  div3.appendChild(span);
  div4.appendChild(image);

  div2.textContent = article.headline;
  span.textContent = `By ${article.authorPhoto}`;
  image.src = article.authorPhoto;

  return div;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint:
  //`http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single,
  //neat array. Inspect the response closely!
  // Create a card from each and every article object in the
  //response, using the Card component.
  // Append each card to the element in the DOM that matches
  //the selector passed to the function.
  //
  axios.get("http://localhost:5001/api/articles")
  .then(res =>{
    const data = res.data.articles;
    const javascript = data.javascript;
    const bootstrap = data.bootstrap;
    const technology = data.technology;
    const jquery = data.jquery;
    const nodles = data.node;
    const array = extractAndPush(javascript, bootstrap, technology, jquery, nodles);
    console.log(array);
    const appendItem = document.querySelector(selector);
    for(let i = 0; i < array.length; i++){
      appendItem.appendChild(Card(array[i]));
    }
  })
  .catch(err => {
    debugger
  })



  function extractAndPush(arg1, arg2, arg3, arg4, arg5){
    const array = [];
    for(let i = 0; i < arg1.length; i++){
      array.push(arg1[i]);
    }
    for(let i = 0; i < arg2.length; i++){
      array.push(arg2[i]);
    }
    for(let i = 0; i < arg3.length; i++){
      array.push(arg3[i]);
    }
    for(let i = 0; i < arg4.length; i++){
      array.push(arg4[i]);
    }
    for(let i = 0; i < arg5.length; i++){
      array.push(arg5[i]);
    }

    return array;

  }

}

export { Card, cardAppender }
