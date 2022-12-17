<script>
  import PostItem from './PostItem.svelte'
  import { postList } from '../../store/postStore';
  let posts;

  postList.subscribe((value) => {
    posts = value;
  });
</script>

<div class="PostList">
  {#each posts as post}
	<PostItem postItem={post} />
{/each}
</div>

<style>
  .PostList {
    display: flex;
    flex-wrap: wrap;
  }
</style>