import FootPrintHistory from "../components/footprint/footprint-history";
import FootPrintMap from "../components/footprint/footprint-map";
import FootPrintMedia from "../components/footprint/footprint-media";
import '../styles/FootPrint.css'

export default function FootPrint() {
  return (
    <div id="foot-print">
      <FootPrintHistory />
      <FootPrintMap />
      <FootPrintMedia />
    </div>
  );
}
