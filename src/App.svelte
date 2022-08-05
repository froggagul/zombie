<script lang="ts">
	import Story from './components/Story.svelte';
	import End from './components/End.svelte';
	import Layout from './components/Layout.svelte';
	import StartInput from './components/StartInput.svelte';
	import StatusBar from './components/StatusBar.svelte';
	import LeaderBoard from './components/LeaderBoard.svelte';

	import stories from './story';

	let storyState: Record<string, number> = {
		order: -1,
		endOrder: stories.length,
	}
	const itemNames = {
		name: '이름',
		age: '나이',
		sex: '성별',
		rurality: '시골',
		household: '동료',
		water: '물',
		food: '음식',
		medication: '의료',
		tools: '도구',
		firstaid: '응급키트',
		sanitation: '청결',
		clothing: '옷가지',
		documents: '서류',
	}
	const typeNames = {
		'add': '만큼 더해집니다',
		'sub': '만큼 빼집니다',
		'set': '(으)로 되었습니다',
	}
	let userState: Record<string, boolean | number | string> = {};

	let changeStrings: string[] = [];
	const initializeChange = () => {
		changeStrings = [];
	}
	const increaseOrder = () => {
		storyState.order += 1;
	}
	const initializeState = () => {
		userState = {
			name: '',
			age: 0,
			sex: '여',
			rurality: 0,
			household: 0,
			water: 0,
			food: 0,
			medication: 0,
			tools: 0,
			firstaid: 0,
			sanitation: 0,
			clothing: 0,
			documents: 0,
		};
	}
	const resetOrder = () => {
		storyState.order = -1;
		initializeState();
		initializeChange();
	}
	const logChange = (item: keyof typeof userState, type: 'add' | 'set' | 'sub', value: number | boolean) => {
		const itemName = itemNames[item];
		const typeName = typeNames[type]
		const changeString = `${itemName}이(가) ${value}${typeName}`;
		if (value > 0) {
			changeStrings.push(changeString);
		} else {
			changeStrings.push('아무 일도 일어나지 않았습니다.');
		}
	}
	const changeState = (item: keyof typeof userState, type: 'add' | 'set' | 'sub', value: number | boolean) => {
		logChange(item, type, value);
		if (type === 'add' || type === 'sub') {
			const prev_value = userState[item];
			if (typeof prev_value === 'number' && typeof value === 'number') {
				if (type === 'add') {
					userState[item] = prev_value + value;
				} else if (type === 'sub') {
					userState[item] = prev_value - value;
				}
			}
		} else if (type === 'set') {
			userState[item] = value;
		}
	}

	initializeState();
</script>

<Layout>
	<StatusBar userState={userState} />
	<div class="mainWrapper">
		{#if storyState.order === -1}
			<StartInput
				userState={userState}
				changeState={changeState}
				increaseOrder={increaseOrder}
			/>
		{:else if storyState.order < storyState.endOrder}
			<Story
				order={storyState.order}
				increaseOrder={increaseOrder}
				changeState={changeState}
				initializeChange={initializeChange}
				userState={userState}
			/>
		{:else if storyState.order === storyState.endOrder}
			<End
				userState={userState}
				increaseOrder={increaseOrder}
			/>
		{:else}
			<LeaderBoard
				resetOrder={resetOrder}
			/>
		{/if}
	</div>
	<div class="changeStatus">
        {#each changeStrings as changeString}
			<div class="item">
				{changeString}
			</div>
        {/each}
	</div>
</Layout>

<style>
.mainWrapper {
	position: relative;
	height: calc(100% - 136px);
}
.changeStatus {
	position: relative;
	margin: 16px 24px;
	height: 64px;
	background-color: black;
	color: white;
	border-radius: 32px 32px 0% 0%;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
}
.changeStatus .item {
	padding: 16px 0;
}
</style>
