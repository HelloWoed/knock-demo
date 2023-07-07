define(['jsface', 'ko', 'text!./sysSider.html', 'css!./sysSider.css'], function(Class, ko, template) {
    const viewModel = Class({
        constructor: function(params) {
            this.textStr = ko.observable('KNOCKOUT')
            this.menuList = ko.observableArray();
            this.activeMenuPath = ko.cusStore.getData(ko.customDicts.CURRENT_PATH);
            this.getMenuList();
        },
        getMenuList: function() {
            const menuList = [
                {
                    name: '首页',
                    path: 'pages/index'
                },
                {
                    name: '用户管理',
                    path: 'pages/userManage'
                },
                {
                    name: '组织管理',
                    path: 'pages/orgManage'
                },
            ];
            menuList.map(menu => this.menuList.push(menu));
        },
        handleMenuClick: function(menu){
            const menuPath = menu.path;
            if(location.hash != menuPath){
                ko.cusUtls.goPath(menuPath)
            }
        }
    }) 
    return {
        viewModel,
        template,
    };
});