<script>
import Axios from 'axios';
import { onMount } from 'svelte'
// import { BACK_URL } from '../utils/constant';

export let userState;
export let increaseOrder;
let score = 0;
const addToLeaderBoard = async () => {
    const res = await Axios.post('/save_score', {
        name: userState.name || '',
        score: score,
    });
    console.log(res);
    increaseOrder();
}

onMount(async () => {
    const result = await Axios.post(
        `/predict`,
        [
            userState.age,
            userState.sex,
            userState.food,
            userState.rurality,
            userState.household,
            userState.water,
            userState.medication,
            userState.tools,
            userState.firstaid,
            userState.sanitation,
            userState.clothing,
            userState.documents,
        ]
    );
    score = result.data.score;
})

</script>

<div class="endWrapper">
    {score}
    {#if score > 0.5}
        zombie
    {:else}
        alive
    {/if}
    <div class="button" on:click={addToLeaderBoard}>
        리더보드 확인하기
    </div>
</div>

<style>
.endWrapper {
    position: relative;
    margin: 0 24px;
    height: 100%;
}
.button {
    padding: 10px 0;
    border-bottom: 1px solid rgb(114, 114, 114);
    font-weight: bold;
    position: absolute;
    width: calc(100% - 48px);
    bottom: 0px;
}
.button:hover {
    background-color: rgb(200, 200, 200);
}
</style>