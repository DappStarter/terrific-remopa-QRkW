require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner clog orient spot grief ranch remind erosion hope knee blue gather'; 
let testAccounts = [
"0x37d20839dcb255cf65f1034628b4309d2922b3b986ac1008b158a2d0a83b187c",
"0x4528211b8c3fef19f52a974a20ef3e37bc33d4c82896e542c842d3908866a5e8",
"0xe84c96bfdd0361eb1ba04abf5e66eaa5b933d9d9090c8b4f3cf2b849a7ade0ed",
"0xf20f887ffd5adf8671c229d22f08b6d8ef8da663b073ee38897c946a09cb254e",
"0x2c589972edd10e945af5fcb16d58818fdabd25df3e14cf563b0188485d47fe92",
"0xbaeff2da86c0b2c6d701ab96165039109e0ff975b6ce1af2acd044cd32c26bfb",
"0x3aac1fd575d185ed0758a740294e91226d51144258c5c72494304c52421bc968",
"0xff6c1293632e34bd15cb6e4ee580636cedb2b872f89a125f048fae092028c210",
"0x1594e8437783cdd852dca4a1260dfbe2c777606029689571b7d1d7692da2edc2",
"0xff5048d0052e5dd4903b5c40e86abcb403e571a2fc2864849d4c51ee815942b6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

