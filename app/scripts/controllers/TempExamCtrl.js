'use strict';

/**
 * @ngdoc function
 * @name ngmaterialApp.controller:TempExamCtrl
 * @description
 * # TempExamCtrl
 * Controller of the ngmaterialApp
 */
angular.module('ngmaterialApp')
.controller('TempExamCtrl', function($scope) {

  $scope.clerical = [
    {"exam": "Alphabetical and Numerical Filing",
     "ins": "You are first to sort names and company names according to alphabetic filing, later you are to sort numerical sequences according to numerical filing.",
     "questions": [
       {"questionText": "Name: Johnson, John",
        "questionSub": [
         {"questionText1": "A) ->"},
         {"questionText1": " Johnson, Manny"},
         {"questionText1": "B) ->"},
         {"questionText1": " Johnson, Mark"},
         {"questionText1": "C) ->"},
         {"questionText1": " Johnson, Nole"},
         {"questionText1": "D) ->"}
         ],
        "answers": [
         {"answerText":"A", "correct": true},
         {"answerText":"B", "correct": false},
         {"answerText":"C", "correct": false},
         {"answerText":"D", "correct": false}
         ]},
       {"questionText": "Name: Lowen, Peter",
        "questionSub": [
         {"questionText1": "A) ->"},
         {"questionText1": " Lowen, Pat"},
         {"questionText1": "B) ->"},
         {"questionText1": " Lowen, Paul"},
         {"questionText1": "C) ->"},
         {"questionText1": " Lowen, Poppe"},
         {"questionText1": "D) ->"}
         ],
        "answers": [
         {"answerText":"A", "correct": false},
         {"answerText":"B", "correct": false},
         {"answerText":"C", "correct": true},
         {"answerText":"D", "correct": false}
         ]},
       {"questionText": "Huggi, Lilly",
        "questionSub": [
         {"questionText1": "A) ->"},
         {"questionText1": "Hough, Eva"},
         {"questionText1": "B) ->"},
         {"questionText1": "Howard, Flora"},
         {"questionText1": "C) ->"},
         {"questionText1": "Hvadd, Berta"},
         {"questionText1": "D) ->"}
         ],
        "answers": [
         {"answerText":"A", "correct": false},
         {"answerText":"B", "correct": false},
         {"answerText":"C", "correct": true},
         {"answerText":"D", "correct": false}
         ]},
        {"questionText": "Flasnk, Lilly",
         "questionSub": [
           {"questionText1": "A) ->"},
           {"questionText1": "Hull, Eva"},
           {"questionText1": "B) ->"},
           {"questionText1": "Muni, Flora"},
           {"questionText1": "C) ->"},
           {"questionText1": "Swan, Berta"},
           {"questionText1": "D) ->"}
           ],
          "answers": [
           {"answerText":"A", "correct": true},
           {"answerText":"B", "correct": false},
           {"answerText":"C", "correct": false},
           {"answerText":"D", "correct": false}
           ]},
          {"questionText": "Oli, Lars",
           "questionSub": [
             {"questionText1": "A) ->"},
             {"questionText1": "Olim, Laab"},
             {"questionText1": "B) ->"},
             {"questionText1": "Ollo, Loom"},
             {"questionText1": "C) ->"},
             {"questionText1": "Olz, Lalb"},
             {"questionText1": "D) ->"}
             ],
            "answers": [
             {"answerText":"A", "correct": true},
             {"answerText":"B", "correct": false},
             {"answerText":"C", "correct": false},
             {"answerText":"D", "correct": false}
             ]},
          {"questionText": "P'lane, Bob",
           "questionSub": [
             {"questionText1": "A) ->"},
             {"questionText1": "Plaan, Eva"},
             {"questionText1": "B) ->"},
             {"questionText1": "Plain, Lisa"},
             {"questionText1": "C) ->"},
             {"questionText1": "Plown, Poul"},
             {"questionText1": "D) ->"}
             ],
            "answers": [
             {"answerText":"A", "correct": true},
             {"answerText":"B", "correct": false},
             {"answerText":"C", "correct": false},
             {"answerText":"D", "correct": false}
          ]},
          {"questionText": "If the names Peter Greys, Sven Elroy, [Lisette Happy] and John Camelot were arranged for alpahabetical filing, the position of the name in [brackets] would be ____________.",
            "answers": [
             {"answerText":"Second", "correct": true},
             {"answerText":"First", "correct": false},
             {"answerText":"Third", "correct": false},
             {"answerText":"Fouth", "correct": false}
          ]},
          {"questionText": "If the names Happy Travels, Awesome Furniture, [Lowrider Cars] and Flash Shipping were arranged filing, the position of the name in [brackets] would be ____________.",
           "answers": [
             {"answerText":"Second", "correct": false},
             {"answerText":"First", "correct": false},
             {"answerText":"Third", "correct": false},
             {"answerText":"Fouth", "correct": true}
          ]},
          {"questionText": "If the names Fling, [101 Communications], ABAB and Uniflow were arranged for alphabetical filing, the position of the name in [brackets] would be _______________.",
           "answers": [
             {"answerText":"First", "correct": true},
             {"answerText":"Second", "correct": false},
             {"answerText":"Third", "correct": false},
             {"answerText":"Fouth", "correct": false}
          ]},

       {"questionText": "If the company names [Jordina], Loom, Glowtastic and Pouty were arranged for alphabetical filing. the position of the name in [brackets] would be ________________.",
        "answers": [
          {"answerText":"Second", "correct": true},
          {"answerText":"First", "correct": false},
          {"answerText":"Third", "correct": false},
          {"answerText":"Fouth", "correct": false}
         ]}
    ]},
    {"exam": "Attention to Detail",
     "ins": "You are presented with three names, numbers, or addresses. You have to determine whether one of these are different from the other two, or if there is no difference between the three.",
     "questions": [
       {"questionText": "Which is different from the other two?",
        "answers": [
         {"answerText":"Multzi Zoloene Frankiri", "correct": true},
         {"answerText":"Multizi Zoloene Frankiri", "correct": false},
         {"answerText":"Multzi Zoloene Frankiri", "correct": false},
         {"answerText":"No difference", "correct": false}
         ]},
       {"questionText": "Which is different from the other two?",
        "answers": [
         {"answerText":"INDUTRILANA GRANDE MANILI", "correct": true},
         {"answerText":"INDUSTRILANA GRANDE MANILI", "correct": false},
         {"answerText":"No difference", "correct": false},
         {"answerText":"INDUSTRILANA GRANDE MANILI", "correct": false}
         ]},
       {"questionText": "Which is different from the other two?",
        "answers": [
         {"answerText":"Norra Larsmovagen 53", "correct": true},
         {"answerText":"Norra Larsmovagan 53", "correct": false},
         {"answerText":"No difference", "correct": false},
         {"answerText":"Nora Larmovagen 53", "correct": false}
         ]},
       {"questionText": "Which is different from the other two?",
        "answers": [
         {"answerText":"Max Liisberg Pollulanaski", "correct": true},
         {"answerText":"Max Liisberg Pollulanaski", "correct": false},
         {"answerText":"Max Liisberg Pollulanski", "correct": false},
         {"answerText":"No difference", "correct": false}
       ]},
       {"questionText": "Which is different from the other two?",
        "answers": [
         {"answerText":"GI. Sygehusvej 103 Narsaq", "correct": true},
         {"answerText":"GI. Sygehusvej 103, Narsaq", "correct": false},
         {"answerText":"GI. Sygehusvej 103, Narsaq", "correct": false},
         {"answerText":"No difference", "correct": false}
         ]},
       {"questionText": "Which is different from the other two?",
        "answers": [
         {"answerText":"Rua Luz, 1630 Belo Horizonte-MG", "correct": true},
         {"answerText":"Rua Luz, 1620 Belo Horizonte-MG", "correct": false},
         {"answerText":"Rua Luz, 1630 Belo Horizonte-MG", "correct": false},
         {"answerText":"No difference", "correct": false}
         ]},
       {"questionText": "Which is different from the other two?",
        "answers": [
         {"answerText":"Danholdings dento-trax", "correct": true},
         {"answerText":"Danholdins dento-trax", "correct": false},
         {"answerText":"Danholdings dento-trax", "correct": false},
         {"answerText":"No difference", "correct": false}
         ]},
       {"questionText": "Which is different from the other two?",
        "answers": [
         {"answerText":"No difference", "correct": true},
         {"answerText":"878968 897857", "correct": false},
         {"answerText":"878968 897857", "correct": false},
         {"answerText":"878968 897857", "correct": false}
       ]},
       {"questionText": "Which is different from the other two?",
        "answers": [
         {"answerText":"No difference", "correct": true},
         {"answerText":"Lars Lamonen Larsson", "correct": false},
         {"answerText":"Lars Lamonen Larsson", "correct": false},
         {"answerText":"Lars Lamonen Larsson", "correct": false}
         ]},
       {"questionText": "Which is different from the other two?",
        "answers": [
         {"answerText":"Kerkkolankatu 22 RAISIO", "correct": true},
         {"answerText":"Kerkkolankatu 22 RAISIO", "correct": false},
         {"answerText":"No difference", "correct": false},
         {"answerText":"Kerkkolankatu 22 RAISIO", "correct": false}
         ]},
       {"questionText": "Which is different from the other two?",
        "answers": [
         {"answerText":"90, place Maurice-Charretier", "correct": true},
         {"answerText":"90, place Maurice-Charretier", "correct": false},
         {"answerText":"No difference", "correct": false},
         {"answerText":"90, place Maurice-Charretier", "correct": false}
         ]},
       {"questionText": "Which is different from the other two?",
        "answers": [
         {"answerText":"000029378398763", "correct": true},
         {"answerText":"No difference", "correct": false},
         {"answerText":"0000029378398763", "correct": false},
         {"answerText":"000029378398763", "correct": false}
       ]},
       {"questionText": "Which is different from the other two?",
        "answers": [
         {"answerText":"98984832 32452", "correct": true},
         {"answerText":"98984832 32452", "correct": false},
         {"answerText":"98984032 32452", "correct": false},
         {"answerText":"No difference", "correct": false}
         ]},
       {"questionText": "Which is different from the other two?",
        "answers": [
         {"answerText":"Olympus Florlumini Platinina", "correct": true},
         {"answerText":"Olympus Florlumini Platinina", "correct": false},
         {"answerText":"Olympus Florlumini Platinina", "correct": false},
         {"answerText":"No difference", "correct": false}
         ]},
       {"questionText": "Which is different from the other two?",
        "answers": [
         {"answerText":"ALDEIA DOS CHAOS", "correct": true},
         {"answerText":"ALDEIA DOS CHAOS", "correct": false},
         {"answerText":"ALDEIA DUS CHAOS", "correct": false},
         {"answerText":"No difference", "correct": false}
         ]},
       ]},
    {"exam": "Workload/Concentration",
     "ins": "You are to answer what may seem like short and simple questions.",
     "questions": [
       {"questionText": "Bree is shorter than Daniel, who is the shortest?",
        "answers": [
         {"answerText":"Bree", "correct": true},
         {"answerText":"Daniel", "correct": false}
         ]},
       {"questionText": "Luna is nicer than Flora, who is the nicest?",
        "answers": [
         {"answerText":"Luna", "correct": true},
         {"answerText":"Flora", "correct": false}
         ]},
       {"questionText": "Mike is less than Frank, who is less ?",
        "answers": [
         {"answerText":"Mike", "correct": true},
         {"answerText":"Frank", "correct": false}
         ]},
       {"questionText": "Benjamin is lighter than Peter, who is the heaviest ?",
        "answers": [
         {"answerText":"Benjamin", "correct": true},
         {"answerText":"Peter", "correct": false}
       ]},
       {"questionText": "Lilly is more than Jane, who is less ?",
        "answers": [
         {"answerText":"Jane", "correct": true},
         {"answerText":"Lilly", "correct": false}
         ]},
       {"questionText": "Brian is faster than Tim, who is the fastest ?",
        "answers": [
         {"answerText":"Brian", "correct": true},
         {"answerText":"Tim", "correct": false}
         ]},
       {"questionText": "Mark is larger than Jack, who is the largest ?",
        "answers": [
         {"answerText":"Mark", "correct": true},
         {"answerText":"Jack", "correct": false}
         ]},
       {"questionText": "Juliana is shorter than Bettina, who is the tallest ?",
        "answers": [
         {"answerText":"Juliana", "correct": true},
         {"answerText":"Bettina", "correct": false}
       ]},
       {"questionText": "Maya is worse than June, who is the best ?",
        "answers": [
         {"answerText":"Maya", "correct": true},
         {"answerText":"June", "correct": false}
         ]},
       {"questionText": "Lisa is faster than Bree, who is the slowest ?",
        "answers": [
         {"answerText":"Lisa", "correct": true},
         {"answerText":"Bree", "correct": false}
         ]},
       {"questionText": "11.Daffy is poorer than Frank, who is the richest ?",
        "answers": [
         {"answerText":"Daffy", "correct": true},
         {"answerText":"Frank", "correct": false}
         ]},
       {"questionText": "12.Jane is happier than Fanny, who is the saddest ?",
        "answers": [
         {"answerText":"Fanny", "correct": true},
         {"answerText":"Jane", "correct": false}
       ]},
       {"questionText": "13.Daniel is smaller than Michael, who is the largest ?",
        "answers": [
         {"answerText":"Michael	", "correct": true},
         {"answerText":"Daniel", "correct": false}
         ]},
       {"questionText": "14.Jacob is better than Jim, who is the best ?",
        "answers": [
         {"answerText":"Jacob", "correct": true},
         {"answerText":"Jim", "correct": false}
         ]},
       {"questionText": "15.Tim is taller than Jim, who is the shortest ?",
        "answers": [
         {"answerText":"Jim", "correct": true},
         {"answerText":"Tim", "correct": false}
        ]}
    ]},
    {"exam": "Data Checking",
     "ins": "You are presented with two addresses or invoices. You have to determine whether the two displayed addresses or invoices are exactly the same or different",
     "questions": [
       {"questionText": "(test4)Why is the sky blue?",
        "answers": [
         {"answerText":"blah blah 1", "correct": true},
         {"answerText":"blah blah 2", "correct": false},
         {"answerText":"blah blah 3", "correct": false}
         ]},
       {"questionText": "Why is the meaning of life?",
        "answers": [
         {"answerText":"blah blah 1", "correct": true},
         {"answerText":"blah blah 2", "correct": false},
         {"answerText":"blah blah 3", "correct": false}
         ]},
       {"questionText": "How many pennies are in $10.00?",
        "answers": [
         {"answerText":"1,000.", "correct": true},
         {"answerText":"10,000.", "correct": false},
         {"answerText":"A lot", "correct": false}
         ]},
       {"questionText": "What is the default program?",
        "answers": [
         {"answerText":"Hello World.", "correct": true},
         {"answerText":"Hello Sunshine.", "correct": false},
         {"answerText":"Hello my ragtime gal.", "correct": false}
         ]}
    ]}
  ];
  $scope.testID = 0;
  $scope.exam = $scope.clerical[0].exam;
  $scope.ins = $scope.clerical[0].ins;
  $scope.questions = $scope.clerical[0].questions;
  $scope.allAnf = $scope.clerical[0].questions.length;
  $scope.allAd = $scope.clerical[1].questions.length;
  $scope.allWc = $scope.clerical[2].questions.length;
  $scope.allDc = $scope.clerical[3].questions.length;

  $scope.gotoTest = function() {
      $scope.testID++;
      $scope.getTest();
      $scope.instruction = false;
      $scope.nextTest = false;
  };

  $scope.getTest = function() {
    var y = $scope.testID;
    if (y < $scope.clerical.length) {
      $scope.exam = $scope.clerical[y].exam;
      $scope.ins = $scope.clerical[y].ins;
      $scope.questions = $scope.clerical[y].questions;
    }else {
      $scope.all = true;
      $scope.result =  true;
    }
  };

  $scope.question = false;
  $scope.nextTest = false;
  $scope.result =  false;

  $scope.anf = 0;
  $scope.ad = 0;
  $scope.wc = 0;
  $scope.dc = 0;

  $scope.begin = function() {
      $scope.id = 0;
      $scope.getQuestion();
      $scope.instruction = true;
      };

  $scope.next = function() {
      $scope.getCorrect();
      $scope.id++;
		  $scope.getQuestion();
      };

  $scope.getQuestion = function() {
			var i = $scope.id;
      $scope.question = $scope.questions[i];
      if (i >= $scope.questions.length) {
				$scope.nextTest = true;
        }
      };

  $scope.answers = {};
  $scope.getCorrect = function() {
    var i = $scope.id;
    $scope.main = $scope.questions[i];
      var array = $scope.main.answers;
      $scope.main.userAnswer = $scope.answers.undefined;
      for(var j=0;j<array.length;j++) {
        if ($scope.main.userAnswer === array[j].answerText && array[j].correct === true) {
          var y = $scope.testID;
          if (y == 0) {
            $scope.anf++;
          }else if (y == 1) {
            $scope.ad++;
          }else if (y == 2) {
            $scope.wc++;
          }else if (y == 3) {
            $scope.dc++;
          }
        }
      }
   };
});



  // $scope.Clerical =
  //       {"examType": "Mixed Verbal Aptitude",
  //       "instructions": [
  //         {"ins":"This test consists of 14 mixed verbal aptitude question, you have 10 minutes to complete the test"},
  //         {"ins":"When you are ready to start, click 'Begin' to start the test"}],
  //       "questions":  [
  //       {"questionText": "Another word for 'excluding something or someone' could be:",
  //        "answers": [
  //         {"answerText":"Succession", "correct": false},
  //         {"answerText":"Submission", "correct": false},
  //         {"answerText":"Omission", "correct": true},
  //         {"answerText":"Ominous", "correct": false}
  //         ]},
  //       {"questionText": "Just because you're feeling sad doesn't mean should avoid sad songs. in fact, listening to sad songs can make you feel like someone out there knows exactly how you feel, and that can help you feel less alone when you're depresses. The passage best supports the statement that:", "answers": [
  //         {"answerText":"Sad songs can help cure depression", "correct": false},
  //         {"answerText":"Sad songs can have a therapeutic effect", "correct": true},
  //         {"answerText":"Sad songs are proven to have a positive effect on depression", "correct": false},
  //         {"answerText":"Sad songs can help prevent mental ailments", "correct": false}
  //         ]},
  //       {"questionText": "Find the Antonym or Synoym of the word below: 'Belittle'", "answers": [
  //         {"answerText":"Enlarge", "correct": false},
  //         {"answerText":"Exaggerate", "correct": true},
  //         {"answerText":"Turned down", "correct": false},
  //         {"answerText":"Dishonor", "correct": false}
  //         ]},
  //       {"questionText": "Apathetic means:", "answers": [
  //         {"answerText":"Showing no emotions", "correct": true},
  //         {"answerText":"Being in a state of shock", "correct": false},
  //         {"answerText":"Being depressed", "correct": false},
  //         {"answerText":"Feeling superior to others", "correct": false}
  //         ]},
  //       {"questionText": "An operation to remove a patient's entire stomach is called a total gastrectomy. during the procedure, the surgeon connects the esophagus - the tube that runs between the thoat and the stomach - to the small intestine. This means the person will still have a working digestive system afterwards. But a patient who has had a gastrectomy may need to alter their diet, such as by eating frequent small meals rather than three large meals a day. From this passage it can be concluded that:", "answers": [
  //         {"answerText":"A gastrectomy is done to help a person lose weight.", "correct": false},
  //         {"answerText":"The stomach isn't a part of the digestive system.", "correct": false},
  //         {"answerText":"A person with no stomach can no longer eat normal food", "correct": false},
  //         {"answerText":"A person can live an almost normal life without a stomach", "correct": true}
  //         ]},
  //       {"questionText": "Peter, Stuart, Michael, John and Colin all have their own single tents to go to camp. Michael and Peter have sewn-in groundsheets as well as plastic sheets for the ground. The others only have plastic sheets for the ground. Peter and John have nylon tents. The others have canvas tents Peter and Colin have zippers with their tents, while the others have drawings. How mamy have plastic sheets in tents that are not made of canvas nad have no zippers?", "answers": [
  //         {"answerText":"2", "correct": false},
  //         {"answerText":"3", "correct": false},
  //         {"answerText":"1", "correct": true},
  //         {"answerText":"none", "correct": false}
  //         ]},
  //       {"questionText": "For math class the teacher asks her students to get the following items: A pair of compasses, a ruler, a protractor and a calculator. Paul already has a calculator and so does Judy and Mark are the only ones with protractors. Alice has noth a ruler and a pair of compasses, and so does mark Judy is only missing a ruler. And John has an item that mark is missing. Which of the following must be true?", "answers": [
  //         {"answerText":"John has ruler", "correct": false},
  //         {"answerText":"Alice is only missing a protractor", "correct": false},
  //         {"answerText":"Mark is only missing a calculator", "correct": true},
  //         {"answerText":"Paul has a pair of compasses", "correct": false}
  //         ]},
  //       {"questionText": "Find the missing letter: M,N,O - T, ?,V", "answers": [
  //         {"answerText":"R", "correct": false},
  //         {"answerText":"U", "correct": true},
  //         {"answerText":"Z", "correct": false},
  //         {"answerText":"O", "correct": false}
  //         ]},
  //       {"questionText": "Baby is to adult As seed is to:", "answers": [
  //         {"answerText":"Plant", "correct": true},
  //         {"answerText":"Bird", "correct": false},
  //         {"answerText":"Nature", "correct": false},
  //         {"answerText":"Woods", "correct": false}
  //         ]},
  //       {"questionText": "There are five children in the MAxwell family. Peter's sister Jill is younger than Brian, who is older than Adriana. Adriana has one older brother and younger sister but her youngest brother Eddy is not the 'baby' of the family. Who is the youngest child? ", "answers": [
  //         {"answerText":"Brian", "correct": false},
  //         {"answerText":"Peter", "correct": false},
  //         {"answerText":"Jill", "correct": true},
  //         {"answerText":"Eddy", "correct": false}
  //         ]},
  //       {"questionText": "I need your _______________ reponse.", "answers": [
  //         {"answerText":"immediede", "correct": false},
  //         {"answerText":"imediate", "correct": false},
  //         {"answerText":"immediate", "correct": true},
  //         {"answerText":"immediete", "correct": false}
  //         ]},
  //       {"questionText": "Will you please pass me _____________ paper?", "answers": [
  //         {"answerText":"little", "correct": false},
  //         {"answerText":"few", "correct": false},
  //         {"answerText":"these", "correct": false},
  //         {"answerText":"some", "correct": true}
  //         ]},
  //       {"questionText": "Minute is to time as mile is to:", "answers": [
  //         {"answerText":"Distance", "correct": true},
  //         {"answerText":"Travel", "correct": false},
  //         {"answerText":"Short", "correct": false},
  //         {"answerText":"Far", "correct": false}
  //         ]},
  //       {"questionText": "The following paragraph is made of sentences which are jumbled. Can you unscramble this parangah and sort the sentenses in their proper order?",
  //       "questionSub": [
  //         {"questionText1": "A: And if you're in nad English-speacking country,"},
  //         {"questionText1": "B: Chance are they will have an Indian accent."},
  //         {"questionText1": "C: Your phone rings - someone's trying so sell you finacila services."},
  //         {"questionText1": "D: The person your're speaking to is likely to be sitting in a massive room with hundreds of other people."}
  //       ],
  //         "answers": [
  //         {"answerText":"C,B,A,D", "correct": false},
  //         {"answerText":"C,D,A,B", "correct": true},
  //         {"answerText":"D,C,A,B", "correct": false},
  //         {"answerText":"C,A,B,D", "correct": false}
  //         ]}
  //     ]};
