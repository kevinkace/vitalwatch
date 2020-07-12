module.exports = {
    globals: {
        __PATH_PREFIX__: true,
    },
    extends: `react-app`,
    rules : {
        "key-spacing" : ["error", {
            "align": {
                "beforeColon": true,
                "afterColon": true,
                "on": "colon"
            }
        }]
    }
};
