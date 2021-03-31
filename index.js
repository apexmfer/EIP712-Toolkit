

import  fs   from 'fs';
import beautify from "json-beautify";

import path from 'path';

import GenerationHelper from './lib/GenerationHelper.js' 

/*

    let contractDataJSON = fs.readFileSync(path.join('src/config/contractdata.json'));
    let contractData = JSON.parse(contractDataJSON)

*/

function start(){

    console.log('Building EIP712 files...')

    generateSolidityFile()

    console.log('Built EIP712 files.')

}

function generateSolidityFile(){
    let sampleEcRecoverContract = GenerationHelper.getECRecoveryContract()


    let outputData = ''

    outputData = outputData.concat(sampleEcRecoverContract)
    outputData = outputData.concat('\n\n\n\n')
   /// outputData = outputData.concat(sampleEcRecoverContract)


    const contractLookupPath = path.join( './generated/soliditySample.sol' )

    fs.writeFile(contractLookupPath, outputData , (err) => {
        if (err) {
            throw err;
        }


    //      console.log('rebuilt world data in ', Date.now() - startTime, 'ms')
    });

}


start()