//6341d97507067e3d78a4a5ffbba6d7d01e9ff7425a9eaf4f08d57c847a9ff606 private key


const { ethers } = require('ethers');

// Infura JSON-RPC URL
const rpcUrl = 'https://sepolia.infura.io/v3/4d010fca5f114975b20e2c9e10221cdb';
// Private key of your Ethereum account
const privateKey = '6341d97507067e3d78a4a5ffbba6d7d01e9ff7425a9eaf4f08d57c847a9ff606';

const provider = new ethers.providers.JsonRpcProvider(rpcUrl);

// Contract address
const contractAddress = '0x96F7169656E852aA5dFF0F7cfD066bC87661b7e4'; // Replace with your contract address
// Contract ABI
const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "setName",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "a",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getName",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]


const wallet = new ethers.Wallet(privateKey, provider);
        
      
const contract = new ethers.Contract(contractAddress, abi, wallet);

// // Function to interact with the contract
// async function interactWithContract() {
//     try {
        
//         await contract.setName("Jam");
//         console.log(await contract.getName());
//         console.log(await contract.a());
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }

// // Call the function to interact with the contract
// interactWithContract();

ReadData= async ()=>{
    try{

        console.log(await contract.getName());
        console.log(await contract.a());

    }
    catch(err){
        console.log(err);
    }
}

WriteData=async()=>{
    await contract.setName("Raj")
}


ReadData()
