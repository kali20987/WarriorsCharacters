function openNav() {
  document.getElementById("theSidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("theSidenav").style.width = "0";
}

const cats = {
  adderfang: { name:"Adderfang", clan:"ThunderClan", mentor:"Unknown", apprentice:"Thistleclaw", description:"A strong warrior under Pinestar, Sunstar's leaderships and an elder under Bluestar's.", image:"assets/images/adderfang.png" },
  alderheart: { name:"Alderheart", clan:"ThunderClan", mentor:"Leafpool, Jayfeather", apprentice:"Flipclaw", description:"A gentle medicine cat under the leaderships of Bramblestar and Squirrelstar.", image:"assets/images/alderheart.png" },
  ashfur: { name:"Ashfur", clan:"ThunderClan", mentor:"Dustpelt", apprentice:"Birchfall, Lionblaze", description:"A bitter and jealous warrior under Firestar's leadership.", image:"assets/images/ashfur.png" },
  barley: { name:"Barley", clan:"Loner", mentor:"None", apprentice:"None", description:"A peaceful barn cat who lives on a farm on the edge of WindClan's territory in the old forest.", image:"assets/images/barley.png" },
  berrynose: { name:"Berrynose", clan:"ThunderClan", mentor:"Bramblestar", apprentice:"None", description:"A sharp-tongued warrior under Firestar and Bramblestar's leaderships.", image:"assets/images/berrynose.png" },
  birchfall: { name:"Birchfall", clan:"ThunderClan", mentor:"Ashfur", apprentice:"None", description:"A warrior under Firestar, Bramblestar, and Squirrelstar's leaderships.", image:"assets/images/birchfall.png" },
  blackstar: { name:"Blackstar", clan:"ShadowClan", mentor:"Unknown", apprentice:"Dawncloud", description:"A leader in the forest and lake territories.", image:"assets/images/blackstar.png" },
  blossomfall: { name:"Blossomfall", clan:"ThunderClan", mentor:"Hazeltail", apprentice:"Hollytuft", description:"A proud warrior who served under Firestar, Bramblestar, and Squirrelstar's leaderships.", image:"assets/images/blossomfall.png" },
  bluestar: { name:"Bluestar", clan:"ThunderClan", mentor:"Stonepelt, Sunstar", apprentice:"Frostfur, Runningwind, Firestar", description:"A noble leader in the forest territories.", image:"assets/images/bluestar.png" },
  brackenfur: { name:"Brackenfur", clan:"ThunderClan", mentor:"Graystripe", apprentice:"Tawnypelt, Whitewing, Hollyleaf", description:"A dependable warrior under Firestar, Bramblestar, and Squirrelstar's leaderships.", image:"assets/images/brackenfur.png" },
  bramblestar: { name:"Bramblestar", clan:"ThunderClan", mentor:"Firestar", apprentice:"Berrynose", description:"A conflicted leader in the lake territories.", image:"assets/images/bramblestar.png" },
  breezepelt: { name:"Breezepelt", clan:"WindClan", mentor:"Whitetail", apprentice:"Boulderfur", description:"An angry WindClan warrior in the lake territories.", image:"assets/images/breezepelt.png" },
  briarlight: { name:"Briarlight", clan:"ThunderClan", mentor:"Thornclaw", apprentice:"None", description:"A kind and brave cat under Firestar and Bramblestar's leaderships.", image:"assets/images/briarlight.png" },
  brightheart: { name:"Brightheart", clan:"ThunderClan", mentor:"Whitestorm", apprentice:"Jayfeather", description:"A brave survivor under Firestar and Bramblestar's leaderships.", image:"assets/images/brightheart.png" },
  brindleface: { name:"Brindleface", clan:"ThunderClan", mentor:"Stormtail", apprentice:"none", description:"A gentle queen under Sunstar and Bluestar's leaderships.", image:"assets/images/brindleface.png" },
  brokenstar: { name:"Brokenstar", clan:"ShadowClan", mentor:"Nightpelt", apprentice:"Stumpytail", description:"A cruel leader in the forest territories.", image:"assets/images/brokenstar.png" },
  bumblestripe: { name:"Bumblestripe", clan:"ThunderClan", mentor:"Mousewhisker", apprentice:"None", description:"A well-meaning warrior under Firestar, Bramblestar, and Squirrelstar's leaderships.", image:"assets/images/bumblestripe.png" },

  cinderheart: { name:"Cinderheart", clan:"ThunderClan", mentor:"Cloudtail", apprentice:"Ivypool", description:"A brave warrior with Cinderpelt’s spirit.", image:"assets/images/cinderheart.png" },
  cinderpelt: { name:"Cinderpelt", clan:"ThunderClan", mentor:"Firestar, Yellowfang", apprentice:"Leafpool", description:"A wise medicine cat under Bluestar and Firestar's leaderships.", image:"assets/images/cinderpelt.png" },
  clawface: { name:"Clawface", clan:"ShadowClan", mentor:"Crowtail", apprentice:"Littlecloud", description:"A fierce warrior in the forest territories.", image:"assets/images/clawface.png" },
  cloudstar: { name:"Cloudstar", clan:"SkyClan", mentor:"Unknown", apprentice:"Acornpaw", description:"The last SkyClan leader in the forest territories.", image:"assets/images/cloudstar.png" },
  cloudtail: { name:"Cloudtail", clan:"ThunderClan", mentor:"Firestar", apprentice:"Rainwhisker, Cinderheart, Toadstep", description:"A confident warrior under Firestar, Bramblestar, and Squirrelstar's leaderships.", image:"assets/images/cloudtail.png" },
  crookedstar: { name:"Crookedstar", clan:"RiverClan", mentor:"Cedarpelt", apprentice:"Stonefur", description:"A tragic leader in the forest territories.", image:"assets/images/crookedstar.png" },

  daisy: { name:"Daisy", clan:"ThunderClan", mentor:"None", apprentice:"None", description:"A former kittypet in the lake territories.", image:"assets/images/daisy.png" },
  dawnpelt: { name:"Dawnpelt", clan:"ShadowClan", mentor:"Ivytail", apprentice:"Beenose", description:"A loyal warrior under Blackstar and Rownstar's leaderships.", image:"assets/images/dawnpelt.png" },
  deadfoot: { name:"Deadfoot", clan:"WindClan", mentor:"Tallstar", apprentice:"Onestar", description:"A determined deputy from the forest territories.", image:"assets/images/deadfoot.png" },
  dovewing: { name:"Dovewing", clan:"ThunderClan", mentor:"Lionblaze", apprentice:"None", description:"A cat with special senses under Firestar and Bramblestar's leaderships.", image:"assets/images/dovewing.png" },

  echosong: { name:"Echosong", clan:"SkyClan", mentor:"None", apprentice:"Fidgetflake", description:"A medicine cat in the gorge territories.", image:"assets/images/echosong.png" },

  fallowfern: { name:"Fallowfern", clan:"SkyClan", mentor:"None", apprentice:"None", description:"An elder who lost her hearing.", image:"assets/images/fallowfern.png" },
  feathertail: { name:"Feathertail", clan:"RiverClan", mentor:"Mistystar", apprentice:"None", description:"A brave warrior in the forest territories.", image:"assets/images/feathertail.png" },
  ferncloud: { name:"Ferncloud", clan:"ThunderClan", mentor:"Darkstripe, Longtail", apprentice:"None", description:"A devoted queen in the forest and lake territories.", image:"assets/images/ferncloud.png" },
  firestar: { name:"Firestar", clan:"ThunderClan", mentor:"Bluestar", apprentice:"Cinderpelt, Cloudtail, Bramblestar", description:"A legendary leader in the forest and lake territories.", image:"assets/images/firestar.png" },
  flametail: { name:"Flametail", clan:"ShadowClan", mentor:"Littlecloud", apprentice:"None", description:"A brave medicine cat in the lake territories.", image:"assets/images/flametail.png" },
  frostfur: { name:"Frostfur", clan:"ThunderClan", mentor:"Bluestar", apprentice:"None", description:"A loyal queen in the forest territories.", image:"assets/images/frostfur.png" },

  goosefeather: { name:"Goosefeather", clan:"ThunderClan", mentor:"Cloudberry", apprentice:"Featherwhisker", description:"A troubled medicine cat in the forest territories.", image:"assets/images/goosefeather.png" },
  graypool: { name:"Graypool", clan:"RiverClan", mentor:"Brightsky, Piketooth", apprentice:"None", description:"A loyal queen in the forest territories.", image:"assets/images/graypool.png" },
  graystripe: { name:"Graystripe", clan:"ThunderClan", mentor:"Lionheart", apprentice:"Brackenfur", description:"A brave warrior in the forest and lake territories.", image:"assets/images/graystripe.png" },

  hollyleaf: { name:"Hollyleaf", clan:"ThunderClan", mentor:"Brackenfur", apprentice:"None", description:"A rule-driven warrior in the lake territories.", image:"assets/images/hollyleaf.png" },
  honeyfern: { name:"Honeyfern", clan:"ThunderClan", mentor:"Sandstorm", apprentice:"None", description:"A kind young warrior in the lake territories.", image:"assets/images/honeyfern.png" },
  ivypool: { name:"Ivypool", clan:"ThunderClan", mentor:"Cinderheart", apprentice:"None", description:"A determined warrior.", image:"assets/images/ivypool.png" },

  jayfeather: { name:"Jayfeather", clan:"ThunderClan", mentor:"Leafpool", apprentice:"None", description:"A sharp-tongued medicine cat.", image:"assets/images/jayfeather.png" },

  leafpool: { name:"Leafpool", clan:"ThunderClan", mentor:"Cinderpelt", apprentice:"Jayfeather", description:"A kind medicine cat.", image:"assets/images/leafpool.png" },
  leafstar: { name:"Leafstar", clan:"SkyClan", mentor:"None", apprentice:"Sparrowpelt", description:"A leader in the gorge and lake territories.", image:"assets/images/leafstar.png" },
  leopardstar: { name:"Leopardstar", clan:"RiverClan", mentor:"None", apprentice:"None", description:"A proud RiverClan leader.", image:"assets/images/leopardstar.png" },
  lionblaze: { name:"Lionblaze", clan:"ThunderClan", mentor:"Ashfur", apprentice:"None", description:"A powerful warrior.", image:"assets/images/lionblaze.png" },
  lionheart: { name:"Lionheart", clan:"ThunderClan", mentor:"Swiftbreeze", apprentice:"Graystripe", description:"A noble warrior and deputy in the forest territories.", image:"assets/images/lionheart.png" },
  longtail: { name:"Longtail", clan:"ThunderClan", mentor:"Tigerstar", apprentice:"Swiftpaw, Ferncloud", description:"A sharp-tongued warrior.", image:"assets/images/longtail.png" },

  mistystar: { name:"Mistystar", clan:"RiverClan", mentor:"Bluestar", apprentice:"None", description:"A long-living leader.", image:"assets/images/mistystar.png" },
  mothwing: { name:"Mothwing", clan:"RiverClan", mentor:"None", apprentice:"None", description:"A skeptical medicine cat.", image:"assets/images/mothwing.png" },
  mousefur: { name:"Mousefur", clan:"ThunderClan", mentor:"None", apprentice:"Longtail", description:"A sharp-witted elder.", image:"assets/images/mousefur.png" },

  nightcloud: { name:"Nightcloud", clan:"WindClan", mentor:"Unknown", apprentice:"Hootwhisker", description:"Overprotective warrior in the lake territories.", image:"assets/images/nightcloud.png" },
  nightstar: { name:"Nightstar", clan:"ShadowClan", mentor:"None", apprentice:"None", description:"A short-lived leader.", image:"assets/images/nightstar.png" },

  oakheart: { name:"Oakheart", clan:"RiverClan", mentor:"None", apprentice:"None", description:"A brave RiverClan warrior.", image:"assets/images/oakheart.png" },
  princess: { name:"Princess", clan:"Kittypet", mentor:"None", apprentice:"None", description:"Firestar’s sister.", image:"assets/images/princess.png" },

  ravenpaw: { name:"Ravenpaw", clan:"Former ThunderClan", mentor:"Tigerstar", apprentice:"None", description:"A gentle runaway.", image:"assets/images/ravenpaw.png" },
  redtail: { name:"Redtail", clan:"ThunderClan", mentor:"None", apprentice:"Firestar", description:"A loyal deputy.", image:"assets/images/redtail.png" },
  runningnose: { name:"Runningnose", clan:"ShadowClan", mentor:"None", apprentice:"None", description:"A nervous medicine cat.", image:"assets/images/runningnose.png" },
  russetfur: { name:"Russetfur", clan:"ShadowClan", mentor:"None", apprentice:"None", description:"A loyal ShadowClan warrior.", image:"assets/images/russetfur.png" },

  sandstorm: { name:"Sandstorm", clan:"ThunderClan", mentor:"Whitestorm", apprentice:"Sorreltail, Honeyfern", description:"A fierce and loyal warrior under Bluestar, Firestar, and Bramblestar.", image:"assets/images/sandstorm.png" },
  scourge: { name:"Scourge", clan:"BloodClan", mentor:"None", apprentice:"None", description:"The ruthless BloodClan leader.", image:"assets/images/scourge.png" },
  silverstream: { name:"Silverstream", clan:"RiverClan", mentor:"None", apprentice:"None", description:"Graystripe’s beloved mate.", image:"assets/images/silverstream.png" },
  sol: { name:"Sol", clan:"None", mentor:"None", apprentice:"None", description:"A manipulative rogue.", image:"assets/images/sol.png" },
  sorreltail: { name:"Sorreltail", clan:"ThunderClan", mentor:"None", apprentice:"None", description:"A cheerful warrior.", image:"assets/images/sorreltail.png" },
  spottedleaf: { name:"Spottedleaf", clan:"ThunderClan", mentor:"Goosefeather", apprentice:"None", description:"A gentle medicine cat.", image:"assets/images/spottedleaf.png" },
  squirrelstar: { name:"Squirrelstar", clan:"ThunderClan", mentor:"None", apprentice:"None", description:"A fiery leader in the lake territories.", image:"assets/images/squirrelstar.png" },
  stonefur: { name:"Stonefur", clan:"RiverClan", mentor:"None", apprentice:"None", description:"A brave warrior.", image:"assets/images/stonefur.png" },
  sunstar: { name:"Sunstar", clan:"ThunderClan", mentor:"None", apprentice:"Bluestar", description:"A respected leader.", image:"assets/images/sunstar.png" },

  tallstar: { name:"Tallstar", clan:"WindClan", mentor:"None", apprentice:"None", description:"A wise WindClan leader.", image:"assets/images/tallstar.png" },
  tawnypelt: { name:"Tawnypelt", clan:"ShadowClan", mentor:"None", apprentice:"None", description:"A loyal ShadowClan warrior.", image:"assets/images/tawnypelt.png" },
  tigerstar: { name:"Tigerstar", clan:"ShadowClan", mentor:"Thistleclaw", apprentice:"None", description:"A power-hungry tyrant.", image:"assets/images/tigerstar.png" },

  whitestorm: { name:"Whitestorm", clan:"ThunderClan", mentor:"None", apprentice:"None", description:"A loyal senior warrior.", image:"assets/images/whitestorm.png" },
  whitewing: { name:"Whitewing", clan:"ThunderClan", mentor:"None", apprentice:"None", description:"A caring warrior.", image:"assets/images/whitewing.png" },
  yellowfang: { name:"Yellowfang", clan:"ThunderClan", mentor:"None", apprentice:"Cinderpelt", description:"A gruff but kind medicine cat.", image:"assets/images/yellowfang.png" }
};

function showCat(id) {
  const cat = cats[id];
  if (!cat) return;

  document.getElementById("cat-name").textContent = cat.name;
  document.getElementById("cat-clan").textContent = "Clan: " + cat.clan;
  document.getElementById("cat-mentor").textContent = "Mentor: " + cat.mentor;
  document.getElementById("cat-apprentice").textContent = "Apprentice: " + cat.apprentice;
  document.getElementById("cat-description").textContent = "Description: " + cat.description;
  document.getElementById("cat-image").src = cat.image;
  document.getElementById("cat-image").alt = cat.name;

  closeNav();
}
