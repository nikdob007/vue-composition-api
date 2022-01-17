<template>
    <div>        
        <div v-if="error">{{ error }}</div>
        <div v-if="posts.length">    
            <PostList :posts="posts"/>
        </div>
        <div v-else>data loading...</div>
    </div>
</template>

<script>
import PostList from './PostList.vue'
import getPosts from '../composables/getPosts'

export default {
    name: 'Home',
    components: { PostList},
    setup() {
        
        const { posts, error, load } = getPosts()

        load()
        
        return {
          posts, error
        }
    }
}
</script>