var app = angular.module('FlashCardApp', ['ui.router']);

app.config(function($stateProvider){
	$stateProvider
		.state('oneCardState',{
			url: "/:id",
			controller: "singleCard",
			template:"<flash-card card='card'></flash-card>"
		})
		.state('showForm',{
			url: '/form',
			controller: 'NewCardController',
			templateUrl:'new_card_form.html'	
		})
		.state('showAll',{
			url:'/show_all',
			controller: 'MainCtrl',
			template:'<flash-card ng-repeat="flashCard in flashCards" card="flashCard"></flash-card>'
		})
		.state('showCat',{
			url:'/show_all/:cat',
			controller: 'catController',
			template:'<flash-card ng-repeat="flashCard in cats" card="flashCard"></flash-card>'
		})
})


app.controller('singleCard', function($scope,$stateParams,FlashCardFactory){
	FlashCardFactory.getFlashCards().then(function(data){
		console.log('FIRST DATUM',data[0])
		console.log('params',$stateParams)
		for (var i = 0; i < data.length; i++) {
			if(data[i]._id===$stateParams.id){
				$scope.card = data[i];
				console.log(data[i]);
			}
		};
	})
})

app.controller('catController',function($scope,$stateParams,FlashCardFactory){
      FlashCardFactory.getFlashCards($stateParams.cat)
      .then(function (cards) {
        $scope.cats= cards;
      });
})



        