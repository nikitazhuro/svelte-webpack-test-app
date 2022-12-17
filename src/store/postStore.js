import { writable } from "svelte/store";

// interface IPost {

// }

const postExample = {
  title: 'Example post title',
  description: 'Example post description',
  author: {
    fullname: 'Nikita Zhuro',
    city: 'SPB',
    country: "Russia",
    zip: 254789,
  }
}

export const postList = writable([postExample]);