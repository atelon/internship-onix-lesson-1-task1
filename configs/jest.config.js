module.exports = {
  testMatch: [ "**/tests/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)" ],
  transform: {
    "\\.js?$": "babel-jest"
  }
};
