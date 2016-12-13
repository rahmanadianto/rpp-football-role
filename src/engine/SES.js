import expert from 'expert';
import underscore from 'underscore';

const domain   = expert.Domain(),
    	Concept  = domain.Concept,
    	Relation = domain.Relation,
    	concept = {},
    	relation = {},

 var positions = require(./'positions.js');

 positions.questions.forEach(function(order){
  order.values.forEach(function(value){
    concepts[order.ability] = concepts[order.ability] || {};
    concepts[order.ability][value] = Concept.create({id: order.ability + '-' + value})
  })

  relations[order.ability] = Relation.create({id: '~' + order.ability, inverseFor: Relation.create({id: order.ability})})
});

 positions.data.forEach(function(position){
  concepts['positions'] = concepts['positions'] || {};
  concepts['positions'][position.position] = Concept.create({id: position.position});

  concepts['positions'][position.position]
	.dribbling(concepts['dribbling'][position.dribbling])
	.finishing(concepts['finishing'][position.finishing])
	.crossing(concepts['crossing'][position.crossing])
	.heading(concepts['heading'][position.heading])
	.marking(concepts['marking'][position.marking])
	.passing(concepts['passing'][position.passing])
	.tackling(concepts['tackling'][position.tackling])
	.agility(concepts['agility'][position.agility])
	.balance(concepts['balance'][position.balance])
	.speed(concepts['speed'][position.speed])
	.stamina(concepts['stamina'][position.stamina])
	.strength(concepts['strength'][position.strength])
	.vision(concepts['vision'][position.vision])
	.anticipation(concepts['anticipation'][position.anticipation])
	.goalkeeping(concepts['goalkeeping'][position.goalkeeping])
});

var currentPositionQuestionIndex = 0,
    currentPositionAnswer = [],
    showPositionQuestion = function(currentPositionQuestionIndex){
      while (positions.questions[currentPositionQuestionIndex].skip) currentPositionQuestionIndex++;

      lib.askPositionQuestion(positions.questions[currentPositionQuestionIndex].question, {
        name: positions.questions[currentPositionQuestionIndex].ability,
        values: positions.questions[currentPositionQuestionIndex].values
      }, function(answer){
        var ability = positions.questions[currentPositionQuestionIndex].ability;

        currentPositionAnswer.push({
          ability: ability,
          answer: answer
        })

        var results = _.intersection.apply(this, currentPositionAnswer.map(function(currentAnswer){
          return relations[currentAnswer.ability](concepts[currentAnswer.ability][currentAnswer.answer])
        }))

        if (currentPositionQuestionIndex == positions.questions.length - 1) {
          if (results.length > 0) {
            lib.showPositionAnswer("Posisi terbaik adalah", _.map(results, function(c){ return c.id; })[0])
          } else {
            lib.showPositionError("Error", "Berlatih lagi")
          }
        } else {
          if (results.length > 0) {
            showPositionQuestion(++currentPositionQuestionIndex)
          } else {
            lib.showPositionError("Error", "Berlatih lagi")
          }
        }
      })
    },
	
	showPositionQuestion(currentPositionQuestionIndex);

	module.export.showPositionAnswer = function(description, answer) {
		var position = answer;
	}