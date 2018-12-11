module.exports = {
  extends: "airbnb-base",
  rules: {
    'no-console': ['off'],

    'no-unused-vars': [
      "error", { varsIgnorePattern: 'regeneratorRuntime' }
    ],
  },
  globals: {
    window: true,
    document: true,
    App: true,
    Page: true,
    Component: true,
    Behavior: true,
    getApp: true,
    getCurrentPages: true,
    wx: true,
    worker: true
  }
};
