import getJoke from '../helpers/data/jokeData';

const seeJokeyJoke = () => {
  $('#app').html('<button type="button" id="Jokey-joke" class="btn btn-primary btn-lg">Get a Joke</button>');

  $('#Jokey-joke').on('click', () => {
    $('#jokeArea').html('');
    getJoke.getJoke().then((response) => {
      console.warn(response);
      $('#disjoke').html(`<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Gimme Jokey Joke</h5>
          <p class="card-text">${response.data.setup}</p>
          <a href="#" id="setup" class="btn btn-primary">Get ready to Laugh</a>
          <div id="punchline"></div>
        </div>
      </div>`);
      $('#setup').on('click', () => {
        $('#punchline').append(`<h4 class="m-md">${response.data.punchline}</h4>`);
      });
    });
  });
};

export default { seeJokeyJoke };
