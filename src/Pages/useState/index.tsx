import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import {
	Button,
	InputContainer,
	InputField,
	OutlinedContainer,
	PageContainer,
	Title,
	Form,
} from "./styledComponents";

const StateHook = () => {
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [user, setUser] = useState<{ email: string; password: string }>({
		email: "",
		password: "",
	});
	const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
	function handleSubmit() {
		if (user?.email && user?.password) {
			return (
				<div>
					<Title>EMAIL: {user?.email}</Title>
					<Title>PASSWORD: {user?.password}</Title>
				</div>
			);
		}
	}
	return (
		<React.Fragment>
			<PageContainer>
				<OutlinedContainer>
					<Title>Login</Title>
					<InputContainer>
						<InputField
							type="text"
							placeholder="Enter Email Address..."
							value={user.email}
							onChange={(e: any) => setUser({ ...user, email: e.target.value })}
						/>
					</InputContainer>
					<InputContainer>
						<InputField
							type={showPassword ? "text" : "password"}
							placeholder="Enter Password..."
							value={user.password}
							onChange={(e: any) =>
								setUser({ ...user, password: e.target.value })
							}
						/>
						{showPassword ? (
							<FaEyeSlash
								className="cursor-pointer ml-[-25px]"
								onClick={() => setShowPassword(false)}
							/>
						) : (
							<FaEye
								className="cursor-pointer ml-[-25px]"
								onClick={() => setShowPassword(true)}
							/>
						)}
					</InputContainer>
					<Button
						onClick={() => setFormSubmitted(true)}
						variant=""
						type="submit">
						Submit
					</Button>
				</OutlinedContainer>
				{formSubmitted && handleSubmit()}
			</PageContainer>
		</React.Fragment>
	);
};

export default StateHook;
