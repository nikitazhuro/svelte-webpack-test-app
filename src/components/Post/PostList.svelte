<script>
  import { postList } from '../../store/postStore';

  import PostItem from './PostItem.svelte'

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