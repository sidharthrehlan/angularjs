	//module
	var demoApp = angular.module('demoApp',[]);
	
/*//controller
	demoApp.controller('SimpleController',function($scope){
		$scope.customers = [{
			name:'sidharth',
			city : 'delhi',
			state : 'delhi'
		},
		{
			name:'karan',
			city : 'hisar',
			state : 'har'
		}]
	});


*/
	

demoApp.controller('SimpleController',function ($scope){
	$scope.people = [
						{
							name:'sidharth',
							city:'Chandigarh',
							state : 'chandigarh'
						},
						{
							name:'raghu',
							city:'Rohtak',
							state : 'haryana'
						},
						{
							name:'karan',
							city:'Hisar',
							state : 'haryana'
						}
					  ];
		});