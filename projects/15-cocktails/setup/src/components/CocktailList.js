import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
	const { cocktails, loading } = useGlobalContext();

	if (loading) {
		return <Loading />;
	}
	// console.log(cocktails);
	if (cocktails.length < 1) {
		console.log(cocktails);
		return (
			<h2 className="section-title">
				no cocktails matched your search criteria
			</h2>
		);
	}
	return (
		<div>
			<h2>cocktail list</h2>
		</div>
	);
};

export default CocktailList;
