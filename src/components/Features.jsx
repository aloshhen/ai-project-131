import { motion } from 'framer-motion'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { Globe, Lock, Zap, Rocket } from 'lucide-react'

function Features() {
  const features = [
    {
      title: "Secure Trading",
      description: "Advanced blockchain technology ensures complete transaction security",
      icon: <Lock className="text-[#3B82F6]" />,
      className: "md:col-span-2"
    },
    {
      title: "Global Marketplace",
      description: "Connect with collectors worldwide, trade across borders",
      icon: <Globe className="text-[#3B82F6]" />
    },
    {
      title: "Lightning Fast",
      description: "Instant transactions with minimal gas fees",
      icon: <Zap className="text-[#3B82F6]" />
    },
    {
      title: "Rapid Growth",
      description: "Our platform is designed for maximum scalability and performance",
      icon: <Rocket className="text-[#3B82F6]" />,
      className: "md:col-span-2"
    }
  ]

  return (
    <section id="features" className="bg-[#1E293B] py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-[#3B82F6]"
        >
          Platform Features
        </motion.h2>
        <BentoGrid>
          {features.map((feature, index) => (
            <BentoGridItem
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              className={feature.className}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  )
}

export default Features