import { defineStore } from "pinia";

export const useStore = defineStore('posts', {
    state: () => {
        return {
            posts: [],
        }
    },
    actions: {
        createPost(post:object) {
            // this.posts = [...this.posts, post];
        }
    }
})