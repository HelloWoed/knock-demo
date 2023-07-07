define([], () => {
    return (ko) => {
        const defaultLoader = ko.components.defaultLoader;
        ko.components.defaultLoader = null;
        ko.components.loaders.unshift({
            getConfig: (name, callback) => {
                // html中绑定的组件名称为路径 + '-' 连接 如： component: {name: 'pages-pageBase'}
                // 在此处将组件名称解析为组件路径 如： pages/pageBase/pageBase
                const pathArr = name.split('-');
                const fileName = pathArr[pathArr.length - 1];
                const path = `${pathArr.join('/')}/${fileName}`;
                callback({require: path})
            },
            loadComponent: (cmptName, config, callback) => {
                defaultLoader['loadComponent'](cmptName, config, callback);
            },
            loadTemplate: (cmptName, config, callback) => {
                defaultLoader['loadTemplate'](cmptName, config, callback);
            },
            loadViewModel: (cmptName, config, callback) => {
                defaultLoader['loadViewModel'](cmptName, config, callback);
            },
        })
    }
    
});