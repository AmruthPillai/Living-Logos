<div class="container">
	<div class="line top" />
	<div class="line middle" />
	<div class="line bottom" />
</div>

<style lang="scss">
	$color-background: #fff;
	$color-spotify-green: #1ed760;

	.container {
		width: 400px;
		height: 400px;

		border-radius: 50%;
		transform: rotate(6deg);
		background-color: $color-spotify-green;
	}

	.line {
		opacity: 0;
		height: 120px;
		border-radius: 50%;
		position: absolute;

		border: 0px solid $color-background;
		border-left-color: transparent;
		border-right-color: transparent;
		border-bottom-color: transparent;

		animation: fade-in 0.5s ease-in-out 0.5s forwards;

		&::before,
		&::after {
			content: '';

			width: 34px;
			height: 34px;
			border-radius: 50%;
			background-color: $color-background;

			position: absolute;
			top: 0;
		}

		&::before {
			left: 0;
		}

		&::after {
			right: 0;
		}

		&.top {
			$size: 350px;

			width: $size;
			border-width: 34px;
			height: calc($size / 2);

			top: 120px;
			left: calc((400px - $size) / 2);

			animation-delay: 1s;

			&::before,
			&::after {
				width: 33px;
				height: 33px;
				margin-top: -6px;
			}

			&::before {
				margin-left: -1px;
			}

			&::after {
				margin-right: -1px;
			}
		}

		&.middle {
			$size: 300px;

			width: $size;
			border-width: 30px;
			height: calc($size / 2);

			top: 180px;
			left: calc((400px - $size) / 2);

			animation-delay: 0.5s;

			&::before,
			&::after {
				width: 29px;
				height: 29px;
				margin-top: -5.5px;
			}

			&::before {
				margin-left: -3px;
			}

			&::after {
				margin-right: -3px;
			}
		}

		&.bottom {
			$size: 250px;

			width: $size;
			border-width: 26px;
			height: calc($size / 2);

			top: 240px;
			left: calc((400px - $size) / 2);

			animation-delay: 0s;

			&::before,
			&::after {
				width: 25px;
				height: 25px;
				margin-top: -3px;
			}

			&::before {
				margin-left: -7px;
			}

			&::after {
				margin-right: -7px;
			}
		}
	}

	@keyframes fade-in {
		0% {
			margin-top: 50px;
			opacity: 0;
		}

		100% {
			margin-top: 0;
			opacity: 1;
		}
	}
</style>
