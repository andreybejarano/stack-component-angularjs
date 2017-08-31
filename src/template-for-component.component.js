export const TemplateForComponent = {
	bindings: {
		
	},
	templateUrl: 'template-for-component.html',
	controller: class TemplateForComponentController {

		constructor(EventEmitter) {
			'ngInject';
			this.EventEmitter = EventEmitter;
		}

		$onInit() {
			
		}

		$onChanges(changes) {
		}
	}
};