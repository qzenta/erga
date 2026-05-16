export default function PageBanner({ title }: { title: string }) {
  return (
    <div
      className="relative w-full overflow-hidden flex items-center justify-center text-center px-6"
      style={{
        background: "linear-gradient(150deg, #1B2A4A 0%, #0D1829 100%)",
        minHeight: "200px",
      }}
    >
      {/* Architectural grid overlay */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="archgrid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="white"
              strokeWidth="0.4"
            />
          </pattern>
          <pattern
            id="archgrid-lg"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 120 0 L 0 0 0 120"
              fill="none"
              stroke="white"
              strokeWidth="0.8"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#archgrid)" opacity="0.05" />
        <rect
          width="100%"
          height="100%"
          fill="url(#archgrid-lg)"
          opacity="0.04"
        />
      </svg>

      {/* Skyline silhouette watermark */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 200"
        preserveAspectRatio="xMidYMax meet"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.06 }}
      >
        <path
          fill="white"
          d="M0,200 L0,145 L25,145 L25,125 L40,125 L40,105 L55,105 L55,90 L65,90 L65,78 L75,78 L75,68 L85,68 L85,78 L95,78 L95,90 L110,90 L110,110 L125,110 L125,130 L145,130 L145,105 L160,105 L160,95 L175,95 L175,80 L185,80 L185,65 L195,65 L195,55 L205,55 L205,65 L215,65 L215,80 L225,80 L225,95 L240,95 L240,115 L260,115 L260,130 L280,130 L280,110 L295,110 L295,90 L310,90 L310,75 L320,75 L320,60 L335,60 L335,52 L345,52 L345,60 L360,60 L360,75 L375,75 L375,95 L390,95 L390,115 L410,115 L410,135 L430,135 L430,110 L445,110 L445,90 L455,90 L455,75 L470,75 L470,85 L485,85 L485,100 L500,100 L500,120 L515,120 L515,100 L525,100 L525,80 L535,80 L535,65 L550,65 L550,55 L562,55 L562,45 L572,45 L572,55 L582,55 L582,65 L595,65 L595,80 L610,80 L610,100 L625,100 L625,120 L645,120 L645,100 L660,100 L660,80 L675,80 L675,65 L688,65 L688,55 L700,55 L700,65 L712,65 L712,80 L725,80 L725,100 L740,100 L740,120 L760,120 L760,105 L775,105 L775,90 L785,90 L785,70 L795,70 L795,58 L808,58 L808,50 L820,50 L820,58 L832,58 L832,70 L845,70 L845,90 L860,90 L860,110 L878,110 L878,130 L895,130 L895,110 L910,110 L910,90 L920,90 L920,75 L930,75 L930,60 L942,60 L942,52 L955,52 L955,60 L968,60 L968,75 L982,75 L982,95 L998,95 L998,115 L1015,115 L1015,135 L1030,135 L1030,115 L1048,115 L1048,95 L1062,95 L1062,80 L1075,80 L1075,65 L1088,65 L1088,55 L1100,55 L1100,65 L1112,65 L1112,80 L1125,80 L1125,100 L1140,100 L1140,120 L1158,120 L1158,100 L1172,100 L1172,115 L1185,115 L1185,130 L1200,130 L1200,115 L1215,115 L1215,130 L1230,130 L1230,145 L1250,145 L1250,130 L1265,130 L1265,145 L1285,145 L1285,130 L1300,130 L1300,145 L1320,145 L1320,130 L1340,130 L1340,145 L1360,145 L1360,130 L1380,130 L1380,145 L1440,145 L1440,200 Z"
        />
      </svg>

      {/* Title */}
      <div className="relative z-10">
        <h1 className="font-serif text-4xl md:text-5xl text-white mb-4 leading-tight">
          {title}
        </h1>
        <span
          className="block w-20 h-[2px] mx-auto"
          style={{ background: "#9A7B2F" }}
        />
      </div>
    </div>
  );
}
