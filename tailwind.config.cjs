module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  plugins: [

  ],
  purge: {
    content: [
      "./src/**/*.svelte",

    ],
    enabled: false // disable purge in dev
  },
};
