import React from 'react'

import { Button } from './ui/button'

const Footer: React.FC = () => {
  return (
    <footer className="w-fit p-1 md:p-2 fixed bottom-0 right-0">
      <div className="flex justify-end">
        {/* GitHub, Twitter, and Discord icons removed */}
      </div>
    </footer>
  )
}

const Disclaimer: React.FC = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center">
      <p className="text-sm text-gray-500">WEBSPACEAI Research can make mistakes. Consider checking important information.</p>
    </div>
  )
}

export default function App() {
  return (
    <div>
      <Footer />
      <Disclaimer />
      {/* Rest of your app content */}
    </div>
  )
}
