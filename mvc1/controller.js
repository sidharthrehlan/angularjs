function SimpleController($scope){
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
	

	$scope.addPerson = function (){
		$scope.people.push({
			name : $scope.person_name,
			city : $scope.person_city,
			state : $scope.person_state
		});

		$scope.person_name = '';
		$scope.person_city = '';
		$scope.person_state = '';
	} 

}
