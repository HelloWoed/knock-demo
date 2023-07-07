define(['jsface', 'ko', 'text!./index.html', 'css!./index.css'], function(Class, ko, template) {
    const viewModel = Class({
        constructor: function(params) {
            this.textStr = ko.observable('首页')
        }
    }) 
    return {
        viewModel,
        template,
    };
});