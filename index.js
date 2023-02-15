const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/Vincent van Gogh.jpg",
    post: "images/vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/Gustave Courbet.jpg",
    post: "images/courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/Joseph Ducreux.jpg",
    post: "images/ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];
let feedHtml = "";

let post = {};
render(post);

function render() {
  posts.forEach(function (item) {
    document.getElementById("container").innerHTML = getHTML(item);
  });
}
document.addEventListener("click", function (e) {
  if (e.target.dataset.likes) {
    console.log(e.target.dataset.likes);
    handleLikeClick(e.target.dataset.likes);
    render();
  }
});

function getHTML(item) {
  feedHtml += `<section>
    <div class="hero">
      <img src="${item.avatar}" class="profilePic" />
      <div class="user">
        <h3>${item.name}</h3>
        <p>${item.location}</p>
      </div>
    </div>
    </section>
    <section class="photo" id="photo">
    <img src="${item.post}" />
    </section>
    <section class="bottom">
    <div class="icon">
    <img class="likeicon" id="${item.likes}" data-likes="${item.username}"src="images/like.png">
    <img class="commenticon" src="images/comment.png">
    <img class="shareicon" src="images/share.png">
    </div>
    <p id="likes"class="likeCount"><strong>${item.likes} likes</strong></p>
    <p class="comment"><strong>${item.username}</strong> ${item.comment}</p>
    </section>`;

  return feedHtml;
}

function handleLikeClick(username) {
  const targetPostObj = posts.filter(function (post) {
    return post.username === username;
  })[0];
  targetPostObj.likes++;

  console.log("targetpostobj.likes:", targetPostObj.likes);
  console.log("targetpostobj posts:", posts);
}

// const arrayToObject = (array) =>
//   array.reduce((obj, item) => {
//     obj[item.username] = item;
//     return obj;
//   }, {});
// const postsObject = arrayToObject(posts);
// console.log("postsObject:", postsObject);
// document.addEventListener("click", function (e) {
//   console.log("e.t.d.l:", e.target.dataset.likes);
//   let likesNumber = e.target.dataset.likes;

//   likesNumber++;
//   console.log(likesNumber);
//   document.getElementById(
//     "likes"
//   ).innerHTML += ` <p id="likes"class="likeCount"><strong>${likesNumber}likes</strong></p>`;
// });
