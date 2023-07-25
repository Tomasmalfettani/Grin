document.addEventListener("DOMContentLoaded", function () {
  ScrollReveal().reveal('.animated', {
      delay: 200,
      duration: 800,
      origin: 'bottom',
      distance: '20px',
      easing: 'ease-out',
      reset: true
  });

  let numberElements = document.querySelectorAll(".custom-number");

  let options = {
      root: null, 
      threshold: 0.5 
  };

  let callback = function(entries, observer) {
      entries.forEach(function(entry) {
          if (entry.isIntersecting) {
              let targetNumber = parseInt(entry.target.getAttribute("data-number"));
              let currentNumber = 0;
              let increment = Math.ceil(targetNumber / 100);

              let interval = setInterval(function() {
                  if (currentNumber >= targetNumber) {
                      clearInterval(interval);
                  }

                  currentNumber += increment;
                  if (currentNumber > targetNumber) {
                      currentNumber = targetNumber;
                  }

                  entry.target.textContent = currentNumber;
              }, 20);

              observer.unobserve(entry.target);
          }
      });
  };

  let observer = new IntersectionObserver(callback, options);

  numberElements.forEach(function(element) {
      observer.observe(element);
  });
});
