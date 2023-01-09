import { atoms } from "../../theme/sprinkles.css";

const ProductListHeader = ({ title }: { title: string }) => {
  return (
    <div
      className={atoms({
        display: "flex",
        marginBottom: { default: 8, lg: 10 },
        paddingX: { default: 6, lg: 20 },
      })}
    >
      <h1
        className={atoms({
          textTransform: "uppercase",
          fontWeight: "normal",
          fontSize: { default: "2xl", lg: "4xl" },
        })}
      >
        {title}
      </h1>
    </div>
  );
};

export default ProductListHeader;
