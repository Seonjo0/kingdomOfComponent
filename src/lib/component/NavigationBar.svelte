<script lang="ts">
	import { NavbarItemImage } from '../../type/Type.js';

	export let navBar: string[];

</script>

<div class="mainContainer">
	{#each navBar as item (item)}
		<div class="imgContainer">
			<img src={NavbarItemImage[item]}>
		</div>
	{/each}
</div>

<style>
    .mainContainer {
        display: block;
        width: 5%;
        height: 100vh;
        background-color: #3498db;
    }

    .imgContainer {
        width: 30%;
        display: flex;
        justify-content: center;
        margin-left: 15px;
        margin-bottom: 15px;
        padding: 20px;
        border-radius: 10%;
    }

    .imgContainer:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }

    img {
        display: block;
        background-color: transparent;
        width: 100%;
    }

</style>