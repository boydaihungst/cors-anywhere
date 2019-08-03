/* eslint-disable max-len */
module.exports = {
  apps: [
    {
      name: 'cors-proxy',
      script: 'npm',
      args: 'start',
      env: {
        PORT: 8080,
        NODE_ENV: 'production',
      },
      exec_mode: 'cluster',
    },
  ],
  deploy: {
    // "production" is the environment name
    production: {
      // SSH key path, default to $HOME/.ssh
      'key': '/home/boydaihungst/.ssh/id_rsa',
      // SSH user
      'user': 'boydaihungst',
      // SSH host
      'host': ['149.28.129.156'],
      // SSH options with no command-line flag, see 'man ssh'
      // can be either a single string or an array of strings
      // 'ssh_options': 'StrictHostKeyChecking=no',
      // GIT remote/branch
      'ref': 'origin/master',
      // GIT remote
      'repo': 'git@github.com:boydaihungst/cors-anywhere.git',
      // path in the server
      'path': '/home/boydaihungst/cors-proxy',
      // Pre-setup command or path to a script on your local machine
      'pre-setup': 'apt-get install git && apt-get install python-dev ; ls -la',
      // Post-setup commands or path to a script on the host machine
      // eg: placing configurations in the shared dir etc
      'post-setup': 'ls -la',
      // pre-deploy action
      'pre-deploy-local': 'echo \'This is a local executed command\'',
      'ignore_watch': ['node_modules', 'uploads'],
      // post-deploy action
      'post-deploy':
        'yarn install && pm2 startOrRestart ecosystem.config.js --env production --watch',
      'env': {
        NODE_ENV: 'production',
      },
    },
  },
};
