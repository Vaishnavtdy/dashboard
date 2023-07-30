import React from 'react'

const SideBar = ({isOpen}) => {

  let barWidth = isOpen ? '200px' : '50px'
  return (
    <div className='app__sidebar' style={{ width: barWidth, height: "100vh", padding: '20px', boxShadow: "1px 1px 10px rgba(0,0,0,0.2)", transition: "all .3s ease-in-out" }}>
      <div className="brand__logo">
        <h2>Logo</h2>
      </div>

      <ul style={{ listStyle: 'none', marginTop: 30 }}>
        <li>Dashboard</li>
        <li>Teams</li>
      </ul>
    </div>
  )
}

export default SideBar