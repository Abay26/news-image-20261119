# news-image-20261119

[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/Abay26/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/Abay26/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261119)

## What this is

One image that sums up the world's news of **Thursday, 19 November 2026** —
a newspaper front page with the six stories that defined the day:

1. **Trump, Xi and Putin meet in Shenzhen** — the first-ever trilateral summit
   of the US, Chinese and Russian leaders, on the APEC sidelines
2. **Crimean Bridge hit a third time this week** — overnight strike halts
   traffic, damage assessed, days after the road span fell
3. **Gulf war widens** — Saudi Arabia intercepts a Houthi missile, a tanker
   is hit off Oman, and the IEA calls the Hormuz crisis the biggest threat
   to energy security in history
4. **Israel crosses Gaza's Yellow Line** — first ground operation past the
   ceasefire line since October 2025; three killed
5. **World court rules on Myanmar** — the ICJ delivers its verdict in the
   Rohingya genocide case
6. **GTA VI arrives at last** — worldwide rollout after 13 years; Metacritic
   99, joint-highest ever; Take-Two shares jump 6.5%

A footer line adds two more: Anthropic debuting on Nasdaq after a record
$81.3bn IPO, and Trump saying Iran is pursuing biological weapons. Every
story was cross-checked against at least two independent reports published
on 19 November 2026.

## How it runs

`main.ts` (Node 22, standard library only, no network) copies `entry.png`
to `/output/entry.png`, byte for byte — two runs always write the same bytes.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Built by an AI agent for make.fun's "Sum up 19 November's world news in one
image" bounty, $250 in USDC.
