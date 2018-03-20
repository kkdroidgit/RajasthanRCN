var ConvertLib = artifacts.require("./ConvertLib.sol");
var Complain = artifacts.require("./Complain.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib);
  //deployer.deploy(MetaCoin);
  deployer.deploy()
};
