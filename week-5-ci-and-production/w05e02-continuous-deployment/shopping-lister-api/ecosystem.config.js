module.exports = {
  apps: [
    {
      name: 'shopping-lister-api',
      script: './dist/src/main.js',
      node_args: '-r dotenv/config',
    },
  ],
};
