import { css } from 'emotion';

const leftColor = 'hsl(220, 32%, 20%)';
const rightColor = '#c7f4ff';

const onboardingStyles = css`
	display: flex;
	height: 100vh;
	position: relative;
	color: #fff;
	font-family: 'Open Sans', sans-serif;
	a.dashed {
		border-bottom: 1px dashed #337ab7;
		&:hover,
		&:focus {
			text-decoration: none;
			border-bottom: 1px solid #337ab7;
		}
	}
	.skip-link {
		color: #424242;
		position: absolute;
		top: 30px;
		right: 40px;
		padding: 5px 10px;
		border:0;
		cursor: pointer;
		border-radius: 4px;
		background-color: rgba(255, 255, 255, 0.5);
		transition: all 0.3s ease;
		&:hover,
		&:focus {
			color: #111;
			background-color: #fff;
			text-decoration: none;
		}
	}
	mark {
		background-color: #ff0;
	}
	.loader {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgba(0, 0, 0, 0.85);
		color: #fff;
		font-size: 16px;
		z-index: 200;
		p {
			max-width: 500px;
			margin: 0 auto;
		}
	}
	.left {
		width: 300px;
		height: 100%;
		background-color: ${leftColor};
		padding: 40px 20px;
		header {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			letter-spacing: 0.04rem;
			color: #ccc;
		}
		.meter {
			width: 100%;
			height: 4px;
			background-color: #666;
			border-radius: 999em;
			margin: 15px 0 35px;
			overflow: hidden;
			.color {
				background: ${rightColor};
				height: 100%;
				transition: all 0.3s ease;
			}
		}
		ul {
			margin: 0;
			padding: 0;
			list-style: none;
			li a {
				display: flex;
				align-items: center;
				padding: 8px 15px;
				border-radius: 6px;
				color: #ccc;
				position: relative;
				cursor: pointer;
				margin: 6px 0;
				&:hover,
				&:focus {
					text-decoration: none;
				}
				&.active {
					color: ${rightColor};
				}
			}
		}
	}
	.right {
		width: calc(100% - 300px);
		height: 100%;
		background-color: ${rightColor};
		padding: 50px 20px;
		text-align: left;
		position: absolute;
		right: 0;
		color: #424242;
		overflow-y: scroll;
		header.vcenter {
			padding-top: 10px;
		}
		.container {
			max-width: 950px;
			margin: 20px auto;
			iframe {
				margin: 40px 0;
			}
		}
	}
	.wrapper {
		display: flex;
		flex-direction: row;
		margin-bottom: 35px;
		.content {
			flex-grow: 1;
			margin: 0 0 0 30px;
		}
	}
	header {
		h2 {
			margin: 0 0 6px 0;
			font-weight: 700;
			letter-spacing: -1px;
			line-height: 42px;
		}
		p {
			margin: 15px 0;
			font-size: 18px;
			line-height: 28px; // max-width: 550px;
		}
		img {
			width: 70px;
		}
	}
	p {
		max-width: 750px;
		margin: 0 0 20px;
		font-size: 18px;
		line-height: 28px;
	}
	h3 {
		font-size: 20px;
		line-height: 35px;
		font-weight: 600;
		margin: 30px 0;
	}
	.feature-list div {
		display: flex;
		flex-direction: row;
		margin-bottom: 20px;
		img {
			width: 110px;
		}
		p {
			padding-left: 30px;
			padding-top: 20px;
			max-width: 550px;
		}
	}
	footer {
		width: calc(100% - 300px);
		height: 100px;
		background-color: rgba(98, 138, 136, 0.62);
		position: fixed;
		bottom: 0;
		left: 300px;
		padding: 0 50px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		.left-column {
			text-align: left;
		}
		.right-column {
			text-align: right;
		}
	}
	.button {
		background: #fff;
		padding: 0 24px;
		color: #111;
		border-radius: 4px;
		display: inline-flex;
		height: 40px;
		align-items: center;
		justify-content: center;
		font-size: 16px;
		line-height: 1;
		white-space: nowrap;
		letter-spacing: 0.01rem;
		border: none;
		cursor: pointer;
		transition: all 0.2s ease;
		&.has-icon {
			padding: 0 16px 0 24px;
		}
		&:hover,
		&:focus {
			text-decoration: none;
			box-shadow: 0 1px 7px rgba(0, 0, 0, 0.1);
			background-color: #fefefe;
			color: #28a5c3;
		}
		&.primary {
			color: #375619;
			background-color: #b6ef7e;
			&:hover,
			&:focus {
				background-color: #70d210;
				color: #375619;
			}
		}
		&.big {
			&:hover,
			&:focus {
				color: #fff;
			}
		}
		&.disabled {
			background-color: #888;
			&:hover,
			&:focus {
				background-color: #888;
				cursor: not-allowed;
				color: #111;
			}
		}
	}
	.col-wrapper {
		display: flex;
		flex-direction: row;
	}
	.code-block {
		width: 400px;
		margin: 30px 0;
		border-radius: 4px;
		overflow: hidden;
		&.hoverable {
			display: none;
			position: absolute;
			z-index: 10;
			top: 38px;
			right: 0px;
			margin: 0;
			box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 4px 2px;
		}
		&.show {
			display: block;
		}
	}
	.search-field-container {
		width: 560px;
		height: auto;
		margin: 30px 0;
		border-radius: 2px;
		background-color: #dcf8ff;
		padding: 30px;
		text-align: left;
		color: #424242;
		&.small {
			width: 400px;
		}
		.input-wrapper {
			display: flex;
			flex-direction: row;
			justify-content: space-between;

			& > div {
				width: 100%;
			}
		}
		h3 {
			font-size: 18px;
			margin: 0 0 6px;
			font-weight: bold;
			color: #111;
		}
		.input {
			width: 100%;
			color: #333;
			border-radius: 4px;
			border: 1px solid #ccc;
			padding: 8px 4px;
			height: 36px;
		}
		p {
			color: #888;
			margin: 8px 0 16px;
			font-size: 13px;
			line-height: 18px;
		}
		.button {
			height: 36px;
			font-size: 15px;
			margin-left: 10px;
		}
		&.full-row {
			width: 100%;
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;
			align-items: center;
			& > * {
				width: 60%;
				p {
					margin: 0;
				}
				&:first-child {
					width: 40%;
				}
			}
		}
	} // search app styles
	.search-app {
		header {
			width: 100%;
			margin: 0;
			padding: 3rem 6rem;
			background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
			h2 {
				color: #424242;
				text-align: center;
				letter-spacing: 0.06rem;
				margin-bottom: 12px;
			}
			input {
				border: 0;
				height: 60px;
				padding: 0 28px;
				font-size: 18px;
				border-radius: 999em;
				box-shadow: 0 20px 30px 0 rgba(16, 36, 94, 0.2),
					inset 0 -8px 0 0 rgba(103, 117, 161, 0.08);
			}
		}
		h2 {
			font-size: 18px;
			line-height: 28px;
		}
		p {
			font-size: 16px;
		}
		a {
			&:hover,
			&:focus {
				text-decoration: none;
			}
		}
	}
	.list-item {
		padding: 20px 0;
		border-bottom: 1px solid #eee;
	}
	.multi-col {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		.left-col {
			width: 240px;
			h2 {
				margin: 40px 0 12px;
			}
			label {
				font-weight: normal;
			}
		}
		.right-col {
			width: calc(100% - 260px);
		}
	}
	p.result-stats {
		max-width: none;
		margin: 20px 0 0;
		font-size: 16px;
		margin-bottom: 5px;
		line-height: 16px;
		text-align: right;
	}
	.tag {
		font-size: 0.8rem;
		background: rgb(238, 238, 238);
		margin: 5px 3px;
		padding: 3px 8px;
		border-radius: 2px;
		color: #333;
		&:first-child {
			margin-left: 0px;
		}
	}
`;

const endScreenStyles = css`
	width: 100%;
	padding: 20px;
	max-width: 1500px;
	margin: 0 auto;
	background-color: #fff;
	font-family: 'Open Sans';
	.banner-row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		.big-card {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			background-color: #87ffe7;
			flex-wrap: wrap;
			align-items: center;
			text-align: center;
			padding: 30px;
			width: 66%;
			img {
				width: 200px;
				margin: 0px auto 20px;
			}
			& > div {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
			}
			.col {
				display: flex;
				flex-direction: column;
				text-align: center;
				padding: 15px;
				margin-top: 20px;
				width: 50%;
			}
		}
		h2,
		h3 {
			width: 100%;
			font-size: 20px;
			font-weight: 700;
		}
		h3 {
			font-size: 18px;
		}
		.small-card {
			width: 33%;
			padding: 30px;
			text-align: center;
			display: flex;
			flex-direction: column;
			justify-content: center;
			h2 {
				margin-top: 0px;
			}
		}
	}
	.card-row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 20px 0 40px;
		.card {
			background-color: #c7f4ff;
			width: 32%;
			padding: 40px 20px;
			color: #232e44;
			text-align: center;
			flex-direction: column;
			min-height: 420px;
			justify-content: space-between;
			align-items: center;
			h2 {
				font-size: 18px;
				line-height: 28px;
				font-weight: 700;
				margin-bottom: 30px;
			}
			p {
				font-size: 16px;
				line-height: 26px;
				max-width: 280px;
				min-height: 78px;
				margin: 15px auto 10px auto;
			}
			img,
			a {
				margin: 20px 0;
			}
		}
	}
	.button {
		background-color: #b6ef7e;
		color: #53683b;
		text-transform: uppercase;
		margin: 20px auto 0;
		padding: 0 28px;
		display: inline-flex;
		height: 44px;
		font-weight: 600;
		align-items: center;
		justify-content: center;
		box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease;
		&:hover,
		&:focus {
			background-color: #a4f158;
			text-decoration: none;
		}
	}
`;

export { onboardingStyles, endScreenStyles };
