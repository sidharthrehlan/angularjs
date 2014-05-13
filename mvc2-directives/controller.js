angular.module('sampleDirective', []).directive('emphasize', function() {
	return {
		restrict: 'E,A',
		template: '<span style="color: red;font-size: 40px;">This is the emphasize directive!</span>'
	};
});