import { Button } from "@chakra-ui/react";
import {useParams} from 'react-router-dom'
function OnBoarding(){
    const params  = useParams();
    console.log(params);
    async function connectWallet(){
        const {ethereum} = window;
        const accounts = await ethereum.request({
            method: 'eth_requestAccounts',
          });
        console.log(accounts);
        if(accounts[0] ===  "0x59c21a71a897a438641de8a49e616511db516d6f"){
            window.location = `http://localhost:3000/courses/${params.course}/${accounts[0]}`
        }else{
            console.log("Wallet not registered")
        }
    }
    return(
        <div className="flex h-[calc(100vh_-_100px)] items-center justify-center">
            <Button size={"lg"} colorScheme="twitter" onClick={connectWallet}>Connect wallet</Button>
        </div>
    )
}

export default OnBoarding;

