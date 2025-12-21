function openNav() {
  document.getElementById("theSidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("theSidenav").style.width = "0";
}

const cats = {
  adderfang: { name:"Adderfang", clan:"ThunderClan", mentor:"Unknown", apprentice:"Thistleclaw", description:"A strong ThunderClan warrior.", image:"assets/images/adderfang.png" },
  alderheart: { name:"Alderheart", clan:"ThunderClan", mentor:"Leafpool", apprentice:"None", description:"A gentle medicine cat.", image:"assets/images/alderheart.png" },
  ashfur: { name:"Ashfur", clan:"ThunderClan", mentor:"Brackenfur", apprentice:"Lionblaze", description:"A bitter and jealous warrior.", image:"assets/images/ashfur.png" },
  barley: { name:"Barley", clan:"Loner", mentor:"None", apprentice:"None", description:"A peaceful barn cat.", image:"assets/images/barley.png" },
  berrynose: { name:"Berrynose", clan:"ThunderClan", mentor:"None", apprentice:"None", description:"A sharp-tongued warrior.", image:"assets/images/berrynose.png" },
  birchfall: { name:"Birchfall", clan:"ThunderClan", mentor:"None", apprentice:"None", description:"A loyal ThunderClan warrior.", image:"assets/images/birchfall.png" },
  blackstar: { name:"Blackstar", clan:"ShadowClan", mentor:"None", apprentice:"None", description:"A ShadowClan leader.", image:"assets/images/blackstar.png" },
  blossomfall: { name:"Blossomfall", clan:"ThunderClan", mentor:"None", apprentice:"None", description:"A proud warrior.", image:"assets/images/blossomfall.png" },
  bluestar: { name:"Bluestar", clan:"ThunderClan", mentor:"Goosefeather", apprentice:"Firestar", description:"A noble ThunderClan leader.", image:"assets/images/bluestar.png" },
  brackenfur: { name:"Brackenfur", clan:"ThunderClan", mentor:"Graystripe", apprentice:"Ashfur", description:"A dependable warrior.", image:"assets/images/brackenfur.png" },
  bramblestar: { name:"Bramblestar", clan:"ThunderClan", mentor:"Firestar", apprentice:"None", description:"A conflicted leader.", image:"assets/images/bramblestar.png" },
  breezepelt: { name:"Breezepelt", clan:"WindClan", mentor:"None", apprentice:"None", description:"An angry WindClan warrior.", image:"assets/images/breezepelt.png" },
  briarlight: { name:"Briarlight", clan:"ThunderClan", mentor:"None", apprentice:"None", description:"A kind and brave cat.", image:"assets/images/briarlight.png" },
  brightheart: { name:"Brightheart", clan:"ThunderClan", mentor:"None", apprentice:"None", description:"A brave survivor.", image:"assets/images/brightheart.png" },
  brindleface: { name:"Brindleface", clan:"ThunderClan", mentor:"None", apprentice:"Ashfur", description:"A gentle queen.", image:"assets/images/brindleface.png" },
  brokenstar: { name:"Brokenstar", clan:"ShadowClan", mentor:"None", apprentice:"None", description:"A cruel leader.", image:"assets/images/brokenstar.png" },
  bumblestripe: { name:"Bumblestripe", clan:"ThunderClan", mentor:"None", apprentice:"None", description:"A well-meaning warrior.", image:"assets/images/bumblestripe.png" },

  cinderheart: { name:"Cinderheart", clan:"ThunderClan", mentor:"None", apprentice:"None", description:"A warrior with Cinderpelt’s spirit.", image:"assets/images/cinderheart.png" },
  cinderpelt: { name:"Cinderpelt", clan:"ThunderClan", mentor:"Yellowfang", apprentice:"Leafpool", description:"A wise medicine cat.", image:"assets/images/cinderpelt.png" },
  clawface: { name:"Clawface", clan:"ShadowClan", mentor:"None", apprentice:"None", description:"A fierce ShadowClan warrior.", image:"assets/images/clawface.png" },
  cloudstar: { name:"Cloudstar", clan:"SkyClan", mentor:"None", apprentice:"None", description:"The last SkyClan leader.", image:"assets/images/cloudstar.png" },
  cloudtail: { name:"Cloudtail", clan:"ThunderClan", mentor:"Firestar", apprentice:"None", description:"A confident warrior.", image:"assets/images/cloudtail.png" },
  crookedstar: { name:"Crookedstar", clan:"RiverClan", mentor:"None", apprentice:"None", description:"A tragic RiverClan leader.", image:"assets/images/crookedstar.png" },

  daisy: { name:"Daisy", clan:"ThunderClan", mentor:"None", apprentice:"None", description:"A former kittypet.", image:"assets/images/daisy.png" },
  dawnpelt: { name:"Dawnpelt", clan:"ShadowClan", mentor:"None", apprentice:"None", description:"A loyal ShadowClan warrior.", image:"assets/images/dawnpelt.png" },
  deadfoot: { name:"Deadfoot", clan:"WindClan", mentor:"None", apprentice:"None", description:"A determined deputy.", image:"assets/images/deadfoot.png" },
  dovewing: { name:"Dovewing", clan:"ShadowClan", mentor:"None", apprentice:"None", description:"A cat with special senses.", image:"assets/images/dovewing.png" },

  echosong: { name:"Echosong", clan:"SkyClan", mentor:"None", apprentice:"None", description:"A SkyClan medicine cat.", image:"assets/images/echosong.png" },

  fallowfern: { name:"Fallowfern", clan:"ThunderClan", mentor:"None", apprentice:"None", description:"An early ThunderClan warrior.", image:"assets/images/fallowfern.png" },
  feathertail: { name:"Feathertail", clan:"RiverClan", mentor:"None", apprentice:"None", description:"A brave RiverClan warrior.", image:"assets/images/feathertail.png" },
  ferncloud: { name:"Ferncloud", clan:"ThunderClan", mentor:"None", apprentice:"None", description:"A devoted queen.", image:"assets/images/ferncloud.png" },
  firestar: { name:"Firestar", clan:"ThunderClan", mentor:"Bluestar", apprentice:"Cloudtail", description:"A legendary leader.", image:"assets/images/firestar.png" },
  flametail: { name:"Flametail", clan:"ShadowClan", mentor:"None", apprentice:"None", description:"A brave medicine cat.", image:"assets/images/flametail.png" },
  frostfur: { name:"Frostfur", clan:"ThunderClan", mentor:"None", apprentice:"None", description:"A loyal queen.", image:"assets/images/frostfur.png" },

  goosefeather: { name:"Goosefeather", clan:"ThunderClan", mentor:"None", apprentice:"Bluestar", description:"A troubled medicine cat.", image:"assets/images/goosefeather.png" },
  graypool: { name:"Graypool", clan:"RiverClan", mentor:"None", apprentice:"None", description:"A kind RiverClan queen.", image:"assets/images/graypool.png" },
  graystripe: { name:"Graystripe", clan:"ThunderClan", mentor:"Lionheart", apprentice:"Brackenfur", description:"Firestar’s best friend.", image:"assets/images/graystripe.png" },

  halfmoon: { name:"Half Moon", clan:"Ancient Cats", mentor:"None", apprentice:"None", description:"A guide of the mountains.", image:"assets/images/halfmoon.png" },
  hollyleaf: { name:"Hollyleaf", clan:"ThunderClan", mentor:"None", apprentice:"None", description:"A rule-driven warrior.", image:"assets/images/hollyleaf.png" },
  honeyfern: { name:"Honeyfern", clan:"ThunderClan", mentor:"None", apprentice:"None", description:"A kind young warrior.", image:"assets/images/honeyfern.png" },
  ivypool: { name:"Ivypool", clan:"ThunderClan", mentor:"Cinderheart", apprentice:"None", description:"A determined warrior.", image:"assets/images/ivypool.png" },

  jayfeather: { name:"Jayfeather", clan:"ThunderClan", mentor:"Leafpool", apprentice:"None", description:"A sharp-tongued medicine cat.", image:"assets/images/jayfeather.png" },

  leafpool: { name:"Leafpool", clan:"ThunderClan", mentor:"Cinderpelt", apprentice:"Jayfeather", description:"A kind medicine cat.", image:"assets/images/leafpool.png" },
  leafstar: { name:"Leafstar", clan:"SkyClan", mentor:"None", apprentice:"None", description:"SkyClan’s leader.", image:"assets/images/leafstar.png" },
  leopardstar: { name:"Leopardstar", clan:"RiverClan", mentor:"None", apprentice:"None", description:"A proud RiverClan leader.", image:"assets/images/leopardstar.png" },
  lionblaze: { name:"Lionblaze", clan:"ThunderClan", mentor:"Ashfur", apprentice:"None", description:"A powerful warrior.", image:"assets/images/lionblaze.png" },
  lionheart: { name:"Lionheart", clan:"ThunderClan", mentor:"None", apprentice:"Graystripe", description:"A noble warrior.", image:"assets/images/lionheart.png" },
  longtail: { name:"Longtail", clan:"ThunderClan", mentor:"Tigerstar", apprentice:"Swiftpaw", description:"A sharp-tongued warrior.", image:"assets/images/longtail.png" },

  mistystar: { name:"Mistystar", clan:"RiverClan", mentor:"Bluestar", apprentice:"None", description:"A long-living leader.", image:"assets/images/mistystar.png" },
  mothwing: { name:"Mothwing", clan:"RiverClan", mentor:"None", apprentice:"None", description:"A skeptical medicine cat.", image:"assets/images/mothwing.png" },
  mousefur: { name:"Mousefur", clan:"ThunderClan", mentor:"None", apprentice:"Longtail", description:"A sharp-witted elder.", image:"assets/images/mousefur.png" },

  nightcloud: { name:"Nightcloud", clan:"WindClan", mentor:"None", apprentice:"None", description:"Breezepelt’s mother.", image:"assets/images/nightcloud.png" },
  nightstar: { name:"Nightstar", clan:"ShadowClan", mentor:"None", apprentice:"None", description:"A short-lived leader.", image:"assets/images/nightstar.png" },

  oakheart: { name:"Oakheart", clan:"RiverClan", mentor:"None", apprentice:"None", description:"A brave RiverClan warrior.", image:"assets/images/oakheart.png" },
  princess: { name:"Princess", clan:"Kittypet", mentor:"None", apprentice:"None", description:"Firestar’s sister.", image:"assets/images/princess.png" },

  ravenpaw: { name:"Ravenpaw", clan:"Former ThunderClan", mentor:"Tigerstar", apprentice:"None", description:"A gentle runaway.", image:"assets/images/ravenpaw.png" },
  redtail: { name:"Redtail", clan:"ThunderClan", mentor:"None", apprentice:"Firestar", description:"A loyal deputy.", image:"assets/images/redtail.png" },
  runningnose: { name:"Runningnose", clan:"ShadowClan", mentor:"None", apprentice:"None", description:"A nervous medicine cat.", image:"assets/images/runningnose.png" },
  russetfur: { name:"Russetfur", clan:"ShadowClan", mentor:"None", apprentice:"None", description:"A loyal ShadowClan warrior.", image:"assets/images/russetfur.png" },

  sandstorm: { name:"Sandstorm", clan:"ThunderClan", mentor:"None", apprentice:"None", description:"A fierce and loyal warrior.", image:"assets/images/sandstorm.png" },
  scourge: { name:"Scourge", clan:"BloodClan", mentor:"None", apprentice:"None", description:"The ruthless BloodClan leader.", image:"assets/images/scourge.png" },
  silverstream: { name:"Silverstream", clan:"RiverClan", mentor:"None", apprentice:"None", description:"Graystripe’s beloved mate.", image:"assets/images/silverstream.png" },
  sol: { name:"Sol", clan:"None", mentor:"None", apprentice:"None", description:"A manipulative rogue.", image:"assets/images/sol.png" },
  sorreltail: { name:"Sorreltail", clan:"ThunderClan", mentor:"None", apprentice:"None", description:"A cheerful warrior.", image:"assets/images/sorreltail.png" },
  spottedleaf: { name:"Spottedleaf", clan:"ThunderClan", mentor:"Goosefeather", apprentice:"None", description:"A gentle medicine cat.", image:"assets/images/spottedleaf.png" },
  squirrelflight: { name:"Squirrelflight", clan:"ThunderClan", mentor:"None", apprentice:"None", description:"A fiery deputy.", image:"assets/images/squirrelflight.png" },
  stonefur: { name:"Stonefur", clan:"RiverClan", mentor:"None", apprentice:"None", description:"A brave warrior.", image:"assets/images/stonefur.png" },
  sunstar: { name:"Sunstar", clan:"ThunderClan", mentor:"None", apprentice:"Bluestar", description:"A respected leader.", image:"assets/images/sunstar.png" },

  tallstar: { name:"Tallstar", clan:"WindClan", mentor:"None", apprentice:"None", description:"A wise WindClan leader.", image:"assets/images/tallstar.png" },
  tawnypelt: { name:"Tawnypelt", clan:"ShadowClan", mentor:"None", apprentice:"None", description:"A loyal ShadowClan warrior.", image:"assets/images/tawnypelt.png" },
  thunderstar: { name:"Thunderstar", clan:"ThunderClan", mentor:"None", apprentice:"None", description:"ThunderClan’s founder.", image:"assets/images/thunderstar.png" },
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
