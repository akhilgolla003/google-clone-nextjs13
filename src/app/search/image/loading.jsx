
import React from 'react'

export default function loading() {
  return (
    <div className="pb-42 flex-col sm:flex-row flex sm:space-x-4 pt-10 mx-2 lg:pl-52 max-w-6xl">
      <div className="animate-pulse">
        <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>

        <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-md"></div>

        <div className="h-2 w-44 mb-2.5 bg-gray-200 rounded-md"></div>
      </div>

        <div className="hidden sm:inline-flex space-x-3">
        <div className="animate-pulse">
        <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>

        <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-md"></div>

        <div className="h-2 w-44 mb-2.5 bg-gray-200 rounded-md"></div>
      </div>

      <div className="animate-pulse">
        <div className="h-48 w-48 mb-4 bg-gray-200 rounded-md"></div>

        <div className="h-2 w-48 mb-2.5 bg-gray-200 rounded-md"></div>

        <div className="h-2 w-44 mb-2.5 bg-gray-200 rounded-md"></div>
      </div>

        </div>

      
    </div>
  )
}
