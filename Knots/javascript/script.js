//SCROLL TO TOP

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//SCROLL TO TOP


//COMMENTS
const commentForm = document.getElementById('comment-form');
const commentsContainer = document.querySelector('.comments-container');

commentForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const commentText = document.getElementById('comment').value;

  if (name && email && commentText) {
    addComment(name, email, commentText);
    commentForm.reset(); // Clear the form
  } else {
    alert('Please fill in all fields.');
  }
});

function addComment(name, email, commentText) {
  const commentElement = document.createElement('div');
  commentElement.classList.add('comment');
  commentElement.innerHTML = `
    <p><strong>${name}</strong> (${email})</p>
    <p>${commentText}</p>
  `;
  commentsContainer.appendChild(commentElement);
}
//COMMENTS


