const optionButtons = document.querySelectorAll('[data-option]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
const OPTIONS = [
  {
    name: 'rock',
    emoji: '✊',
    beats: 'scissors'
  },
  {
    name: 'paper',
    emoji: '✋',
    beats: 'rock'
  },
  {
    name: 'scissors',
    emoji: '✌',
    beats: 'paper'
  }
]

optionButtons.forEach(optionButton => {
  optionButton.addEventListener('click', e => {
    const optionName = optionButton.dataset.option
    const option = OPTIONS.find(option => option.name === optionName)
    makeOption(option)
  })
})

function makeOption(option) {
  const computerOption = randomOption()
  const yourWinner = isWinner(option, computerOption)
  const computerWinner = isWinner(computerOption, option)

  addOptionResult(computerOption, computerWinner)
  addOptionResult(option, yourWinner)

  if (yourWinner) incrementScore(yourScoreSpan)
  if (computerWinner) incrementScore(computerScoreSpan)
}

function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addOptionResult(option, winner) {
  const div = document.createElement('div')
  div.innerText = option.emoji
  div.classList.add('result-option')
  if (winner) div.classList.add('winner')
  finalColumn.after(div)
}

function isWinner(option, opponentOption) {
  return option.beats === opponentOption.name
}

function randomOption() {
  const randomIndex = Math.floor(Math.random() * OPTIONS.length)
  return OPTIONS[randomIndex]
}