// See http://brunch.io for documentation.
module.exports = {
  conventions: {
    assets: (path) => path.startsWith('public'),
    ignored: ['**/*.test.js'],
  },
  paths: {
    public: 'dist',
    watched: ['packages/app/app', 'public'],
  },
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^node_modules/,
        'app.js': path => path.startsWith('packages/app/app')
      }
    },
    stylesheets: {joinTo: 'app.css'}
  },
  plugins: {
    babel: {
      presets: ['latest', 'react'],
      plugins: [
        ['module-resolver', {
          'root': './packages/app/app'
        }]
      ]
    },
  },
  modules: {
    autoRequire: {
      'app.js': ['packages/app/app'],
    },
  },
};
