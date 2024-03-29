import React, { useState, useEffect } from "react";
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;

const useFetch = (urlParams) => {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState({ show: false, msg: "" });
	const [data, setData] = useState(null);

	const fetchMovies = async (url) => {
		// console.log("url: ", url);
		setIsLoading(true);
		try {
			const response = await fetch(url);
			// console.log("response: ", response);
			const data = await response.json();
			// console.log("data: ", data);

			if (data.Response === "True") {
				setData(data.Search || data);
				// console.log("data.Search: ", data.Search);
				// console.log("data: ", data);
				setError({ show: false, msg: "" });
			} else {
				setError({ show: true, msg: data.Error });
			}
			setIsLoading(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		// console.log("API End Point: ", API_ENDPOINT);
		// console.log("urlParams: ", urlParams);
		fetchMovies(`${API_ENDPOINT}${urlParams}`);
	}, [urlParams]);
	// console.log("data: ", data);
	return { isLoading, error, data };
};

export default useFetch;
