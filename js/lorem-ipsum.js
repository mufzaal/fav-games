window.addEventListener('load', init)
const generatedLoremIpsumEl = document.getElementById('generated-lorem-ipsum')
const updateButton = document.getElementById('update')
const paragraphCountInput = document.getElementById('paragraph-count')
const paragraphCountLabel = document.getElementById('paragraph-count-label')
const copiedBox = document.getElementById('copied-box')
const messageEl = document.getElementById('message')

let paragraphCount =  paragraphCountInput.value
let paragraphLength = 'short'

const paragraphLengthInputs = document.getElementsByName('paragraph-length')

Array.from(paragraphLengthInputs).forEach(input => {
  input.addEventListener('input', () => {
    if (input.checked) {
      paragraphLength = input.value
      window.sessionStorage.setItem('paragraph-length', paragraphLength)
      updateLoremIpsum()
    }
  })
})

paragraphCountInput.addEventListener('input', () => {
  paragraphCount = paragraphCountInput.value
  window.sessionStorage.setItem('paragraph-count', paragraphCount)
  if (parseInt(paragraphCountInput.value) === 1) {
    paragraphCountLabel.textContent = 'Paragraph'
  } else {
    paragraphCountLabel.textContent = 'Paragraphs'
  }
})

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

  const copyButton = document.getElementById('copy-button')
  copyButton.addEventListener('click', copyToClipboard)

  async function copyToClipboard() {
    const brRegex = /<br\s*[\/]?>/gi;
    const convertedLoremIpsum = generatedLoremIpsumEl.innerHTML.replace(brRegex, "\r\n")
    copiedBox.value = convertedLoremIpsum
    copiedBox.select()
    copiedBox.setSelectionRange(0, 99999)
    try {
      navigator.clipboard.writeText(copiedBox.value)
      messageEl.classList.remove('text-transparent')
      messageEl.textContent = 'Copied to clipboard!'
      setTimeout(() => {
        messageEl.classList.remove('text-purple-600')
        messageEl.classList.add('text-transparent')
      }, 2000)
    } catch (err) {
      messageEl.classList.remove('text-transparent')
      messageEl.textContent = 'Sorry, there was an error while copying to the clipboard. Try again later!'
      setTimeout(() => {
        messageEl.classList.add('text-transparent')
      }, 2000)
    }
  }

  const paragraphLengthFromStorage = window.sessionStorage.getItem('paragraph-length')
  if (paragraphLengthFromStorage) {
    paragraphLength = paragraphLengthFromStorage
    Array.from(paragraphLengthInputs).forEach(input => {
      if (input.value === paragraphLengthFromStorage) {
        input.checked = true
      } else {
        input.checked = false
      }
    })
  }
  updateLoremIpsum()
}

function updateLoremIpsum() {
  let updatedContent = ''
  for (let i=0; i < paragraphCount; i++) {
    updatedContent += makeParagraph(paragraphLength)
  }
  generatedLoremIpsumEl.innerText = updatedContent
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
  return `As ${currentQuote.author} said, "${currentQuote.quote}" `
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

function playLife() {
  const career = gameOfLifeCareers[Math.floor(Math.random() * gameOfLifeCareers.length)]
  const girlCount = Math.floor(Math.random() * 3)
  const boyCount = Math.floor(Math.random() * 3)
  const carColor = gameOfLifeCarColors[Math.floor(Math.random() * gameOfLifeCarColors.length)]
  let sentence = 'It\'s my turn in the Game of Life. Looks like I get to be a '
    + career + ' and make big money. '
  if (girlCount > 0 && boyCount > 0) {
    sentence += `I have ${girlCount + boyCount} children so far. There are ${girlCount} pink peg${girlCount === 1 ? '' : 's'} and ${boyCount} blue peg${boyCount === 1 ? '' : 's'} in my little ${carColor} car. `
  } else if (girlCount > 0) {
    sentence += `I have only daughters in my family -- ${girlCount} little pink peg${girlCount === 1 ? '' : 's'} in my little plastic ${carColor} car. `
  } else if (boyCount > 0) {
    sentence += `I have only sons in my family so far -- ${boyCount} little blue peg${boyCount === 1 ? '' : 's'} in my ${carColor} car. `
  }
  return sentence
}

function makeParagraph(length='long') {
  const introSentence = introSentences[Math.floor(Math.random() * introSentences.length)]
  const gameName1 = gameNames[Math.floor(Math.random() * gameNames.length)]
  const gameName2 = gameNames[Math.floor(Math.random() * gameNames.length)]

  const gameType = gameTypes[Math.floor(Math.random() * gameTypes.length)]

  let paragraph = (

      introSentence
      + makeSentence()
      + capitalizeFirstLetter(gameType) + ' games are my favorite. '
      + 'Let\'s play ' + gameName1 + ' or ' + gameName2 + '. '
      + makeSaying()
      + playLife()
    )

  if (length === 'long') {
    const gameName3 = gameNames[Math.floor(Math.random() * gameNames.length)]
    const gameName4 = gameNames[Math.floor(Math.random() * gameNames.length)]
    const gameName5 = gameNames[Math.floor(Math.random() * gameNames.length)]
    const gameName6 = gameNames[Math.floor(Math.random() * gameNames.length)]
    const gameName7 = gameNames[Math.floor(Math.random() * gameNames.length)]
    paragraph += (
      makeSentence()
      + 'Do you like ' + gameName3 +  ' or ' + gameName4 + '? '
      + 'I want to play ' + gameName5 + '. '
      + winPit()
      + 'Or let\'s play ' + gameName6 + '! ' + makeSentence() + makeSentence()
      + makeSaying()
      + 'Or maybe let\'s play ' + gameName7 + ' instead! '
      + makeQuote()
      + doAmongUsTasks()
      + makeCandylandSentence()
      + makeAccusation()
    )
  }
  return paragraph + '\n\n'
}
