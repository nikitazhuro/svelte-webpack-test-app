<script>
  import { postList } from '../../store/postStore';
  export let closeModalHandler;

  let postTitle = '', authorFullName = '', description = '', city = '', country = '', zipCode = '';

  const changePostTitle = (e) => {
    postTitle = e.target.value;
  }

  const changeAuthorFullNamee = (e) => {
    authorFullName = e.target.value;
  }

  const changeDescription = (e) => {
    description = e.target.value;
  }

  const changeCity = (e) => {
    city = e.target.value;
  }

  const changeCountry = (e) => {
    country = e.target.value;
  }

  const changeZipCode = (e) => {
    zipCode = e.target.value;
  }

  const createNewPost = () => {
    const postData = {
      title: postTitle,
      date: new Date().toDateString(),
      author: {
        fullname: authorFullName,
        city,
        country,
        zip: zipCode,
      },
      description,
    }

    postList.update((value) => {
      return value = [...value, { ...postData, id: value.length ? value[value.length - 1].id + 1 : 1 }];
    })
  }
</script>

<div class="modal-body relative p-4">
<div class="flex justify-center w-full">
  <form class="w-full max-w-lg mt-5">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
          Post title
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          on:change={changePostTitle}
          type="text"
          placeholder="How to buy candies"
        >
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
          Author fullname
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-last-name"
          on:change={changeAuthorFullNamee}
          type="text"
          placeholder="Jane Doe">
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
          Description
        </label>
        <textarea
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-password"
          on:change={changeDescription}
        ></textarea>
        <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
          City
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-city"
          type="text"
          on:change={changeCity}
          placeholder="Minsk"
        >
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
          Country
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-state"
          type="text"
          on:change={changeCountry}
          placeholder="Belarus"
        >
      </div>
      <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
          Zip
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-zip"
          type="text"
          on:change={changeZipCode}
          placeholder="90210"
        >
      </div>
    </div>
</div>
</div>

<div
 class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md"
>
  <button
    class="mr-2 mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
    on:click={closeModalHandler}
  >
    Cancel
  </button>

  <button
    on:click={createNewPost}
    class="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600"
  >
    Save changes
  </button>
</div>