const { ethers } = require('ethers');

const provider = new ethers.providers.JsonRpcProvider('https://sepolia.infura.io/v3/4d010fca5f114975b20e2c9e10221cdb');

// Contract address
const contractAddress = '0xca8632926f1543F06d3b8FfCAe8efC23E452C66F'; // Replace with your contract address
// Contract ABI
const abi =[
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
		"name": "display",
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
    const contract = new ethers.Contract(contractAddress, abi, provider); // Define contract here
    try {
       
        console.log(await contract.display());
        console.log(await contract.a());

   
    } catch (error) {
        console.error("Error:", error);
    }
}

// Call the function to interact with the contract
interactWithContract();
