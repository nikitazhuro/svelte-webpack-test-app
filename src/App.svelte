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

<style>
	h1 {
		color: #ff3e00;
		text-transform: uppercase;
    margin-bottom: 1rem;
    opacity: 0.6;
		font-size: 2.3em;
		font-weight: 100;
	}
</style>

