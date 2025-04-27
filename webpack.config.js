const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  // Add fallback for missing RN modules
  config.resolve.fallback = {
    ...(config.resolve.fallback || {}),
    '@react-native/assets-registry/registry': false,
  };

  return config;
};
