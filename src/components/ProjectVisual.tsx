import {
  FileText,
  ScanLine,
  Check,
  Database,
  Box,
  ShoppingBag,
  Network,
  ShieldCheck,
} from "lucide-react";
export default function ProjectVisual({ type }: { type: string }) {
  return (
    <div className={`project-visual visual-${type}`} aria-hidden="true">
      <div className="visual-grid" />
      {type === "identity" ? (
        <>
          <div className="document">
            <div className="document-top">
              <FileText size={18} />
              <span>IDENTITY DOCUMENT</span>
            </div>
            <div className="document-body">
              <div className="avatar-placeholder" />
              <div className="document-lines">
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="mrz">
              P&lt;MEX&lt;IDENTITY&lt;&lt;&lt;&lt;&lt;
              <br />
              9303&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;
            </div>
            <div className="scan-line" />
          </div>
          <div className="scan-badge">
            <ScanLine size={15} /> Vision analysis
          </div>
          <div className="verified-badge">
            <ShieldCheck size={16} /> MRZ validation <Check size={13} />
          </div>
          <span className="visual-caption">DOCUMENT → DATA → DECISION</span>
        </>
      ) : type === "metrics" ? (
        <>
          <div className="mini-dashboard">
            <div className="mini-heading">
              <span>
                <i /> Analyzer overview
              </span>
              <span>•••</span>
            </div>
            <div className="mini-kpis">
              <div>
                <small>Extraction</small>
                <b>
                  Precision <span>↗</span>
                </b>
              </div>
              <div>
                <small>Processing</small>
                <b>
                  Coverage <span>↗</span>
                </b>
              </div>
              <div>
                <small>Performance</small>
                <b>
                  Latency <span>⌁</span>
                </b>
              </div>
            </div>
            <div className="chart">
              <div className="chart-lines" />
              <svg viewBox="0 0 400 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#a4cabf" stopOpacity=".25" />
                    <stop offset="100%" stopColor="#a4cabf" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 83 28 73 56 78 84 53 112 60 140 40 168 45 196 20 224 37 252 22 280 29 308 9 336 17 364 7 400 12 V100 H0Z"
                  fill="url(#chartFill)"
                />
                <path
                  d="M0 83 28 73 56 78 84 53 112 60 140 40 168 45 196 20 224 37 252 22 280 29 308 9 336 17 364 7 400 12"
                  fill="none"
                  stroke="#a4cabf"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="mini-axis">
              <span>QUALITY</span>
              <span>COVERAGE</span>
              <span>PERFORMANCE</span>
            </div>
          </div>
          <span className="visual-caption">
            CLARITY THROUGH DATA · CONCEPT UI
          </span>
        </>
      ) : (
        <>
          <div className="network-lines" />
          <div className="network-center">
            <Network size={28} />
            <span>Business core</span>
          </div>
          <div className="network-node node-a">
            <Box size={17} />
            Inventario
          </div>
          <div className="network-node node-b">
            <ShoppingBag size={17} />
            Ventas
          </div>
          <div className="network-node node-c">
            <Database size={17} />
            Operación
          </div>
          <span className="visual-caption">CONNECTED OPERATIONS</span>
        </>
      )}
    </div>
  );
}
