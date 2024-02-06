<script context="module" lang="ts">
	import NavigationBar from '$lib/component/NavigationBar.svelte';
	import { type DashBoardItemList, type NavbarItemList, type User, userAuth, userRole } from '../type/Type';
	import Dashboard from '$lib/component/Dashboard.svelte';
	import TableContainer from '$lib/component/TableContainer.svelte';
</script>

<script lang="ts">
	const navbarItems: NavbarItemList = {
		admin: ['home', 'patientList', 'schedule', 'dcmViewer', 'confirm', 'aiSeg', 'train'],
		user: ['home', 'patientList', 'schedule', 'dcmViewer', 'confirm'],
		guest: ['home', 'patientList', 'schedule']
	};

	let dashBoardItemList: DashBoardItemList = {
		user: [
			{
				'Newly Added CT': 1,
				'Contouring Required': 10,
				'Planning Required': 1,
				'Patient QA Required': 12,
				'Chart-check Required': 0,
				'Treatment Schedule of Today': 2
			}
		]
	};

	let tableNumber: number = 0;

	function onItemClick(boardNumber: number): void{
		tableNumber = boardNumber;
	}

</script>

<div style="display: flex">
	<NavigationBar navBar={navbarItems.admin} onItemClick={onItemClick} />
	<Dashboard navBarItem={dashBoardItemList} />
	<TableContainer boardNum={tableNumber}/>
</div>

<style>
    :global(body) {
        margin: 0;
    }
</style>