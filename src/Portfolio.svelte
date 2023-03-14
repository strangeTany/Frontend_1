<script lang="ts">
  export let jobs: { jobName: string; images: string[][] }[];
</script>

<div id="Portfolio" class="tabcontent">
  {#each jobs as job}
    <h3>{job.jobName}</h3>
    <div class="row small">
      <div class="imagegroup" style="animation-delay: 1s">
        {#each job.images as image}
          <img class="work" src={image[0]} alt={image[1]} />
        {/each}
      </div>
    </div>
  {/each}
</div>

<style>
  .row {
    display: flex;
    overflow: hidden;
  }

  .imagegroup {
    display: flex;
    width: 100%;
  }

  .imagegroup img {
    flex-shrink: 0;
    /* object-fit: cover; */
    border: 3px solid white;
  }

  .imagegroup {
    animation: travel 20s infinite;
  }

  @keyframes travel {
    0%,
    100% {
      transform: translate3d(0, 0, 0);
    }
    50% {
      transform: translate3d(-100%, 0, 0);
    }
  }
  .work {
    height: 500px;
  }
</style>
