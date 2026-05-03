# Content Outline

Page-by-page plan for the phreakers site. Each section lists the argument/narrative points to hit and the multimedia assets to embed or link.

---

## Page 1: THE PHREAKERS (phreakers.html)

**Purpose:** Rubric element 2 — describe the group/activity. This is the "what and who" page. Visitors land here first after the homepage, so it needs to orient someone who has never heard the word "phreaking."

### 1.1 What is phreaking?

- Open with a concrete image: a blind kid whistling a perfect 2600 Hz tone into a payphone handset and hearing the line go dead — then come alive in a new way.
- Define phreaking as the exploration and exploitation of telephone infrastructure, primarily the Bell System / AT&T long-distance network.
- Explain in-band signaling in plain English: the phone network used audible tones on the same channel as voice to route calls. If you could produce the right tone, you could give the network commands.
- The blue box: a device that generated multifrequency (MF) tones to seize trunk lines and route free calls. Briefly explain how it worked — 2600 Hz to reset the line, then MF pairs to "dial" operator-level routing.
- Other boxes in brief: red box (simulated coin tones), beige box (lineman's handset for tapping), black box (made incoming calls free for the caller). These are colorful and visual — good for a sidebar or illustrated list.
- Make the point that phreaking was fundamentally about *understanding* a system, not just stealing phone calls. The free calls were a side effect of comprehension.

**Assets:**
- Audio clip: 2600 Hz tone (~5 seconds) — widely available, public domain. Embed with a simple `<audio>` player.
- Image/diagram: simplified diagram of how in-band signaling worked (voice channel carrying both conversation and control tones). Could be hand-drawn or made in a retro style to match the vaporwave theme.
- Image: photo of an actual blue box (Draper's or Wozniak's). Lapsley's companion site or Wikimedia Commons.
- Optional sidebar: "The Box Rainbow" — a quick visual list of box types and what they did (blue, red, black, beige, etc.)

### 1.2 Key figures

Profiles don't need to be long — 2-3 sentences each, enough to make them feel real. Focus on what makes each person's story illuminate a different facet of the community.

- **Joe Engressia / Joybubbles** — blind from birth, perfect pitch, discovered at age 7 that whistling into the phone did things. Embodies the curiosity-driven, almost accidental origin of phreaking. Later legally changed his name to Joybubbles and declared himself a perpetual five-year-old. Tragic and fascinating.
- **John Draper / Cap'n Crunch** — discovered (or was told) that the free whistle in Cap'n Crunch cereal produced 2600 Hz. Built blue boxes. The mythologized figure of phreaking, though the reality is more complicated. Bridge to Woz and Jobs.
- **Steve Wozniak & Steve Jobs** — built and sold blue boxes at Berkeley before founding Apple. The Rosenbaum article radicalized Wozniak. Quote Woz: "If it hadn't been for the blue boxes, there wouldn't have been an Apple." This is the bridge to legacy.html.
- **The YIPL/TAP crowd (Abbie Hoffman, Al Bell)** — phreaking as political act. YIPL (Youth International Party Line) was explicitly countercultural — stick it to Ma Bell as a form of protest. Evolved into TAP newsletter.
- **Kevin Poulsen (Dark Dante)** — penetrated ARPANET and Pacific Bell, rigged a radio contest by taking over phone lines. FBI's most wanted hacker for a time. Now a journalist. Shows the crackdown era (bridge to legacy.html).
- **Susan Thunder** — one of the few prominent women in the scene. Social engineer more than technical phreaker. Her story raises questions about gender in the community.
- **Phone Losers of America / RBCP (Brad Carter)** — late-era phreaking/prank culture that carried the spirit into the 2000s and beyond. Bridge to personal.html.

**Assets:**
- Photo: Joybubbles (there are a few widely circulated ones).
- Photo: John Draper, ideally the famous one with the whistle.
- Image: the Cap'n Crunch whistle itself.
- Pull quote from Wozniak about blue boxes and Apple.
- Optional: audio clip of Joybubbles whistling 2600 Hz (YouTube, ~30 seconds).

### 1.3 Timeline

A visual or semi-visual timeline running from the late 1950s to the 2000s. Key beats:

- **Late 1950s:** Joe Engressia discovers whistling into the phone produces effects. In-band signaling vulnerabilities exist but aren't widely known outside Bell Labs.
- **1960s:** Word spreads slowly through blind communities and college campuses. Early blue box builders appear.
- **1971:** Ron Rosenbaum's "Secrets of the Little Blue Box" in Esquire. Phreaking goes from underground to counterculture knowledge. Wozniak reads it. YIPL newsletter launches.
- **1970s:** YIPL becomes TAP. The community grows via newsletters, word of mouth, and the phone network itself (conference bridges, loop-arounds).
- **Early 1980s:** BBS era. Phreaking knowledge migrates from print/word-of-mouth to dial-up bulletin boards. T-files proliferate. 2600 magazine launches (1984). Phrack launches (1985).
- **1984:** AT&T breakup (divestiture). The Bell System fragments into Baby Bells. Changes the landscape of what you're exploiting.
- **Late 1980s:** Common Channel Signaling / SS7 begins replacing in-band signaling. The technical window for classical blue-box phreaking starts closing.
- **1990:** Operation Sundevil — Secret Service raids across 14 cities. Steve Jackson Games. The crackdown begins in earnest.
- **1990-95:** Mitnick saga. The most-wanted hacker in America is fundamentally a phone phreaker and social engineer.
- **Mid-1990s:** SS7 rollout essentially complete. Classical phreaking is technically dead. Community migrates fully to the internet (IRC, web forums, 2600 meetings).
- **2000s-present:** Residual communities. PLA, 2600 still publishing, DEF CON and HOPE conferences. Phreaking as historical identity more than active practice.

**Assets:**
- This should be a styled visual element — either a vertical timeline with dates on one side and events on the other, or a horizontal scrolling timeline. CSS-driven, nothing fancy needed, but it should *look* different from the prose sections.
- Thumbnail images at key points: the Esquire cover (1971), a blue box photo, the 2600 magazine first issue cover, a screenshot of a BBS.

---

## Page 2: THE WIRES (meeting-place.html)

**Purpose:** Rubric element 4 — how the online nature of the activity affects its cultural characteristics. This is the most analytically original page. The core argument: phreakers' "online" was the phone network itself, so the infrastructure they exploited was simultaneously the infrastructure they used to build community.

### 2.1 Conference bridges and party lines

- The phone network had features that were meant for internal use (test lines, conference bridges) or were artifacts of the switching architecture (loop-arounds, open trunks).
- Phreakers discovered these and turned them into social spaces. A conference bridge meant for Bell technicians became a nightly hangout for teenagers trading blue-box techniques.
- Loop-arounds: pairs of phone numbers where if you call one and someone calls the other, you're connected. Free, untraceable (no billing record), and discoverable by scanning.
- The 2111 conference: in some areas, dialing certain test numbers dropped you onto a party line. These were the chat rooms before chat rooms.
- **Disconnected number recordings:** calling a vacant number played a soft pre-recorded message on loop, but the line was essentially open — multiple callers landing on the same number could hear each other and talk over the recording. Accidental chat rooms in dead ends of the network.
- **Ringback numbers:** dialing a specific number caused your own line to ring back, but if two people called the same ringback number simultaneously, they'd be connected to each other.
- **PBX systems:** private branch exchanges belonging to businesses. Phreakers would find dial-in numbers, crack access codes, and use the system as a hub — sometimes for free outbound calls, but also as gathering points.
- **Alliance Teleconferencing and similar services:** commercial conference call platforms that phreakers broke into and essentially colonized, hosting marathon group calls.
- **Tandem trunks:** by blue-boxing through long-distance switching infrastructure, phreakers could stack connections through multiple tandems and build their own routes through the network, sometimes bridging others in.
- **REMOBS (Remote Observation) lines:** used by the phone company to silently monitor calls for quality assurance. Phreakers who found these could listen in on — or join — active calls.
- **Central office test lines:** various diagnostic numbers inside switching offices, each with a different function. Phreakers catalogued and traded these obsessively.
- Key point: these gathering places were *discovered*, not *built*. The community formed in the gaps and seams of infrastructure, not in purpose-designed social spaces. This is culturally significant — it made the community feel like it was getting away with something even when it was just socializing. Every one of these spaces was a crack in the infrastructure that people turned into a living room.

**Assets:**
- Audio: a recording of a conference bridge or loop-around call, if available from archive.org or textfiles.com. Even a short clip of the characteristic sounds would be atmospheric.
- Diagram: how a loop-around works (simple visual — two numbers, one connection, no billing).

### 2.2 Toll-free WATS lines and free long-distance

- Before the consumer internet, long-distance phone calls were expensive. This was the fundamental economic barrier to a geographically distributed community.
- Blue boxes and other exploits eliminated that barrier. You could call anywhere for free. This wasn't just theft of service — it was the enabling condition for a national (and international) community to exist.
- WATS (Wide Area Telephone Service) lines used by businesses were a specific target: call a toll-free business line, then blue-box out to wherever you actually wanted to go.
- Make the comparison explicit: free long-distance for phreakers played the same community-enabling role that cheap/free internet access played for later online communities. The difference is that phreakers had to *create* their own access by exploiting the system.
- This is where the "built vs. exploited" distinction from the proposal is most vivid. FOSS communities build on infrastructure they also build. Phreakers gathered on infrastructure they parasitized. That shapes norms around ownership, secrecy, and legitimacy.

**Assets:**
- A scan or image of an old AT&T long-distance rate card or advertisement showing how expensive calls were — makes the economic incentive visceral.
- Pull quote from a phreaker about the feeling of free long-distance (Lapsley interviews are good for this).

### 2.3 BBSes and the 2600 / TAP / YIPL pipeline

- By the early 1980s, phreaking knowledge and community migrated to BBSes. This was the first platform shift: from the phone network itself to computers connected via the phone network.
- Phreaking BBSes hosted t-files (text files with technical instructions), message boards, and file sections. They were the repositories of community knowledge.
- TAP newsletter (evolved from YIPL) was a key printed artifact — mailed in physical envelopes. 2600 magazine (started 1984) professionalized the format and still publishes.
- Phrack (started 1985) was a purely electronic zine distributed on BBSes. It's the bridge between BBS culture and internet culture.
- IRC and the WELL: as the internet became accessible in the late '80s and early '90s, phreakers were early adopters. Some were on the WELL (Whole Earth 'Lectronic Link), rubbing shoulders with the Stewart Brand crowd.
- This migration path — phone network → BBSes → internet — is itself part of the story. Each platform shift changed the community's character. On the phone, you were anonymous and ephemeral. On BBSes, you had persistent handles and text archives. On the internet, the audience scaled up but so did law enforcement visibility.

**Assets:**
- Image: scan or screenshot of a TAP newsletter page (textfiles.com has these).
- Image: 2600 magazine cover (first issue or an iconic one).
- Screenshot: a phreaking BBS interface (ANSI art welcome screen or file listing). textfiles.com or archive.org.
- Optional: embedded clip from Jason Scott's *BBS: The Documentary* if a relevant segment can be isolated.

### 2.4 Argument: legibility breeds community

- This is the analytical climax of the page, developing the proposal's first research question: is there a critical relationship between system legibility and community formation?
- The Bell System's in-band signaling was *legible* — you could hear it, decode it with your ears, and reproduce it with cheap electronics or even your voice. This legibility is what made phreaking possible and what made the community possible.
- Contrast: when AT&T moved to Common Channel Signaling (SS7), control signals moved to a separate data channel invisible to users. The system became opaque. No comparable community of tinkerers formed around SS7, and classical phreaking died.
- Modern telecom (4G/5G control planes, VoIP SIP signaling) is even more opaque. The attack surfaces that exist are exploited by state actors and security researchers, not by curious teenagers.
- Draw the parallel to computing: early computers were also legible (you could read the source, poke memory directly, understand the whole system). The homebrew computer club, the MIT hackers Levy describes, the early internet — communities formed in legible systems. As systems become more complex and opaque, the nature of the communities around them changes.
- Lean on Levy (*Hackers*) and Gertner (*The Idea Factory*) for this argument.

**Assets:**
- Diagram: in-band vs. out-of-band signaling, side by side. Visual representation of the legibility argument — one system you can "see into," one you can't.
- Pull quote from Levy or Lapsley about the feeling of understanding a system completely.

---

## Page 3: CULTURE (culture.html)

**Purpose:** Rubric element 3 — analysis of cultural characteristics. This page answers: what were the characteristic behaviors, norms, and interactions among phreakers?

### 3.1 Knowledge sharing under threat

- Phreakers shared knowledge, but not the way FOSS communities do. The difference is instructive.
- FOSS: "release early, release often." Sharing is a core value. Code is public. Reputation comes from contribution.
- Phreakers: sharing happened, but selectively. T-files circulated on BBSes. 2600 and Phrack published techniques. TAP mailed newsletters. But *specific working exploits* — live conference bridge numbers, valid credit card algorithms, active WATS lines — were often hoarded or shared only within trusted circles.
- Why: because sharing a working exploit burned it. AT&T's security teams read 2600 and Phrack too. The more widely an exploit circulated, the faster it got patched.
- This is the core of the "built vs. exploited" distinction from the proposal. FOSS communities share code that builds infrastructure. Phreakers shared knowledge that *consumed* infrastructure — every use brought the technique closer to death.
- The result was a culture of layered trust: public knowledge (zines, t-files) at the outer ring, working techniques in the middle, and active exploits at the core shared only with trusted friends.
- Use Coleman's *Coding Freedom* as the explicit FOSS counterpoint.

**Assets:**
- Side-by-side comparison: a page from TAP/2600 next to a page from a FOSS project's documentation or mailing list. Visual contrast of two knowledge-sharing cultures.
- Scan of a t-file from textfiles.com — pick one that's instructional but not a literal how-to-commit-fraud guide.

### 3.2 Handles, secrecy, and self-preservation

- Pseudonyms were universal. Cap'n Crunch, Dark Dante, The Mentor, Susan Thunder, Emmanuel Goldstein (editor of 2600, named after the Orwell character), RBCP.
- Handles weren't just fun — they were operational security. Phreaking was illegal (wire fraud, theft of service, unauthorized access). Your handle was a firewall between your phone-network identity and your legal identity.
- Trust was built slowly and could be destroyed instantly. Getting "busted" didn't just affect you — it endangered everyone you'd shared information with.
- Snitching and informants: law enforcement cultivated informants within the community. This created paranoia and shaped social dynamics. The Kevin Mitnick story involves alleged betrayals by associates.
- The social cost of getting caught: jail time, yes, but also being cut off from the community. Your phone lines tapped, your equipment seized, your contacts scattered.
- Contrast with today's internet pseudonym culture: handles on Twitter/Reddit serve identity and branding. Phreaker handles served survival.

**Assets:**
- A list or visual of famous handles and the people behind them (revealed after arrest or voluntary disclosure).
- Pull quote from *The Hacker Crackdown* about the paranoia of the post-Sundevil era.

### 3.3 Exploration vs. theft of service

- The central ethical tension of the community, and the proposal's last research question.
- The "explorer" defense: "I'm not stealing anything, I'm just looking around. The phone call costs AT&T effectively nothing at the margin. I'm exploring a system, not depriving anyone of a resource."
- The reality: blue-boxing was wire fraud. AT&T estimated millions in lost revenue. Some phreakers sold access or used exploits for personal gain (free calls to girlfriends, etc.).
- But the line was genuinely blurry. Some phreakers *did* primarily explore — mapping the network, understanding switching systems, calling test numbers and listening to recorded announcements. The knowledge was the point, not the free calls.
- The community never reached consensus. 2600 magazine editorially maintained an "information wants to be free" / "exploration is not a crime" stance. TAP was more openly about getting free stuff. Individual phreakers fell all along the spectrum.
- The Mentor's "Hacker Manifesto" (Phrack issue 7, 1986) is the most articulate statement of the explorer position. Quote it.
- This tension carried directly into hacker culture and persists today in debates about responsible disclosure, bug bounties, and the ethics of security research.

**Assets:**
- Block quote: the relevant passage from "The Conscience of a Hacker" / Hacker Manifesto.
- Optional: two contrasting quotes — one from a "pure explorer" phreaker, one from someone more openly about the free calls. Lapsley's interviews should provide both.

### 3.4 Aesthetics and play

- Phreaking had a strong aesthetic dimension that's easy to overlook if you focus only on the technical and legal.
- The gleeful, prankish element: PLA's prank calls (calling fast food restaurants, abusing conference bridge features, the Walmart intercom tradition). This was play, not profit.
- BBS ANSI art: phreaking BBSes had elaborate ANSI art splash screens, often with skulls, lightning bolts, and telephone imagery. This is a visual tradition that fed into demoscene and internet aesthetics.
- 2600 magazine cover art: distinctive, recognizable, still running. A designed visual identity for a community.
- The "zine" format itself: t-files, Phrack's structured format with headers and sign-offs, TAP's typewritten newsletter aesthetic. These are literary forms.
- Phreak/hack culture conferences: 2600's HOPE (Hackers on Planet Earth) and DEF CON both carry this aesthetic of playful transgression.
- This matters for the project's argument because it shows phreaking wasn't just a technical activity — it was a *culture* with its own art, humor, and style. The assignment asks for cultural characteristics, and aesthetics are cultural.

**Assets:**
- ANSI art: screenshots of phreaking BBS welcome screens (textfiles.com has a large collection).
- 2600 cover art: one or two iconic covers.
- Audio: a PLA prank call clip (from the Snow Plow Show podcast or phonelosers.org). Short — 30-60 seconds. This is the fun moment on the site.
- Image: photos from a 2600 meeting or HOPE conference, if available.

---

## Page 4: LEGACY (legacy.html)

**Purpose:** The "what happened next" page. Covers the end of classical phreaking and its inheritance by hacker culture. Addresses proposal questions 3 and 4.

### 4.1 The crackdown

- Operation Sundevil (May 1990): coordinated Secret Service raids across 14 cities. Seized computers, BBSes, and equipment. The symbolic end of the "nobody's watching" era.
- Steve Jackson Games: raided as part of Sundevil despite being a game publisher, not a hacker group. The case became a rallying point and led to the founding of the EFF (Electronic Frontier Foundation). Show how law enforcement overreach galvanized a civil liberties response.
- The Hacker Crackdown (Sterling's book): the essential text here. Sterling had access to both sides — law enforcement and the hacker/phreaker community. Use him as the primary source for this section.
- Effect on community norms: post-Sundevil, the community became more security-conscious, more paranoid, more fragmented. Open sharing on BBSes declined. Encryption became a priority. The carefree era was over.

**Assets:**
- Newspaper clippings or headlines from 1990 about Sundevil raids (archival images).
- Pull quote from Sterling about the atmosphere of the crackdown.
- Image: EFF logo and founding context — direct line from Sundevil to digital civil liberties.

### 4.2 The Mitnick saga

- Kevin Mitnick: arguably the most famous hacker/phreaker. His story spans the entire arc from phreaking to internet-era hacking.
- Key beats: early phone phreaking in LA, penetrating DEC and Pacific Bell systems, fugitive years, arrest in 1995 (traced via cell phone), conviction, "Free Kevin" movement, release in 2000, later became a security consultant.
- Mitnick was fundamentally a social engineer who used phreaking techniques. His story illustrates how phreaking skills translated into the internet age.
- The "Free Kevin" movement: one of the first internet-based activist campaigns. T-shirts, websites, protests. Shows the community's ability to rally around a cause and the bridge between phreaking community and internet activism.
- The media's role: Mitnick was mythologized by journalists (Markoff at the NYT) and by his own self-narration. The story of the "dangerous hacker" was partly a media construction. Discuss how the phreaking/hacking community felt about this representation.

**Assets:**
- Photo: Mitnick (widely available press photos from arrest or later).
- Image: "Free Kevin" poster/website screenshot.
- Optional: short clip from *Freedom Downtime* (Emmanuel Goldstein's documentary about Mitnick, on archive.org).

### 4.3 Out-of-band signaling and the closing window

- Technical explanation (keep it accessible): in the old system, the signals that controlled call routing traveled on the same wires as the voice call (in-band). That's what made blue boxes possible.
- SS7 / Common Channel Signaling: moved control signals to a separate data network. Your voice call and the signals routing it no longer shared a channel. You couldn't inject commands by whistling or playing tones anymore.
- Rollout was gradual through the late 1980s and early 1990s. Classical phreaking didn't die overnight — it died switch by switch, exchange by exchange.
- This is the *technical* death of phreaking, as opposed to the *legal* death (crackdowns) and the *social* death (migration to internet communities). All three happened roughly simultaneously, which is part of why the transition was so total.
- The metaphor of the "closing window" from your proposal fits perfectly here.

**Assets:**
- Diagram: in-band vs. SS7 architecture (callback to the diagram on the meeting-place page, but more detailed here). Show how the attack surface disappeared.

### 4.4 What carried into hacker culture

- The cultural DNA that transferred from phreaking to hacking and internet culture:
  - **Handles and pseudonymity** — universal in hacker culture, direct inheritance from phreaking.
  - **Text-mode publishing** — t-files → Phrack → hacker zines → early web publishing. The format of sharing technical knowledge in text files persisted.
  - **Conferences** — 2600's HOPE conference (first in 1994), DEF CON (first in 1993). Direct descendants of 2600 meetings at malls.
  - **The hacker ethic** — as Levy articulated it: access to computers should be unlimited, information should be free, mistrust authority. These ideas have phreaker roots.
  - **The 2600 persistence** — 2600 magazine still publishes. The magazine is a living bridge between the phreaking past and the security/hacker present.
- Lean on Turner (*From Counterculture to Cyberculture*) for the Stewart Brand / WELL connection: phreakers were on the WELL alongside the Whole Earth Catalog crowd, and that convergence shaped early internet culture.

**Assets:**
- Photo: a 2600 meeting (typically held at malls on the first Friday of each month — there are photos).
- Photo: early DEF CON or HOPE conference.
- 2600 magazine cover: a recent issue alongside an early one, showing continuity.
- Pull quote from Levy's "hacker ethic" formulation.

### 4.5 What was lost in the transition

- The proposal's fourth research question: what was lost or transformed when phreaking culture became hacker/internet culture?
- **The sensory dimension:** phreaking was physical and auditory. You used your ears to detect tones, your fingers on a rotary dial, your voice to whistle frequencies. Hacking is visual and textual — screens, code, keyboards. The embodied knowledge was lost.
- **Locality:** your phreaking knowledge was partly local — you knew your central office, your local switch, your area's quirks. Internet hacking is geographically abstract.
- **Intimate scale:** the phreaking community was small enough that key figures knew each other (or knew of each other). The internet hacker community scaled up enormously, and with it came fragmentation, specialization, and anonymity-at-scale.
- **The direct relationship with infrastructure:** phreakers could hear the network respond. There was a feedback loop between action and understanding. Modern systems are too abstracted for that kind of hands-on relationship.
- This section should be reflective and a bit elegiac — it's the emotional heart of the page and connects to the personal page.

**Assets:**
- Audio contrast: the sound of a blue box in action (tones, clicks, the network responding) vs. silence (what modern network exploitation sounds like — nothing, because it's all data).
- This is a good place for a closing pull quote — something from Lapsley or from a phreaker interview about what it felt like.

---

## Page 5: PERSONAL (personal.html)

**Purpose:** Why you care, your sources, and the class discussion link. This is where your voice is most present.

### 5.1 Why I care

- Adapt from the proposal but make it more narrative and personal.
- The PLA discovery: how you found Phone Losers of America. What drew you in — the humor, the audacity, the sense of people having fun with systems.
- The Walmart intercom moment: the formative realization that massive commercial systems had seams you could pry open. Tell this as a story — what you did, what happened, what it felt like.
- The "closing window" feeling: growing up with the persistent sense that the analog gaps and overlooked attack surfaces that made phreaking possible were being patched out of existence. The systems around us are getting too secure and too opaque to invite exploration.
- Why study this for a class on internet culture: phreaking is the *pre-internet* internet culture. Understanding it illuminates what came after.
- This section should be honest and first-person. It's the part of the project that's uniquely yours.

**Assets:**
- Audio: a PLA clip — a prank call or a segment from the Snow Plow Show. This is the "show, don't tell" moment for your personal connection.
- Optional: a photo or screenshot related to your own experience (a PLA webpage, etc.).

### 5.2 Sources / bibliography

- Full bibliography, formatted clearly. Group by type:
  - **Books:** Lapsley, Sterling, Levy, Coleman, Turner, Gertner, Mitnick, Hafner & Markoff, Littman, RBCP
  - **Articles:** Rosenbaum (Esquire 1971)
  - **Zines/newsletters:** 2600, Phrack, TAP/YIPL
  - **Documentaries/media:** *Freedom Downtime*, *BBS: The Documentary*, Snow Plow Show
  - **Archives:** textfiles.com, phonelosers.org, explodingthephone.com
- For free/online sources, link directly.

**Assets:**
- No multimedia needed here — just clean formatting and working links.

### 5.3 Class discussion

- Link to the Canvas discussion forum.
- Seed questions to get classmates talking (the assignment says you moderate the discussion):
  - "Have you ever explored a system in a way that felt like it was maybe not allowed? What drew you in?"
  - "Do you think phreaking was theft, exploration, or both? Where do you draw the line?"
  - "Is there a modern equivalent of phreaking — a community that forms around understanding/exploiting infrastructure that wasn't designed to be understood?"

**Assets:**
- No multimedia — just the forum link and seed questions.

---

## Asset inventory (consolidated)

### Audio
- [ ] 2600 Hz tone (short, ~5s, public domain)
- [ ] Blue box in action (tones and clicks, archive.org)
- [ ] Joybubbles whistling 2600 Hz (YouTube, ~30s)
- [ ] Conference bridge or loop-around recording (if available)
- [ ] PLA prank call clip (Snow Plow Show / phonelosers.org, 30-60s)

### Images / diagrams
- [ ] In-band signaling diagram (create — hand-drawn or retro-styled)
- [ ] In-band vs. SS7 comparison diagram (create)
- [ ] Loop-around diagram (create)
- [ ] Blue box photo (Wikimedia Commons or explodingthephone.com)
- [ ] Cap'n Crunch whistle photo
- [ ] Joybubbles photo
- [ ] John Draper photo
- [ ] Kevin Mitnick photo (press photos)
- [ ] "Free Kevin" poster/screenshot
- [ ] Esquire 1971 cover or article header
- [ ] TAP newsletter scan (textfiles.com)
- [ ] 2600 magazine covers (early + recent)
- [ ] BBS ANSI art / welcome screens (textfiles.com)
- [ ] AT&T long-distance rate card / advertisement (archival)
- [ ] 2600 meeting photo
- [ ] DEF CON or HOPE conference photo
- [ ] EFF logo / founding context

### Video (embedded or linked)
- [ ] *Freedom Downtime* clip or link (archive.org)
- [ ] *BBS: The Documentary* clip or link (archive.org / YouTube)

### Pull quotes to source
- [ ] Wozniak on blue boxes and Apple
- [ ] The Mentor, "The Conscience of a Hacker" (Phrack #7)
- [ ] Sterling on post-Sundevil atmosphere
- [ ] Levy's hacker ethic formulation
- [ ] Phreaker on the feeling of free long-distance (Lapsley interviews)
- [ ] Phreaker on understanding the system / what it felt like (Lapsley)
- [ ] "Explorer" vs. "free calls" contrasting quotes

---

## How pages map to rubric

| Rubric element | Primary page | Supporting pages |
|---|---|---|
| 1. Identify the topic | Homepage + Phreakers | All |
| 2. Description of the group/activity | **Phreakers** | Meeting Place |
| 3. Cultural characteristics | **Culture** | Meeting Place, Legacy |
| 4. Online nature affects culture | **Meeting Place** | Culture, Legacy |
| Discussion forum | **Personal** | — |
r