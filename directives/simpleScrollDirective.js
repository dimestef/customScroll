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
app.directive('paginationOnScroll', [ function() {
    return {
        restrict: 'A',
        scope: {
            loadMore: "&"
        },
        link: function(scope, elem, attr) {
            elem.bind("scroll", function() {
                var scrolledpx = elem.prop('clientHeight') + elem.prop('scrollTop');

                if (scrolledpx === elem.prop('scrollHeight')) {
                    scope.loadMore();
                }
            });
        }
    }
} ]);
