import Feature from "@components/Feature";
import { useEffect } from "react";
import "@jup-ag/terminal/css";
import { useWallet } from "@solana/wallet-adapter-react";


const BuyPage = () => {
   
    const walletProps = useWallet();
    const rpcURL = import.meta.env.VITE_RPC_URL;
    useEffect(() => {
        window.Jupiter.init({
            displayMode: "integrated",
            integratedTargetId: "integrated-terminal",
            endpoint: rpcURL,
            formProps: {
              fixedOutputMint: true,
              swapMode: "ExactIn",
              initialOutputMint: "FBFh7c73Z4qKhjDD4sB5mAjji3cB9H6ZsiRTL6EveDpq",
            },
          });
      }, []); 

  return (
   
    

    <div>
         <div className="w-full max-w-4xl mx-auto px-4">
            <p className="text-center text-xl lg:text-3xl font-bold text-white mb-4 overflow-auto">
                CA: <a className="bg-white break-all">FBFh7c73Z4qKhjDD4sB5mAjji3cB9H6ZsiRTL6EveDpq</a>
            </p>
            <div className="flex lg:flex-row flex-col justify-center items-center gap-4 py-4">
                <div className="w-full">
                <a 
                    className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded flex items-center justify-center transition-colors duration-200"
                    href="https://pump.fun/FBFh7c73Z4qKhjDD4sB5mAjji3cB9H6ZsiRTL6EveDpq"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img 
                    src="https://pump.fun/_next/image?url=%2Flogo.png&w=64&q=75"
                    alt="PumpFun logo"
                    className="mr-2 w-5 h-5"
                    />
                    <span>PumpFun</span>
                </a>
                </div>

                <div className="w-full">
                <a 
                    className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded flex items-center justify-center transition-colors duration-200"
                    href="https://jup.ag/swap/SOL-FBFh7c73Z4qKhjDD4sB5mAjji3cB9H6ZsiRTL6EveDpq"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img 
                    src="https://jup.ag/svg/jupiter-logo.svg"
                    alt="Jupiter logo"
                    className="mr-2 w-5 h-5"
                    />
                    <span>Jupiter</span>
                </a>
                </div>

                <div className="w-full">
                <a 
                    className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded flex items-center justify-center transition-colors duration-200"
                    href="https://raydium.io/swap/?inputMint=sol&outputMint=FBFh7c73Z4qKhjDD4sB5mAjji3cB9H6ZsiRTL6EveDpq"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img 
                    src="https://thegivingblock.com/wp-content/uploads/2022/04/Raydium-RAY-coin.png"
                    alt="Raydium logo"
                    className="mr-2 w-5 h-5"
                    />
                    <span>Raydium</span>
                </a>
                </div>
            </div>
        </div>
 
        <p className="text-center text-xl lg:text-3xl font-bold text-white">Or buy <a className="text-2xl">$LYT</a> here ↓↓</p>
        <div className="flex flex-col lg:flex-row justify-center items-center w-full py-10 px-2 lg:py-20 lg:px-4">
        <div className="w-full h-[400px] lg:h-[600px] rounded-lg shadow-lg p-2">
            <iframe height="100%" width="100%" id="geckoterminal-embed" title="GeckoTerminal Embed" src="https://www.geckoterminal.com/solana/pools/8SF98ktK4ri5gcWsQuNjCtegnAGiSxHtTvEv5TFGjpPa?embed=1&info=0&swaps=0&grayscale=0&light_chart=0" frameborder="0" allow="clipboard-write" allowfullscreen></iframe>
        </div>
        <div id="integrated-terminal" className="w-full h-[600px] rounded-lg shadow-lg"/>
        </div>
    </div>
  );
};

export default BuyPage;


