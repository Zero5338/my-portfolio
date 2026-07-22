import { useEffect } from "react";
import { Printer } from "lucide-react";
import { Page1 } from "./components/page1";
import { Page2 } from "./components/page2";

export default function App() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @media print {
        @page { size: A4; margin: 0; }
        body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        .no-print { display: none !important; }
        .page {
          box-shadow: none !important;
          page-break-after: always;
          break-after: page;
        }
        .page:last-of-type {
          page-break-after: avoid;
          break-after: avoid;
        }
        
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      className="bg-background"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="no-print fixed bottom-6 right-6 z-50">
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-4 py-3 rounded-sm shadow-lg text-[13px] font-medium transition-opacity hover:opacity-80"
          style={{
            background: "var(--accent)",
            color: "var(--accent-foreground)",
          }}
        >
          <Printer size={15} />
          PDF로 저장
        </button>
      </div>

      <div className="no-print-wrapper flex flex-col items-center gap-8 py-12">
        <Page1 />
        <Page2 />
      </div>

      <div className="hidden print:block">
        <Page1 print />
        <Page2 print />
      </div>

      <style>{`
        @media screen {
          .hidden.print\\:block { display: none; }
        }
        @media print {
          .no-print-wrapper { display: none; }
          .hidden.print\\:block { display: block !important; }
        }
      `}</style>
    </div>
  );
}
