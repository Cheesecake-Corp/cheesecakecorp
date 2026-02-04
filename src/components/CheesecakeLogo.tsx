export function CheesecakeLogo({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Plate */}
      <ellipse
        cx="50"
        cy="75"
        rx="35"
        ry="8"
        fill="currentColor"
        className="text-purple-300"
        opacity="0.3"
      />
      
      {/* Cake base */}
      <path
        d="M 25 70 Q 25 75 50 75 Q 75 75 75 70 L 75 50 Q 75 45 50 45 Q 25 45 25 50 Z"
        fill="currentColor"
        className="text-yellow-200"
      />
      
      {/* Cake side shadow */}
      <path
        d="M 25 50 L 25 70 Q 25 75 50 75 L 50 45 Q 25 45 25 50 Z"
        fill="currentColor"
        className="text-yellow-300"
        opacity="0.6"
      />
      
      {/* Cake top layer */}
      <ellipse
        cx="50"
        cy="50"
        rx="25"
        ry="8"
        fill="currentColor"
        className="text-yellow-100"
      />
      
      {/* Graham cracker crust */}
      <path
        d="M 27 70 Q 27 73 50 73 Q 73 73 73 70 L 73 68 Q 73 65 50 65 Q 27 65 27 68 Z"
        fill="currentColor"
        className="text-amber-600"
      />
      
      {/* Strawberry on top */}
      <circle
        cx="50"
        cy="40"
        r="6"
        fill="currentColor"
        className="text-pink-400"
      />
      
      {/* Strawberry leaf */}
      <path
        d="M 48 37 L 50 35 L 52 37"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-green-400"
        fill="none"
      />
    </svg>
  );
}
