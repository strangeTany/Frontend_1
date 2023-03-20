<script lang="ts">
	import Contacts from './Contacts.svelte';
	let contactsLinks: string[][] = [
		['https://t.me/strange_tany', 'https://i.ibb.co/jw0rW0M/telegram.png', 'Telegram'],
		[
			'https://instagram.com/strangetany?igshid=YmMyMTA2M2Y=',
			'https://i.ibb.co/SXdQGrt/instagram.png',
			'Instagram'
		],
		['mailto: strangetany@gmail.com', 'https://i.ibb.co/2gDN71y/gmail.png', 'E-Mail'],
		['tel: +79021503786', 'https://i.ibb.co/YZC2GXW/phone.png', 'Phone']
	];
	let portfolioLinks: string[][] = [
		[
			'https://strange_tany.artstation.com/',
			'https://i.ibb.co/89gWMR3/artstation.png',
			'ArtStation'
		],
		['https://github.com/strangeTany', 'https://i.ibb.co/wyBgT7k/github.png', 'GitHub']
	];
	let contacts: { type: string; links: string[][] }[] = [
		{ type: 'Contacts', links: contactsLinks },
		{ type: 'Portfolio', links: portfolioLinks }
	];
</script>

<svelte:head>
	<title>Contacts</title>
	<meta name="description" content="My contacts and links to partfolio" />
</svelte:head>

<div>
	<Contacts {contacts} />
</div>
