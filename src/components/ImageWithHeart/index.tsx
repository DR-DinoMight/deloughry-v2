import "./style.css";

interface Props {
  image: string;
  isLiked: boolean;
}

export const ImageWithHeart: React.FC<Props> = ({ image, isLiked, className }) => {
  return (
    <div className={className}>
      <img src={image} className="h-full w-full" alt="Currently now-playing image" />
      {isLiked && (
        <div className="absolute inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.3)] ">
          <svg
            className="thumbsUp h-[70%] w-[70%] fill-accent-bg stroke-accent shadow-lg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            ></path>
          </svg>
        </div>
      )}
    </div>
  );
};
