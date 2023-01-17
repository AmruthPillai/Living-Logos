<div class="container">
	<div class="path" />
	<div class="path" />
	<div class="path" />
</div>

<style lang="scss">
	$color-background: #fff;
	$color-react-blue: #61dafb;

	.container {
		width: 400px;
		height: 400px;

		position: relative;

		display: flex;
		align-items: center;
		justify-content: center;

		animation: spin 10s linear infinite;

		.path {
			width: 400px;
			height: 160px;

			position: absolute;
			top: 50%;
			left: 50%;
			margin-top: -80px;
			margin-left: -200px;

			border-radius: 50%;
			border: 18px solid $color-react-blue;

			&:nth-child(2) {
				transform: rotate(60deg);
			}

			&:nth-child(3) {
				transform: rotate(120deg);
			}
		}

		&::after {
			content: '';

			width: 70px;
			height: 70px;
			border-radius: 50%;

			background-color: $color-react-blue;
		}
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
</style>
