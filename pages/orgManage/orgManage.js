define(['jsface', 'ko', 'text!./orgManage.html', 'css!./orgManage.css'], function(Class, ko, template) {
    const viewModel = Class({
        constructor: function(params) {
            this.textStr = ko.observable('组织管理页面')
            this.showObjDatas = ko.observable(true);
            this.objData = ko.observable({
                orgName: '组织1',
                orgCode: 'org_1'
            })
        },
        changeOrgName: function(){
            this.showObjDatas(false);
            const datas = this.objData();
            datas.orgName = `组织_${new Date().getTime()}`;
            this.showObjDatas(true);
        }
    }) 
    return {
        viewModel,
        template,
    };
});