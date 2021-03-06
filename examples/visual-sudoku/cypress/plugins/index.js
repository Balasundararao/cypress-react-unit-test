const preprocessor = require('../../../../plugins/react-scripts')
const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin')

module.exports = (on, config) => {
  addMatchImageSnapshotPlugin(on, config)
  preprocessor(on, config)
  // IMPORTANT to return the config object
  // with the any changed environment variables
  return config
}
