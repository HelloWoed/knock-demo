define([], () => {
    return (ko) => {
        ko.customDicts = {
            eventType: {
                HASHER_CHANGE: 'hashChange'
            },
            indexPath: 'pages/index',
            CURRENT_PATH: 'currentPath'
        }
    }
    
});