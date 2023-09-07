async function main() {
    // initialize
  const token_addr = "0xe104D4792a0d869568385840275D5b6C0A464130";
  const paytoken_addr = '0xe104D4792a0d869568385840275D5b6C0A464130';
  const ido_price = 10;
  const purchaseCap = 1000000;
  const startTime = new Date();
  const endTime = startTime.getDate() + 7; 
  const IDO = await ethers.getContractFactory("IDOSale")
  console.log("Deploying contract ...")
  const ido_contract = await upgrades.deployProxy(IDO);
  console.log("Proxy contract Address", ido_contract.address)
  console.log(await upgrades.erc1967.getImplementationAddress(ido_contract.address)," getImplementationAddress")
  console.log(await upgrades.erc1967.getAdminAddress(ido_contract.address)," getAdminAddress") 
  }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });