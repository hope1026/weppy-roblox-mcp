# Game Feel Patterns

Read only the sections relevant to the requested experience. The examples are design options to evaluate, not requirements. Preserve deliberate exceptions and user preferences.

## Combat impact

**When it may help:** The player should recognize a successful hit or feel a particular attack's weight, but the current hit is hard to read or feels disconnected.

**Options:**

- Align the contact pose, hit sound, and a readable reaction with the confirmed hit. One clear cue may be enough; all feedback channels do not need to fire together.
- Consider a brief, selective pause of the attacker's or target's visible animation at contact when a punctuated, stylized impact fits. Hitstop is distinct from gameplay stun: pausing presentation need not change movement, collision, damage timing, or input acceptance.
- Use anticipation, contact, and recovery to distinguish a heavy attack from a quick one when that rhythm is part of the design. Changing gameplay wind-up or recovery also changes balance and needs to be within the requested scope.
- Small camera or controller feedback can complement the hit when wanted. Respect camera stability and reduced-motion preferences; a clear pose, sound, or localized effect may already communicate enough.

**Reduce or omit:** Continuous-flow combat, strict timing, understated realism, rapid multi-hit attacks, or an explicit dislike of freezes or shake may favor uninterrupted animation. Do not suggest hitstop solely because the game contains combat. Avoid pausing the whole simulation or other players to sell one player's hit.

**If implemented:** Keep authoritative damage independent of cosmetic callbacks. Preserve and restore previous animation speed and state, including interruptions, death, and overlapping hits; do not blindly restore every track to a fixed speed. Decide how repeated effects combine so rapid attacks cannot accumulate an unintended long freeze. Keep unconfirmed local feedback distinct from confirmed-hit feedback.

**Judge it by:** Can the player read the hit while still controlling the character as intended? Compare isolated, rapid, and simultaneous hits. Check misses and delayed confirmation as well as successful hits. A stronger-looking hit is not a success if the requested flow is lost.

## Reward collection

**When it may help:** The user wants collecting something to feel satisfying, or wants the connection between an object and its destination in the HUD to be clearer.

**Options:**

- Confirm and grant the reward at the game's authoritative collection point. In a networked game, keep any early local collection cue provisional until the server confirms it.
- For a traveling-icon effect, animate a representation toward the relevant HUD destination. Optionally update an animated display total or emphasize the destination when the icon arrives.
- If the current balance matters immediately, update the number at confirmation and let the arriving icon provide only a pulse or sound. Delayed numbers are not required for a satisfying reward.
- For frequent small rewards, consider combining decorative particles or brief count transitions if that fits the pace. Preserve individually meaningful pickups when grouping would hide useful information.

**Reduce or omit:** Precise economy interfaces, immediate spending, restrained games, or rapid collection may benefit from an immediate number with minimal decoration. Do not obscure affordability or delay access to a granted reward to make the animation finish.

**If implemented:** Separate authoritative balance from presentation state. Grant a confirmed reward exactly once through the existing reward logic; an animation-completion callback must never grant it again or be required for payment. Purchases and other gameplay decisions use authoritative state, not the displayed number.

For example, a confirmed pickup may change the real balance from 100 to 110 while a decorative display still shows 100. If the player spends 30 before the icon arrives, the eventual display must settle on the current balance of 80, not an old captured target of 110. Queue or coalesce presentation events only if needed for the chosen effect. Handle consecutive pickups, out-of-order arrivals, UI closure, skipped effects, and respawn by reconciling with current authoritative state. Do not replay the reward transaction during reconciliation.

**Judge it by:** Is collection acknowledged promptly? Does the animation clarify where the reward went? Verify repeated pickups, spending during flight, and interrupted or skipped animation. The reward must remain correct and the visible value must converge to the current balance.

## Movement

**When it may help:** The user wants forgiving traversal or reports that intended inputs are being missed. First distinguish a bug or latency issue from intentionally strict control rules.

**Options:**

- A short jump-input buffer can retain an early press until the character becomes eligible to jump.
- A small edge-grace window can allow a jump just after leaving a ledge when forgiving traversal is intended.
- Landing pose, sound, or a localized visual cue can make contact readable without changing the movement rules.

**Reduce or omit:** Precision challenges, rhythm-based timing, established competitive rules, and deliberately unforgiving traversal may depend on the exact input boundaries. Buffering and edge grace are gameplay changes, not automatic polish. Preserve strict controls when requested; presentation-only feedback may be the fitting option.

**If implemented:** Tune any window to the game's pace rather than prescribing a fixed number. Consume a buffered input once, expire it predictably, and preserve existing jump eligibility and restrictions. Keep cosmetic landing effects separate from movement locks unless a lock is explicitly part of the intended feel.

**Judge it by:** Compare successful inputs, near misses, repeated presses, ledge departures, and landings at different frame rates where relevant. Check that the chosen assistance does not create extra jumps or erase an intended challenge.

## Interaction feedback

**When it may help:** A press, pickup prompt, or interaction feels unresponsive, or the player cannot tell whether an action is pending or complete.

**Options:**

- A small pressed state or sound can acknowledge input promptly, before a remote result is known.
- Use a pending indication when waiting matters, then a distinct result cue when success or failure is confirmed.
- Match the intensity to the action's importance: a routine click and a milestone need not receive the same celebration.

**Reduce or omit:** Deliberate suspense, sparse interfaces, or repetitive interactions may call for subtle or silent acknowledgement. Avoid bouncing every control, blocking continued play with celebration, or adding sounds against the user's preferences.

**If implemented:** Keep input acknowledgement separate from a promise of success. Handle rejection, cancellation, repeated input, and late responses without displaying contradictory results. Do not change whether repeat actions are allowed merely to simplify an animation.

**Judge it by:** Can the player distinguish accepted input, pending work, success, and failure at the intended pace? Check rapid input and delayed responses. Keep only cues that help the experience the user asked for.
