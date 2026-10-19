export default function FloatingHearts({ text }) {
  return (
    <div className="floating-hearts">
      {[...Array(15)].map((_, i) => (
        <div key={i} className="heart" style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`
        }}>❤️</div>
      ))}
      <div className="floating-text">{text}</div>
    </div>
  );
}