module.exports = {
  type: 'react-component',
  build: {
    externals: {
      react: 'React',
    },
    global: 'PlayButton',
    jsNext: true,
    umd: true,
  },
  babel: {
    stage: 0,
  },
  webpack: {
    loaders: {
      css: {
        query: {
          modules: true,
        },
      },
    },
  },
};
