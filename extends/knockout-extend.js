define([ 
    'knockout', 
    'extends/customDicts',
    'extends/customUtils', 
    'extends/customLoader', 
    'extends/pubSubEvents',
    'extends/customStore'
], 
(
    ko, 
    customDicts,
    customUtils,
    customLoader, 
    pubSubEvents,
    customStore
) => {
    
    // 自定义扩展字典
    customDicts(ko);
    // 自定义扩展工具方法
    customUtils(ko);
    // 组件加载
    customLoader(ko);
    // 扩展发布订阅事件
    pubSubEvents(ko);
    // 扩展自定义状态管理
    customStore(ko);
    return ko;
});