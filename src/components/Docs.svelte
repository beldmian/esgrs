<script>
  let path = [];
  export let data;
  export let descriptions;
  $: console.log(data);
</script>

<div class="w-5/6 m-auto">
  <div class="text-sm breadcrumbs">
    <ul>
      <li
        class="hover:underline hover:cursor-pointer"
        on:click={() => (path = [])}
        on:keydown={() => (path = [])}
      >
        Главная
      </li>
      {#each path as item, i}
        <li
          class="hover:underline hover:cursor-pointer"
          on:click={() => (path = path.slice(0, i + 1))}
          on:keydown={() => (path = path.slcie(0, i + 1))}
        >
          {item}
        </li>
      {/each}
    </ul>
  </div>
  {#if path.length === 0}
    <h2 class="text-4xl">Главная</h2>
    <ul class="list-disc">
      <li
        class="hover:underline hover:cursor-pointer"
        on:click={() => (path = ["E-критерий"])}
        on:keydown={() => (path = ["E-критерий"])}
      >
        E-критерий
      </li>
      <li
        class="hover:underline hover:cursor-pointer"
        on:click={() => (path = ["S-критерий"])}
        on:keydown={() => (path = ["S-критерий"])}
      >
        S-критерий
      </li>
      <li
        class="hover:underline hover:cursor-pointer"
        on:click={() => (path = ["G-критерий"])}
        on:keydown={() => (path = ["G-критерий"])}
      >
        G-критерий
      </li>
    </ul>
  {:else if path[path.length - 1] == "E-критерий"}
    <h2 class="text-4xl">E-критерий</h2>
    {#each data.criterias[0].criterias as crit}
      <li
        class="hover:underline hover:cursor-pointer"
        on:click={() => {
          path.push(crit.id);
          path = path;
        }}
        on:keydown={() => path.push(crit.id)}
      >
        [{crit.id}] {crit.name}
      </li>
    {/each}
  {:else if path[path.length - 1] == "S-критерий"}
    <h2 class="text-4xl">S-критерий</h2>
    {#each data.criterias[1].criterias as crit}
      <li
        class="hover:underline hover:cursor-pointer"
        on:click={() => {
          path.push(crit.id);
          path = path;
        }}
        on:keydown={() => path.push(crit.id)}
      >
        [{crit.id}] {crit.name}
      </li>
    {/each}
  {:else if path[path.length - 1] == "G-критерий"}
    <h2 class="text-4xl">G-критерий</h2>
    {#each data.criterias[2].criterias as crit}
      <li
        class="hover:underline hover:cursor-pointer"
        on:click={() => {
          path.push(crit.id);
          path = path;
        }}
        on:keydown={() => path.push(crit.id)}
      >
        [{crit.id}] {crit.name}
      </li>
    {/each}
  {:else}
  <div class="overflow-scroll">
    <h2 class="text-4xl">{descriptions[path[path.length - 1]].heading}</h2>
    <p class="">{descriptions[path[path.length - 1]].body}</p>
  </div>
  {/if}
</div>
