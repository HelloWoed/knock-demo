define(['jsface'], (Class) => {
    return (ko) => {
        const store = Class({
            constructor: function(){
                this.datas = {};
            },
            setData: function(key, value){
                if(this.datas[key]){
                    this.datas[key](value);
                }else{
                    if(Object.prototype.toString.call(value) == '[object Array]'){
                        this.datas[key] = ko.observableArray(value);
                    }else{
                        this.datas[key] = ko.observable(value);
                    }
                }
            },
            getData: function(key){
                return this.datas[key];
            }
        });
        ko.cusStore = new store();
    }
    
});