// CC0 license.
// taken from (credits): https://soliditydeveloper.com/merkle-tree 
const keccak256 = require("keccak256");
const { MerkleTree } = require("merkletreejs");

const Web3 = require("web3");

const web3 = new Web3();


/**
 * generates the proof offchain using the  PII information of the user and associated it with the other parameter details.
 * 
 */

async function generateProof() {

// consider the given information that is verified privately off-chain  (storing with wallet, name, age, personal ID, jurisdiction) 
// they will be considered as leaves for the application.
const personalIdentifiedInfo = ["0x00000a86986129038908a9808098-toto-18-99123456-France", "0x00000a86986129038908a9808098-john-20-1276546-England"].map(x => keccak256(x));
const tree = new MerkleTree(leaves,keccak256);

}


/**
 * this checks the ownership of the information from requirement (stored onchain) and then verify whether the keccak256 representation is a member of the given proof. 
 * we follow the checkProof  
 */
async function verifyRequirement(verifyingAddress,leafNodes) {
const buf2hex = x => '0x'+x.toString('hex')
const leaf = keccak256('0x00000a86986129038908a9808098-toto-18-99123456-France')

const leafInfo = buf2hex(leaf);

const hexproof = tree.getProof(leaf).map(x => buf2hex(x.data));

const positions = tree.getProof(leaf).map(x => x.position === 'right' ? 1 : 0)



//TODO: fetch the 
const SBTCertification = await web3.eth.Contract();

const verifiedOnchain = await SBTCertification.ifVerified(verifyingAddress, leafNodes);

assert.equal(MerkleTree.verify(proof,leaf,root), verifiedOnchain);

}



const root = tree.getRoot();


// this is the root generated by claim verifier, by doing the operations offchain.
const hexroot = buf2hex(root);

const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });

console.log("---------");
console.log("Merke Tree");
console.log("---------");
console.log(merkleTree.toString());
console.log("---------");
console.log("Merkle Root: " + merkleTree.getHexRoot());

console.log("Proof 1: " + merkleTree.getHexProof(leafNodes[0]));
console.log("Proof 2: " + merkleTree.getHexProof(leafNodes[1]));