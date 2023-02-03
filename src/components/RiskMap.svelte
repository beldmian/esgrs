<script>
  export let company_data;

  import Two from "two.js";
  import { onMount } from "svelte";
  import tippy from "tippy.js";
  import squarify from 'squarify'

  let cont;
  let objs = [];
  let s_path = [];

  let modify_data = (data) => {
    let data_out = {id: data.id, name: data.name, value: 4 - data.mark, weight: 0, mark: data.mark};
    if (data.criterias !== undefined) {
      data_out.children = data.criterias.map(modify_data);
    } else {
      let weight = company_data.category_data.weights.filter(x => x.id == data.id)[0];
      if (company_data.company_type == "unfin") {
        data_out.value *= weight.weight_unfin
        data_out.weight = weight.weight_unfin
      } else {
        data_out.value *= weight.weight_fin
        data_out.weight = weight.weight_fin
      }
    }
    return data_out
  }

  onMount(() => {
    var two = new Two({ fitted: true, type: "SVGRenderer" }).appendTo(cont);
    var stage = new Two.Group();
    two.add(stage);
    two.update()
    let data_new = company_data.criterias.map(modify_data);
    console.log(company_data);
    const tm = squarify(data_new, {x0: 0, y0: 0, x1: two.width, y1: two.height});
    tm.forEach(el => {
      let rect = new Two.Rectangle(el.x0 + (el.x1-el.x0) / 2, el.y0 +(el.y1-el.y0) / 2 , el.x1-el.x0, el.y1-el.y0); 
      if (el.id.startsWith("E")) {
        rect.fill = "#059669"
	rect.stroke = "#d1fae5"
      } else if (el.id.startsWith("S")) {
        rect.fill = "#0284c7"
	rect.stroke = "#e0f2fe"
      } else {
        rect.fill = "#7c3aed"
	rect.stroke = "#ede9fe"
      }
      stage.add(rect);
      objs.push({id: rect.id, name: el.name, weight: el.weight, mark: el.mark});
    })
    console.log(tm);
    two.add(stage);
    two.update()
    objs.forEach(obj => {
      let classes = document.getElementById(obj.id).classList;
      classes.add("hover:animate-pulse");
      classes.add("transition");
      classes.add("outline-none");
      classes.add("delay-150");
      tippy("#" + obj.id, {
        content:
          obj.name +
          "<br>Оценка: " +
          obj.mark +
          "/4<br>Вес: " +
          (obj.weight === undefined ? "-" : obj.weight),
        arrow: false,
        allowHTML: true,
        theme: "cbr",
      });
    })
  })
</script>

<div class="w-full h-full transition delay-150" bind:this={cont} />
