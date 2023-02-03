<script>
  import { fly } from "svelte/transition";
  import Docs from "../../../components/Docs.svelte";
  import Vis from "../../../components/Vis.svelte";
  import RiskMap from "../../../components/RiskMap.svelte";
  import Risk from "../../../components/Risk.svelte";
  export let data;
  let tab_num = 0;
  $: console.log(data);
</script>

<div class="flex flex-col h-full print:block">
  <div class="shrink flex flex-row justify-between">
    <div>
      <h1 class="text-5xl text-black font-medium text-left block">
        {data.company_data.company}
      </h1>
      <span class="text-gray-500 text-lg text-left block"
        >{data.company_data.category_data.name}</span
      >
    </div>
    <div class="sm:block hidden bg-emerald-500 p-5 text-white font-bold text-3xl">
      ESG-рейтинг: {data.company_data.rank}
    </div>
  </div>
  <!-- <div class="divider divider-horizontal" /> -->
  <div class="grow flex flex-col">
    <div class="tabs flex-initial print:hidden">
      <span
        class="tab tab-bordered"
        class:tab-active={tab_num == 0}
        on:click={() => (tab_num = 0)}
        on:keydown={() => (tab_num = 0)}
      >
        ESG-рейтинг</span
      >
      <span
        class="tab tab-bordered"
        class:tab-active={tab_num == 1}
        on:click={() => (tab_num = 1)}
        on:keydown={() => (tab_num = 1)}>Карта проблем</span
      >
      <span
        class="tab tab-bordered"
        class:tab-active={tab_num == 2}
        on:click={() => (tab_num = 2)}
        on:keydown={() => (tab_num = 2)}>Рейтинг риска</span
      >
      <span
        class="tab tab-bordered"
        class:tab-active={tab_num == 3}
        on:click={() => (tab_num = 3)}
        on:keydown={() => (tab_num = 3)}>Расширенное описание</span
      >
    </div>
    <div class="flex-auto">
      {#key tab_num}
        <div in:fly={{ duration: 500 }} class="h-full w-full">
          {#if tab_num == 0}
            <Vis company_data={data.company_data} />
          {:else if tab_num == 1}
	   <RiskMap company_data={data.company_data}/>
          {:else if tab_num == 2}
	    <Risk/>
          {:else}
            <Docs data={data.company_data} descriptions={data.descriptions} />
          {/if}
        </div>
      {/key}
    </div>
  </div>
</div>

