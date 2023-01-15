<div class="container">
	<div class="left" />
	<div class="center" />
	<div class="right" />
	<div class="clip" />
</div>

<style lang="scss">
	$color-background: #151515;
	$color-netflix-600: #e50914;
	$color-netflix-800: #b1060f;

	.container {
		width: calc(80px * 3);
		height: 500px;

		.left,
		.center,
		.right {
			position: absolute;
			width: 80px;
			height: 0%;
			animation: netflix-animation 0.5s ease-in-out forwards;
		}

		.left,
		.right {
			background-color: $color-netflix-800;
		}

		.left {
			left: 0;
			bottom: 0;
			animation-delay: calc(0.5s * 0);
		}

		.center {
			top: 0;
			left: 0;

			z-index: 10;
			transform: skewX(calc(80deg / 4.5));
			transform-origin: top left;

			animation-delay: calc(0.5s * 1);
			background-color: $color-netflix-600;
			box-shadow: 0 0 64px rgba(0, 0, 0, 0.5);
		}

		.right {
			right: 0;
			bottom: 0;

			animation-delay: calc(0.5s * 2);
		}

		.clip {
			position: absolute;
			z-index: 20;
			left: -40px;
			bottom: -24px;

			width: calc((80px * 3) + 80px);
			border-radius: 50%;
			height: 36px;

			background-color: $color-background;
		}
	}

	@keyframes netflix-animation {
		0% {
			height: 0%;
		}

		100% {
			height: 100%;
		}
	}
</style>
