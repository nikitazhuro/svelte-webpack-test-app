<script>
  let closeModalHandler;
</script>

<div
class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
<button
  on:click={closeModalHandler}
  type="button"
  class="px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase
    rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
    active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" 
  data-bs-dismiss="modal"
  >
    Close
  </button>
<button
  on:click={closeModalHandler}
  type="button"
  class="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded
    shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
    active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1"
>
  Save changes
</button>
</div>