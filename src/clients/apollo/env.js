window.env = window.env || {}

const getEnv = (key) => {
  //TODO: Update below to get env vars from process.env for lower environments
  //process.env will get env vars from ~/.zshrc (or) ~/.env and
  //it is server side, during build time or runtime (for Node.js applications)
  //and it should be prefixed with 'REACT_APP_'

  //window.env is runtime, can be defined in project configuration file
  return window.env[key] || process.env[key]
}

export const REACT_APP_WAVE_URI = getEnv('REACT_APP_WAVE_URI')
