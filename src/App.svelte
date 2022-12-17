<script>
  import './app.css';

  import Modal from './components/Modal.svelte';
  import PostList from './components/Post/PostList.svelte';
</script>

<div class="flex flex-col">
  <Modal />
  <hr class="my-3"/>
  <PostList />
</div>

<!-- <main>
	<h1 class="m-20">Hello Svelte!</h1>
	<p>Visit the <a href="/about">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
    height: 100%;
		max-width: 240px;
		margin: 0 auto;
	}
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style> -->

