
type Props = {
    id: number;
  content: string;
}
const cardsData: Props[] = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  content: `Card ${i + 1}`,
}));

  const radius = 150; // The distance from the center in pixels
export default function Cards({id,content}: Props) {
  return (
    <div className="circle-container">
      {cardsData.map((card, index) => {
        // Calculate the angle in degrees (360 degrees divided by total cards)
        const angle = (index / cardsData.length) * 360;

        return (
          <div
            key={card.id}
            className="card"
            style={{
              // 1. Rotate the invisible axis to the correct angle
              // 2. Translate (push) the card outward by the radius
              // 3. Rotate the card backward by the same angle so the text stays upright
              transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
            }}
          >
            {card.content}
          </div>
        );
      })}
    </div>
  )
}