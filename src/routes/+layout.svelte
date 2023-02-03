<script>
  import "../app.css";
  import "tippy.js/dist/tippy.css";
</script>

<div class="h-screen flex flex-col w-screen">
  <div class="print:hidden bg-base-100 hidden md:navbar">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl" href="/">ESG-рейтинг</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li><a>Общий рейтинг</a></li>
        <li tabindex="0">
          <a>
            Рейтинг по отраслям
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              ><path
                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
              /></svg
            >
          </a>
          <ul class="p-2 bg-base-100">
            <li><a>Энергетика</a></li>
            <li><a>Нефтяная промышленность</a></li>
          </ul>
        </li>
        <li><a>Методология оценки</a></li>
      </ul>
    </div>
  </div>

  <div class="lg:container mx-auto w-70p md:my-10 flex-grow">
    <slot />
  </div>

  <footer class="print:hidden footer p-10 bg-neutral text-neutral-content w-full">
    <div>
      <span class="text-white">ESG-рейтинг, beldmian 2023</span>
    </div>
  </footer>
</div>
