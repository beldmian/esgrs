<script>
  export let company_data;

  import Two from "two.js";
  import { onMount } from "svelte";
  import tippy from "tippy.js";
  let cont;
  let scale_factor = 1;
  onMount(() => {
    var two = new Two({ fitted: true, type: "SVGRenderer" }).appendTo(cont);
    if (two.width < 600) {
      scale_factor = two.width / 600;
    }
    var stage = new Two.Group();

    var arc_e_glob = new Two.ArcSegment(
      two.width / 2,
      two.height / 2,
      40 * scale_factor,
      280 * scale_factor,
      0,
      (2 / 3) * Math.PI,
      100
    );
    arc_e_glob.noStroke().fill = "#d1fae5";
    stage.add(arc_e_glob);

    var arc_s_glob = new Two.ArcSegment(
      two.width / 2,
      two.height / 2,
      40 * scale_factor,
      280 * scale_factor,
      (2 / 3) * Math.PI,
      (4 / 3) * Math.PI,
      100
    );
    arc_s_glob.noStroke().fill = "#e0f2fe";
    stage.add(arc_s_glob);

    var arc_g_glob = new Two.ArcSegment(
      two.width / 2,
      two.height / 2,
      40 * scale_factor,
      280 * scale_factor,
      (4 / 3) * Math.PI,
      (6 / 3) * Math.PI,
      100
    );
    arc_g_glob.noStroke().fill = "#ede9fe";
    stage.add(arc_g_glob);

    var circl4 = new Two.Circle(two.width / 2, two.height / 2, 280 * scale_factor, 100);
    circl4.noFill().stroke = "#ccc";
    stage.add(circl4);

    var circl3 = new Two.Circle(two.width / 2, two.height / 2, 256 * scale_factor, 100);
    circl3.noFill().stroke = "#ccc";
    stage.add(circl3);

    var circl2 = new Two.Circle(two.width / 2, two.height / 2, 232 * scale_factor, 100);
    circl2.noFill().stroke = "#ccc";
    stage.add(circl2);

    var circl1 = new Two.Circle(two.width / 2, two.height / 2, 208 * scale_factor, 100);
    circl1.noFill().stroke = "#ccc";
    stage.add(circl1);

    var circl0 = new Two.Circle(two.width / 2, two.height / 2, 184 * scale_factor, 100);
    circl0.noFill().stroke = "#ccc";
    stage.add(circl0);

    var circlm0 = new Two.Circle(two.width / 2, two.height / 2, 136 * scale_factor, 100);
    circlm0.noFill().stroke = "#ccc";
    stage.add(circlm0);

    var circlm1 = new Two.Circle(two.width / 2, two.height / 2, 112 * scale_factor, 100);
    circlm1.noFill().stroke = "#ccc";
    stage.add(circlm1);

    var circlm2 = new Two.Circle(two.width / 2, two.height / 2, 88 * scale_factor, 100);
    circlm2.noFill().stroke = "#ccc";
    stage.add(circlm2);

    var circlm3 = new Two.Circle(two.width / 2, two.height / 2, 64 * scale_factor, 100);
    circlm3.noFill().stroke = "#ccc";
    stage.add(circlm3);

    var circlm4 = new Two.Circle(two.width / 2, two.height / 2, 40 * scale_factor, 100);
    circlm4.noFill().stroke = "#ccc";
    stage.add(circlm4);

    let objs = [];
    const visualize_criterias = (sa, ea, crits, col, depth) => {
      let diffa = (ea - sa) / crits.length;
      let lasta = sa;
      let ir, or;
      let col_name;
      if (col == 0) {
        col_name = "#10b981";
      } else if (col == 1) {
        col_name = "#0ea5e9";
      } else {
        col_name = "#8b5cf6";
      }
      if (depth == 1) {
        ir = 160 
        or = 240;
      }
      if (depth == 2) {
        ir = 240;
        or = 360;
      }
      crits.forEach((crit) => {
        if (crit.mark === undefined) {
          crit.mark = 1;
        }
        console.log(company_data);
        let weight = company_data.category_data.weights.filter(
          (v) => v.id == crit.id
        )[0];
        if (company_data.company_type == "unfin") {
          weight = weight.weight_unfin;
        } else {
          weight = weight.weight_fin;
        }
        let arc = new Two.ArcSegment(
          two.width / 2,
          two.height / 2,
          ir * scale_factor,
          (ir + (120 * (crit.mark + 1)) / 5) * scale_factor,
          lasta,
          lasta + (ea - sa) * weight,
          100
        );
        if (crit.criterias !== undefined) {
          visualize_criterias(
            lasta,
            lasta + (ea - sa) * weight,
            crit.criterias,
            col,
            depth + 1
          );
        }
        lasta += (ea - sa) * weight;
        arc.fill = col_name;
        arc.stroke = "#fff";
        stage.add(arc);
        objs.push({ id: arc.id, data: crit, weight: weight });
      });
    };

    var e_arc = new Two.ArcSegment(
      two.width / 2,
      two.height / 2,
      (136 - (96 * company_data.criterias[0].mark) / 4) * scale_factor,
      160 * scale_factor,
      0,
      (2 / 3) * Math.PI,
      100
    );
    stage.add(e_arc);
    e_arc.fill = "#34d399";
    e_arc.stroke = "#fff";
    objs.push({
      id: e_arc.id,
      data: { name: "E-критерий", mark: company_data.criterias[0].mark },
    });
    visualize_criterias(
      0,
      (2 / 3) * Math.PI,
      company_data.criterias[0].criterias,
      0,
      1
    );

    var s_arc = new Two.ArcSegment(
      two.width / 2,
      two.height / 2,
      (136 - (96 * company_data.criterias[1].mark) / 4) * scale_factor,
      160 * scale_factor,
      (2 / 3) * Math.PI,
      (4 / 3) * Math.PI,
      100
    );
    s_arc.fill = "#38bdf8";
    s_arc.stroke = "#fff";
    stage.add(s_arc);
    objs.push({
      id: s_arc.id,
      data: { name: "S-критерий", mark: company_data.criterias[1].mark },
    });
    visualize_criterias(
      (2 / 3) * Math.PI,
      (4 / 3) * Math.PI,
      company_data.criterias[1].criterias,
      1,
      1
    );

    var g_arc = new Two.ArcSegment(
      two.width / 2,
      two.height / 2,
      (136 - (96 * company_data.criterias[2].mark) / 4) * scale_factor,
      160 * scale_factor,
      (4 / 3) * Math.PI,
      2 * Math.PI,
      100
    );
    g_arc.fill = "#a78bfa";
    g_arc.stroke = "#fff";
    stage.add(g_arc);
    objs.push({
      id: g_arc.id,
      data: { name: "G-критерий", mark: company_data.criterias[2].mark },
    });
    visualize_criterias(
      (4 / 3) * Math.PI,
      2 * Math.PI,
      company_data.criterias[2].criterias,
      2,
      1
    );

    two.add(stage);
    two.update();
    // addZUI(two, stage);
    objs.forEach((obj) => {
      let classes = document.getElementById(obj.id).classList;
      classes.add("hover:animate-pulse");
      classes.add("transition");
      classes.add("outline-none");
      classes.add("delay-150");
      tippy("#" + obj.id, {
        content:
          obj.data.name +
          "<br>Оценка: " +
          obj.data.mark +
          "/4<br>Вес: " +
          (obj.weight === undefined ? "-" : obj.weight),
        arrow: false,
        allowHTML: true,
        theme: "cbr",
      });
    });
  });
</script>

<div class="w-full h-full transition delay-150" bind:this={cont} />

<style>
  :global(.tippy-box[data-theme~="cbr"]) {
    background-color: #74777b;
  }
  :global(.svg-shadow) {
    filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.7));
  }
</style>
