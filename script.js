document.getElementById("yesButton").addEventListener("click", function () {
  document.getElementById("responseMessage").innerText = "Yay! I'm so happy!";
});

document.addEventListener("mousemove", function (event) {
  const noButton = document.getElementById("noButton");

  // Check if the cursor is close to the noButton
  const noButtonRect = noButton.getBoundingClientRect();
  const proximityThreshold = 5; // Distance threshold to trigger movement

  if (
    event.clientX >= noButtonRect.left - proximityThreshold &&
    event.clientX <= noButtonRect.right + proximityThreshold &&
    event.clientY >= noButtonRect.top - proximityThreshold &&
    event.clientY <= noButtonRect.bottom + proximityThreshold
  ) {
    // Move the noButton away from the cursor
    noButton.style.position = "absolute";
    noButton.style.left = `${
      Math.random() * (window.innerWidth - noButton.offsetWidth)
    }px`;
    noButton.style.top = `${
      Math.random() * (window.innerHeight - noButton.offsetHeight)
    }px`;
  }
});
