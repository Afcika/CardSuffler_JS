  document.getElementById('shuffleBtn').addEventListener('click', function() {


    var cardsContainer = document.querySelector('.Cards');
    var cards = Array.from(cardsContainer.querySelectorAll('img'));


    shuffle(cards);



    // // cards.forEach(card => cardsContainer.appendChild(card));
    // we take cards and add them as a last element to array

    cards.forEach(function(card) {
      cardsContainer.appendChild(card);
    });
  });

  function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var random = Math.floor(Math.random() * (i + 1));
      [array[i], array[random]] = [array[random], array[i]] 
    }
  }
