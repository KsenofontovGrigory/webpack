module.exports = {
    "presets": [
        ["@babel/preset-env", {
            "exclude": ["transform-async-to-generator", "transform-regenerator"],
            "loose": true,
        }]
    ],
    "plugins": [
        ["module:fast-async", { "spec": true }],
    ],
}
