const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/**/*.html',
    './src/**/*.jsx',
    './src/*.jsx',
    './src/**/*.js',
  ],

  defaultExtractor: (content) => {
    const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
    const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];

    return broadMatches.concat(innerMatches);
  },
});

module.exports = {
  style: {
    postcss: {
      mode: 'extends' || 'file',
      plugins: [
        tailwindcss('./tailwind.config.js'),
        autoprefixer,
        ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
      ],
    },
  },
};
