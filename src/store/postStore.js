import { writable } from "svelte/store";

// interface IPost {

// }

const postExample = {
  id: 1,
  title: 'Example post title',
  description: 'Example post description',
  date: new Date().toDateString(),
  author: {
    fullname: 'Nikita Zhuro',
    city: 'SPB',
    country: "Russia",
    zip: 254789,
  }
}

export const postList = writable([postExample]);