document.addEventListener("DOMContentLoaded", function () {
    const counter = document.getElementById("counter");
    let count = 0;
    let timer;
  
    function startTimer() {
      timer = setInterval(() => {
        counter.textContent = count;
        count++;
      }, 1000);
    }
  
    startTimer();
  
    const plusButton = document.getElementById("plus");
    const minusButton = document.getElementById("minus");
    plusButton.addEventListener("click", () => {
      count++;
      counter.textContent = count;
    });
    minusButton.addEventListener("click", () => {
      count--;
      counter.textContent = count;
    });
  
    const likeButton = document.getElementById("heart");
    const likesList = document.querySelector(".likes");
    const noOfLikes = {};
  
    likeButton.addEventListener("click", () => {
      if (!noOfLikes[count]) {
        noOfLikes[count] = 1;
      } else {
        noOfLikes[count]++;
      }
  
      const li = document.createElement("li");
      li.textContent = `${count} has been liked ${noOfLikes[count]} times`;
      likesList.appendChild(li);
    });
  
    const pauseButton = document.getElementById("pause");
    const buttonsToDisable = [plusButton, minusButton, likeButton];
    let paused = false;
  
    function disableButtons() {
      buttonsToDisable.forEach((button) => (button.disabled = true));
    }
  
    function enableButtons() {
      buttonsToDisable.forEach((button) => (button.disabled = false));
    }
  
    pauseButton.addEventListener("click", () => {
      paused = !paused; 
      pauseButton.textContent = paused ? "Resume" : "Pause";
      if (paused) {
        disableButtons();
        clearInterval(timer); 
      } else {
        enableButtons();
        startTimer(); 
      }
    });
  
    const restartButton = document.getElementById('restart');
    restartButton.addEventListener('click', () => {
        count = 0;
        counter.textContent = count; 
});
  
    const commentForm = document.getElementById("comment-form");
    const commentInput = document.getElementById("comment-input");
    const commentsList = document.getElementById("list");
  
    commentForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const commentText = commentInput.value;
      if (commentText.trim() !== "") {
        const commentItem = document.createElement("li");
        commentItem.textContent = commentText;
        commentsList.appendChild(commentItem);
        commentInput.value = "";
      }
    });
  });
  