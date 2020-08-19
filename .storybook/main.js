module.exports = {
  stories: [
    "../packages/components/src/**/*.stories.tsx"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  webpackFinal: async config => {
    config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [{
      loader: require.resolve("ts-loader")
    }]
   });

   config.resolve.extensions.push(".ts", ".tsx");
   return config;
  },
}
