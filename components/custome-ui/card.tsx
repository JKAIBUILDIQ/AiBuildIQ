import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/custome-ui/button"

interface CardProps {
  index: number
  service: {
    title: string
    description: string
  }
}

export const Card: React.FC<CardProps> = ({
  index,
  service
}) => {
  return (
    <div 
      key={index} 
      className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer h-[450px] flex flex-col"
    >
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white hover:text-[#0275d8] transition-colors duration-300">
        {service.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 flex-grow overflow-hidden">
        {service.description}
        </p>
    </div>
  )
}