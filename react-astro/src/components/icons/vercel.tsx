import SVG from "@/components/svg";

const VercelIcon = () => (
  <SVG
    data-testid="geist-icon"
    strokeLinejoin="round"
    viewBox="0 0 16 16"
    color="#000"
  >
    <g clipPath="url(#clip0_872_3186)">
      <circle
        cx="8"
        cy="8"
        r="7.25"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></circle>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 4.5L11.5 10.625H4.5L8 4.5Z"
        fill="white"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_872_3186">
        <rect width="16" height="16" fill="white"></rect>
      </clipPath>
    </defs>
  </SVG>
);

export default VercelIcon;
