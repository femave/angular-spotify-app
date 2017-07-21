angular.module('spotyApp')
.controller('token', function($scope, $rootScope){
	$scope.token = function(){
		var token = 'BQAvCM-KdL4MGvIGi73clk1TQqvA36c8GCI6UzOCBSeE14ify1jVYxSHSt-3XpGCpgLRAs4s1Y9i9OKKT4yB3kxswh4iArr5yjkSLDOlzPIuIZsMJMUDz_kYcxDUZrfxpQ9Cw1Q2IEQ'	
		$rootScope.$broadcast('token', { token: token })
	}
})
