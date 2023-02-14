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

function stepForward() {
  posts.forEach(function (item) {
    console.log(item);

    document.getElementById("container").innerHTML += `<section>
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
    <img class="likeicon" src="images/like.png">
    <img class="commenticon" src="images/comment.png">
    <img class="shareicon" src="images/share.png">
    </div>
    <p class="likeCount"><strong>${item.likes} likes</strong></p>
    <p class="comment"><strong>${item.username}</strong> ${item.comment}</p>
    </section>`;
  });
}

stepForward();
