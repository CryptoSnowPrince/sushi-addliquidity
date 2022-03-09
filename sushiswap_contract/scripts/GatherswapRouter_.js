async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    const GatherswapFactory = await ethers.getContractFactory("GatherswapRouter");
    const factory = await GatherswapFactory.deploy("0xf370C0f60c3022E2116846893c029b2E1302A513");
  
    console.log("Router address:", factory.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });