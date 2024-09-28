import React, { useState } from "react";
import {
	Button,
	OutlinedContainer,
	PageContainer,
	Title,
} from "./styledComponents";

const StateHook = () => {
	const [count, setCount] = useState(0);

	function increment() {
		setCount((prevCount) => prevCount + 1);
	}

	function decrement() {
		setCount((prevCount) => (prevCount < 1 ? 0 : prevCount - 1));
	}

	return (
		<React.Fragment>
			<PageContainer>
				<OutlinedContainer>
					<Title>Hola ! you have Clicked this button {count} times</Title>
					<OutlinedContainer direction="row">
						<Button onClick={decrement} variant="destructive">
							Decrement
						</Button>
						<Button onClick={increment} variant="primary">
							Increment
						</Button>
					</OutlinedContainer>
				</OutlinedContainer>
			</PageContainer>
		</React.Fragment>
	);
};

export default StateHook;
