import { Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
function OnBoarding() {
  const params = useParams();
  console.log(params);
  async function connectWallet() {
    const { ethereum } = window;
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log(accounts);
    if (accounts[0] === "0x9d1E717968e90ae24186C81183C77FEf3448bC6E") {
      window.location = `http://localhost:3000/courses/${params.course}/${accounts[0]}`;
    } else {
      console.log("Wallet not registered");
    }
  }
  return (
    <div className="flex h-[calc(100vh_-_100px)] items-center justify-center">
      <Button size={"lg"} colorScheme="twitter" onClick={connectWallet}>
        Connect wallet
      </Button>
    </div>
  );
}

export default OnBoarding;
