<script>
import Image from './Image.svelte';

export let userState;

const columns = Object.keys(userState).filter((item) => !['name', 'age', 'sex'].includes(item));

</script>

<div class="header">
    {#each columns as column}
        <div class={`item ${column}`}>
            <div class="image">
                <Image src={`images/${column}.png`} />
            </div>
            <div class="value">
                {userState[column]}
            </div>
        </div>
    {/each}
</div>

<style>
.header {
	position: relative;
	height: 56px;
    display: flex;
    flex-direction: row;
}
.item {
    width: 20%;
    height: 100%;
    background-color: white;
}
.image {
    height: 60%;
}
.value {
    height: 40%;
    text-align: center;
}
</style>