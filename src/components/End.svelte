<script>
import Axios from 'axios';
import { onMount } from 'svelte';
import Image from './Image.svelte';
// import { BACK_URL } from '../utils/constant';

export let userState;
export let increaseOrder;
let score = 0;
const addToLeaderBoard = async () => {
    if (score !== 0) {
        const res = await Axios.post('/save_score', {
            name: userState.name || '',
            score: score,
        });
        increaseOrder();
    }
}

onMount(async () => {
    const result = await Axios.post(
        `/predict`,
        [
            userState.age,
            userState.sex === '여',
            userState.food > 0 ? 1 : 0,
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
    {#if score === 0}
        당신의 행적을 판정하는 중입니다... 조금만 기다려 주세요.
    {:else if score > 0.5}
        <div class="img">
            <Image src={`images/zombie_${userState.sex === '남' ? 'man' : 'woman'}.png`} />
        </div>
        <h2>엔딩 1. 좀비 엔딩</h2>
        아뿔싸...당신은 좀비가 되었습니다.
    {:else}
        <div class="img">
            <Image src={`images/human_${userState.sex === '남' ? 'man' : 'woman'}.png`} />
        </div>
        <h2>엔딩 2. 인간 엔딩</h2>
        야호! 당신은 인간으로 계속해서 살아갈 수 있습니다.
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