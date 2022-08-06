import { Link, useParams } from "react-router-dom";
import products from "../data";
const SingleProduct = () => {
	const { productId } = useParams();
	return (
		<section className="section product">
			<h4>{productId}</h4>
		</section>
	);
};

export default SingleProduct;
