<div class="container">
	<div class="main-branch" />
	<div class="sub-branch" />
</div>

<style lang="scss">
	$color-git: #f05032;
	$color-background: #ffffff;

	.container {
		width: 300px;
		height: 300px;
		position: relative;
		border-radius: 24px;
		transform: rotate(45deg);
		background-color: $color-git;

		animation: rotation-anim 2.5s ease-in-out forwards;
	}

	.main-branch {
		width: 0px;
		height: 25px;
		position: absolute;
		top: 80px;
		left: -1px;
		border-top-right-radius: 4px;
		border-bottom-right-radius: 4px;
		background-color: $color-background;

		animation: extend-long 1s ease-in-out forwards;

		&::before {
			content: '';
			position: absolute;
			top: -17.5px;
			left: 60px;
			width: 60px;
			height: 60px;
			opacity: 0;
			border-radius: 50%;
			background-color: $color-background;

			animation: grow 0.5s ease-in-out 0.35s forwards;
		}

		&::after {
			content: '';
			position: absolute;
			top: -17.5px;
			right: -30px;
			width: 60px;
			height: 60px;
			opacity: 0;
			border-radius: 50%;
			background-color: $color-background;

			animation: grow 1s ease-in-out 0.75s forwards;
		}
	}

	.sub-branch {
		width: 0px;
		height: 25px;
		position: absolute;
		top: 80px;
		left: 90px;
		border-top-right-radius: 4px;
		border-bottom-right-radius: 4px;
		background-color: $color-background;
		transform-origin: top left;
		transform: rotate(45deg);

		animation: extend-short 1s ease-in-out 0.75s forwards;

		&::after {
			content: '';
			position: absolute;
			top: -17.5px;
			right: -30px;
			width: 60px;
			height: 60px;
			opacity: 0;
			border-radius: 50%;
			background-color: $color-background;

			animation: grow 1s ease-in-out 1.25s forwards;
		}
	}

	@keyframes rotation-anim {
		0% {
			opacity: 0;
			transform: rotate(-5deg);
		}

		25% {
			opacity: 1;
		}

		100% {
			transform: rotate(45deg);
		}
	}

	@keyframes extend-long {
		0% {
			width: 0px;
		}

		50% {
			width: 90px;
		}

		100% {
			width: 210px;
		}
	}

	@keyframes extend-short {
		0% {
			width: 0px;
		}

		100% {
			width: 180px;
		}
	}

	@keyframes grow {
		0% {
			opacity: 0;
			transform: scale(0);
		}

		1% {
			opacity: 1;
			transform: scale(0);
		}

		100% {
			opacity: 1;
			transform: scale(1);
		}
	}
</style>
