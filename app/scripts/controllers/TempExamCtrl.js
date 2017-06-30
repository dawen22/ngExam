'use strict';

/**
 * @ngdoc function
 * @name ngmaterialApp.controller:NonvoiceCtrl
 * @description
 * # NonvoiceCtrl
 * Controller of the ngmaterialApp
 */
angular.module('ngmaterialApp')
.controller('TempExamCtrl', function($scope) {
  $scope.examType = "Mixed Verbal Aptitude"
  $scope.Instructions = [{"ins":"This test consists of 14 mixed verbal aptitude question, you have 10 minutes to complete the test"},
      {"ins":"When you are ready to start, click 'Begin' to start the test"}
      ];
  $scope.questions = [
    {"questionText": 'Another word for "excluding something or someone" could be:', "answers": [
      {"answerText":"Succession", "correct": false},
      {"answerText":"Submission", "correct": false},
      {"answerText":"Omission", "correct": true},
      {"answerText":"Ominous", "correct": false}
      ]},
    {"questionText": "Just because you're feeling sad doesn't mean should avoid sad songs. in fact, listening to sad songs can make you feel like someone out there knows exactly how you feel, and that can help you feel less alone when you're depresses. The passage best supports the statement that:", "answers": [
      {"answerText":"Sad songs can help cure depression", "correct": false},
      {"answerText":"Sad songs can have a therapeutic effect", "correct": false},
      {"answerText":"Sad songs are proven to have a positive effect on depression", "correct": true},
      {"answerText":"Sad songs can help prevent mental ailments", "correct": false}
      ]},
  {"questionText": 'Find the Antonym or Synoym of the word below: "Belittle"', "answers": [
      {"answerText":"Enlarge", "correct": false},
      {"answerText":"Exaggerate", "correct": true},
      {"answerText":"Turned down", "correct": false},
      {"answerText":"Dishonor", "correct": false}
      ]},
    {"questionText": "Apathetic means:", "answers": [
      {"answerText":"Showing no emotions", "correct": true},
      {"answerText":"Being in a state of shock", "correct": false},
      {"answerText":"Being depressed", "correct": false},
      {"answerText":"Feeling superior to others", "correct": false}
      ]},
    {"questionText": "An operation to remove a patient's entire stomach is called a total gastrectomy. during the procedure, the surgeon connects the esophagus - the tube that runs between the thoat and the stomach - to the small intestine. This means the person will still have a working digestive system afterwards. But a patient who has had a gastrectomy may need to alter their diet, such as by eating frequent small meals rather than three large meals a day. From this passage it can be concluded that:", "answers": [
      {"answerText":"A gastrectomy is done to help a person lose weight.", "correct": false},
      {"answerText":"The stomach isn't a part of the digestive system.", "correct": false},
      {"answerText":"A person with no stomach can no longer eat normal food", "correct": false},
      {"answerText":"A person can live an almost normal life without a stomach", "correct": true}
      ]},
    {"questionText": "Peter, Stuart, Michael, John and Colin all have their own single tents to go to camp. Michael and Peter have sewn-in groundsheets as well as plastic sheets for the ground. The others only have plastic sheets for the ground. Peter and John have nylon tents. The others have canvas tents Peter and Colin have zippers with their tents, while the others have drawings. How mamy have plastic sheets in tents that are not made of canvas nad have no zippers?", "answers": [
      {"answerText":"2", "correct": false},
      {"answerText":"3", "correct": false},
      {"answerText":"1", "correct": true},
      {"answerText":"none", "correct": false}
      ]},
    {"questionText": "For math class the teacher asks her students to get the following items: A pair of compasses, a ruler, a protractor and a calculator. Paul already has a calculator and so does Judy and Mark are the only ones with protractors. Alice has noth a ruler and a pair of compasses, and so does mark Judy is only missing a ruler. And John has an item that mark is missing. Which of the following must be true?", "answers": [
      {"answerText":"John has ruler", "correct": false},
      {"answerText":"Alice is only missing a protractor", "correct": false},
      {"answerText":"Mark is only missing a calculator", "correct": true},
      {"answerText":"Paul has a pair of compasses", "correct": false}
      ]},
    {"questionText": "Find the missing letter: M,N,O - T, ?,V", "answers": [
      {"answerText":"R", "correct": false},
      {"answerText":"U", "correct": true},
      {"answerText":"Z", "correct": false},
      {"answerText":"O", "correct": false}
      ]},
    {"questionText": "Baby is to adult As seed is to:", "answers": [
      {"answerText":"Plant", "correct": true},
      {"answerText":"Bird", "correct": false},
      {"answerText":"Nature", "correct": false},
      {"answerText":"Woods", "correct": false}
      ]},
    {"questionText": "There are five children in the MAxwell family. Peter's sister Jill is younger than Brian, who is older than Adriana. Adriana has one older brother and younger sister but her youngest brother Eddy is not the 'baby' of the family. Who is the youngest child? ", "answers": [
      {"answerText":"Brian", "correct": false},
      {"answerText":"Peter", "correct": false},
      {"answerText":"Jill", "correct": true},
      {"answerText":"Eddy", "correct": false}
      ]},
    {"questionText": "I need your _______________ reponse.", "answers": [
      {"answerText":"immediede", "correct": false},
      {"answerText":"imediate", "correct": false},
      {"answerText":"immediate", "correct": true},
      {"answerText":"immediete", "correct": false}
      ]},
    {"questionText": "Will you please pass me _____________ paper?", "answers": [
      {"answerText":"little", "correct": false},
      {"answerText":"few", "correct": false},
      {"answerText":"these", "correct": false},
      {"answerText":"some", "correct": true}
      ]},
    {"questionText": "Minute is to time as mile is to:", "answers": [
      {"answerText":"Distanace", "correct": true},
      {"answerText":"Travel", "correct": false},
      {"answerText":"Short", "correct": false},
      {"answerText":"Far", "correct": false}
      ]},
    {"questionText": "The following paragraph is made of sentences which are jumbled. Can you unscramble this parangah and sort the sentenses in their proper order?",
    "questionSub": [
      {"questionText1": "A: And if you're in nad English-speacking country,"},
      {"questionText1": "B: Chance are they will have an Indian accent."},
      {"questionText1": "C: Your phone rings - someone's trying so sell you finacila services."},
      {"questionText1": "D: The person your're speaking to is likely to be sitting in a massive room with hundreds of other people."}
    ],
      "answers": [
      {"answerText":"C,B,A,D", "correct": false},
      {"answerText":"C,D,A,B", "correct": true},
      {"answerText":"D,C,A,B", "correct": false},
      {"answerText":"C,A,B,D", "correct": false}
      ]}
	];

  $scope.next = function() {
    var qLength = $scope.questions.length;
    for(var i=0;i<qLength;i++){
      var data= questions[i];

     console.log(data.questionText);
  }
  };

  $scope.startexam = function(){
    $scope.begin = true;
    $scope.score = true;
  }
  $scope.endexam = function(){
    $scope.begin = true;
    $scope.score = false;
    $scope.result = true;
  }
  $scope.answers ={};
  $scope.correctCount = 0;
  $scope.showResult = function(){
    $scope.correctCount = 0;
    var qLength = $scope.questions.length;
    for(var i=0;i<qLength;i++){
      var answers = $scope.questions[i].answers;
      $scope.questions[i].userAnswerCorrect = false;
      $scope.questions[i].userAnswer = $scope.answers[i];
      for(var j=0;j<answers.length;j++){
        answers[j].selected = "none";
        if ($scope.questions[i].userAnswer === answers[j].answerText && answers[j].correct===true){
          $scope.questions[i].userAnswerCorrect = true;
          answers[j].selected = "true";
          $scope.correctCount++;
        }else if($scope.questions[i].userAnswer === answers[j].answerText && answers[j].correct===false){
          answers[j].selected = "false";
        }
      }
    }
  };

  // ===========================================================================================================================================




});
