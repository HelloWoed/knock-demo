require.config({
    paths: {
        knockout: 'lib/knockout-3.5.1',
        ko: 'extends/knockout-extend',
        jquery: 'lib/jquery-3.3.1.slim.min',
        jsface: 'lib/jsface',
        hasher: 'lib/hasher.min',
        signals: 'lib/signals',
        text: 'lib/require-text',
        css: 'lib/require-css',
    },
    shim: {
        jsface: {
            exports: 'Class'
        }
    }
})