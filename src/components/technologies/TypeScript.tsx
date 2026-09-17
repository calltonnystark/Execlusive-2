export default function GlowCircle() {
  return (
    <svg
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Blue glow */}
        <filter
          id="glow"
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feGaussianBlur
            stdDeviation="5"
            result="blur"
          />

          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Soft outer blue light */}
        <radialGradient id="halo">
          <stop
            offset="55%"
            stopColor="#00c8ff"
            stopOpacity="0.8"
          />

          <stop
            offset="75%"
            stopColor="#008cff"
            stopOpacity="0.4"
          />

          <stop
            offset="100%"
            stopColor="#0066ff"
            stopOpacity="0"
          />
        </radialGradient>
      </defs>

      {/* Black background */}
      <rect
        width="128"
        height="128"
        fill="#000"
      />

      {/* Large blue halo */}
      <circle
        cx="64"
        cy="64"
        r="55"
        fill="url(#halo)"
      />

      {/* Main glowing ring */}
      <circle
        cx="64"
        cy="64"
        r="38"
        fill="#000"
        stroke="#00d9ff"
        strokeWidth="3"
        filter="url(#glow)"
      />

      {/* Bright inner edge */}
      <circle
        cx="64"
        cy="64"
        r="38"
        fill="none"
        stroke="#8eeeff"
        strokeWidth="1"
      />
    </svg>
  );
}