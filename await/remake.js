setcpm(10);

samples('github:tidalcycles/dirt-samples')
samples('github:algorave-dave/samples')

const beat = "<03 02>".fast("[1|2|3]")

CHOP: s("<whatUneed:2>").note(36.1)
  .scrub("<0.83 0.19 0.33 0.1>").ply("<8 4 4 8>")
  .fast(2)
  .clip(1).postgain(2).lpf(slider(7043.2,400,10000))
  .delay(0.1).o(2).room(1).rfade(30)
  ._punchcard()

BASSLINE: note("a2@2 e2 g#2")
  .slow(4)
  .decay(0.25)
  .struct("x - - x - - x - - x - - - - - -")
  .trans("[0, -12, 7]")
  .sound("[supersaw, sine, square]")
  .release("<1@3 1.5>")
  .fast(2)
  .lpf(slider(1427, 100, 10000))
  .room(2)
  .attack(0.05)
  .postgain(0.2)
  .o(2)

HATS: arrange(
  [2, silence],
  [32, s("hh*16")
  .bank("RolandTR808")
  .fast(2)
  .gain(.2)
  .sometimes(x => x.fast(2))
 ]
)

KICK: arrange(
  [2, silence],
  [32, s("tech:5")
    .postgain(2)
    .duck("2")
    .duckdepth(1)
    .speed(0.5)
    .fast(4)
    .distort(1.5)
    .struct(beat)
  ]
)

CLAP: arrange(
  [2, silence],
  [32, s("~ cp")
    .bank("dmx")
    .fast(2)
    .gain(0.25)
    .speed("<0.7 0.8>")
    .clip(0.15)
    .room(1)
    .roomsize(0.95)
    .roomfade(0.6)
    .duck("2")
    .duckdepth(0.8)
   ]
)

ARP: arrange(
  [2, silence],
  [32, note("<e4 d#4 b3 e3 d#3 b2>")
    .fast(32)
    .sound("square")
    .sometimes(trans("<12>"))
    .detune(1)
    .unison(10)
    .o(2)
    .room(1)
    .lpf(slider(1675, 100, 10000, 1))
    .decay(0.2)
    .postgain(0.5)
   ]
)
