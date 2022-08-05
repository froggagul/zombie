<script>
import Image from './Image.svelte';
import stories from '../story';
import Typewriter from 'svelte-typewriter'

export let order;
export let increaseOrder;
export let changeState;
export let initializeChange;
export let userState;

let selectItems = [];
let story;
let disabled = false;

const initializeStory = () => {
    selectItems = [];
    story = undefined;
}

const doneWrite = () => {
    disabled = true;
}

$: {
    initializeStory();

    if (order < stories.length) {
        story = stories[order];
        selectItems = story.select.map((item) => {
            const func = () => {
                initializeChange();
                item.results.forEach((result) => {
                    changeState(result.item, result.change.type, result.change.value);
                })
                increaseOrder();
            };
            return {
                text: item.text,
                onClick: func
            };
        });
    }
}

</script>

<div class="storyWrapper" on:click={doneWrite}>
    <div class="img">
        <Image src = {story.image}/>
    </div>
    {#if !disabled}
        <Typewriter interval={45}>
            <p class="text">
                {story?.text || 'text not loaded'}
            </p>
        </Typewriter>
    {:else}
        <p class="text">
            {story?.text || 'text not loaded'}
        </p>
    {/if}
    <div class="selectItemWrapper">
        {#each selectItems as selectItem}
            <div class="button" on:click={selectItem.onClick}>
                {selectItem.text}
            </div>
        {/each}
    </div>
</div>

<style>
.storyWrapper {
    position: relative;
    margin: 0 24px;
    height: 100%;
}
.text {
    overflow-wrap: break-word;
}
.img {
    position: relative;
    margin: auto 0px;
}
.button {
    /* height: 32px; */
    padding: 10px 0;
    border-bottom: 1px solid rgb(114, 114, 114);
    font-weight: bold;
}
.button:hover {
    background-color: rgb(200, 200, 200);
}
.selectItemWrapper {
    position: absolute;
    bottom: 0px;
    width: 100%;
}
</style>