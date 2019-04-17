$(() => {

const players = []

  $('.generate').on('click', () => {
    $('ul').empty();
    const randomPlayers = players[Math.floor(Math.random() * players.length)];

    const $li = $('<li>')
    $li.append(randomPlayers)
    $('.players').append($li)

    $('.nbaImage').hide();

    if(randomPlayers == 'Player: Ike Anigbogu'){
      $('.ike').show();
    } else {
      $('.ike').hide();
    }
    if(randomPlayers == 'Player: DeVaughn Akoon-Purcell'){
      $('.DeVaughn').show();
    } else {
      $('.DeVaughn').hide();
    }
    if(randomPlayers == 'Player: Carmelo Anthony'){
      $('.carmelo').show();
    } else {
      $('.carmelo').hide();
    }
    if(randomPlayers == 'Player: Ron Baker'){
      $('.baker').show();
    } else {
      $('.baker').hide();
    }
    if(randomPlayers == 'Player: Jabari Bird'){
      $('.jabari').show();
    } else {
      $('.jabari').hide();
    }

  })

  let currentImgIndex = 0;
  let currentNumOfImages = $('.player-picture').children().length - 1;

//carousel - some code below is from Jerrica's lesson//
  $('.next').on('click', () => {
    $('ul').empty();
    $('.player-picture').children().eq(currentImgIndex).hide();
    if (currentImgIndex < currentNumOfImages) {
      currentImgIndex++
    } else {
      currentImgIndex = 0
    }
    $('.player-picture').children().eq(currentImgIndex).show();

    playerName();
  })

  $('.previous').on('click', () => {
    $('ul').empty();
    $('.player-picture').children().eq(currentImgIndex).hide();
    if (currentImgIndex > 0) {
      currentImgIndex--;
    } else {
      currentImgIndex = currentNumOfImages
    }
    $('.player-picture').children().eq(currentImgIndex).show();

    playerName();
  })

  const playerName = () => {
    if(currentImgIndex == 0){
      const $li = $('<li>')
      $li.append('Player: Ike Anigbogu');
      $('.players').append($li)
    }
    if(currentImgIndex == 1){
      const $li = $('<li>')
      $li.append('Player: DeVaughn Akoon-Purcell');
      $('.players').append($li)
    }
    if(currentImgIndex == 2){
      const $li = $('<li>')
      $li.append('Player: Carmelo Anthony');
      $('.players').append($li)
    }
    if(currentImgIndex == 3){
      const $li = $('<li>')
      $li.append('Player: Ron Baker');
      $('.players').append($li)
    }
    if(currentImgIndex == 4){
      const $li = $('<li>')
      $li.append('Player: Jabari Bird');
      $('.players').append($li)
    }

  }

//api//
$.ajax(
  {
    url: 'https://www.balldontlie.io/api/v1/players?per_page=5',
    success: (data) => {
      for(let i = 0; i < data.data.length; i ++){
      if(data.data[i].team.full_name){
        players.push('Player: ' + data.data[i].first_name + ' ' + data.data[i].last_name)
        }
      }
      // console.log(data.data);
    }
  })
  //hidding pictures//
  $('.ike').hide();
  $('.DeVaughn').hide();
  $('.carmelo').hide();
  $('.baker').hide();
  $('.jabari').hide();
  $('.nbaImage').hide();
})
