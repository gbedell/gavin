import { Injectable } from '@angular/core';

import { Book } from '../../models/book.model';

@Injectable()
export class ReadingService {

  private readingIntro = `Here are some notable books that I've read over the years,
   with the most recent at the beginning.`;

  private books: Book[] = [
    {
      title: `Creative Selection: Inside Apple's Design Process
       During the Golden Age of Steve Jobs`,
      author: 'Ken Kocienda',
      recommend: false,
      amazonLink: `https://www.amazon.com/Creative-Selection-
      Inside-Apples-Process/dp/1250194466`,
      dateStarted: null,
      dateFinished: new Date(2018, 9, 7),
      imageUrl: 'creative_selection.jpg'
    },
    {
      title: 'Measure What Matters',
      author: 'John Doerr',
      recommend: true,
      amazonLink: 'http://a.co/d/cPIIclZ',
      dateStarted: null,
      dateFinished: new Date(2018, 8, 27),
      imageUrl: 'measure_what_matters.jpg'
    },
    {
      title: `When the Wolves Bite: Two Billionaires, One Company
       and an Epic Wall Street Battle`,
      author: 'Scott Wapner',
      recommend: false,
      amazonLink: 'http://a.co/d/7b6hQjV',
      dateStarted: null,
      dateFinished: new Date(2018, 8, 18),
      imageUrl: 'when_the_wolves_bite.jpg'
    },
    {
      title: `The Spider Network: The Wild Story of a Math Genius, a
       Gang of Backstabbing Bankers, and One of the Greatest Scams
       in Financial History`,
      author: 'David Enrich',
      recommend: false,
      amazonLink: 'http://a.co/d/epfWMIk',
      dateStarted: null,
      dateFinished: new Date(2018, 7, 21),
      imageUrl: 'spider_network.jpg'
    },
    {
      title: `Accelerate: Building and Scaling High-Performing
       Technology Organizations`,
      author: 'Nicole Forsgren, Jez Humble, Gene Kim',
      recommend: false,
      amazonLink: 'http://a.co/d/hUMmFYy',
      dateStarted: null,
      dateFinished: new Date(2018, 7, 12),
      imageUrl: 'accelerate.jpg'
    },
    {
      title: `The Innovator's Dilemma: The Revolutionary Book
       that Will Change the Way You Do Business`,
      author: 'Clayton M. Christensen',
      recommend: true,
      amazonLink: 'http://a.co/d/hKtJVem',
      dateStarted: new Date(2018, 6, 29),
      dateFinished: new Date(2018, 7, 8),
      imageUrl: 'innovators_dilemma.jpg'
    },
    {
      title: `Longitude: The True Story of a Lone Genius Who
       Solved the Greatest Scientific Problem Of His Time`,
      author: 'Dave Sobel',
      recommend: true,
      amazonLink: 'http://a.co/d/eAeXPaN',
      dateStarted: null,
      dateFinished: new Date(2018, 7, 8),
      imageUrl: 'longitude.jpg'
    },
    {
      title: 'Thinking, Fast and Slow',
      author: 'Daniel Kahneman',
      recommend: true,
      amazonLink: 'http://a.co/gbBADbn',
      dateStarted: new Date(2018, 5, 26),
      dateFinished: new Date(2018, 6, 4),
      imageUrl: 'thinking_fast_and_slow.jpg'
    },
    {
      title: 'Tiger Woods',
      author: 'Jeff Benedict, Armen Keteyian',
      recommend: true,
      amazonLink: 'http://a.co/d/bCrGxrx',
      dateStarted: new Date(2018, 5, 13),
      dateFinished: new Date(2018, 5, 27),
      imageUrl: 'tiger_woods.jpg'
    },
    {
      title: `Skin in the Game: The Hidden Asymmetries
       in Daily Life`,
      author: 'Nassim Nicholas Taleb',
      recommend: false,
      amazonLink: 'http://a.co/d/e5gzGce',
      dateStarted: new Date(2018, 5, 5),
      dateFinished: new Date(2018, 5, 29),
      imageUrl: 'skin_in_the_game.jpg'
    },
    {
      title: `Built to Last: Successful Habits of
       Visionary Companies`,
      author: 'Jim Collins, Jerry I. Porras',
      recommend: false,
      amazonLink: 'http://a.co/d/ip0BDa6',
      dateStarted: new Date(2018, 4, 14),
      dateFinished: new Date(2018, 4, 28),
      imageUrl: 'built_to_last.jpg'
    },
    {
      title: 'Thomas Jefferson and the Tripoli Pirates',
      author: 'Brian Kilmeade',
      recommend: false,
      amazonLink: 'http://a.co/d/crQmXD7',
      dateStarted: null,
      dateFinished: new Date(2018, 5, 21),
      imageUrl: 'tripoli_pirates.jpg'
    },
    {
      title: 'Bad Blood: Secrets and Lies in a Silicon Valley Startup',
      author: 'John Carreyrou',
      recommend: true,
      amazonLink: 'http://a.co/d/dMiP8wM',
      dateStarted: new Date(2018, 5, 8),
      dateFinished: new Date(2018, 5, 22),
      imageUrl: 'bad_blood.jpg'
    },
    {
      title: 'Principles',
      author: 'Ray Dalio',
      recommend: true,
      amazonLink: 'http://a.co/0HI7ahX',
      dateStarted: new Date(2018, 0, 1),
      dateFinished: new Date(2018, 0, 14),
      imageUrl: 'principles.jpg'
    },
    {
      title: `The Lean Startup: How Today's Entrepreneurs Use
       Continuous Innovation to Create Radically Successful
       Businesses`,
      author: 'Eric Ries',
      recommend: false,
      amazonLink: 'http://a.co/d/aePhTLO',
      dateStarted: new Date(2016, 7, 30),
      dateFinished: new Date(2016, 8, 21),
      imageUrl: 'lean_startup.jpg'
    },
    {
      title: `Tools of Titans: The Tactics,
       Routines, and Habits of Billionaires,
        Icons, and World-Class Performers`,
      author: 'Tim Ferris',
      recommend: false,
      amazonLink: 'http://a.co/d/cWRcL4u',
      dateStarted: null,
      dateFinished: new Date(2018, 10, 1),
      imageUrl: 'tools_of_titans.jpg'
    },
    {
      title: 'The Coddling of the American Mind',
      author: 'Greg Lukianoff, Jonathan Haidt',
      recommend: false,
      amazonLink: 'http://a.co/d/0w4UgvK',
      dateStarted: new Date(2018, 11, 15),
      dateFinished: new Date(2018, 11, 21),
      imageUrl: 'coddling_of_american_mind.jpg'
    },
    {
      title: 'How to Win Friends and Influence People',
      author: 'Dale Carnegie',
      recommend: false,
      amazonLink: 'http://a.co/d/1NqBF5Y',
      dateStarted: new Date(2018, 11, 9),
      dateFinished: new Date(2018, 11, 13),
      imageUrl: 'win_friends.jpg'
    },
    {
      title: 'Triumph of the City',
      author: 'Edward Glaeser',
      recommend: false,
      amazonLink: 'https://www.amazon.com/Triumph-City-Greatest-Invention-Healthier/dp/0143120549',
      dateStarted: new Date(2018, 10, 5),
      dateFinished: new Date(2018, 10, 17),
      imageUrl: 'triumph_of_city.jpg'
    },
    {
      title: 'I\'ll Be Done in the Dark',
      author: 'Michelle McNamara',
      recommend: false,
      amazonLink: 'https://www.amazon.com/Ill-Be-Gone-Dark-Obsessive/dp/0062319787',
      dateStarted: new Date(2018, 7, 25),
      dateFinished: new Date(2018, 8, 1),
      imageUrl: 'gone_in_the_dark.jpg'
    },
    {
      title: 'The Courage to Be Disliked',
      author: 'Ichiro Kishimi, Fumitake Koga',
      recommend: true,
      amazonLink: 'https://www.amazon.com/Courage-Be-Disliked-Phenomenon-Happiness/dp/1501197274',
      dateStarted: new Date(2018, 6, 29),
      dateFinished: new Date(2018, 7, 4),
      imageUrl: 'courage_to_be_disliked.jpg'
    },
    {
      title: 'The Outsiders',
      author: 'William N. Thorndike Jr.',
      recommend: true,
      amazonLink: 'https://www.amazon.com/Outsiders-Unconventional-Radically-Rational-Blueprint/dp/1422162672',
      dateStarted: new Date(2018, 5, 6),
      dateFinished: new Date(2018, 5, 21),
      imageUrl: 'outsiders.jpg'
    },
    {
      title: 'Antifragile: Things That Gain from Disorder',
      author: 'Nassim Nicholas Taleb',
      recommend: true,
      amazonLink: 'https://www.amazon.com/Antifragile-Things-That-Disorder-Incerto/dp/0812979680',
      dateStarted: new Date(2017, 11, 1),
      dateFinished: new Date(2018, 0, 1),
      imageUrl: 'antifragile.jpg'
    },
    {
      title: '12 Rules for Life: An Antidote to Chaos',
      author: 'Jordan B. Peterson',
      recommend: true,
      amazonLink: 'https://www.amazon.com/12-Rules-Life-Antidote-Chaos/dp/0345816021',
      dateStarted: new Date(2018, 1, 1),
      dateFinished: new Date(2018, 1, 14),
      imageUrl: '12_rules_for_life.jpg'
    },
    {
      title: 'A Clash of Kings',
      author: 'George R. R. Martin',
      recommend: true,
      amazonLink: 'https://www.amazon.com/Clash-Kings-Song-Fire-Book/dp/0553579908',
      dateStarted: new Date(2017, 9, 19),
      dateFinished: new Date(2017, 0, 14),
      imageUrl: 'clash_of_kings.jpg'
    },
    {
      title: 'A Game of Thrones',
      author: 'George R. R. Martin',
      recommend: true,
      amazonLink: 'https://www.amazon.com/Game-Thrones-Song-Ice-Fire/dp/0553103547',
      dateStarted: new Date(2017, 6, 1),
      dateFinished: new Date(2017, 7, 1),
      imageUrl: 'game_of_thrones.jpg'
    },
    {
      title: 'The Innovators',
      author: 'Walter Isaacson',
      recommend: true,
      amazonLink: 'https://www.amazon.com/Innovators-Hackers-Geniuses-Created-Revolution/dp/1476708703',
      dateStarted: null,
      dateFinished: null,
      imageUrl: 'innovators.jpg'
    },
    {
      title: 'The Hard Thing About Hard Things',
      author: 'Ben Horowitz',
      recommend: false,
      amazonLink: 'https://www.amazon.com/Hard-Thing-About-Things-Building/dp/0062273205',
      dateStarted: null,
      dateFinished: null,
      imageUrl: 'hard_thing_about_hard_things.jpg'
    },
    {
      title: 'Sapiens: A Brief History of Humankind',
      author: 'Yuval Noah Harari',
      recommend: false,
      amazonLink: 'https://www.amazon.com/Sapiens-Humankind-Yuval-Noah-Harari/dp/0062316117',
      dateStarted: null,
      dateFinished: null,
      imageUrl: 'sapiens.jpg'
    },
    {
      title: 'The Quartet',
      author: 'Joseph J. Ellis',
      recommend: false,
      amazonLink: 'https://www.amazon.com/Quartet-Orchestrating-American-Revolution-1783-1789/dp/080417248X',
      dateStarted: null,
      dateFinished: null,
      imageUrl: 'quartet.jpg'
    },
    {
      title: 'Founding Brothers: The Revolutionary Generation',
      author: 'Joseph J. Ellis',
      recommend: true,
      amazonLink: 'https://www.amazon.com/Founding-Brothers-Revolutionary-Joseph-Ellis/dp/0375705244',
      dateStarted: null,
      dateFinished: null,
      imageUrl: 'founding_brothers.jpg'
    },
    {
      title: 'Revolutionary Summer: The Birth of American Independence',
      author: 'Joseph J. Ellis',
      recommend: true,
      amazonLink: 'https://www.amazon.com/Revolutionary-Summer-Birth-American-Independence/dp/0307946371',
      dateStarted: null,
      dateFinished: null,
      imageUrl: 'revolutionary_summer.jpg'
    },
    {
      title: 'Undaunted Courage',
      author: 'Stephen E. Ambrose',
      recommend: true,
      amazonLink: 'https://www.amazon.com/Undaunted-Courage-Meriwether-Jefferson-American/dp/0684826976',
      dateStarted: null,
      dateFinished: null,
      imageUrl: 'undaunted_courage.jpg'
    },
    {
      title: 'The Boys in the Boat',
      author: 'Daniel James Brown',
      recommend: true,
      amazonLink: 'https://www.amazon.com/Boys-Boat-Americans-Berlin-Olympics/dp/0143125478',
      dateStarted: null,
      dateFinished: null,
      imageUrl: 'boys_in_the_boat.jpg'
    },
    {
      title: 'Zero to One',
      author: 'Peter Thiel',
      recommend: true,
      amazonLink: 'https://www.amazon.com/Zero-One-Notes-Startups-Future/dp/0804139296',
      dateStarted: null,
      dateFinished: null,
      imageUrl: 'zero_to_one.jpg'
    },
    {
      title: 'Outliers: The Story of Success',
      author: 'Malcolm Gladwell',
      recommend: false,
      amazonLink: 'https://www.amazon.com/Outliers-Story-Success-Malcolm-Gladwell/dp/0316017930',
      dateStarted: null,
      dateFinished: null,
      imageUrl: 'outliers_story_of_success.jpg'
    },
    {
      title: 'Angels & Demons',
      author: 'Dan Brown',
      recommend: false,
      amazonLink: 'https://www.amazon.com/Angels-Demons-Novel-Robert-Langdon/dp/074349346X',
      dateStarted: null,
      dateFinished: null,
      imageUrl: 'angels_and_demons.jpg'
    },
    {
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      recommend: false,
      amazonLink: 'https://www.amazon.com/Hobbit-J-R-Tolkien/dp/054792822X',
      dateStarted: null,
      dateFinished: null,
      imageUrl: 'hobbit.jpg'
    },
    {
      title: 'How to Win at the Sport of Business',
      author: 'Mark Cuban',
      recommend: false,
      amazonLink: 'https://www.amazon.com/How-Win-Sport-Business-Can/dp/1626810915',
      dateStarted: null,
      dateFinished: null,
      imageUrl: 'sport_of_business.jpg'
    },
    {
      title: 'Steve Jobs',
      author: 'Walter Isaacson',
      recommend: true,
      amazonLink: 'https://www.amazon.com/Steve-Jobs-Walter-Isaacson/dp/1451648537',
      dateStarted: null,
      dateFinished: null,
      imageUrl: 'steve_jobs.jpg'
    },
    {
      title: 'Lone Survivor',
      author: 'Marcus Luttrell',
      recommend: true,
      amazonLink: 'https://www.amazon.com/Lone-Survivor-Eyewitness-Account-Operation/dp/0316067601',
      dateStarted: null,
      dateFinished: null,
      imageUrl: 'lone_survivor.jpg'
    },
    {
      title: 'Moneyball: The Art of Winning an Unfair Game',
      author: 'Michael Lewis',
      recommend: false,
      amazonLink: 'https://www.amazon.com/Moneyball-Art-Winning-Unfair-Game/dp/0393324818',
      dateStarted: null,
      dateFinished: null,
      imageUrl: 'moneyball.jpg'
    }
  ];

  public getReadingIntro(): String {
    return this.readingIntro;
  }

  public getBooks(): Book[] {
    return this.books.sort((a: Book, b: Book) => {
      if (a.dateFinished === null) { return 1; }
      if (b.dateFinished === null) { return -1; }
      if (a.dateFinished.getTime() < b.dateFinished.getTime()) { return 1; }
      if (a.dateFinished.getTime() > b.dateFinished.getTime()) { return -1; }
      return 0;
    });
  }
}
