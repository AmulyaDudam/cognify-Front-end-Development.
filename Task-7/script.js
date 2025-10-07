// Change background color on button click
document.getElementById('colorBtn').addEventListener('click', () => {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});

// Client-side form validation
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();

  const name = e.target.name.value.trim();
  const email = e.target.email.value.trim();
  const message = e.target.message.value.trim();
  const feedback = document.getElementById('formFeedback');

  const errors = [];
  if (!name) errors.push('Name is required.');
  if (!email.includes('@') || !email.includes('.')) errors.push('Enter a valid email.');
  if (message.length < 10) errors.push('Message should be at least 10 characters.');

  if (errors.length) {
    feedback.textContent = errors.join(' ');
    feedback.className = 'text-danger';
  } else {
    feedback.textContent = 'Thank you for your message!';
    feedback.className = 'text-success';
    e.target.reset();
  }
});
