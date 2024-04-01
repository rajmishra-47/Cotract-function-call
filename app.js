const { ethers } = require('ethers');

const provider = new ethers.providers.JsonRpcProvider('HTTP://127.0.0.1:7545');


// Contract address
const contractAddress = '0x7EF2e0048f5bAeDe046f6BF797943daF4ED8CB47'; // Replace with your contract address
// Contract ABI
const abi =[
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

// Contract instance
// Function to interact with the contract
async function interactWithContract() {
    try {
        // Call the getName function
        const currentName = await contract.a();
        console.log("Current name:", currentName);

        // Call the setName function
        const newName = "New Name"; // Replace with the desired name
        await contract.setName(newName);
        console.log("Name set successfully!");

        // Verify the updated name
        const updatedName = await contract.a();
        console.log("Updated name:", updatedName);
    } catch (error) {
        console.error("Error:", error);
    }
}

// Call the function to interact with the contract
interactWithContract();
