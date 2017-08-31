
'use strict';

module.exports = function () {
    const pkg = require('./package.json');

    const root = './';
    const src = './src/';
    const dist = './dist/';
    const scssfolder = `${src}scss/`;
    const mainscss = `${scssfolder}main.scss`;
    const mainModule = `${src+pkg.name}.module.js`;


    return {
        projectName: pkg.name,
        version: pkg.version,
        src,
        root,
        dist,
        scssfolder,
        fonts: `${scssfolder }fonts/`,
        mainscss,
        mainModule,
        templateCache: {
			file: `${pkg.name}.template.js`,
			options: {
				standalone: true,
				module: `am${pkg.name.split('-').slice(1).map((s) => { return s.charAt(0).toUpperCase() + s.slice(1) }).join('')}` + '.template',
				templateHeader: 'export const AppTemplates = ' +
				' angular.module("<%= module %>"<%= standalone %>)' +
				'.run(["$templateCache", function($templateCache) {',
				templateFooter: '}]).name;'
			}
		},
        jsOrder: [
            '**/*.module.js',
            '**/*.js'
        ]
    };
};
