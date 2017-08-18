(function () {
    angular
        .module("CoinTrac")
        .controller("ProfileController", ProfileController);

        function ProfileController($routeParams, $rootScope, $route, UserService, HomeService, currentUser) {
            var model = this;
            model.currentUser = currentUser;
            console.log(currentUser);
            
            function init() {
                $rootScope.currentUser = model.currentUser;
                if (currentUser.twitterHandle) {
                    twttr.ready(function () {
                        twttr.widgets.createTimeline(
                            {
                                sourceType: 'profile',
                                screenName: currentUser.twitterHandle
                            },
                            document.getElementById('twitter-timeline'),
                            {});
                    });
                }

                // Get all available coin ids for the search functionality
                HomeService.getSearchSource()
                    .then(function (searchSource) {
                        $("#watchlist-search").autocomplete({
                            source: searchSource,
                            select: function(event, ui) {
                                console.log(event);
                                console.log(ui);
                                var id = ui.item.value;
                                console.log(id);
                                UserService
                                    .addCoinToWatchlist(currentUser._id, id)
                                    .then(function (data) {
                                        console.log(data);
                                        $route.reload();
                                    })
                                // $location.url('/details/' + id);
                                // $scope.$apply(); // block is not triggered by part of angular so requires apply to execute
                            }
                        });
                    });

            }
            init();
            
        }

})();