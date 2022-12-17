<script>
  import './app.css';

  import NewPostModal from './components/NewPostModal.svelte';
  import PostList from './components/Post/PostList.svelte';

</script>

<div class="flex flex-col">
  <div>
    <h1>
      post menu:
    </h1>
    <div class="flex">
      <div>
        <span>
          Create post button:
        </span>
        <NewPostModal />
      </div>
    </div>
  </div>
  <hr class="my-3"/>
  <div>
    <h1>
      Post list:
    </h1>
    <PostList />
  </div>
</div>

<!-- <main>
	<h1 class="m-20">Hello Svelte!</h1>
	<p>Visit the <a href="/about">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main> -->

<style>
	/* main {
		text-align: center;
		padding: 1em;
    height: 100%;
		max-width: 240px;
		margin: 0 auto;
	} */
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
    margin-bottom: 1rem;
    opacity: 0.6;
		font-size: 2.3em;
		font-weight: 100;
	}
</style>

