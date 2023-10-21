export default {
  useNextSeoProps() {
    return {
      titleTemplate: "Nostr | %s",
    };
  },
  project: {
    link: "https://github.com/ddanielcruzz/nips",
  },
  logo: <span>Nostr NIPs</span>,
  sidebar: {
    titleComponent({ title }) {
      if (title.includes("Nip")) {
        return title.replace("Nip ", "NIP-");
      }

      return title;
    },
  },
  editLink: {
    text: null,
  },
  feedback: {
    content: null,
  },
};
