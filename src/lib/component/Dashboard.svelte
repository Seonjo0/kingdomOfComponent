<script lang="ts">
	import ButtonBarWithBadge from '$lib/component/ButtonBarWithBadge.svelte';
	import { type DashBoardItemList, type User, userAuth, userRole } from '../../type/Type';
	import UserInfo from '$lib/component/UserInfo.svelte';

	export let navBarItem: DashBoardItemList;

	const user: User = {
		name: '이선주',
		photo: '/Pe.png',
		role: userRole.Nurse,
		auth: userAuth.admin
	};

</script>

<div class="mainContainer">
	<div class="logoContainer">
		<div class="logoCircle">
			<span class="logoText">Logo?</span>
		</div>
		<div class="logoText"> Patients Awaiting Your Expertise</div>
	</div>

	<div class="badgeBarContainer">
		{#each Object.entries(navBarItem.user[0]) as [key, value] (key)}
			<ButtonBarWithBadge contentText={key} numberOfBadge={value} />
		{/each}
	</div>

	<div class="userInfoContainer">
		<UserInfo user={user} />
	</div>
</div>

<style>
    .mainContainer {
        display: block;
        width: 18%;
        height: 100vh;
        background-color: #3f3ccf;
    }

    .logoContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 10vh;
    }

    .logoCircle {
        margin: 10px;
        border-radius: 50%;
        background-color: red;
        width: 25%;
        height: 75%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .logoText {
        color: white;
        font-size: 1.5em;
    }

    .badgeBarContainer {
        height: 82.7vh;
    }

    .userInfoContainer {
    }
</style>