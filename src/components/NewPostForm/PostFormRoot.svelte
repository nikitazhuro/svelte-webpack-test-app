<script>
  import PostFormBody from "./PostFormBody.svelte";
  import PostFormTitle from "./PostFormTitle.svelte";

	export let showModal;
  export let closeModalHandler;

</script>

<div class="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 {showModal ? 'flex' : 'hidden'} justify-center items-center inset-0 z-50 outline-none focus:outline-none" id="modal-id">
  <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
  <div class="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
   <PostFormTitle />
   <PostFormBody closeModalHandler={closeModalHandler} />
  </div>
</div>