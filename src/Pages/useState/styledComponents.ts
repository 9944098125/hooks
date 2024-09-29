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
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const OutlinedContainer = styled.div<OutlinedContainerProps>`
	box-shadow: ${(props) =>
		props.direction === "row" ? "none" : "1px 1px 2px 1px violet"};
	padding: 15px 20px;
	border-radius: 9px;
	text-align: center;
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
	width: 100%;
	&:hover {
		padding: 8px 10px;
		font-size: 22px;
		transition: 0.5s;
	}
`;

export const InputContainer = styled.div`
	margin-bottom: 30px;
	width: 100%;
	display: flex;
	align-items: center;
`;

export const InputField = styled.input`
	height: 45px;
	width: 100%;
	padding: 4px 10px;
	border: none;
	box-shadow: 1px 1px 1px 1px violet;
	border-radius: 9px;
	&:active,
	&:focus {
		outline: none;
		border: 2px solid violet;
		height: 55px;
	}
`;

export const Form = styled.form`
	width: 100% !important;
	height: 100%;
`;
