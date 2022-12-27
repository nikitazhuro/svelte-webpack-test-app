<script>
  import axios from 'axios';
  import { onMount } from 'svelte';

  import { postList } from '../../store/postStore';

  import PostItem from './PostItem.svelte'

  let posts;

  let serverPosts = [];

  onMount(async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
    serverPosts = data;
  });

  postList.subscribe((value) => {
    posts = value;
  });

</script>

<div class="PostList">
  {#each posts as post}
    <PostItem postItem={post} />
  {/each}
</div>

<div>
  <h1>
    Server post list:
  </h1>
  <div class="PostList">
    {#each serverPosts as post}
      <PostItem hideDeleteBtn postItem={post} />
    {/each}
  </div>
</div>

<style>
  .PostList {
    display: flex;
    flex-wrap: wrap;
  }

  h1 {
		color: #ff3e00;
		text-transform: uppercase;
    margin-bottom: 1rem;
    opacity: 0.6;
		font-size: 2.3em;
		font-weight: 100;
	}
</style>