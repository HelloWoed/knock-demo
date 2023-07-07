require(['config'], () => {
    require(['jquery', 'hasher', 'ko'], ($, hasher, ko) => {
        ko.applyBindings(() => {

        }, $('#app')[0]);
        const handleHasherChange = (hash) => {
            if(hash){
                ko.cusPubEvent(ko.customDicts.eventType.HASHER_CHANGE, hash);
            }else{
                ko.cusUtls.goPath(ko.customDicts.indexPath);
            }
            ko.cusStore.setData(ko.customDicts.CURRENT_PATH, hash || ko.customDicts.indexPath);
        }
        hasher.changed.add(handleHasherChange);
        hasher.initialized.add(handleHasherChange);
        hasher.init();
    });
});