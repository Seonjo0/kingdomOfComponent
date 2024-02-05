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
		{userAuth[user.auth]}
	</div>
</div>

<style>
	.mainContainer {
			display: flex;
			justify-content: space-around;
			align-items: center;
			background-color: hotpink;
	}

	.userImg > img{
			display: inline;
			padding: -10px;
			width: 100px;
			height: 100px;
	}

	.userName {
			font-size: 1.5em;
			color: white;
			margin-left: -100px;
	}

</style>