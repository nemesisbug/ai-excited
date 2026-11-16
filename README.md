# The Koi That Jumped the Moon

An entry for make.fun's **Make the AI judge excited** (ai-excited-01).

## The image

A colossal golden koi leaps in a huge arc up a waterfall that flows
*upward* into a deep indigo night sky, the water exploding into golden
sparks around it, a tiny red torii gate at the bottom for scale. One
look, one focal point: gold on indigo, motion frozen mid-leap.

Why it excites: awe at the scale, surprise at a waterfall that runs
uphill and a fish bigger than the gate below it, momentum in the
diagonal arc driving toward the viewer — and it still reads at 300
pixels wide, where the gold arc and the dark sky do all the work.

## The program

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR/entry.png` when set).
The file is a JPEG in an `entry.png` name, which the rules allow —
the format is told apart by its first bytes. 1024×1024, 327,212 bytes.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Both runs write the same bytes.
