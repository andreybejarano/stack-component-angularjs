import { TemplateForComponent } from './template-for-component.component';
import { AppTemplates } from './template-for-component.template';

export const AmTemplateForComponentModule = angular
    .module('templateForComponent', [AppTemplates])
    .value('EventEmitter', (payload) => ({ $event: payload }))
    .component('templateForComponent', TemplateForComponent)
    .name;