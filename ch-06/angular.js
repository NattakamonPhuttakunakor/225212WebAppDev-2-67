var app = angular.module("app", []);

app.component("rootComponent", {
    template: '<p style="color:{{textColor}}">{{message}}</p><button ng-click="count=count+1">เพิ่มค่า</button><p>จำนวน: {{count}}</p>',
    controller: function($scope) {
        $scope.message = "ฉันเป็นแอพ Angular! มีหลายแอพเหมือนฉัน แต่แอพนี้เป็นของฉัน!!";
        $scope.count = 0;
        $scope.textColor = "red";
    }
});