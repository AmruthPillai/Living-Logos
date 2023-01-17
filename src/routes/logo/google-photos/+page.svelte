<div class="container">
	<div class="blade blue" />
	<div class="blade red" />
	<div class="blade yellow" />
	<div class="blade green" />
</div>

<style lang="scss">
	$color-background: #ffffff;
	$color-google-blue: #4080ef;
	$color-google-red: #e54132;
	$color-google-yellow: #f6b700;
	$color-google-green: #31a452;

	.container {
		width: 400px;
		height: 400px;
		position: relative;

		animation: fast-spin 1.5s ease-out forwards;
	}

	.blade {
		width: 200px;
		height: 108px;
		border-radius: 0 8px 100px 100px;

		position: absolute;
		top: 200px;
		left: 200px;
		transform-origin: top left;

		&.blue {
			background-color: $color-google-blue;
		}

		&.red {
			transform: rotate(-90deg);
			background-color: $color-google-red;
		}

		&.yellow {
			transform: rotate(-180deg);
			background-color: $color-google-yellow;
		}

		&.green {
			transform: rotate(-270deg);
			background-color: $color-google-green;
		}

		@keyframes fast-spin {
			0% {
				opacity: 0;
				transform: rotate(2500deg);
			}

			25% {
				opacity: 1;
			}

			100% {
				opacity: 1;
				transform: rotate(0deg);
			}
		}
	}
</style>
