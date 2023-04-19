const AWS = require("aws-sdk");

const manager = new AWS.SecretsManager({ region: "<aws region>" });

module.exports = {
  getSecret: async (name) => {
    console.log("[SecretManager.getSecret]", "name", name);
    try {
      const value = await manager.getSecretValue({ SecretId: name }).promise();
      console.log("[SecretManager.getSecret]", "value", value);

      return value.SecretString;
    } catch (e) {
      console.log("[SecretManager.getSecret]", "error", e);
    }

    return undefined;
  },
};
