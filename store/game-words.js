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
  'Minecraft Steve and Alex',
  'Peabody and Atlas',
  'Sonic the Hedgehog and Shadow the Hedgehog',
  'Miles "Tails" Prower and Knuckles the Echidna',
  'Amy Rose and Cream the Rabbit',
  'Silver the Hedgehog and Big the Cat',
  'my coworkers',
  'her coworkers',
  'his coworkers',
  'your coworkers',
  'their coworkers',
  'your bosses',
  'my bosses',
  'their bosses',
  'her bosses',
  'his bosses',
  'my in-laws',
  'your in-laws',
  'their in-laws',
  'her in-laws',
  'his in-laws',
  'my cousins',
  'your cousins',
  'his cousins',
  'her cousins',
  'their cousins',
  'my aunts',
  'your aunts',
  'her aunts',
  'his aunts',
  'their aunts',
  'my uncles',
  'your uncles',
  'his uncles',
  'her uncles',
  'their uncles',
  'my grandparents',
  'your grandparents',
  'her grandparents',
  'his grandparents',
  'their grandparents',
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
  'the Game of Life',
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
  'Egyptian Rat Screw',
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
  'Bananagrams',
  'Fortnite',
  'Valorant',
  'Skyrim',
  'CS:GO',
  'Factorio',
  'Zelda',
  'Duck Life',
  'Learn to Fly',
  'Wii Fit',
  'Volpin Adventure',
  'Monster Arena',
  'Reader Rabbit',
  'Nintendo Land',
  'Mario Party',
  'Boom Blox',
  'Angry Birds',
  'Tap Tap Revenge',
  'Geometry Dash',
  'pool',
  'Half Life',
  'Slitherlink',
  'Beat Saber',
  'Lego Star Wars',
  'Lego Indiana Jones',
  'Lego Dimensions',
  'Portal',
  'Portal 2',
  'ping pong',
  'foosball',
  'air hockey',
  'skee ball',
  'Street Fighter',
  'Metroid',
  'GTA V',
  'Burnout Paradise',
  'Where in the World is Carmen Sandiago?',
  'Mario is Missing!',
  'Careers',
  'the Game of Life, Hello Kitty Edition',
  'the Game of Life in Monstropolis (Monsters, Inc. version)',
  'the Game of Life Card Game',
  'the Game of Life, Star Wars: A Jedi\'s Path, edition',
  'the Game of Life, Pirates of the Caribbean edition',
  'the Game of Life, the Simpsons edition',
  'the Game of Life, Pokemon Edition',
  'the Game of LIFE: Jurassic Park Edition',
  'the Game of Life - Haunted Mansion Theme Park Edition',
  'the Game of Life High School Edition',
  'the Game of LIFE: Despicable Me',
  'Super Mario Edition: The Game of Life',
  'the Game of Life, The Wizard of Oz Edition',
  'Tacocat Spelled Backwards',
  'Throw Throw Avocado',
  'Bears Vs. Babies',
  'On a Scale of One to T-Rex',
  'You\'ve Got Crabs',
  'A Little Wordy',
  'Happy Salmon',
  'A Game of Cat & Mouth',
  'Poetry for Neanderthals',
  'Mantis',
  'Dixit',
  'Coup',
  'Wavelength',
  'Seven Wonders',
  'Reverse Charades',
  'Wackee Six',
  'Solitaire Frenzy',
  'Speed',
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
  'There\'s a puzzle piece on the floor.',
  'I won!',
  'We won!',
  'You lost!',
  'We lost!',
  'Winners focus on winning. Losers focus on winners.',
  'Nobody likes a sore loser.',
  'The bitterness of losing makes winning so much sweeter.',
  'Yes, I really do need all these board games.',
  'Yes, I really do need all these video games.',
  'You can\'t buy happiness, but you can buy a board game, and that\'s pretty close.',
  'You can\'t buy happiness, but you can buy a video game, and that\'s pretty close.',
  'Life is more fun if you play games.',
  'If I can\'t bring my board games, I\'m not going.',
  'It\'s not possible to have too many board games.',
  'It\'s not possible to have too many video games.',
  'How you play shows some of your character; how you win or lose shows all of it.',
  'Hey, you\'re finally awake.',
  'I\'m cracked at Fortnite.',
  'Skill issue.',
  'Space!',
  'Yahtzee!',
  'Peel!',
  'Checkmate.',
  'Give me your money.',
  'Five more minutes.',
  'You can\'t just pause a game.',
  'Just one more game.',
  'Not now... I\'m saving the world.',
  'Warning: I may randomly start talking about board games.',
  'Warning: I may randomly start talking about video games.',
  'Couples that play board games together, stay together.',
  'Couples that play video games together, stay together.',
  'Born to yell BINGO!',
  'I speak board game.',
  'Board games and chill?',
  'I am either playing board games or thinking about it.',
  'I am either playing video games or thinking about it.',
  'Is it still your turn?',
  'I\'m sorry for what I said when I was playing board games.',
  'Game on!',
  'No whammies! No whammies!'
]

const quotes = [
  {
    quote: 'Winners never quit and quitters never win.',
    author: 'Vince Lombardi',
  },
  {
    quote: 'A winner is just a loser who tried one more time.',
    author: 'George M. Moore, Jr.,',
  },
  {
    quote: 'Without losers, where would the winners be?',
    author: 'Casey Stengel',
  },
  {
    quote: 'Losers are people who are afraid of losing.',
    author: 'Robert Kiyosaki',
  },
  {
    quote: 'There are winners, there are losers, and there are people who have not yet learned how to win.',
    author: 'Les Brown',
  },
  {
    quote: 'It\'s not life or death, it\'s a game, and at the end of the game, there is going to be a winner and a loser.',
    author: 'Bernhard Langer',
  },
  {
    quote: 'You learn how to be a gracious winner and an outstanding loser.',
    author: 'Joe Namath',
  },
  {
    quote: 'The cheerful loser is the winner.',
    author: 'Elbert Hubbard',
  },
  {
    quote: 'Sooner or later, those who win are those who think they can.',
    author: 'Paul Tournier',
  },
  {
    quote: 'I have to introduce the part of me that feels like a winner to the part of me convinced I\'m a loser, and see if they can\'t agree to exist somewhere closer to the middle.',
    author: 'Lauren Graham',
  },
  {
    quote: 'It\'s the things we play with and the people who help us play that make a great difference in our lives.',
    author: 'Fred Rogers',
  },
  {
    quote: 'Play is our brain\'s favorite way to learn.',
    author: 'Diane Ackerman',
  },
  {
    quote: 'Play to win, but enjoy the fun.',
    author: 'David Ogilvy',
  },
  { quote: `To make an embarrassing admission, I like video games. That's what got me into software engineering when I was a kid. I wanted to make money so I could buy a better computer to play better video games - nothing like saving the world.`,
    author: 'Elon Musk',
  },
  {
    quote: 'Some people say video games rot your brain, but I think they work different muscles that maybe you don\'t normally use.',
    author: 'Ezra Koenig',
  },
  {
    quote: 'Video games are meant to be just one thing: Fun! Fun for everyone.',
    author: 'Satoru Iwata',
  },
  {
    quote: `Every age has its storytelling form, and video gaming is a huge part of our culture. You can ignore or embrace video games and imbue them with the best artistic quality. People are enthralled with video games in the same way as other people love the cinema or theatre.`,
    author: 'Andy Serkis',
  },
  {
    quote: 'Video games foster the mindset that allows creativity to grow.',
    author: 'Nolan Bushnell',
  },
  {
    quote: 'Video games are the quintessential social texts of our present cultural moment.',
    author: 'Steven E. Jones',
  },
  {
    quote: `Video games provide an easy lead-in to computer literacy.They can get you thinking like a video game designer and can even lead to designing since many games come with software to modify the game or redesign it.`,
    author: 'James Paul Gee',
  },
  {
    quote: `I don't know why a computer game can't be an art form just as a puppet show or an opera is.`,
    author: 'Fred Saberhagen',
  },
  {
    quote: 'The obvious objective of video games is to entertain people by surprising them with new experiences.',
    author: 'Shigeru Miyamoto'
  },
  {
    quote: `Ideas are cheap. A dime a dozen, as they say. It's the implementation that's important! The trick isn't just to have a computer game idea, but to actually create it!`,
    author: 'Scott Adams',
  },
  {
    quote: 'I am ready to face any challenges that might be foolish enough to face me.',
    author: 'Dwight Schrute',
  },

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


const candyLandCharacters = [
  'King Kandy, the Imperial Head Bonbon and Grand Jujube of Candyland,',
  'Lord Licorice',
  'Mama Gingertree',
  'Mr. Mint, the Peppermint Lumberjack and Keeper of the Royal Peppermint Forest,',
  'the Duke of Swirl',
  'Queen Frostine',
  'Duchess E. Claire',
  'Giggly Gumdrop',
  'Gramma Gooey',
  'Gramma Nutt',
  'Princess Lolly of the Lollipop Woods',
  'Plumpy, the Last of the PlumpaTrolls and Caretaker of the Gingerbread Plum Trees,',
  'Bazz',
  'Jolly, the Official Gumdrop Mountain Greeter,',
  'Spidora',
  'Buzzy',
  'Crockett',
  'Gloppy, the kindly Molasses Monster,',
  'Gingerbread Boy Jib',
  'Fluffypuffer',
]

const candyLandLocations = [
  'Molasses Swamp',
  'Chocolate Swamp',
  'Peppermint Forest',
  'Cupcake Commons',
  'Ice Cream Slopes',
  'Rainbow Trail',
  'Peppermint Pass',
  'Gumdrop Mountains',
  'Gummy Hills',
  'Gingerbread Plum Tree',
  'Gingerbread House',
  'Crooked Old Peanut Brittle House',
  'Licorice Lagoon',
  'Lollypop Woods',
  'Ice Palace',
  'Candy Castle',
  'Candy Cane Forest',
  'Peppermint Stick Forest',
  'Ice Cream Floats',
  'Licorice Castle',
  'Cherry Pitfall',
  'Cotton Candy Corner',
  'Lemon Lime Springs',
  'Home Sweet Home'
]

const marioCharacters = [
  'Mario',
  'Rosalina',
  'Princess Peach',
  'Princess Daisy',
  'Professor E. Gadd',
  'Luigi',
  'Bowser',
  'Baby Bowser',
  'Baby Daisy',
  'Baby Donkey Kong',
  'Donkey Kong',
  'Baby Mario',
  'Baby Luigi',
  'Diddy Kong',
  'Toad',
  'Yoshi',
  'Boo',
  'Waluigi',
  'Koopa Troopa',
  'King Boo',
  'Wario',
  'Luma',
  'Toadette',
  'Birdo',
  'Captain Toad',
  'Pauline',
  'Poochy',
  'Nabbit',
  'Toadsworth',
  'King Koopa',
  'Dry Bowser',
  'Bowser Jr.',
  'Wart',
  'Cackletta',
  'Fawful',
  'Petey Piranha',
  'Tatanga',
  'Kammy Koopa',
  'Bullet Bill'
]

const zeldaCharacters = [
  'Link',
  'Malon from Lon Lon Ranch',
  'Skull Kid',
  'Happy Mask Salesman',
  'The Great Deku Tree',
  'Navi',
  'Dark Link',
  'Impa',
  'Majora',
  'Epona the horse',
  'Ganon',
  'Midna',
  'Princess Zelda',
]

const amongUsTasks = [
  'fix wiring',
  'swipe a card',
  'enter the id code',
  'insert keys',
  'scan the boarding pass',
  'submit a scan',
  'upload data',
  'clean the vent',
  'empty the garbage',
  'polish the ruby',
  'pick up towels',
  'put away pistols',
  'put away rifles',
  'reboot the wifi',
  'record the temperature',
  'align the telescope',
  'clean the O2 filter',
  'develop photos',
  'divert power',
  'dress the mannequin',
  'stabilize steering',
  'sort records',
  'rewind tapes',
  'replace a water jug',
  'water the plants',
  'fix a weather node',
  'fix the shower',
  'fill cannisters',
  'inspect a sample',
  'unlock the safe',
  'clean a toilet',
  'clear asteroids',
  'chart a course',
  'make a burger',
]

const gameCharacters = [
  ...clueCharacters,
  ...candyLandCharacters,
  ...marioCharacters,
  ...zeldaCharacters,
]

const gameTypes = [
  'board',
  'party',
  'group',
  'online',
  'multiplayer',
  'single player',
  'outside',
  'card',
  'strategy',
  'childhood',
  'easy-to-learn',
  'complex',
  'video',
  'computer',
  'loud',
  'quiet',
  'easy',
  'dice',
  'humorous',
  'long',
  'short',
  'mobile',
  'educational',
  'trivia',
  'quick',
  'long, involved',
  'word',
  'traditional',
  'nontraditional',
  'DS',
  'Game Boy',
  'Playstation',
  'Nintendo',
  'XBox',
  'drawing',
  'Jackbox',
]

const gameOfLifeCareers = [
  'superstar',
  'travel agent',
  'athlete',
  'salesperson',
  'doctor',
  'artist',
  'police officer',
  'accountant',
  'teacher',
  'actor',
  'chef',
  'dancer',
  'singer',
  'fashion designer',
  'lawyer',
  'scientist',
  'veterinarian',
  'computer designer',
]

const gameOfLifeCarColors = [
  'red',
  'blue',
  'white',
  'yellow',
  'orange',
  'green',
]

const introSentences = [
  'Do you like playing games? ',
  'What type of games do you like best? ',
  'What is your favorite game? ',
  'Don\'t you love playing games? ',
  'Is there anything better in life than playing games? ',
  'Eat. Sleep. Play games. Restart. ',
  'Why do I love playing games? ',
  'Why do you love playing games? ',
  'Why do we love playing games? ',
  'Why do I like playing games? ',
  'Why do you like playing games? ',
  'Why do we like playing games? ',
  'When do you like to play games? ',
  'Is there anything you\'d rather do, than play games? ',
  'Why does time fly when you\'re playing games? ',
  'Let me know when you want to play a game. ',
  'I love playing games with you. ',
  'I love playing games with my family. ',
  'I love playing games with your family. ',
  'I love playing games with my friends. ',
  'I love playing games with your friends. ',
  'I like playing games with you. ',
  'I like playing games with my family. ',
  'I like playing games with your family. ',
  'I like playing games with my friends. ',
  'I like playing games with your friends. ',
  'I don\'t dislike playing games with you. ',
  'I don\'t dislike playing games with my family. ',
  'I don\'t dislike playing games with your family. ',
  'I don\'t dislike playing games with my friends. ',
  'I don\'t dislike playing games with your friends. ',
  'Maybe we could play a game today? ',
  'Maybe we could play a game tomorrow? ',
  'Maybe we could play a game this weekend. ',
  'I want a new game for my birthday. ',
  'I want a new game for Christmas. ',
  'I want a new game for Hanukkah. ',
  'Do you want a new game for your birthday? ',
  'Do you want a new game for Christmas? ',
  'Do you want a new game for Hanukkah? ',
  'How many games do you own? ',
]

const trivia = [
  {
    question: `What's the biggest island in the world?`,
    answer: 'Greenland',
  },
  {
    question: `What color is a giraffe's tongue?`,
    answer: 'Blue-black',
  },
  {
    question: `What country has the most vending machines per capita?`,
    answer: 'Japan',
  },
  {
    question: `What was the 1st toy to be advertised on television?`,
    answer: 'Mr. Potato Head',
  },
  {
    question: `Which country owns every panda in the world?`,
    answer: 'China',
  },
  {
    question: `Coprastastaphobia is the fear of what?`,
    answer: 'Constipation',
  },
  {
    question: `What is the most common toilet paper color in France?`,
    answer: 'Pink',
  },
  {
    question: `What's the total number of dots on a pair of dice?`,
    answer: '42',
  },
  {
    question: `Which bird has the largest wingspan?`,
    answer: 'Albatross',
  },
  {
    question: `What color are aircraft black boxes?`,
    answer: 'Bright orange',
  },
  {
    question: `Which chess piece can only move diagonally?`,
    answer: 'Bishop',
  },
  {
    question: `What land animal species has the largest eyes?`,
    answer: 'Ostrich',
  },
  {
    question: `A snail can sleep for how many years?`,
    answer: '3',
  },
  {
    question: `Which animal has the highest blood pressure?`,
    answer: 'Giraffe',
  },
  {
    question: `How many noses do slugs have?`,
    answer: '4',
  },
  {
    question: `What flavor of Pop Tart does Buddy the Elf use in his spaghetti?`,
    answer: 'Chocolate',
  },
  {
    question: `What character do you play as in The Legend of Zelda?`,
    answer: 'Link',
  },
  {
    question: `What 2 letters are both symbols for 1000?`,
    answer: 'K and M',
  },
  {
    question: `In Minnesota, it's illegal to tease what animal?`,
    answer: 'Skunk',
  },
  {
    question: `What animal can't stick out its tongue?`,
    answer: 'Crocodile',
  },
]

const gameShows = [
  'Jeopardy!',
  'Wheel of Fortune',
  'Family Feud',
  'The Price is Right',
  'Who Wants to Be a Millionaire',
  'Double Dare',
  'Press Your Luck',
  'Let\'s Make a Deal',
  'The Dating Game',
  'Hollywood Squares',
  'Love Connection',
  'Name That Tune',
  'The Newlywed Game',
  'Supermarket Sweep',
  'Remote Control',
  'What\'s My Line?',
  'Pyramid',
  'The Joker\'s Wild',
  'Deal or No Deal',
  'Are You Smarter Than a Fifth Grader?',
  'Weakest Link',
  'The Chase',
  'Brain Games',
  'Master Minds',
  'Cherries Wild',
  'The Million Second Quiz',
  'Cash Cab',
]
