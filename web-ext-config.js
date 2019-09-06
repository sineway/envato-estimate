module.exports = {
    ignoreFiles: [
        "*",
        "pages/test-{views,models}.html",
        "pages/javascripts/models/test.js",
        "images/screenshot-*",
        "!{fonts,images,pages}",
        "!manifest.json"
    ],
    run: {
        startUrl: [
            "localhost:3000/test-views.html",
            "localhost:3000/test-models.html",
            "about:debugging",
            "themeforest.net/top-sellers"
        ]
    },
    build: {
        overwriteDest: true
    }
};