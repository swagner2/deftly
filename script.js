<script>
		// JavaScript code for handling the form submission
		const form = document.getElementById('signup-form');

		form.addEventListener('submit', async (event) => {
			event.preventDefault();

			const email = form.email.value;
			if (!email) {
				alert('Please enter your email address');
				return;
			}

			// Call the SendFox API to add the email address to your SendFox list
			const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjVlZGQ3NGQxMDE1NzMyMGFhZDE0YWQ0YmE2ZmY4YWQxZWY5NmQ0NTY1NWFkOTBiZmM3MGI0MWVjZGMwMDc3NjI1YmU3ZGRlYzExMmExNDJlIn0.eyJhdWQiOiI0IiwianRpIjoiNWVkZDc0ZDEwMTU3MzIwYWFkMTRhZDRiYTZmZjhhZDFlZjk2ZDQ1NjU1YWQ5MGJmYzcwYjQxZWNkYzAwNzc2MjViZTdkZGVjMTEyYTE0MmUiLCJpYXQiOjE2ODAyOTkyNjMsIm5iZiI6MTY4MDI5OTI2MywiZXhwIjoxNzExOTIxNjYzLCJzdWIiOiIxMDUzODUiLCJzY29wZXMiOltdfQ.dJJprEA2SRJaEowhe-xglaeTyAQ_d9vsp3hBjFDwi-CJ3a2pZIC4crNto4Z5TIwbQdCDz88w4trpTCeg7GaXEvGbmi6uDzpoEoqdI6cZh1h6CNrHF16Qmx87yEYERpN4CNp-lBmFsBOJv5XSGA6hrlKh4g2Rs5hZlBnMfxuBV27zbHU0MZmownEAOBYmmf2Bq6XY7Sb1HEJLWdno8obbht0c2gfwo5Gnk_Vg_QwA2HwNns-eu12HoMerB5QsBZ0zPXvM3OyUx8f8H_vxbORiCbc7xouQ0l7DH_TawsEBFIYV1yOeQtX3_0rLxOz_IyqUv5zhCDTz9m2ajKBrU4cREu8NbUHkuQYcCJjos0aDk7BWkTeDQR_Pysnyp-_5HhzNh27f7kXmsJu7stx75m0s9M1ZcUqEAmRdGM1VF6ftPnaH0LuR8gjepWhJCw8l-WXt1JGynSkGHUqhawkpWdPsjLad1XKI7MeBnmV6jjluN1MIrL0ITsgB8uNleLzz9wiD8o8SUFSgEMUG1WgTzIjz66uq9H3x75QBJaanNP2pNtCDiFZqYiBUS006DZ6s9wl3pk59Px-VmqbnFc2dX_wETC9IfI5eHPTi9WNbOodWNIr-PHEJebwRS5neEOph4Z9yTOMbIzE2-PfllZgGAWZd3Rt5vCpQAort-CSmn7VPy-c';
			const listId = '411571';
			const url = `https://api.sendfox.com/contacts/${listId}`;
			const response = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${apiKey}`
				},
				body: JSON.stringify({
					email: email
				})
			});

			if (response.ok) {
				alert('Thank you for signing up!');
				form.reset();
			} else {
				alert('Oops, something went wrong. Please try again later.');
			}
		});
	</script>
