<div class="container">
	<div class="play-button" />
</div>

<style lang="scss">
	$color-youtube: #ff0000;
	$color-background: #151515;

	$elastic: cubic-bezier(0.175, 0.885, 0.32, 1.275);

	.container {
		width: 400px;
		height: 300px;

		overflow: hidden;
		border-radius: 20% / 10%;
		background-color: $color-youtube;

		display: flex;
		align-items: center;
		justify-content: center;

		&::after {
			$width: 446px;
			$height: 278px;

			width: $width;
			height: $height;

			content: '';
			position: absolute;
			left: calc((400px - $width) / 2);
			top: calc((300px - $height) / 2);

			border-radius: 10% / 45%;
			background-color: $color-youtube;
		}
	}

	.play-button {
		$size: 80px;
		$offset: 60px;

		width: 0;
		height: 0;
		z-index: 10;
		margin-left: 80px;
		transform-origin: top left;

		border-top: $size solid transparent;
		border-bottom: $size solid transparent;
		border-right: $size solid transparent;
		border-left: ($size + $offset) solid white;

		animation: play-animation 1s $elastic forwards;
	}

	@keyframes play-animation {
		0% {
			opacity: 0.25;
			margin-left: -500px;
			transform: rotate(-40deg);
		}

		80% {
			margin-left: 200px;
		}

		100% {
			opacity: 1;
			margin-left: 80px;
			transform: rotate(0deg);
		}
	}
</style>
