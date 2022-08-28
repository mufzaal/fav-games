const gameWords = [
  'wheel',

  'board',
  'video',

  'nintendo',
  'x-box',
  'game boy',
  'game',

  'fun',
  'social',
  'words',
  'tiles',
  'spymaster',
  'spies',

  'rivals',
  'competition',
  'tournament',
  'team',
  'teammates',
  'teammate',
  'compete',
  'rounds',
  'matches',
  'draw',
  'guess',
  'mystery',
  'points',
  'winner',
  'winners',
  'loser',
  'losers',
  'tie',
  'end game',
  'crown',
  'multiplayer',
  'online',
  'party',
  'trivia',
  'knowledge',
  'quiz',
  'friends',

  'hilarious',
  'brainy',
  'zoom',
  'rules',
  'cards',
  'deck of cards',
  'dice',
  'spinner',
  'game board',
  'score',
  'instructions',

  'gamble',

  'invite',
  'judge',
  'timer',
  'jigsaw puzzle',
  'puzzle',
  'play',

  'controls',

  'questions',
  'answers',
  'hearts',
  'spades',
  'diamonds',
  'clubs',

  'turns',

  'colonel mustard',
  'miss scarlet',
  'professor plum',
  'mr boddy',
  'mrs peacock',
  'mr green',
  'mrs white',

  'alliances',
  'conquer',

  'king',
  'queen',
  'pawn',
  'knight',
  'bishop',

  'cleric',
  'fighter',
  'magic user',
  'thief',
  'cheat',
  'cheater',
  'dwarf',
  'elf',
  'halfling',

  'family time',
  'card table',
  'bell',

  'mario',
  'luigi',
  'princess peach',
]

const pronouns = [
  'you',
  'I',
  'they',
  'we',
  'most people',
  'some people',
  'a lot of people',
  'few people',
  'my friends',
  'your friends',
  'her friends',
  'his friends',
  'their friends',
  'my parents',
  'your parents',
  'her parents',
  'his parents',
  'their parents',
  'my brothers',
  'my sisters',
  'your brothers',
  'your sisters',
  'her sisters',
  'his sisters',
  'their sisters',
  'their brothers',
  'my roommates',
  'your roommates',
  'his roommates',
  'her roommates',
  'their roommates',
  'my enemies',
  'my frenemies',
  'your enemies',
  'your frenemies',
  'her frenemies',
  'his frenemies',
  'their frenemies',
  'Mario and Luigi',
  'Larry, Moe, and Curly',
  'Tom and Jerry',
  'Phineas and Ferb',
  'Scooby Doo and Shaggy',
  'Batman and Robin',
  'Sponge Bob and Patrick',
  'Laurel and Hardy',
  'Han Solo and Chewbacca',
  'Luke and Leia',
  'Bert and Ernie',
  'Bugs Bunny and Daffy Duck',
  'Romeo and Juliet',
  'Bonnie and Clyde',
  'Katniss and Peta',
  'Hermione and Harry',
  'Donny and Marie',
  'Ben and Jerry',
  'Mulder and Scully',
  'Anna and Elsa'
]

const transitiveVerbs = [
  'often play',
  'sometimes play',
  'played',
  'used to play',
  'like playing',
  'don\'t like playing',
  'like',
  'don\'t like',
  'want to play',
  'don\'t want to play',
  'wish we could play',
  'love',
  'used to love',
  'hate',
  'dislike',
  'used to hate',
  'want to like',
]

const gameNames = [
  'Wheel of Fortune',
  'Jeopardy',
  'tic-tac-toe',
  'nine square',
  'Pictionary',
  'Code Names',
  'hide-n-seek',
  'capture the flag',
  'mafia',
  'the telephone game',
  'Monopoly',
  'Yahtzee',
  'Game of Life',
  'Risk',
  'Chutes and Ladders',
  'Candyland',
  'Taboo',
  'Tetris',
  'Farm Town',
  'Family Feud',
  'Uno',
  'Crazy Eights',
  'Wordle',
  'Clue',
  'Scrabble',
  'Battleship',
  'Settlers of Catan',
  'chess',
  'checkers',
  'Backgammon',
  'Chinese checkers',
  'Connect Four',
  'Twister',
  'Operation',
  'Hungry Hungry Hippos',
  'Boggle',
  'Mouse Trap',
  'Jenga',
  'Dominoes',
  'Trouble',
  'Ticket to Ride',
  'Sorry',
  'Apples to Apples',
  'Scattergories',
  'Mad Libs',
  'Trivial Pursuit',
  'Pandemic',
  'Guess Who',
  'Farkle',
  'Hi Ho Cherry-o',
  'Splendor',
  'Exploding Kittens',
  'Throw Throw Burrito',
  'Werewolf',
  'kick the can',
  'Rack-o',
  'Oregon Trail',
  'Dungeons and Dragons',
  'Name that Tune',
  'Frogger',
  'Pac-Man',
  'Klondike',
  'Go Fish',
  'Duck Hunt',
  'Super Mario Galaxy',
  'Rummy',
  'Old Maid',
  'poker',
  'War',
  'cribbage',
  'euchre',
  'Egyptian Ratscrew',
  'Golf',
  'Scum',
  'Spoons',
  'bridge',
  'Pinochle',
  'Rook',
  'whist',
  'Nertz',
  'solitaire',
  'minesweeper',
  'Texas Hold\'em',
  'Canasta',
  'black jack',
  'Wii Sports',
  'bingo',
  'Pokemon Go',
  'Animal Crossing',
  'Just Dance',
  'Dance Dance Revolution',
  'marbles',
  'hopscotch',
  'jacks',
  'pick up sticks',
  'Othello',
  'Pit',
  'mancala',
  'telestrations',
  'pinball',
  'Donkey Kong',
  'Mario Kart',
  'Pass the Pigs',
  'musical chairs',
  'spin the bottle',
  'red rover',
  'blind man\'s bluff',
  'Simon says',
  'tag',
  'the floor is lava',
  'rock paper scissors',
  'Mother, May I',
  'TV tag',
  'Marco Polo',
  'Heads Up, Seven Up',
  'Button, Button, Who\'s Got the Button',
  'Cat\'s Cradle',
  'Crack the Whip',
  'Duck Duck Goose',
  'leap frog',
  'thumb wrestling',
  'tug-of-war',
  'Bananagrams'
]


const randomPhrases = [
  'Thank you Mario! But our princess is in another castle!',
  'You have died of dysentery.',
  'Do not pass go, do not collect $200.',
  'Do you have wood for sheep?',
  'Whose turn is it?',
  'It\'s your turn.',
  'It\'s her turn.',
  'It\'s my turn.',
  'Take your turn!',
  'It\'s their turn.',
  'Would you like to play a game?',
  'It\'s a-me, Mario!',
  'Thank you so much for playing my game!',
  'Somebody set up us the bomb.',
  'All your base are belong to us.',
  'You have no chance to survive make your time.',
  'The cake is a lie.',
  'Queen me!',
  'Emergency meeting!',
  'There is 1 Imposter among us.',
  'Who is the Imposter?',
  'Bingo!',
  'There\'s a puzzle piece on the floor.'
]

const clueCharacters = [
  'Miss Scarlett',
  'Mr. Green',
  'Colonel Mustard',
  'Professor Plum',
  'Mrs. Peacock',
  'Mrs. White',
]

const clueWeapons = [
  'candlestick',
  'dagger',
  'lead pipe',
  'revolver',
  'rope',
  'wrench',
]

const clueRooms = [
  'kitchen',
  'ballroom',
  'conservatory',
  'billard room',
  'library',
  'study',
  'hall',
  'lounge',
  'dining room'
]

const pitCommodities = [
  'wheat',
  'barley',
  'corn',
  'rye',
  'oats',
  'hay',
  'flax',
  'coffee',
  'sugar',
  'soybeans',
  'oranges',
]

const verbsForTalking = [
  'said',
  'yelled',
  'whispered',
  'insisted',
  'like to say',
  'enjoy saying',
  'screamed',
  'uttered',
  'declared',
  'added',
  'mumbled',
  'whimpered',
  'cried',
  'hissed',
  'like to scream'
]
