module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'mudule-resolve',
      {
        alias: {
          '@modules': './src/modules',
          '@config': './src/config',
          '@shared': './srcshared',
        },
      },
    ],
    'babel-plugin-transform-typescript-metadata',
    ['@babel/plugin-proposal-decorator', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
};
