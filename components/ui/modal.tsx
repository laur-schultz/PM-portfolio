"use client"

import type React from "react"

import { X } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  className?: string
}

export function Modal({ isOpen, onClose, title, children, className }: ModalProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Add a small delay to allow for animation
    if (isOpen) {
      setIsVisible(true)
      // Prevent scrolling on the body when modal is open
      document.body.style.overflow = "hidden"
    } else {
      setTimeout(() => {
        setIsVisible(false)
      }, 300)
      document.body.style.overflow = ""
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isVisible && !isOpen) return null

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
        isOpen ? "opacity-100" : "opacity-0",
      )}
      onClick={onClose}
    >
      <div
        className={cn(
          "bg-background rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-auto transition-all duration-300",
          isOpen ? "scale-100" : "scale-95",
          className,
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 flex items-center justify-between p-4 border-b bg-background z-10">
          <h2 className="text-xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  )
}

