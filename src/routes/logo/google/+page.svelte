<div class="container" />

<style lang="scss">
	$color-background: #ffffff;
	$color-google-red: #eb4335;
	$color-google-yellow: #fbbc05;
	$color-google-green: #34a853;
	$color-google-blue: #4285f4;

	$bounce-in: cubic-bezier(0.25, 0.75, 0.5, 1.25);

	.container {
		width: 400px;
		height: 400px;

		border-top: 65px solid $color-google-red;
		border-left: 65px solid $color-google-yellow;
		border-bottom: 65px solid $color-google-green;
		border-right: 65px solid $color-google-blue;

		border-radius: 50%;
		position: relative;
		background-color: $color-background;

		animation: google-animation 2s linear forwards;

		&::before {
			content: '';

			width: 125px;
			height: 65px;

			position: absolute;
			top: 50%;
			right: 0;
			margin-top: -32.5px;
			background-color: $color-google-blue;

			transform: scaleX(0);
			transform-origin: right;
			animation: scale-x-animation 0.4s $bounce-in 1.75s forwards;
		}

		&::after {
			content: '';

			width: 0;
			height: 0;

			position: absolute;
			top: calc(102.5px - 200px);
			right: -65px;

			border-top: 200px solid transparent;
			border-right: 200px solid $color-background;
		}
	}

	@keyframes google-animation {
		0% {
			border-top-color: $color-background;
			border-left-color: $color-background;
			border-bottom-color: $color-background;
			border-right-color: $color-background;
		}

		25% {
			border-top-color: $color-google-red;
			border-left-color: $color-background;
			border-bottom-color: $color-background;
			border-right-color: $color-background;
		}

		50% {
			border-top-color: $color-google-red;
			border-left-color: $color-google-yellow;
			border-bottom-color: $color-background;
			border-right-color: $color-background;
		}

		75% {
			border-top-color: $color-google-red;
			border-left-color: $color-google-yellow;
			border-bottom-color: $color-google-green;
			border-right-color: $color-background;
		}

		100% {
			border-top-color: $color-google-red;
			border-left-color: $color-google-yellow;
			border-bottom-color: $color-google-green;
			border-right-color: $color-google-blue;
		}
	}

	@keyframes scale-x-animation {
		0% {
			transform: scaleX(0);
		}

		100% {
			transform: scaleX(1);
		}
	}
</style>
