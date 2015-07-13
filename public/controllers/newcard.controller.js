app.controller('NewCardController', function ($scope, $http, $rootScope){
	$scope.newCard = {
	    question: null,
	    category: null,
	    answers: [
	        { text: null, correct: false },
	        { text: null, correct: false },
	        { text: null, correct: false }
	    ]
	}

	$scope.submit = function(){
		$http.post('/cards', $scope.newCard).success(function(card) {
			$rootScope.$broadcast('newcard', {card: card})
			$scope.newCard = {
			    question: null,
			    category: null,
			    answers: [
			        { text: null, correct: false },
			        { text: null, correct: false },
			        { text: null, correct: false }
			    ]
			};
			
		});
	}
})