import React from 'react'
function Logo({width = '70px'}) {
  return (
    <div className="flex items-center gap-2">
      <img src="https://img.magnific.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?semt=ais_hybrid&w=740&q=80" alt="logo" width={width} />
      <span className="text-lg font-bold text-gray-900">DevUI</span>
    </div>
  )
}

export default Logo