class Config {
  // 全アイテムコードは長いのでjsを分けて取得
  ItemCodes = getItemCodes();
  WeaponRange = [ 0x000000, 0x00ED00 ];
  FrameRange = [ 0x010100, 0x010158 ];
  BarrierRange = [ 0x010200, 0x0102A5 ];
  UnitRange = [ 0x010300, 0x010364 ];
  MagRange = [ 0x020000, 0x025200 ];
  ToolRange = [ 0x030000, 0x031A00 ];
  MesetaRange = [ 0x030000, 0x030102 ];
  DiskRange = [ 0x050000, 0x05121D ];
  EphineaRange = [ 0x031005, 0x031810 ];
  SRankWeaponRange = [ 0x0070, 0x0088 ];
  DiskCode = 0x0302;
  CommonWeaponContainsCode = 0x000C03;
  CommonWeaponsMaxCode = 0x04;

  ItemType = {
    WEAPON : 1,
    FRAME : 2,
    BARRIER : 3,
    UNIT : 4,
    MAG : 5,
    DISK : 6,
    TOOL : 7,
    SRANK_WEAPON : 8,
    OTHER : 9
  };

  AdditionType = {
    DEF : 0,
    AVOID : 1
  };

  ElementCodes = {
    0x00: "Unchanged/Nothing",
    0x01: "Draw",
    0x02: "Drain",
    0x03: "Fill",
    0x04: "Gush",
    0x05: "Heart",
    0x06: "Mind",
    0x07: "Soul",
    0x08: "Geist",
    0x09: "Master's",
    0x0A: "Lord's",
    0x0B: "King's",
    0x0C: "Charge",
    0x0D: "Spirit",
    0x0E: "Berserk",
    0x0F: "Ice",
    0x10: "Frost",
    0x11: "Freeze",
    0x12: "Blizzard",
    0x13: "Bind",
    0x14: "Hold",
    0x15: "Seize",
    0x16: "Arrest",
    0x17: "Heat",
    0x18: "Fire",
    0x19: "Flame",
    0x1A: "Burning",
    0x1B: "Shock",
    0x1C: "Thunder",
    0x1D: "Storm",
    0x1E: "Tempest",
    0x1F: "Dim",
    0x20: "Shadow",
    0x21: "Dark",
    0x22: "Hell",
    0x23: "Panic",
    0x24: "Riot",
    0x25: "Havoc",
    0x26: "Chaos",
    0x27: "Devil's",
    0x28: "Demon's"
  }

  AttributeType = {
    "native": 0x01,
    "aBeast": 0x02,
    "dark": 0x03,
    "machine": 0x04,
    "hit": 0x05,
  }

  FrameAdditions = {
    "Frame":                          [ 2,2 ],
    "Armor":                          [ 2,2 ],
    "Psy Armor":                      [ 3,2 ],
    "Giga Frame":                     [ 4,2 ],
    "Soul Frame":                     [ 4,2 ],
    "Cross Armor":                    [ 4,2 ],
    "Solid Frame":                    [ 4,2 ],
    "Brave Armor":                    [ 4,2 ],
    "Hyper Frame":                    [ 4,2 ],
    "Grand Armor":                    [ 4,2 ],
    "Shock Frame":                    [ 4,2 ],
    "King's Frame":                   [ 4,2 ],
    "Dragon Frame":                   [ 4,2 ],
    "Absorb Armor":                   [ 4,2 ],
    "Protect Frame":                  [ 4,2 ],
    "General Armor":                  [ 4,2 ],
    "Perfect Frame":                  [ 4,2 ],
    "Valiant Frame":                  [ 4,2 ],
    "Imperial Armor":                 [ 4,2 ],
    "Holiness Armor":                 [ 4,2 ],
    "Guardian Armor":                 [ 4,2 ],
    "Divinity Armor":                 [ 4,2 ],
    "Ultimate Frame":                 [ 4,2 ],
    "Celestial Armor":                [ 10,4 ],
    "HUNTER FIELD":                   [ 8,8 ],
    "RANGER FIELD":                   [ 8,8 ],
    "FORCE FIELD":                    [ 8,8 ],
    "REVIVAL GARMENT":                [ 5,10 ],
    "SPIRIT GARMENT":                 [ 7,5 ],
    "STINK FRAME":                    [ 85,85 ],
    "D-PARTS ver1.01":                [ 10,7 ],
    "D-PARTS ver2.10":                [ 10,8 ],
    "PARASITE WEAR:De Rol":           [ 0,0 ],
    "PARASITE WEAR:Nelgal":           [ 0,0 ],
    "PARASITE WEAR:Vajulla":          [ 0,0 ],
    "SENSE PLATE":                    [ 8,8 ],
    "GRAVITON PLATE":                 [ 8,0 ],
    "ATTRIBUTE PLATE":                [ 8,8 ],
    "FLOWEN'S FRAME":                 [ 10,10 ],
    "CUSTOM FRAME ver.OO":            [ 10,10 ],
    "DB'S ARMOR":                     [ 10,10 ],
    "GUARD WAVE":                     [ 50,20 ],
    "DF FIELD":                       [ 50,20 ],
    "LUMINOUS FIELD":                 [ 50,20 ],
    "CHU CHU FEVER":                  [ 0,0 ],
    "LOVE HEART":                     [ 50,20 ],
    "FLAME GARMENT":                  [ 50,20 ],
    "VIRUS ARMOR:Lafuteria":          [ 0,0 ],
    "BRIGHTNESS CIRCLE":              [ 50,20 ],
    "AURA FIELD":                     [ 50,20 ],
    "ELECTRO FRAME":                  [ 50,20 ],
    "SACRED CLOTH":                   [ 50,20 ],
    "SMOKING PLATE":                  [ 5,20 ],
    "STAR CUIRASS":                   [ 7,5 ],
    "BLACK HOUND CUIRASS":            [ 0,0 ],
    "MORNING PRAYER":                 [ 10,20 ],
    "BLACK ODOSHI DOMARU":            [ 10,10 ],
    "RED ODOSHI DOMARU":              [ 10,10 ],
    "BLACK ODOSHI RED NIMAIDOU":      [ 10,10 ],
    "BLUE ODOSHI VIOLET NIMAIDOU":    [ 10,10 ],
    "DIRTY LIFEJACKET":               [ 0,0 ],
    "KROE'S SWEATER":                 [ 0,0 ],
    "WEDDING DRESS":                  [ 0,0 ],
    "SONICTEAM ARMOR":                [ 0,0 ],
    "RED COAT":                       [ 10,10 ],
    "THIRTEEN":                       [ 8,8 ],
    "MOTHER GARB":                    [ 15,5 ],
    "MOTHER GARB+":                   [ 15,5 ],
    "DRESS PLATE":                    [ 0,0 ],
    "SWEETHEART":                     [ 50,20 ],
    "IGNITION CLOAK":                 [ 8,8 ],
    "CONGEAL CLOAK":                  [ 8,8 ],
    "TEMPEST CLOAK":                  [ 8,8 ],
    "CURSED CLOAK":                   [ 8,8 ],
    "SELECT CLOAK":                   [ 8,8 ],
    "SPIRIT CUIRASS":                 [ 7,5 ],
    "REVIVAL CURIASS":                [ 5,10 ],
    "ALLIANCE UNIFORM":               [ 12,0 ],
    "OFFICER UNIFORM":                [ 14,0 ],
    "COMMANDER UNIFORM":              [ 16,0 ],
    "CRIMSON COAT":                   [ 12,12 ],
    "INFANTRY GEAR":                  [ 12,8 ],
    "LIEUTENANT GEAR":                [ 18,16 ],
    "INFANTRY MANTLE":                [ 10,10 ],
    "LIEUTENANT MANTLE":              [ 21,18 ],
    "UNION FIELD":                    [ 0,0 ],
    "SAMURAI ARMOR":                  [ 0,0 ],
    "STEALTH SUIT":                   [ 0,25 ]
  }

  BarrierAdditions = {
    "Barrier":                            [ 5,5 ],
    "Shield":                             [ 5,5 ],
    "Core Shield":                        [ 5,5 ],
    "Giga Shield":                        [ 5,5 ],
    "Soul Barrier":                       [ 5,5 ],
    "Hard Shield":                        [ 5,5 ],
    "Brave Barrier":                      [ 5,5 ],
    "Solid Shield":                       [ 5,5 ],
    "Flame Barrier":                      [ 5,5 ],
    "Plasma Barrier":                     [ 5,5 ],
    "Freeze Barrier":                     [ 5,5 ],
    "Psychic Barrier":                    [ 5,5 ],
    "General Shield":                     [ 5,5 ],
    "Protect Barrier":                    [ 5,5 ],
    "Glorious Shield":                    [ 5,5 ],
    "Imperial Barrier":                   [ 5,5 ],
    "Guardian Shield":                    [ 5,5 ],
    "Divinity Barrier":                   [ 5,5 ],
    "Ultimate Shield":                    [ 5,5 ],
    "Spiritual Shield":                   [ 5,5 ],
    "Celestial Shield":                   [ 5,5 ],
    "INVISIBLE GUARD":                    [ 8,8 ],
    "SACRED GUARD":                       [ 8,8 ],
    "S-PARTS ver1.16":                    [ 8,8 ],
    "S-PARTS ver2.01":                    [ 7,7 ],
    "LIGHT RELIEF":                       [ 7,7 ],
    "SHIELD OF DELSABER":                 [ 7,7 ],
    "FORCE WALL":                         [ 10,10 ],
    "RANGER WALL":                        [ 10,10 ],
    "HUNTER WALL":                        [ 10,10 ],
    "ATTRIBUTE WALL":                     [ 10,10 ],
    "SECRET GEAR":                        [ 10,10 ],
    "COMBAT GEAR":                        [ 0,0 ],
    "PROTO REGENE GEAR":                  [ 7,7 ],
    "REGENERATE GEAR":                    [ 7,7 ],
    "REGENE GEAR ADV.":                   [ 7,7 ],
    "FLOWEN'S SHIELD":                    [ 10,10 ],
    "CUSTOM BARRIER ver.OO":              [ 10,10 ],
    "DB'S SHIELD":                        [ 10,10 ],
    "RED RING":                           [ 85,25 ],
    "TRIPOLIC SHIELD":                    [ 50,15 ],
    "STANDSTILL SHIELD":                  [ 50,15 ],
    "SAFETY HEART":                       [ 50,15 ],
    "KASAMI BRACER":                      [ 50,15 ],
    "GODS SHIELD SUZAKU":                 [ 0,0 ],
    "GODS SHIELD GENBU":                  [ 0,0 ],
    "GODS SHIELD BYAKKO":                 [ 0,0 ],
    "GODS SHIELD SEIRYU":                 [ 0,0 ],
    "HUNTER'S SHELL":                     [ 50,15 ],
    "RICO'S GLASSES":                     [ 0,0 ],
    "RICO'S EARRING":                     [ 85,25 ],
    "SECURE FEET":                        [ 50,15 ],
    "RESTA MERGE":                        [ 5,5 ],
    "ANTI MERGE":                         [ 5,5 ],
    "SHIFTA MERGE":                       [ 5,5 ],
    "DEBAND MERGE":                       [ 5,5 ],
    "FOIE MERGE":                         [ 5,5 ],
    "GIFOIE MERGE":                       [ 5,5 ],
    "RAFOIE MERGE":                       [ 5,5 ],
    "RED MERGE":                          [ 5,5 ],
    "BARTA MERGE":                        [ 5,5 ],
    "GIBARTA MERGE":                      [ 5,5 ],
    "RABARTA MERGE":                      [ 5,5 ],
    "BLUE MERGE":                         [ 5,5 ],
    "ZONDE MERGE":                        [ 5,5 ],
    "GIZONDE MERGE":                      [ 5,5 ],
    "RAZONDE MERGE":                      [ 5,5 ],
    "YELLOW MERGE":                       [ 5,5 ],
    "RECOVERY BARRIER":                   [ 5,5 ],
    "ASSIST  BARRIER":                    [ 5,5 ],
    "RED BARRIER":                        [ 5,5 ],
    "BLUE BARRIER":                       [ 5,5 ],
    "YELLOW BARRIER":                     [ 5,5 ],
    "WEAPONS GOLD SHIELD":                [ 0,0 ],
    "BLACK GEAR":                         [ 5,5 ],
    "WORKS GUARD":                        [ 5,5 ],
    "RAGOL RING":                         [ 0,0 ],
    "BLUE RING":                          [ 5,5 ],
    "GREEN RING":                         [ 5,5 ],
    "YELLOW RING":                        [ 5,5 ],
    "PURPLE RING":                        [ 5,5 ],
    "WHITE RING":                         [ 5,5 ],
    "BLACK RING":                         [ 5,5 ],
    "WEAPONS SILVER SHIELD":              [ 0,0 ],
    "WEAPONS COPPER SHIELD":              [ 0,0 ],
    "GRATIA":                             [ 20,15 ],
    "TRIPOLIC REFLECTOR":                 [ 50,15 ],
    "STRIKER PLUS":                       [ 10,5 ],
    "REGENERATE GEAR B.P.":               [ 7,7 ],
    "RUPIKA":                             [ 10,20 ],
    "YATA MIRROR":                        [ 20,25 ],
    "BUNNY EARS":                         [ 0,0 ],
    "CAT EARS":                           [ 0,0 ],
    "THREE SEALS":                        [ 3,3 ],
    "GOD'S SHIELD KOURYU":           [ 0,0 ],
    "DF SHIELD":                          [ 85,25 ],
    "FROM THE DEPTHS":                    [ 0,0 ],
    "DE ROL LE SHIELD":                   [ 75,75 ],
    "HONEYCOMB REFLECTOR":                [ 10,10 ],
    "EPSIGUARD":                          [ 75,75 ],
    "ANGEL RING":                         [ 0,0 ],
    "UNION GUARD":                        [ 0,0 ],
    "STINK SHIELD":                       [ 75,75 ],
    "UNKNOWN_B":                          [ 0,0 ],
    "GENPEI":                             [ 0,0 ],
    "Anti-Light Ring":                    [ 0,0 ],
    "Anti-Dark Ring":                     [ 0,0 ]
  }

  MagCollorCodes = {
    0x00: "Red",
    0x01: "Blue",
    0x02: "Yellow",
    0x03: "Green",
    0x04: "Purple",
    0x05: "Black",
    0x06: "White",
    0x07: "Cyan",
    0x08: "Brown",
    0x09: "Orange",
    0x0A: "Slate Blue",
    0x0B: "Olive",
    0x0C: "Turqoise",
    0x0D: "Fuschia",
    0x0E: "Grey",
    0x0F: "Cream",
    0x10: "Pink",
    0x11: "Dark Green"
  }

  DiskNameCodes = {
    0x00: "Foie",
    0x01: "Gifoie",
    0x02: "Rafoie",
    0x03: "Barta",
    0x04: "Gibarta",
    0x05: "Rabarta",
    0x06: "Zonde",
    0x07: "Gizonde",
    0x08: "Razonde",
    0x09: "Grants",
    0x0A: "Deband",
    0x0B: "Jellen",
    0x0C: "Zalure",
    0x0D: "Shifta",
    0x0E: "Ryuker",
    0x0F: "Resta",
    0x10: "Anti",
    0x11: "Reverser",
    0x12: "Megid",
  }

  PBs = {
    "0000": ["","",""],
    "0001": ["Farlla","",""],
    "0101": ["Estlla","",""],
    "0401": ["Leilla","",""],
    "1003": ["Farlla","Golla",""],
    "5007": ["Farlla","Golla","Pilla"],
    "D007": ["Farlla","Golla","Mylla & Youlla"],
    "1803": ["Farlla","Pilla",""],
    "5807": ["Farlla","Pilla","Golla"],
    "D807": ["Farlla","Pilla","Mylla & Youlla"],
    "2803": ["Farlla","Mylla & Youlla",""],
    "6807": ["Farlla","Mylla & Youlla","Golla"],
    "A807": ["Farlla","Mylla & Youlla", "Pilla" ],
    "1103": ["Estlla","Golla",""],
    "5107": ["Estlla","Golla","Pilla"],
    "D107": ["Estlla","Golla","Mylla & Youlla"],
    "1903": ["Estlla","Pilla",""],
    "5907": ["Estlla","Pilla","Golla"],
    "D907": ["Estlla","Pilla","Mylla & Youlla"],
    "2903": ["Estlla","Mylla & Youlla",""],
    "6907": ["Estlla","Mylla & Youlla","Golla"],
    "A907": ["Estlla","Mylla & Youlla","Pilla"],
    "1403": ["Leilla","Golla",""],
    "9407": ["Leilla","Golla","Pilla"],
    "D407": ["Leilla","Golla","Mylla & Youlla"],
    "1C03": ["Leilla","Pilla",""],
    "9C07": ["Leilla","Pilla","Golla"],
    "DC07": ["Leilla","Pilla","Mylla & Youlla"],
    "2C03": ["Leilla","Mylla & Youlla",""],
    "AC07": ["Leilla","Mylla & Youlla","Golla"],
    "EC07": ["Leilla","Mylla & Youlla","Pilla"],
  }

  SRankWeaponCodes = {
    0x007000: "SABER",
    0x007100: "SWORD",
    0x007200: "BLADE",
    0x007300: "PARTISAN",
    0x007400: "SLICER",
    0x007500: "GUN",
    0x007600: "RIFLE",
    0x007700: "MECHGUN",
    0x007800: "SHOT",
    0x007900: "CANE",
    0x007A00: "ROD",
    0x007B00: "WAND",
    0x007C00: "TWIN",
    0x007D00: "CLAW",
    0x007E00: "BAZOOKA",
    0x007F00: "NEEDLE",
    0x008000: "SCYTHE",
    0x008100: "HAMMER",
    0x008200: "MOON",
    0x008300: "PSYCHOGUN",
    0x008400: "PUNCH",
    0x008500: "WINDMILL",
    0x008600: "HARISEN",
    0x008700: "J-BLADE"
  }

  constructor()
  {
  }

}
