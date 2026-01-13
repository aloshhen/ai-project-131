import { Menu, Wallet } from 'lucide-react'

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0F172A]/50 backdrop-blur-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-[#3B82F6]">NFT Hub</div>
        <div className="flex items-center space-x-4">
          <a href="#hero" className="hover:text-[#3B82F6] transition">Home</a>
          <a href="#features" className="hover:text-[#3B82F6] transition">Features</a>
          <a href="#collection" className="hover:text-[#3B82F6] transition">Collection</a>
          <button className="bg-[#3B82F6] text-white px-4 py-2 rounded-[1rem] flex items-center space-x-2">
            <Wallet size={18} />
            <span>Connect Wallet</span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation