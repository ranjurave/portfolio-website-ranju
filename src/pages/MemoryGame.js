import React from 'react'

function MemoryGame() {

  const openInNewTab = (url) => {
    window.open(url, "www.google.com", "noreferrer");
  };


  return (
    <div>
      <button role="link"
        onClick={() => openInNewTab("https://google.com")}>click me</button>
    </div>
  )
}

export default MemoryGame;