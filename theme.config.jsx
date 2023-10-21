import { Anchor } from "./components/anchor";

export default {
  useNextSeoProps() {
    return {
      titleTemplate: "Nostr | %s",
      openGraph: {
        type: "website",
        url: "https://nostr-nips.com",
        title: "Nostr | NIPs",
        description: "Documentation site for NIPs",
      },
    };
  },
  project: {
    link: "https://github.com/ddanielcruzz/nips",
  },
  components: {
    a: Anchor,
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
  footer: {
    text: null,
  },
};
