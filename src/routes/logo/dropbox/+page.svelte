<div class="container">
	<div class="top-left-flap" />
	<div class="top-right-flap" />
	<div class="bottom-left-flap" />
	<div class="bottom-right-flap" />

	<div class="box-side" />
	<div class="box-bottom" />
</div>

<style lang="scss">
	$color-background: #fff;
	$color-dropbox-blue: #007ee5;

	.container {
		width: 345px;
		height: 350px;

		position: relative;

		div {
			opacity: 0;
			background-color: $color-dropbox-blue;
		}
	}

	.top-left-flap {
		width: 150px;
		height: 100px;

		position: absolute;
		top: 0;
		left: 0;

		transform: rotate(-32deg) skewX(10deg);

		animation: fade-in 0.5s ease-in-out forwards;
	}

	.top-right-flap {
		width: 150px;
		height: 100px;

		position: absolute;
		top: 0;
		right: 0;

		transform: rotate(32deg) skewX(-10deg);

		animation: fade-in 0.5s ease-in-out forwards;
		animation-delay: 0.5s;
	}

	.bottom-left-flap {
		width: 156px;
		height: 100px;

		position: absolute;
		z-index: 10;
		top: 157px;
		left: 0;
		border-bottom: 10px solid $color-background;
		border-right: 10px solid $color-background;

		transform: rotate(32deg) skewX(-10deg);

		animation: fade-in 0.5s ease-in-out forwards;
		animation-delay: 1s;
	}

	.bottom-right-flap {
		width: 156px;
		height: 100px;

		position: absolute;
		z-index: 10;
		top: 157px;
		right: 0;
		border-bottom: 10px solid $color-background;
		border-left: 10px solid $color-background;

		transform: rotate(-32deg) skewX(10deg);

		animation: fade-in 0.5s ease-in-out forwards;
		animation-delay: 1.5s;
	}

	.box-side {
		width: 230px;
		height: 70px;

		position: absolute;
		z-index: 0;
		top: 220px;
		left: calc((345px - 230px) / 2);

		transform: translateY(-40px);
		animation: fade-in-down 0.5s ease-in-out forwards;
		animation-delay: 2s;
	}

	.box-bottom {
		width: 0;
		height: 0;

		position: absolute;
		top: 290px;
		left: calc((345px - 230px) / 2);
		background-color: transparent !important;

		border-left: 115px solid transparent;
		border-right: 115px solid transparent;
		border-bottom: 100px solid transparent;
		border-top: 60px solid $color-dropbox-blue;

		transform: translateY(-40px);
		animation: fade-in-down 0.5s ease-in-out forwards;
		animation-delay: 2s;
	}

	@keyframes fade-in {
		100% {
			opacity: 1;
		}
	}

	@keyframes fade-in-down {
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
