<script>
export let resetOrder;
import { onMount } from 'svelte';
import Axios from 'axios';
let ranks = [];
onMount(async() => {
    const result = await Axios.get('/load_rank');
    ranks = result.data.reverse();
});
</script>


<div class="leaderboardWrapper">
    <div class="rankTable">
        {#each ranks as rank, index}
            <div class="rankItem">
                <div class="item rank">{`#${1 + index}`}</div>
                <div class="item name">{rank[0] || 'unknown'}</div>
                <div class="item score">{rank[1]}</div>    
            </div>
        {/each}
    </div>
<div class="button" on:click={resetOrder}>
        다시하기
    </div>
</div>

<style>
.leaderboardWrapper {
    position: relative;
    margin: 0 24px;
    height: 100%;
}
.button {
    padding: 10px 0;
    border-bottom: 1px solid rgb(114, 114, 114);
    font-weight: bold;
    position: absolute;
    width: calc(100% - 24px);
    bottom: 0px;
}
.button:hover {
    background-color: rgb(200, 200, 200);
}
.rankTable {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    padding: 10px;
    height: 60%;
    overflow-y: scroll;
}
.rankItem {
    display: flex;
    width: 100%;
    height: 48px;
    flex-direction: row;
    justify-content: space-evenly;
    border-bottom: 1px solid rgb(114, 114, 114);
}
.item {
    padding: 10px;
}
.rank {
    width: 20%;
}
.name {
    width: 30%;
}
.score {
    width: 50%;
}


</style>