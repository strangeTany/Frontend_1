<script lang="ts">
	import Portfolio from './Portfolio.svelte';
	let designerImages: string[][] = [
		['https://i.ibb.co/xHsKfHm/poster1.png', 'stand up poster 1'],
		['https://i.ibb.co/FwNRNjS/poster2.png', 'stand up poster 2'],
		['https://i.ibb.co/hMY6dpC/poster3.png', 'stand up poster 3'],
		['https://i.ibb.co/Qjgghx1/stickers.jpg', 'stand up stickers']
	];
	let Artist3DImages: string[][] = [
		['https://i.ibb.co/DgR2T7K/steve.png', 'steve 3d model'],
		['https://i.ibb.co/qpwf14w/craft.png', '3d craft models'],
		['https://i.ibb.co/k08DK8g/monsters.png', '3d monsteers models']
	];
	let Artist2DImages: string[][] = [
		['https://i.ibb.co/QYj13YP/coffee-set.png', 'drawing of coffee set'],
		['https://i.ibb.co/zmFw2bj/girl-in-cafe.png', 'drawing of girl in cafe'],
		['https://i.ibb.co/THS5QBZ/dead-fish.jpg', 'drawing of fish in aquarium'],
		['https://i.ibb.co/9t5NQn3/me.png', 'drawing of dog in bed']
	];
	let jobs: { jobName: string; images: string[][] }[] = [
		{ jobName: 'Graphical Designer', images: designerImages },
		{ jobName: '3D Artist', images: Artist3DImages },
		{ jobName: '2D Artist', images: Artist2DImages }
	];
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="description" content="My portfolio" />
</svelte:head>

<div>
	<Portfolio {jobs} />
</div>
