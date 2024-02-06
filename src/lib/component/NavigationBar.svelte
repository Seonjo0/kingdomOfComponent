<script lang="ts">
	import { NavbarItemImage } from '../../type/Type.js';

	export let navBar: string[];
	export let onItemClick

</script>

<div class="mainContainer">
	{#each navBar as item, i (item)}
		<div class="imgContainer" on:click={() => onItemClick(i)}>
			<img src={NavbarItemImage[item]}>
		</div>
	{/each}
</div>

<style>
    .mainContainer {
        display: flex;
				flex-direction: column;
				align-items: center;
        width: 3%;
        height: 100vh;
        background-color: #3432a0;
    }
    .imgContainer {
        width: 35%;
        display: flex;
        margin-top: 10px;
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