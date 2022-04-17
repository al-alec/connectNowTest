<template>
    <div class="body">
      <Navbar/>

      <div class="flex flex-col lg:flex-row justify-center gap-4 px-8">

        <div style="height: fit-content" class="bg-card p-4 flex flex-col gap-4">
          <h3 class="text-xl">Filter Results</h3>

          <div class="flex flex-col gap-2">
            <label>Name (contains)</label>
            <input class="bg-[#182c47] text-[#c1d1e8] py-2 px-2" v-model="gamename">
          </div>

          <div class="flex flex-col sm:flex-row lg:flex-col gap-6">
            <div class="flex flex-col gap-2">
              <label>Miminum Score</label>
              <input class="bg-[#182c47] text-[#c1d1e8] py-2 px-2" value="1 - 10">
            </div>

            <div class="flex flex-col gap-2 flex-1">
              <label>Order by</label>
              <div class="flex">
                <div class="bg-accentblue w-1/5 py-1 px-3 justify-center flex">
                  <svg class="w-7 h-7" enable-background="new 0 0 32 32" viewBox="0 0 32 32" fill="white" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="2"><path d="m16 6v22"/><path d="m7.5 14 8.5-8.5 8.5 8.5"/></g></svg>
                </div>
                <select class="bg-[#182c47] border-transparent text-[#c1d1e8] flex-1 py-2 px-2" v-model="sort">
                  <option value="date">Release Date</option>
                  <option value="score">Score</option>
                  <option value="name">Name</option>
                </select>
              </div>
            </div>
          </div>

          <div class="flex justify-end">
            <button @click="clearFilter" class="px-4 py-1 bg-accentblue">
              Clear
            </button>
          </div>
        </div>

        <div class="flex flex-col gap-2 w-full lg:w-8/12">

          <div v-if="gamelist?.length >0" v-for="game in gamelist" class="flex flex-col sm:flex-row w-full">
            <div class="sm:w-4/12 lg:w-2/12 bg-[#000000] w-full h-[160px] sm:h-[inherit]">

            </div>
            <div class="flex flex-col px-4 py-4 gap-2 flex-1 bg-card">
              <h2 class="text-2xl"> {{ game.name }} </h2>
              <p class="text-gray-400">Release Date: DD/MM/YYYY</p>
              <p class="text-sm text-gray-400"> {{ truncate(game.summary, 300) }} </p>
            </div>
          </div>
          <div v-else class="flex flex-row flex-1 justify-center items-center">
            <p class="text-center">No data</p>
          </div>
        </div>

      </div>
    </div>
</template>

<script lang="ts">
import Navbar from "~/components/navbar.vue";
export default {
  components: {Navbar}
}
</script>

<script setup lang="ts">
import {useGameList} from "#imports";
import {Game} from "~/interfaces/Game";
import {computed} from "#imports";

const games = ref<Array<Game>>(await useGameList())

const gamename = ref("")
const sort = ref("name")

const gamelist = computed(() => unref(games).filter((game: Game) => gamename.value.toString().length > 0? game.name.toString().toLowerCase().includes(gamename.value.toString().toLowerCase()): unref(games) ))


const truncate = (str: string, n: number) => {
  return (str.length > n) ? str.substr(0, n-1) + '...' : str;
};

const clearFilter = () => {
  gamename.value = ""
  sort.value = "name"
}


</script>
