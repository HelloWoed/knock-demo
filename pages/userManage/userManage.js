define(['jsface', 'ko', 'text!./userManage.html', 'css!./userManage.css'], function(Class, ko, template) {
    const viewModel = Class({
        constructor: function(params) {
            this.textStr = ko.observable('用户管理页面');
            this.userList = ko.observableArray([
                {
                    name: 'user1',
                    id: '001'
                }
            ])
        },
        refreshUser: function(){
            this.userList([
                {
                    name: `user1_${new Date().getTime()}`,
                    id: '001'
                },
                {
                    name: `user2_${new Date().getTime()}`,
                    id: '002'
                },
                {
                    name: `user3_${new Date().getTime()}`,
                    id: '003'
                },
            ])
            this.userList.push({
                name: `user4_${new Date().getTime()}`,
                id: '004'
            })
        }
    }) 
    return {
        viewModel,
        template,
    };
});