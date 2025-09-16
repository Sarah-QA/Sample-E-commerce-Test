const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '2qs22r',
  retries: {
    runMode: 1,
 
  },
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
