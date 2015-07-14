app.controller('MainCtrl', function ($scope, FlashCardFactory, $rootScope, $stateParams) {
    // make a query
    $scope.$on('newcard', function(event, data) {
      $scope.flashCards.push(data.card);
    })

    FlashCardFactory.getFlashCards()
    .then(function (cards) {
      $scope.flashCards = cards;
      console.log(cards);
    })
    .catch(function (e) {
      console.log('e', e);
    })

    $scope.categories = [
        'MongoDB',
        'Express',
        'Angular',
        'Node'
    ];

    $scope.activeCat = null;

  })