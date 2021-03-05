module.exports = {
  purge: ['./src/**/*.js', './src/**/*.jsx'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  future: {    
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
