import React from 'react'

import { Button } from './ui/button'

const Footer: React.FC = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-end pb-4">
      <div className="flex justify-end">
        {/* GitHub, Twitter, and Discord icons removed */}
      </div>
      <p className="text-sm text-gray-500 mt-2">WEBSPACEAI Research can make mistakes. Consider checking important information.</p>
    </footer>
  )
}

export default Footer
