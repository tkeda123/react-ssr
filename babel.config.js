const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        ie: '11',
        safari: '7',
      },
    },
  ],
  ['@babel/preset-typescript'],
];

const config = {
  presets,
};

module.exports = config;
