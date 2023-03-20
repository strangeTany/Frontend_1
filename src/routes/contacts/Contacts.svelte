<script lang="ts">
  export let contacts: { type: string; links: string[][] }[];
</script>

<div id="Contacts" class="tabcontent">
  {#each contacts as contact}
    <h3>{contact.type}</h3>
    {#each contact.links as link}
      <div class="contacts_content">
        <a class="contacts" href={link[0]} type="button">
          <img src={link[1]} class="contact_icons" alt="{link[2]} icon" />
          <span class="contacts_name">{link[2]}</span>
        </a>
      </div>
    {/each}
  {/each}
</div>

<style>
  .contact_icons {
    margin-bottom: -7px;
    width: 25px;
    height: auto;
  }
  .contacts {
    width: 125px;
    padding: 10px 12px;
    border: none;
    background-color: #efefef;
    margin: 10px;
  }
  .contacts_name {
    font-size: 11pt;
  }
  .contacts_content {
    display: contents;
    align-items: center;
    justify-content: center;
  }
  .contacts_content a:hover {
    background-color: aliceblue;
  }
  a {
    color: inherit;
    text-decoration: inherit;
  }
</style>
