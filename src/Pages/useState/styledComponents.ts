import styled from "styled-components";

type ButtonProps = {
	variant: string;
};

type OutlinedContainerProps = {
	direction?: string;
};

export const PageContainer = styled.div`
	height: calc(100vh - 70px);
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const OutlinedContainer = styled.div<OutlinedContainerProps>`
	box-shadow: ${(props) =>
		props.direction === "row" ? "none" : "1px 1px 2px 1px violet"};
	padding: 15px 20px;
	border-radius: 9px;
	display: flex;
	flex-direction: ${(props) => (props.direction === "row" ? "row" : "column")};
	align-items: center;
	justify-content: ${(props) =>
		props.direction === "row" ? "space-between" : "center"};
	gap: 30px;
	height: 50%;
	width: 50%;
`;

export const Title = styled.h4`
	font-size: 1.5rem;
	font-weight: 600;
`;

export const Button = styled.button<ButtonProps>`
	border: none;
	border-radius: 9px;
	background-color: ${(props) =>
		props.variant === "destructive" ? "red" : "violet"};
	color: #fff;
	padding: 5px 8px;
	font-size: 19px;
	font-weight: 600;
	&:hover {
		padding: 8px 10px;
		font-size: 22px;
		transition: 0.5s;
	}
`;
