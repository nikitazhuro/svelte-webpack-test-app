<script>
  import DeletePostModal from '../DeletePostModal.svelte';
  export let postItem;

  let showDeletePostModal = false;
  let postIdForDelete = null;

  const showDeleteModalHandler = (id) => {
    postIdForDelete = id;
    showDeletePostModal = true;
  }

  const closeDeleteModalHandler = () => {
    showDeletePostModal = false;
  }
</script>

<div class="PostItem flex bg-white shadow-lg rounded-lg mr-2 mb-2">
  <div class="flex items-start px-4 py-6 w-full">
     <img class="w-12 h-12 rounded-full object-cover mr-4 shadow" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar">
     <div class="w-full">
        <div class="flex items-center justify-between">
           <h2 class="text-lg font-semibold text-gray-900 -mt-1">{postItem?.id}. {postItem?.author?.fullname || 'Noname'}</h2>
           <div class="flex items-center">
            <small class="text-sm text-gray-700 mr-1">{postItem?.date || new Date().toDateString()}</small>
            <button class="border-none" on:click={() => showDeleteModalHandler(postItem?.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 flex items-center text-red-500 mx-auto cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
            </button>
           </div>
        </div>
        <p class="text-gray-700">
          {postItem?.author?.country || ''},
          {postItem?.author?.city || ''},
          {postItem?.author?.zip || '000000'}
        </p>
        <p class="mt-3 text-gray-900 text-xl">
          {postItem?.title || 'Empty title'}
       </p>
        <p class="mt-3 text-gray-700 text-sm">
           {postItem?.description || 'Empty description'}
        </p>
        <div class="mt-4 flex items-center">
           <div class="flex mr-2 text-gray-700 text-sm mr-3">
              <svg fill="none" viewBox="0 0 24 24"  class="w-4 h-4 mr-1" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
               </svg>
              <span>12</span>
           </div>
           <div class="flex mr-2 text-gray-700 text-sm mr-8">
              <svg fill="none" viewBox="0 0 24 24" class="w-4 h-4 mr-1" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
              </svg>
              <span>8</span>
           </div>
           <div class="flex mr-2 text-gray-700 text-sm mr-4">
              <svg fill="none" viewBox="0 0 24 24" class="w-4 h-4 mr-1" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/>
               </svg>
              <span>share</span>
           </div>
        </div>
     </div>
  </div>
</div>

<DeletePostModal
  showDeletePostModal={showDeletePostModal}
  closeDeleteModalHandler={closeDeleteModalHandler}
  postIdForDelete={postIdForDelete}
/>

<style>
  .PostItem {
    width: 450px;
  }
</style>