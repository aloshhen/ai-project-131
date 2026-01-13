import { motion } from 'framer-motion'
import { Play, ArrowRight } from 'lucide-react'
import { BackgroundBeams } from './ui/background-beams'

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center">
      <BackgroundBeams />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]">
            Explore Unique NFT Collections
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover, collect, and trade extraordinary digital assets in our cutting-edge marketplace
          </p>
          <div className="flex justify-center space-x-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#3B82F6] text-white px-6 py-3 rounded-[1rem] flex items-center space-x-2"
            >
              <span>Explore Now</span>
              <ArrowRight size={20} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#1E293B] text-white px-6 py-3 rounded-[1rem] flex items-center space-x-2"
            >
              <Play size={20} />
              <span>Watch Trailer</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero