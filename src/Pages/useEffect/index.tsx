import React, { useEffect, useState } from "react";

type Product = {
	title: string;
	description: string;
	price: number;
	rating: number;
	dimensions: {
		depth: number;
		height: number;
		width: number;
	};
	images: string[];
	category: string;
};
const SideEffectHook = () => {
	const [products, setProducts] = useState<Product[] | undefined>();
	useEffect(() => {
		async function fetchData() {
			await fetch("https://dummyjson.com/products", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			})
				.then((result) => result.json())
				.then((data) => {
					setProducts(data?.products);
					console.log(data?.products);
				})
				.catch((err) => console.log(err));
		}
		fetchData();
	}, []);

	return (
		<React.Fragment>
			<div className="mt-10 text-center">
				{products?.map((product: any, idx: number) => {
					return (
						<div key={idx} className="shadow-xl rounded-default px-5 py-3">
							<img src={product?.images?.[0]} alt="" className="w-full h-19" />
							<div className="text-left">
								<h6 className="text-xl font-semibold text-violet-700 text-underline mb-8">
									{product?.title}
								</h6>
								<p className="text-md font-light">{product?.description}</p>
							</div>
						</div>
					);
				})}
			</div>
		</React.Fragment>
	);
};

export default SideEffectHook;
