import React from 'react'
import { motion } from 'framer-motion'

export function BentoGrid({ children, className }) {
  return (
    <div className={`grid md:grid-cols-4 gap-4 ${className}`}>
      {children}
    </div>
  )
}

export function BentoGridItem({ title, description, icon, className }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`bg-[#1E293B] rounded-[1rem] p-6 backdrop-blur-lg bg-opacity-50 border border-[#3B82F6]/20 ${className}`}
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-3 bg-[#3B82F6]/20 rounded-full">{icon}</div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}