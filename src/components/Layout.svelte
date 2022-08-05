<style>
:global(body) {
    padding: 0px;
    background-color: rgb(254, 250, 243);
}
.layout {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 480px;
    height: 100vh;
    /* border-right: 1px solid black;
    border-left: 1px solid black; */
    background-color: white;
}


@media (max-width: 640px) {
	.layout {
		max-width: none;
	}
}

</style>

<main class="layout">
    <slot></slot>
</main>