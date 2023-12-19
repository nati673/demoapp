// Import the install service 
const installService = require("../services/install.service");
// A function to handle the install request
async function installDirectFromApi(req, res) {
  // Call the install service to install the application
  const applicationInstalled = await installService.installDirectFromApi();
  // If the application is installed successfully, return success response. Otherwise, return failure response 
  if (applicationInstalled) {
    // Send a success response back to the client
    const response = {
      message: applicationInstalled,
    };
    res.status(200).json(response);
  }
  else {
    // Send a failur response back to the client
    const response = {
      status: "failure",
      message: "Tables could not be created",
    };
    res.status(403).json(response);
  }
}
// Export the function
module.exports = {
  installDirectFromApi,
};