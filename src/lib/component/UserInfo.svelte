<script lang="ts">

	import { type User, userAuth, userRole } from '../../type/Type';;
	export let user: User;

	console.log(user, userRole[user.role], userAuth)

</script>

<div class="mainContainer">
	<div class="userImg">
		<img src={user.photo} alt="userPhoto">
	</div>
	<div class="userName">
		{user.name}
	</div>
	<div class="userRole">
		{userRole[user.role]}
	</div>
	<div class="userSetting">
		<img src="/icon/setting.png" alt="setting">
	</div>
</div>

<style>
	.mainContainer {
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: #b5b4ff;
	}

	.userImg {
			flex-grow: 0.5;
	}

	.userImg > img{
			display: inline;
			padding: -10px;
			width: 100px;
			height: 100px;
	}

	.userName {
      flex-grow: 0.5;
			font-size: 1.8em;
			color: black;
			font-weight: bold;
			padding-right: 50px;
	}

	.userRole {
      flex-grow: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 1%;
			height: 3vh;
			border-radius: 20px;
			background-color: #bd00ff;
			color: white;
			font-weight: bold;
			font-size: 1.2em;
	}

	.userSetting {
			flex-grow: 0.5;
			text-align: center;
	}

</style>