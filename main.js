document.addEventListener("DOMContentLoaded", function () {
  ScrollReveal().reveal('.animated', {
      delay: 200,
      duration: 800,
      origin: 'bottom',
      distance: '20px',
      easing: 'ease-out',
      reset: true
  });

  var numberElements = document.querySelectorAll(".custom-number");

  var options = {
      root: null, 
      threshold: 0.5 
  };

  var callback = function(entries, observer) {
      entries.forEach(function(entry) {
          if (entry.isIntersecting) {
              var targetNumber = parseInt(entry.target.getAttribute("data-number"));
              var currentNumber = 0;
              var increment = Math.ceil(targetNumber / 100);

              var interval = setInterval(function() {
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

  var observer = new IntersectionObserver(callback, options);

  numberElements.forEach(function(element) {
      observer.observe(element);
  });
});
