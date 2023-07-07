define(['jsface', 'ko', 'text!./pageBase.html', 'css!./pageBase.css'], function(Class, ko, template) {
    const viewModel = Class({
        constructor: function(params) {
            this.mainContentCmpt = ko.observable({name: 'pages-index'});
            ko.cusSubEvent(ko.customDicts.eventType.HASHER_CHANGE, (hash) => {
                this.routeTo(hash);
            })
            // 触发已发布的hash change事件
            ko.triggerCusEvent(ko.customDicts.eventType.HASHER_CHANGE);
        },
        routeTo: function(hash){
            this.mainContentCmpt({name: hash.split('/').join('-')});
        },
        activated: () => {
            debugger
        },
        dispose: () => {
            ko.disposeEvent(ko.customDicts.eventType.HASHER_CHANGE);
        }
    }) 
    return {
        viewModel,
        template,
    };
});