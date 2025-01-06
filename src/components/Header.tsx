import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Archive, Coins, Globe } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-amber-500/20 bg-black/30 backdrop-blur-sm fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Globe className="w-8 h-8 text-amber-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-200 to-yellow-500 text-transparent bg-clip-text">
              XMRT Auctions
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/nfts" className="text-gray-300 hover:text-amber-400 flex items-center gap-2">
              <Archive className="w-4 h-4" />
              NFTs
            </Link>
            <Link to="/tokens" className="text-gray-300 hover:text-amber-400 flex items-center gap-2">
              <Coins className="w-4 h-4" />
              Tokens
            </Link>
            <Button 
              variant="outline" 
              className="border-amber-500 text-amber-500 hover:bg-amber-500/10"
            >
              Explore Assets
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;