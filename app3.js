//6341d97507067e3d78a4a5ffbba6d7d01e9ff7425a9eaf4f08d57c847a9ff606 private key


const { ethers } = require('ethers');

// Infura JSON-RPC URL
const rpcUrl = 'https://sepolia.infura.io/v3/4d010fca5f114975b20e2c9e10221cdb';
// Private key of your Ethereum account
const privateKey = '6341d97507067e3d78a4a5ffbba6d7d01e9ff7425a9eaf4f08d57c847a9ff606';

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

// Function to interact with the contract
async function interactWithContract() {
    try {
        // Connect to Ethereum node
        const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
        
        // Create a signer with your private key
        const wallet = new ethers.Wallet(privateKey, provider);
        
        // Connect the signer to the contract
        const contract = new ethers.Contract(contractAddress, abi, wallet);

        // Call setName function without sending Ether
        await contract.setName("Raj");

        // Log contract state after setName
        console.log(await contract.getName());
        console.log(await contract.a());
    } catch (error) {
        console.error("Error:", error);
    }
}

// Call the function to interact with the contract
interactWithContract();
