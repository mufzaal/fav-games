window.addEventListener('load', init)

const paragraphCountInput = document.getElementById('paragraph-count')
const paragraphCountLabel = document.getElementById('paragraph-count-label')
let paragraphCount =  paragraphCountInput.value

paragraphCountInput.addEventListener('input', () => {
  paragraphCount = paragraphCountInput.value
  window.sessionStorage.setItem('paragraph-count', paragraphCount)
  if (parseInt(paragraphCountInput.value) === 1) {
    paragraphCountLabel.textContent = 'Paragraph'
  } else {
    paragraphCountLabel.textContent = 'Paragraphs'
  }
})

const generatedLoremIpsumEl = document.getElementById('generated-lorem-ipsum')
const updateButton = document.getElementById('update')

updateButton.addEventListener('click', updateLoremIpsum)

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function init() {
  const paragraphCountFromStorage = window.sessionStorage.getItem('paragraph-count')
  if (paragraphCountFromStorage) {
    paragraphCount = paragraphCountFromStorage
    paragraphCountInput.value = paragraphCountFromStorage
  }
  if (parseInt(paragraphCount) === 1) {
    paragraphCountLabel.textContent = 'Paragraph'
  } else {
    paragraphCountLabel.textContent = 'Paragraphs'
  }
  updateLoremIpsum()
}

function updateLoremIpsum() {
  let updatedContent = ''
  for (let i=0; i < paragraphCount; i++) {
    updatedContent += makeParagraph()
  }
  generatedLoremIpsumEl.innerHTML = updatedContent
}

function getSubject() {
  const dieRoll = Math.floor(Math.random() * 4)
  if (dieRoll === 1) {
    return capitalizeFirstLetter(pronouns[Math.floor(Math.random() * pronouns.length)])
  } else if (dieRoll === 2) {
    return getClueCharacters()
  } else  if(dieRoll === 3) {
    return capitalizeFirstLetter(getCandyLandCharacters())
  } else {
    return getDuo()
  }
}

function makeSentence() {
  const subject = getSubject()
  const gameName = gameNames[Math.floor(Math.random() * gameNames.length)]
  const transitiveVerb = transitiveVerbs[Math.floor(Math.random() * transitiveVerbs.length)]
  return subject + ' ' + transitiveVerb + ' ' + gameName + '. '
}

function makeAccusation() {
  const murderSuspect = clueCharacters[Math.floor(Math.random() * clueCharacters.length)]
  const murderWeapon = clueWeapons[Math.floor(Math.random() * clueWeapons.length)]
  const location = clueRooms[Math.floor(Math.random() * clueRooms.length)]
  return `I suspect ${murderSuspect}, in the ${location}, with the ${murderWeapon}. `
}

function winPit() {
  const collectedCommodity = pitCommodities[Math.floor(Math.random() * pitCommodities.length)]
  return `Corner on ${collectedCommodity}! `
}

function makeSaying() {
  const subject = getSubject()
  const verb = verbsForTalking[Math.floor(Math.random() * verbsForTalking.length)]
  const saying = randomPhrases[Math.floor(Math.random() * randomPhrases.length)]
  return `${subject} ${verb}, "${saying}" `
}

function doAmongUsTasks() {
  const task1 = amongUsTasks[Math.floor(Math.random() * amongUsTasks.length)]
  const restOfTasks = amongUsTasks.filter(task => {
    return task !== task1
  })
  const task2 = restOfTasks[Math.floor(Math.random() * restOfTasks.length)]
  return ` It's time to ${task1} and ${task2} before the Imposter finds and kills me. `
}

function makeQuote() {
  const currentQuote = quotes[Math.floor(Math.random() * quotes.length)]
  return `As ${currentQuote.author} said, '${currentQuote.quote}' `
}

function getCandyLandCharacters() {
  const char1 = candyLandCharacters[Math.floor(Math.random() * candyLandCharacters.length)]
  const rest = candyLandCharacters.filter(char => char !== char1)
  const char2 = rest[Math.floor(Math.random() * rest.length)]
  return `${char1} and ${char2}`
}

function getClueCharacters() {
  const char1 = clueCharacters[Math.floor(Math.random() * clueCharacters.length)]
  const rest = clueCharacters.filter(char => char !== char1)
  const char2 = rest[Math.floor(Math.random() * rest.length)]
  return `${char1} and ${char2}`
}

function getDuo() {
  const char1 = gameCharacters[Math.floor(Math.random() * gameCharacters.length)]
  const rest = gameCharacters.filter(char => char !== char1)
  const char2 = rest[Math.floor(Math.random() * rest.length)]
  return `${char1} and ${char2}`
}

function makeCandylandSentence() {
  const subject = capitalizeFirstLetter(candyLandCharacters[Math.floor(Math.random() * candyLandCharacters.length)])
  const location = candyLandLocations[Math.floor(Math.random() * candyLandLocations.length)]
  return `${subject} is at the ${location}. `
}

function makeParagraph() {
  const gameName2 = gameNames[Math.floor(Math.random() * gameNames.length)]
  const gameName3 = gameNames[Math.floor(Math.random() * gameNames.length)]
  const gameName4 = gameNames[Math.floor(Math.random() * gameNames.length)]
  const gameName5 = gameNames[Math.floor(Math.random() * gameNames.length)]

  return (
    '<p>'
    + makeSentence() + makeSentence()
    + 'Do you like ' + gameName4 +  ' or ' + gameName5 + '? '
    + 'Let\'s play ' + gameName2 + '. '
    + winPit()
    + 'Or let\'s play ' + gameName3 + '! ' + makeSentence() + makeSentence()
    + makeSaying()
    + 'Or maybe let\'s play ' + gameName5 + ' instead! '
    + makeQuote()
    + doAmongUsTasks()
    + makeCandylandSentence()
    + makeAccusation()
    + '</p>'
  )
}
