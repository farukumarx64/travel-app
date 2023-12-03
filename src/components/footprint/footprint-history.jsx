import '../../styles/History.css'

export default function FootPrintHistory () {
  const locations = ['Cairo, Egypt', 'Agadir, Morocco', 'Lagos, Nigeria', 'Amsterdam, Germany', 'Tokyo, Japan'];
  return(
    <div id="history">
        {locations.map((location, index) => (
        <div key={index} className="location-item">
          {location}
        </div>
      ))}
    </div>
  )
}