import Image from "next/image";
import { atoms } from "../../theme/sprinkles.css";

const ProductCard = ({ price, name, image, shortDescription }: any) => {
  return (
    <div
      className={atoms({
        gridColumn: { default: "span-2", lg: "span-3" },
        flexDirection: "column",
        display: "flex",
        gap: 4,
      })}
    >
      <div
        className={atoms({
          aspectRatio: "3/4",
          backgroundColor: "lightGray",
          width: "full",
          position: "relative",
        })}
      >
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 50vw,
          25vw"
          style={{ objectFit: "cover" }}
          className={atoms({
            width: "full",
            padding: { default: 6, lg: 10 },
            transform: { hover: "scale-105" },
            transition: "transform",
            cursor: "pointer",
          })}
        />
      </div>
      {/* Content Section */}
      <div
        className={atoms({
          display: "flex",
          flexDirection: { default: "column", lg: "row" },
          justifyContent: "space-between",
          paddingX: 6,
          gap: {
            default: 4,
            lg: 0,
          },
        })}
      >
        <div
          className={atoms({
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
          })}
        >
          <span
            className={atoms({
              fontSize: "sm",
              fontWeight: "medium",
              textTransform: "uppercase",
            })}
          >
            {name}
          </span>
          <span className={atoms({ fontSize: "sm", fontWeight: "normal" })}>
            {shortDescription}
          </span>
        </div>
        <span className={atoms({ fontSize: "sm", fontWeight: "medium" })}>
          {price}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
