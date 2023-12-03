


module.exports = {
    "reporters": [
        "default",
        ["./node_modules/jest-html-reporter", {
            "testResultsProcessor": "./node_modules/jest-html-reporter",
            "outputPath": "./reports/Test-report.html",
            "pageTitle": "End to End Test Report",
            "includeFailureMsg": true
            },
            
        ]
        
    ],
}
  