<div class="container">
	<div class="one" />
	<div class="two">
		<div class="dots" />
	</div>
</div>

<style lang="scss">
	$color-background: #ffffff;
	$color-dominos-red: #e31837;
	$color-dominos-blue: #006491;

	.container {
		width: 200px;
		height: 400px;

		gap: 15px;
		display: grid;
		grid-template-rows: 1fr 1fr;

		transform: rotate(45deg);

		div {
			display: flex;
			align-items: center;
			justify-content: center;
			position: relative;
		}
	}

	.dot {
		content: '';

		width: 65px;
		height: 65px;
		border-radius: 50%;

		background-color: $color-background;
	}

	.one {
		opacity: 0;
		background-color: $color-dominos-red;
		border-top-left-radius: 16px;
		border-top-right-radius: 16px;

		animation: fade-in 0.5s ease-in-out 0.25s forwards;

		&::after {
			@extend .dot;
		}
	}

	.two {
		opacity: 0;
		background-color: $color-dominos-blue;
		border-bottom-left-radius: 16px;
		border-bottom-right-radius: 16px;

		animation: fade-in 0.5s ease-in-out 0.75s forwards;

		.dots {
			gap: 30px;
			display: flex;

			transform: rotate(-45deg);

			&::before,
			&::after {
				@extend .dot;
			}
		}
	}

	@keyframes fade-in {
		0% {
			top: 40px;
			opacity: 0;
		}

		100% {
			top: 0;
			opacity: 1;
		}
	}
</style>
