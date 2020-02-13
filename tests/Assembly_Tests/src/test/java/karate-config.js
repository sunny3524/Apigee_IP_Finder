function fn() {    
  var env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'dev';
  }
  var config = {
    env: env,
	baseURL: 'https://dev-api.masked.net/'
  }
  if (env == 'test') {
    config.baseURL = 'https://tst-api.masked.net/';
  } else if (env == 'dev') {
    config.baseURL = 'https://dev-api.masked.net/';
  } else if (env == 'prod') {
    config.baseURL = 'https://api.masked.net/';
  } else if (env == 'staging') {
	  config.baseURL = 'https://stg-api.masked.net/';
  } else if (env == 'sandbox') {
	  config.baseURL = 'https://sbx-api.masked.net/';
  }
  return config;
}