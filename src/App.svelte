<script lang="ts">
  import Portfolio from "./Portfolio.svelte";
  import Contacts from "./Contacts.svelte";
  import About from "./About.svelte";

  let options: string[] = ["About", "Partfolio", "Contacts"];

  let activeTab: string = options[0];

  const handleClick = (tabValue: string) => {
    activeTab = tabValue;
  };
  let designerImages: string[][] = [
    ["https://i.ibb.co/xHsKfHm/poster1.png", "stand up poster 1"],
    ["https://i.ibb.co/FwNRNjS/poster2.png", "stand up poster 2"],
    ["https://i.ibb.co/hMY6dpC/poster3.png", "stand up poster 3"],
    ["https://i.ibb.co/Qjgghx1/stickers.jpg", "stand up stickers"],
  ];
  let Artist3DImages: string[][] = [
    ["https://i.ibb.co/DgR2T7K/steve.png", "steve 3d model"],
    ["https://i.ibb.co/qpwf14w/craft.png", "3d craft models"],
    ["https://i.ibb.co/k08DK8g/monsters.png", "3d monsteers models"],
  ];
  let Artist2DImages: string[][] = [
    ["https://i.ibb.co/QYj13YP/coffee-set.png", "drawing of coffee set"],
    ["https://i.ibb.co/zmFw2bj/girl-in-cafe.png", "drawing of girl in cafe"],
    ["https://i.ibb.co/THS5QBZ/dead-fish.jpg", "drawing of fish in aquarium"],
    ["https://i.ibb.co/9t5NQn3/me.png", "drawing of dog in bed"],
  ];
  let jobs: { jobName: string; images: string[][] }[] = [
    { jobName: "Graphical Designer", images: designerImages },
    { jobName: "3D Artist", images: Artist3DImages },
    { jobName: "2D Artist", images: Artist2DImages },
  ];
  let contactsLinks: string[][] = [
    [
      "https://t.me/strange_tany",
      "https://i.ibb.co/jw0rW0M/telegram.png",
      "Telegram",
    ],
    [
      "https://instagram.com/strangetany?igshid=YmMyMTA2M2Y=",
      "https://i.ibb.co/SXdQGrt/instagram.png",
      "Instagram",
    ],
    [
      "mailto: strangetany@gmail.com",
      "https://i.ibb.co/2gDN71y/gmail.png",
      "E-Mail",
    ],
    ["tel: +79021503786", "https://i.ibb.co/YZC2GXW/phone.png", "Phone"],
  ];
  let portfolioLinks: string[][] = [
    [
      "https://strange_tany.artstation.com/",
      "https://i.ibb.co/89gWMR3/artstation.png",
      "ArtStation",
    ],
    [
      "https://github.com/strangeTany",
      "https://i.ibb.co/wyBgT7k/github.png",
      "GitHub",
    ],
  ];
  let contacts: { type: string; links: string[][] }[] = [
    { type: "Contacts", links: contactsLinks },
    { type: "Portfolio", links: portfolioLinks },
  ];
</script>

<main>
  <div class="tab">
    {#each options as option}
      <button
        class={activeTab === option ? "active" : ""}
        on:click={() => {
          handleClick(option);
        }}
        >{option}
      </button>
    {/each}
  </div>

  {#if activeTab == options[0]}
    <About />
  {:else if activeTab == options[1]}
    <Portfolio {jobs} />
  {:else if activeTab == options[2]}
    <Contacts {contacts} />
  {/if}
</main>

<style>
  .tab {
    overflow: hidden;
    background-color: #fff0d9;
    display: flex;
    border-bottom: 5px solid #ffd391;
    align-items: center;
    justify-content: center;
  }
  .tab button {
    background-color: inherit;
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;
  }
  .active {
    background-color: #ffd391 !important;
    border-radius: 15px 15px 0 0;
  }
  @keyframes fadeEffect {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
