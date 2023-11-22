// scrollspy.js
document.addEventListener('DOMContentLoaded', function () {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const animationType = entry.target.getAttribute('data-animation');
        entry.target.classList.add('animate__animated', `animate__${animationType}`, 'animate__delay-1s');
      }
    });
  });

  // Specify the elements to observe
  const elementsToAnimate = document.querySelectorAll('.scrollspy');

  elementsToAnimate.forEach(element => {
    observer.observe(element);
  });
});

date =  new Date();
year = date.getFullYear()
document.getElementById('date').innerHTML = "&copy; Ahmed Mikky " + year