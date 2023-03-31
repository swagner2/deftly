<!DOCTYPE html>
<html>
<head>
	<title>Deftly AI Newsletter Signup</title>
	<style>
		body {
			font-family: Arial, sans-serif;
			background-color: #f1f1f1;
		}
		.container {
			max-width: 500px;
			margin: 0 auto;
			padding: 20px;
			background-color: #fff;
			box-shadow: 0 0 10px rgba(0,0,0,0.2);
			border-radius: 5px;
			text-align: center;
		}
		h1 {
			margin-top: 0;
			font-size: 36px;
			color: #333;
		}
		input[type="email"] {
			width: 100%;
			padding: 12px;
			border: 1px solid #ccc;
			border-radius: 4px;
			box-sizing: border-box;
			margin-top: 20px;
			margin-bottom: 20px;
			font-size: 16px;
		}
		input[type="submit"] {
			background-color: #4CAF50;
			color: #fff;
			padding: 12px 20px;
			border: none;
			border-radius: 4px;
			cursor: pointer;
			font-size: 16px;
		}
		input[type="submit"]:hover {
			background-color: #45a049;
		}
		#error-message {
			color: red;
			font-size: 14px;
			margin-top: 10px;
		}
	</style>
</head>
<body>
	<div class="container">
		<h1>Sign up for the Deftly AI Newsletter</h1>
		<p>Enter your email address to receive our latest news and updates.</p>
		<form id="signup-form" action="#" method="POST">
			<input type="email" name="email" id="email-input" placeholder="Enter your email address" required>
			<input type="submit" id="submit-button" value="Sign up">
			<div id="error-message"></div>
		</form>
	</div>

	<script>
		// Get form elements
		const form = document.getElementById("signup-form");
		const emailInput = document.getElementById("email-input");
		const submitButton = document.getElementById("submit-button");
		const errorMessage = document.getElementById("error-message");

		// Handle form submission
		form.addEventListener("submit", async (e) => {
			e.preventDefault();

			// Disable submit button
			submitButton.disabled = true;
			submitButton.value = "Submitting...";

			// Send email to Deftly AI newsletter service
			const response = await fetch("https://api.deftlyai.com/newsletter/signup", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email: emailInput.value }),
			});

			// Handle response
			if (response.ok) {
				// Show success message
				errorMessage.innerText = "Thank you for signing up!";
				errorMessage.style.color = "green";
				emailInput.value = "";
			} else {
				// Show error message
				const data = await response.json();
				errorMessage.innerText = data.message || "An error occurred. Please try again later.";
			}

			// Enable submit button
			submitButton.disabled = false;
			submitButton.value = "Sign up
