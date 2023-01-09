import ProductList from "../components/ProductList/ProductList";
import ProductListHeader from "../components/ProductList/ProductListHeader";
import { atoms } from "../theme/sprinkles.css";

const Home = ({ products }: any) => {
  return (
    <main
      className={atoms({
        display: "flex",
        flexDirection: "column",
        paddingY: 14,
      })}
    >
      <ProductListHeader title="Popular Searches" />
      <ProductList products={products} />
    </main>
  );
};
export async function getServerSideProps() {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: '{"__page":1,"limit":20,"language":"sv","market":1,"pricelist":19,"__country":"SE","categories":["3"]}',
  };

  const products = await fetch("http://localhost:3053/centra-search", options)
    .then((response) => response.json())
    .then((response) => response.mappedProducts);

  return {
    props: { products }, // will be passed to the page component as props
  };
}

export default Home;
