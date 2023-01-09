import { Grid } from "../Grid/Grid";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = ({ products }: any) => {
  console.log(products);
  return (
    <Grid layout="grid" gapX={1} gapY={11}>
      {products.map(
        ({ price, name, mainImage, shortDescription }: any, index: number) => {
          return (
            <ProductCard
              key={index}
              price={price}
              name={name}
              image={mainImage}
              shortDescription="This is a two row description lorem ipsum dolor sit amet consectetur commodo ..."
            />
          );
        }
      )}
    </Grid>
  );
};

export default ProductList;
