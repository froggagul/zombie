<script>
export let changeState;
export let userState;
export let increaseOrder;

const setAge = (age) => {
    changeState('age', 'set', Number(age));
}
const setSex = (sex) => {
    changeState('sex', 'set', sex);
}
const setName = (name) => {
    changeState('name', 'set', name);
}

</script>

<div class="wrapper">
    <div class="selectItemWrapper">
        나이를 선택해주세요
        <select value={userState.age} on:change={(e) => setAge(e.target.value)}>
            {#each Array.from(Array(30).keys()).slice(20) as age}
                <option value={age}>{age}</option>
            {/each}
        </select>
    </div>
    <div class="selectItemWrapper">
        성별을 선택해주세요
        <select value={userState.sex} on:change={(e) => setSex(e.target.value)}>
            {#each ['남', '여'] as sex}
                <option value={sex}>{sex}</option>
            {/each}
        </select>
    </div>
    <div class="selectItemWrapper">
        이름을 입력해주세요
        <input bind:value={userState.name} on:input={(e) => setName(e.target.value)}>
    </div>
    <div class="button" on:click={increaseOrder}>
        다음
    </div>
</div>

<style>
.wrapper {
    height: 100%;
    margin: 0 24px;
    padding-top: 56px;
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
