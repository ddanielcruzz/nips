NIP-07
======

`window.nostr` capability for web browsers
------------------------------------------

`draft` `optional` `author:fiatjaf`

The `window.nostr` object may be made available by web browsers or extensions and websites or web-apps may make use of it after checking its availability.

That object must define the following methods:

```
async window.nostr.getPublicKey(): string // returns a public key as hex
async window.nostr.signEvent(event: Event): Event // takes an event object, adds `id`, `pubkey` and `sig` and returns it
```

Aside from these two basic above, the following functions can also be implemented optionally:
```
async window.nostr.getRelays(): { [url: string]: {read: boolean, write: boolean} } // returns a basic map of relay urls to relay policies
async window.nostr.nip04.encrypt(pubkey, plaintext): string // returns ciphertext and iv as specified in nip-04
async window.nostr.nip04.decrypt(pubkey, ciphertext): string // takes ciphertext and iv as specified in nip-04
```

### Implementation

- [horse](https://github.com/fiatjaf/horse) (Chrome and derivatives)
- [nos2x](https://github.com/fiatjaf/nos2x) (Chrome and derivatives)
- [Alby](https://getalby.com) (Chrome and derivatives, Firefox)
- [Blockcore](https://www.blockcore.net/wallet) (Chrome and derivatives)
- [nos2x-fox](https://diegogurpegui.com/nos2x-fox/) (Firefox)
- [Flamingo](https://www.getflamingo.org/) (Chrome and derivatives)
- [AKA Profiles](https://github.com/neilck/aka-extension) (Chrome, stores multiple keys)
- [TokenPocket](https://www.tokenpocket.pro/) (Android, IOS, Chrome and derivatives)
- [Nostrmo](https://github.com/haorendashu/nostrmo_faq#download) (Android, IOS)
- [Spring Browser](https://spring.site) (Android)
- [nodestr](https://github.com/lightning-digital-entertainment/nodestr) (NodeJS polyfill)
