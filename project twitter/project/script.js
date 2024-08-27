
const postInput = document.getElementById("postInput");
const postButton = document.getElementById("postButton");
const postList = document.querySelector(".middle-section");

postButton.addEventListener("click", () => {
  const postText = postInput.value;
  if (postText == "") {
    alert("Please Add Some Text To Post");
  } else {
    const postElement = document.createElement("div");
    postElement.className = "post";
    postElement.innerHTML = `<div class="post__avatar">
    <img style="width:150%;"  src="rishav.jpeg" alt="" />
     
    </div>
    
    <div class="post__body">
    <div class="post__header">
    <div class="post__headerText">
    <h3>
   Sahil Sharma
    <span class="post__headerSpecial"><span class="material-icons post__badge"> verified
    </span>@sahilSharma</span>
    </h3>
    </div>
    <div class="post__headerDescription">
    <p>${postText}</p>
    </div>
    </div>
    <img src="https://picsum.photos/1920/1080?random=${Math.random()}" alt="" />
    <div class="post__footer">
    <div class="post__footer">
            <i class="fa-regular fa-message"></i> <p class="post_x">70k</p>
            <i class="fa-solid fa-retweet"></i> <p class="post_x">230k</p>
            <i class="fa-regular fa-heart"></i> <p class="post_x">1.9M</p>
            <i class="fa-solid fa-chart-column"></i> <p class="post_x">30M</p>
            
            <i class="fa-solid fa-trash delete post_x"></i>
          </div>
    
    </div>`;
    postList.insertBefore(postElement, postList.firstChild);
    postInput.value = "";
    postElement.querySelector(".delete").addEventListener("click", remove);
    function remove() {
      postElement.remove();
    }
  }
});

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
});
