<template>
    <div>
        <h1>Home template</h1>
        <h2>Refs</h2>
        <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
        <button @click="updateOne">Update age</button>
        <h2>Reactive</h2>
        <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
        <button @click="updateTwo">Update age</button>

        <h2>search term</h2>
        <input type="text" v-model="search">
        <p>Fruits Search: {{ search }}</p>
        <div v-for="fruit in matchingFruit" :key="fruit">{{ fruit }}</div>
        <button @click="stopWatches">stop watching</button>
    </div>
</template>

<script>
import { computed, ref, reactive, watch, watchEffect  } from 'vue'

export default {
    name: 'Home',
    setup() {
       
        const ninjaOne = ref({ name: 'nikunj', age: 28})
        const ninjaTwo = reactive({ name: 'Boys', age: 38 })
        const updateOne = () => {
            ninjaOne.value.age = 48
        }
        const updateTwo = () => {
            ninjaTwo.age = 48
        }

        const search = ref('')
        const fruits =  ref(['Apple', 'Banana', 'Orange', 'Strawberry', 'PineApple']);

        const stopWatch = watch(search, () => {
            console.log('watch function call')
        })

        const stopwatchEffect = watchEffect(() => {
            console.log('watchEffect function run')
        })

        const matchingFruit = computed(() => {
            return fruits.value.filter((fruit) => fruit.includes(search.value))
        })

        const stopWatches = () => {
            stopWatch()
            stopwatchEffect()
        }

        return {
          ninjaOne,  ninjaTwo, updateOne,  updateTwo, search, fruits, matchingFruit, stopWatches
        }
    }
}
</script>