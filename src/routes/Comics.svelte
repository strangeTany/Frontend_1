<script lang="ts">
  import type { Comics } from "./Comics";
  import { onMount } from "svelte";

  async function fetch_id(params: string | URLSearchParams) {
    let r: string = await (
      await fetch("https://fwd.innopolis.app/api/hw2?" + params)
    ).json();
    return r;
  }
  async function fetch_comics(id: string | URLSearchParams) {
    let r: Comics = await (
      await fetch(`https://getxkcd.vercel.app/api/comic?` + id)
    ).json();
    return r;
  }
  let param_email: URLSearchParams = new URLSearchParams(
    "email='t.ivshina@innopolis.university'"
  );
  let id: string;

  let comics: Comics;

  onMount(async () => {
    await fetch_id(param_email).then((res) => {
      id = res;
    });
    await fetch_comics(new URLSearchParams({ num: id })).then((res) => {
      comics = res;
    });
  });
</script>

<div>
  {#if comics}
    <h3>{comics.title}</h3>
    <img src={comics.img} alt={comics.alt} />
    <p>
      {new Date(
        Date.UTC(
          parseInt(comics.year),
          parseInt(comics.month) - 1,
          parseInt(comics.day)
        )
      ).toLocaleString()}
    </p>
  {/if}
</div>
