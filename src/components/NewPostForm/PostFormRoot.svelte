<script>
  import { stop_propagation } from "svelte/internal";
import PostFormBody from "./PostFormBody.svelte";
  import PostFormFooter from "./PostFormFooter.svelte";
  import PostFormTitle from "./PostFormTitle.svelte";

	export let showModal;
  export let closeModalHandler;

</script>
<div
  class="Modal modal fade fixed top-0 left-0 {showModal ? '' : 'hidden'} w-full h-full outline-none overflow-x-hidden overflow-y-auto"
  id="exampleModal"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div class="ModalDialog">
    <div
      class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <PostFormTitle />
      <PostFormBody closeModalHandler={closeModalHandler} />
    </div>
  </div>
</div>

<style>
  .ModalDialog {
    width: 600px;
    pointer-events: none;
    position: absolute;
    top: calc(50% - 325px);
    right: calc(50% - 300px);
    background-color: white;
    border-radius:10px;
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
    background-clip: padding-box;
  }
  .Modal {
    background-color: rgba(255, 255, 255, 0.529);
  }
</style>