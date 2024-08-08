//const { defineConfig } = require("cypress");

//module.exports = defineConfig({
 // e2e: {
 //   setupNodeEvents(on, config) {
 //     // implement node event listeners here
 //   },
 // },
// });


const { defineConfig } = require('cypress')


module.exports = defineConfig({

  defaultCommandTimeout: 5000,
  retrie: {
    runMode: 1,
  },
  chromeWebSecurity: false,
  experimentalModifyObstructiveThirdPartyCode: true,
  includeShadowDom: true,

  e2e: {
    setupNodeEvents(on, config) {
    },
  },
})
