define(['jsface', 'ko', 'text!./sysHeader.html', 'css!./sysHeader.css'], function(Class, ko, template) {
    const viewModel = Class({
        constructor: function(params) {
            this.textStr = ko.observable('KNOCKOUT HEADER');
            // 从store获取的数据是observable数据
            this.currentPath = ko.cusStore.getData(ko.customDicts.CURRENT_PATH);
        }
    }) 
    return {
        viewModel,
        template,
    };
});