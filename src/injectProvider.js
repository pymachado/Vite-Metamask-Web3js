import Web3 from "web3";

async function injectProvider() {
    let provider = window.ethereum; 
    if(provider !== 'undefined') {
        try{
            const web3  = new Web3(provider);
            await provider.request({method: "eth_requestAccounts"});
            return (web3);
        }catch(error) {
            if (error.code === 4001) {
                alert("The user rejected the request.");
            }
            throw(error);
        }
            
        }else {
            alert("You need to install a Provider. Try with Metamask.");
    }
 }


export default injectProvider;