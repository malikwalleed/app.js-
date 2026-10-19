import { useState } from 'react'

const cardsData = [
  { 
    id: 1, 
    front: "Mari Zindgii", 
    inside: "wo to ap hi hona",
    teddies: ["🧸", "🤍🧸", "🧸💝"] 
  },
  { 
    id: 2, 
    front: "Mari Hasrat-e-Dil", 
    inside: "Hamesha ik hi dua karta hon ap mari zindgii ban gyen",
    teddies: ["🐻", "🐻‍❄️", "🧸❤️"] 
  },
  { 
    id: 3, 
    front: "Mari Insecurity", 
    inside: "wo to sirf ik hi ha khai ap muj sa dor na ho jao 🥹😌",
    teddies: ["🧸💖", "💌🧸", "🧸🌹"] 
  },
]

export default function HomeScreen() {
  const [openCards, setOpenCards] = useState({})
  const toggleCard = (id) => setOpenCards(prev => ({ ...prev, [id]: !prev[id] }))

  return (
    <div className="home-container-new">
      {/* Background slow hearts */}
      <div className="aesthetic-hearts-bg">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="a-heart-slow"
            style={{ 
              left: `${Math.random()*100}%`, 
              animationDelay: `${Math.random()*15}s`,
              animationDuration: `${15 + Math.random()*15}s`,
              fontSize: `${12 + Math.random()*20}px`,
              top: `${Math.random()*100}%`,
            }}>
            {['❤️','💖','💕'][Math.floor(Math.random()*3)]}
          </div>
        ))}
      </div>

      {cardsData.map(card => (
        <div key={card.id} className="card-with-teddy">
          {/* 3 DIFFERENT TEDDY FLOWING ON EACH CARD */}
          <div className="teddy-flow-container">
            <span className="teddy-float t1">{card.teddies[0]}</span>
            <span className="teddy-float t2">{card.teddies[1]}</span>
            <span className="teddy-float t3">{card.teddies[2]}</span>
          </div>

          <div className={`black-card ${openCards[card.id] ? 'open' : ''}`} onClick={() => toggleCard(card.id)}>
            {!openCards[card.id] ? (
              <>
                <h2 className="front-text">{card.front}</h2>
                <div className="tap-hint">Tap to open ❤️</div>
              </>
            ) : (
              <div className="inside-content">
                <div className="burning-heart">❤️‍🔥</div>
                <h2 className="inside-text">{card.inside} ❤️</h2>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}