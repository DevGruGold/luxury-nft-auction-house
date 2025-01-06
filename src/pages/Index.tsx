import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [account, setAccount] = useState<string | null>(null);
  const { toast } = useToast();

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ 
          method: 'eth_requestAccounts' 
        });
        setAccount(accounts[0]);
        toast({
          title: "Wallet Connected",
          description: "Successfully connected to MetaMask",
        });
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Connection Failed",
          description: "Please make sure MetaMask is installed and try again",
        });
      }
    } else {
      window.open('https://metamask.io/download/', '_blank');
    }
  };

  useEffect(() => {
    // Check if already connected
    if (typeof window.ethereum !== 'undefined') {
      window.ethereum.request({ method: 'eth_accounts' })
        .then((accounts: string[]) => {
          if (accounts.length > 0) {
            setAccount(accounts[0]);
          }
        });
    }
  }, []);

  const shortenAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="pt-20 pb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-yellow-500 text-transparent bg-clip-text">
            Luxury NFT Marketplace
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Discover and collect extraordinary NFTs
          </p>
          {!account ? (
            <Button 
              onClick={connectWallet}
              className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-bold py-3 px-8 rounded-lg text-lg"
            >
              Connect Wallet
            </Button>
          ) : (
            <div className="flex flex-col items-center gap-4">
              <span className="text-amber-400 font-mono">
                {shortenAddress(account)}
              </span>
              <Button 
                variant="outline" 
                className="border-amber-500 text-amber-500 hover:bg-amber-500/10"
              >
                View Profile
              </Button>
            </div>
          )}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16">
          {[
            { label: "Total Volume", value: "100K ETH" },
            { label: "NFTs Listed", value: "10,000+" },
            { label: "Active Users", value: "50K+" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="bg-black/30 p-6 rounded-xl border border-amber-500/20 text-center"
            >
              <h3 className="text-amber-400 text-lg mb-2">{stat.label}</h3>
              <p className="text-3xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Featured Section */}
        <div className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Featured Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div 
                key={item} 
                className="bg-black/30 rounded-xl p-4 border border-amber-500/20"
              >
                <div className="aspect-square bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-lg mb-4" />
                <h3 className="text-xl font-bold mb-2">Collection #{item}</h3>
                <p className="text-gray-400">Floor: 0.5 ETH</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;