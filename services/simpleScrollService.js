app.service("scrollService", ["$http", function ($http) {
    this.getNNames = function (n) {
        this.names = [];
        for (var i = 0; i < n; i++) {
            this.names.push({
                name: "Name" + i,
                age: i
            })
        }
    };

    this.getNNumbers = function (n) {
        this.numbers = [];
        for (var i = 0; i < n; i++) {
            this.numbers.push({
                name: i,
                type: "Integer"
            })
        }
    }
}]);