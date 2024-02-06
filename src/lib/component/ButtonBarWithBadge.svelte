<script lang="ts">
	export let contentText: string;
	export let numberOfBadge: number;
</script>

<div class="mainContainer">
	<div class="contentBar">
		{contentText}
	</div>
	{#if numberOfBadge > 0}
		<div class="badgeContainer">
			<div id="badge">{numberOfBadge}</div>
		</div>
	{/if}
</div>

<style>
    .mainContainer {
        display: flex;
        width: 100%;
        height: 5%;
        /*background-color: yellow;*/
        margin: 30px;
        /*!*margin-bottom: 30px;*!*/
    }

    .contentBar {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: sandybrown;
        width: 85%;
        font-size: 1.5rem;
				border-radius: 5px;
    }

    .contentBar:hover {
        background-color: saddlebrown;
    }

    #badge {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        margin-top: -10px;
        margin-left: -20px;
        width: 40px;
        height: 40px;
        background-color: red;
        border-radius: 50%;
        color: white;
        font-weight: bold;
        font-size: 1.3em;
    }
</style>