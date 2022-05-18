require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace sell tackle spot crazy rival pumpkin unlock give private fresh try'; 
let testAccounts = [
"0x46edc7f06a35b93a394237b2822de1a518cbea8b1b8bd2f0371fe4753918d04b",
"0x22716a8bd7d03470cf0f8c1a3b2349c3e9dd3bb5f26edd125630b098a149e098",
"0x1ff51fda02a0fa56568848d2b5b781a6f0a2e378630f533eee9e1aeb61424584",
"0x71448fbcbcd1a618166f53cf2f69fe314e61ba9e24da3513a22a67d8b80e2d02",
"0x241fa43807270db8db6485fd2665f77b3c5e2561173e5bf69580e839cdff5183",
"0x01e2289ba70d97e607a2aee10b88322e1fbc24abc4c8de5c7440d853ece534f7",
"0x2503b38d519d5bf246d90f81fe42d3891a595253630025527ef4d55f581d10c6",
"0x34f8d0fbb27c9bc616632fc3095e362690f1fefd12870b222cace6c9c56bd2f0",
"0xf5921a325801c7c0167f84a42205bc9bdb26c8902ba5e31e3984daccebcb8488",
"0x3233797e3a28ee6365e26af37f5322ae743d13f747b6f4d58723da942f7561e7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

