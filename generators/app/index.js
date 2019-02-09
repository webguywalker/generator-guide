var Generator = require('yeoman-generator');

/**
* Yeoman Generator
* - The Run Context: http://yeoman.io/authoring/running-context.html
*/
module.exports = class extends Generator {

    /**
    * Pre-Custom Methods
    */
    initializing () {
        this.log('initializing ...');
        this.composeWith(require.resolve('../mass_project_update'));
    }

    prompting () {
        this.log('prompting ...');
    }

    configuring () {
        this.log('configuring ...');
    }

    /**
    * Custom Methods
    * custom methods are called in order of their declaration
    */
    method_one() {
        this.log('method 1 just ran');
    }

    method_two() {
        this.log('method 2 just ran');
    }

    /**
    * Post-Custom Methods
    */
    default () {
        this.log('default ...');
    }

    writing () {
      this.log('writing ...');
    }

    conflicts () {
        this.log('conflicts ...');
    }

    install () {
        this.log('install ...');
    }

    end () {
        this.log('end ...');
    }

    /**
    * Private Methods
    * private methods begin with an underscore
    */
    _method_private() {
        this.log('This is private');
    }
};
