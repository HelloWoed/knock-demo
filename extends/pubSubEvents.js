define([], () => {
    return (ko) => {
        const eventsPool = {
            hashChange: []
        };
        // 存储发布但未广播出去的事件
        let pubEventPool = {};
        ko.cusSubEvent = (eventType, event) => {
            if(!eventsPool[eventType]){
                eventsPool[eventType] = []
            }
            const isExist = eventsPool[eventType].find(fun => fun == event);
            !isExist && eventsPool[eventType].push(event);
        }
        ko.cusPubEvent = (eventType, params) => {
            pubEventPool[eventType] = params;
            ko.triggerCusEvent(eventType);
            
        }
        ko.disposeEvent = (eventType, event) => {
            const tarEvents = eventsPool[eventType];
            if(event){
                eventsPool[eventType] = tarEvents.filter(fun => fun != event)
            }else{
                eventsPool[eventType] = [];
            }
        }
        ko.triggerCusEvent = (eventType) => {
            if(pubEventPool[eventType]){
                const tarEvents = eventsPool[eventType];
                if(tarEvents.length){
                    tarEvents.forEach(fun => {
                        fun(pubEventPool[eventType]);
                    });
                    delete pubEventPool[eventType];
                }
            }
        }
    }
});