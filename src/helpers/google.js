

 module.exports = () =>  {
    const language = require('@google-cloud/language');
  
    const client = new language.LanguageServiceClient();
    
    return client
  }