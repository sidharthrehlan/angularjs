	//module
	var demoApp = angular.module('demoApp',[]);
	
	var controller = {};
	controller.SimpleController = function ($scope){
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
			}		  

demoApp.controller(controller);