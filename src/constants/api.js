import Constants from 'expo-constants';
 

const { manifest } = Constants;

export default DEFAULT_API_PREFIX = `http://${manifest.debuggerHost.split(`:`)[0]}:8000/api/v1`

