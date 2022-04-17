<template>
  <div class="body">
    <navbar/>

    <div class="flex flex-row justify-center gap-4 px-8">


      <div class="flex flex-col gap-4 w-11/12 lg:w-2/5">
        <h1 style="font-size: 40px">Get in Touch</h1>
        <p class="text-gray-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </p>
        <div style="height: fit-content" class="bg-card p-4 flex flex-col gap-4 mb-6">
          <h1 style="font-size: 25px">Contact form</h1>
          <div class="flex flex-col lg:flex-row gap-4 w-full">
            <div class="flex flex-col w-full gap-2">
              <label>Name *</label>
              <input class="bg-[#182c47] text-[#c1d1e8] py-2 px-2 w-full">
            </div>

            <div class="flex flex-col w-full gap-2">
              <label>Email Adress*</label>
              <input class="bg-[#182c47] text-[#c1d1e8] py-2 px-2 w-full" type="email">
            </div>
          </div>
          <div class="flex flex-row lg:flex-col gap-6">

            <div class="flex flex-col gap-2 w-full">
              <label>Message</label>

              <textarea class="bg-[#182c47] text-[#c1d1e8] py-2 px-2 w-full"></textarea>
            </div>
          </div>

          <div class="flex justify-end">
            <button class="px-4 py-1 bg-accentblue">
              Send
            </button>
          </div>
        </div>
      </div>


    </div>
  </div>
</template>
