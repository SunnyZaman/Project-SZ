import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://www.linkedin.com/in/sunny-zaman-24890a86/">Sunny Zaman</a>.
        </span>
      </div>
    </footer>
  </div>
)
