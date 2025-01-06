import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, ChartBar, Coins, Timer, Sparkles, Globe } from "lucide-react";
import ListItemForm from "@/components/ListItemForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const featuredAssets = [
  {
    title: "Digital Real Estate in Mars Metaverse",
    currentBid: "45.5 ETH",
    timeLeft: "2 days",
    category: "Virtual Real Estate",
    image: "photo-1501854140801-50d01698950b",
    description: "Prime location in the Red Planet's most exclusive digital district"
  },
  {
    title: "AI-Generated Masterpiece Collection",
    currentBid: "12.8 ETH",
    timeLeft: "4 hours",
    category: "Digital Art",
    image: "photo-1485827404703-89b55fcc595e",
    description: "First edition series from renowned AI artist Neural Canvas"
  },
  {
    title: "Quantum Computing Token",
    currentBid: "89,000 USDC",
    timeLeft: "1 day",
    category: "Technology Tokens",
    image: "photo-1498050108023-c5249f4df085",
    description: "Access token for next-gen quantum computing platform"
  }
];

const Index = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [showListingForm, setShowListingForm] = useState(false);
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
    if (typeof window.ethereum !== 'undefined') {
      window.ethereum.request({ method: 'eth_accounts' })
        .then((accounts: string[]) => {
          if (accounts.length > 0) {
            setAccount(accounts[0]);
          }
        });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Header />
      
      <main className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="pt-32 pb-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1642790106117-e829e14a795f')] bg-cover bg-center opacity-10" />
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-amber-200 to-yellow-500 text-transparent bg-clip-text">
              Extraordinary Assets Await
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in delay-100">
              Where Digital Luxury Meets Blockchain Innovation
            </p>
            {!account ? (
              <Button 
                onClick={connectWallet}
                className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-bold py-3 px-8 rounded-lg text-lg animate-scale-in"
              >
                Start Bidding
              </Button>
            ) : (
              <div className="flex flex-col items-center gap-4 animate-fade-in">
                <span className="text-amber-400 font-mono">
                  {`${account.slice(0, 6)}...${account.slice(-4)}`}
                </span>
                <div className="flex gap-4">
                  <Button 
                    variant="outline" 
                    className="border-amber-500 text-amber-500 hover:bg-amber-500/10"
                  >
                    View My Bids
                  </Button>
                  <Button
                    onClick={() => setShowListingForm(!showListingForm)}
                    className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black"
                  >
                    {showListingForm ? "Hide Listing Form" : "List an Item"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Listing Form */}
        {showListingForm && account && (
          <section className="py-16 animate-fade-in">
            <ListItemForm />
          </section>
        )}

        {/* Live Auctions */}
        <section className="py-16">
          <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in">
            <span className="bg-gradient-to-r from-amber-200 to-yellow-500 text-transparent bg-clip-text">
              Live Auctions
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredAssets.map((asset, index) => (
              <Card key={index} className="bg-black/30 border border-amber-500/20 hover:border-amber-500/40 transition-all group animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-xl text-amber-400">{asset.title}</CardTitle>
                  <CardDescription className="text-gray-400">{asset.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-square bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-lg mb-4 relative overflow-hidden group-hover:from-amber-500/20 group-hover:to-yellow-500/20 transition-all">
                    <img 
                      src={`https://source.unsplash.com/${asset.image}`}
                      alt={asset.title}
                      className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-gray-300 mb-4">{asset.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Coins className="w-4 h-4 text-amber-400" />
                      <span className="font-bold text-amber-400">{asset.currentBid}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Timer className="w-4 h-4" />
                      <span>{asset.timeLeft}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black">
                    Place Bid
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "Total Volume", value: "100K ETH", icon: Coins },
              { label: "Assets Listed", value: "25,000+", icon: Globe },
              { label: "Successful Auctions", value: "12,450", icon: Award }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="bg-black/30 p-6 rounded-xl border border-amber-500/20 text-center group hover:border-amber-500/40 transition-all animate-fade-in"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-amber-400 group-hover:scale-110 transition-transform" />
                <h3 className="text-amber-400 text-lg mb-2">{stat.label}</h3>
                <p className="text-3xl font-bold">{stat.value}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;