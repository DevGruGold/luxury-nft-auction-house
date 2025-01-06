import { Globe, Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-amber-500/20 bg-black/30 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Globe className="w-6 h-6 text-amber-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-amber-200 to-yellow-500 text-transparent bg-clip-text">
                XMRT Auctions
              </span>
            </div>
            <p className="text-gray-400">
              Your premier marketplace for blockchain assets
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-amber-400 mb-4">Assets</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-amber-400">NFTs</a></li>
              <li><a href="#" className="hover:text-amber-400">Tokens</a></li>
              <li><a href="#" className="hover:text-amber-400">Real Estate</a></li>
              <li><a href="#" className="hover:text-amber-400">Collectibles</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-amber-400 mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-amber-400">About</a></li>
              <li><a href="#" className="hover:text-amber-400">Careers</a></li>
              <li><a href="#" className="hover:text-amber-400">Blog</a></li>
              <li><a href="#" className="hover:text-amber-400">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-amber-400 mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-400">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-400">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-amber-500/20 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} XMRT Auctions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;