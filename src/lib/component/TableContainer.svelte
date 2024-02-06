<script context="module" lang="ts">
	import HomeTable from '$lib/component/board/HomeTable.svelte';
	import PatientListTable from '$lib/component/board/PatientListTable.svelte';
	import ScheduleTable from '$lib/component/board/ScheduleTable.svelte';
	import DcmViewerBoard from '$lib/component/board/DcmViewerBoard.svelte';
	import ConfirmTable from '$lib/component/board/ConfirmTable.svelte';
	import AiSegBoard from '$lib/component/board/AiSegBoard.svelte';
	import TrainBoard from '$lib/component/board/TrainBoard.svelte';

</script>

<script lang="ts">

	export let boardNum: number;
</script>

<div class="mainContainer">
	{#if (boardNum === 0)}
		<HomeTable />
	{:else if (boardNum === 1)}
		<PatientListTable />
	{:else if (boardNum === 2)}
		<ScheduleTable />
	{:else if (boardNum === 3)}
		<DcmViewerBoard />
	{:else if (boardNum === 4)}
		<ConfirmTable />
	{:else if (boardNum === 5)}
		<AiSegBoard />
	{:else if (boardNum === 6)}
		<TrainBoard />
	{/if}
</div>


<style>
    .mainContainer {
        width: 100%;
        height: 100vh;
        background-color: lightskyblue;
    }
</style>