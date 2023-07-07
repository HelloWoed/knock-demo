define([], () => {
    return (ko) => {
        ko.cusUtls = {
            goPath: (hash) => {
                location.hash = hash;
            }
        }
    }
    
});