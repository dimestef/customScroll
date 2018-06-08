app.controller("simpleScrollController", ['$scope', function ($scope) {
    $scope.loadMoreNumbers = loadMoreNumbers;
    $scope.loadMoreNames = loadMoreNames;
    $scope.init = init;
    $scope.numbers = [];
    $scope.names = [];

    function loadMoreNumbers() {
        var numbersLen = $scope.numbers.length;
        for(var i = numbersLen; i < numbersLen + 10; i++) {
            var n = {
                number: i,
                type: "Number"
            };
            $scope.numbers.push(n);
        }
        $scope.$digest();
    }

    function loadMoreNames() {
        var namesLen = $scope.names.length;
        for (var i = namesLen ; i < namesLen + 10; i++) {
            this.names.push({
                name: "Name" + i,
                age: i
            })
        }
        $scope.$digest();
    }

    function init() {
        var i = 0;
        for (i = 0 ; i < 10; i++) {
            this.names.push({
                name: "Name" + i,
                age: i
            })
        }

        for(i = 0; i < 10; i++) {
            var n = {
                number: i,
                type: "Number"
            };
            $scope.numbers.push(n);
        }
        $scope.selectedObject = $scope.numbers[0];
    }

    $scope.init();
}]);

/**
 * @ngdoc directive
 * @name global.directive:paginationOnScroll
 * @restrict A
 *
 * @description
 *
 *{@link https://github.com/dimestef/customScroll}
 *
 * The "paginationOnScroll" should be used for infinite pagination while user is scrolling
 *
 * @param {object} loadMore - An object(function) that should be called when the user scroll to bottom and to retrieve more data
 *
 * @example 1
 <example>
 <div pagination-on-scroll load-more="exampleFunction()"><ul><li ng-click="onSelect(selectedObject)"></li></ul></div>
 </example>
 *
 * @example 2
 <example>
 <select ng-model="selectedObject" pagination-on-scroll load-more="exampleFunction()"></select>
 </example>
 **/
// app.directive('paginationOnScroll', [ function() {
//     return {
//         restrict: 'A',
//         scope: {
//             loadMore: "&"
//         },
//         link: function(scope, elem, attr) {
//             elem.bind("scroll", function() {
//                 var scrolledpx = elem.prop('clientHeight') + elem.prop('scrollTop');
//
//                 if (scrolledpx === elem.prop('scrollHeight')) {
//                     scope.loadMore();
//                 }
//             });
//         }
//     }
// } ]);

//On init always select the first one
//After scrolling to bottom It will return you to the selected item
//