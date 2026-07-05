const SHEET_ID = "1jNQtoagEfT8ALlde0ZBqP4MZq9qa-cvVV79NHSg_uHU";
const BROADCAST_VIEW_GID = "56667888";

const BROADCAST_CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=${BROADCAST_VIEW_GID}`;

let standings = [
  { name: "Luis", points: 126, gain: 66 },
  { name: "Vuthy", points: 84, gain: 40 },
  { name: "Tala", points: 60, gain: 34 },
  { name: "CJ", points: 40, gain: 0 },
  { name: "Paul", points: 15, gain: 0 }
];

const teams = [
  {
    owner: "Paul",
    status: "Active",
    riders: [
      { name: "Jasper Philipsen", role: "S Rider", summary: "Elite Belgian sprinter and one of the top fast finishers in the race." },
      { name: "Adam Yates", role: "Support Rider 1", summary: "Strong British climber and general classification rider." },
      { name: "Florian Lipowitz", role: "Support Rider 2", summary: "German climbing talent with stage-race potential." },
      { name: "Ben O’Connor", role: "Support Rider 3", summary: "Australian climber and GC contender with Grand Tour podium potential." },
      { name: "Toms Skujiņš", role: "Support Rider 4", summary: "Latvian all-rounder known for breakaways, hilly stages, and aggressive racing." },
      { name: "Tim Wellens", role: "Support Rider 5", summary: "Belgian puncheur and breakaway specialist with strong one-day and stage-hunting ability." }
    ]
  },
  {
    owner: "Vuthy",
    status: "Active",
    riders: [
      { name: "Tadej Pogačar", role: "S Rider", summary: "Superstar Slovenian GC rider, climber, puncheur, and one of the best riders in the world." },
      { name: "Michael Matthews", role: "Support Rider 1", summary: "Australian sprinter-puncheur who targets hilly finishes and green jersey-style points." },
      { name: "Cian Uijtdebroeks", role: "Support Rider 2", summary: "Young Belgian climbing specialist and general classification prospect." },
      { name: "Fernando Gaviria", role: "Support Rider 3", summary: "Colombian sprinter with Grand Tour stage-winning pedigree." },
      { name: "Ilan Van Wilder", role: "Support Rider 4", summary: "Belgian all-rounder who can climb, time trial, and support GC leaders." },
      { name: "Georg Zimmermann", role: "Support Rider 5", summary: "German breakaway rider suited to hilly and mountainous transition stages." }
    ]
  },
  {
    owner: "Luis",
    status: "Active",
    riders: [
      { name: "Jonas Vingegaard", role: "S Rider", summary: "Danish climber and Tour de France champion-level general classification contender." },
      { name: "Mattias Skjelmose", role: "Support Rider 1", summary: "Danish all-rounder with climbing strength and stage-race ability." },
      { name: "Søren Wærenskjold", role: "Support Rider 2", summary: "Norwegian rider with sprint and time trial strength." },
      { name: "Aurélien Paret-Peintre", role: "Support Rider 3", summary: "French climber and stage hunter suited to mountainous days." },
      { name: "Pascal Ackermann", role: "Support Rider 4", summary: "German sprinter with a strong finishing kick in flat stages." },
      { name: "Quinn Simmons", role: "Support Rider 5", summary: "American rouleur and breakaway specialist with power on rolling terrain." }
    ]
  },
  {
    owner: "Tala",
    status: "Active",
    riders: [
      { name: "Remco Evenepoel", role: "S Rider", summary: "Belgian time trial specialist, climber, and major general classification contender." },
      { name: "Arnaud De Lie", role: "Support Rider 1", summary: "Powerful Belgian sprinter and classics-style rider." },
      { name: "Sepp Kuss", role: "Support Rider 2", summary: "American climber and Grand Tour winner known for elite mountain support and climbing." },
      { name: "Julian Alaphilippe", role: "Support Rider 3", summary: "French puncheur and former world champion known for attacking hilly stages." },
      { name: "Phil Bauhaus", role: "Support Rider 4", summary: "German sprinter who targets flat stage finishes." },
      { name: "Pablo Castrillo", role: "Support Rider 5", summary: "Spanish rider with climbing and breakaway potential." }
    ]
  },
  {
    owner: "CJ",
    status: "Active",
    riders: [
      { name: "Mathieu van der Poel", role: "S Rider", summary: "Dutch superstar, classics champion, cyclocross legend, and elite stage hunter." },
      { name: "Biniam Girmay", role: "Support Rider 1", summary: "Eritrean sprinter-puncheur capable of winning reduced bunch sprints and hilly finishes." },
      { name: "Thymen Arensman", role: "Support Rider 2", summary: "Dutch climber and GC support rider with strong mountain-stage ability." },
      { name: "Filippo Ganna", role: "Support Rider 3", summary: "Italian time trial powerhouse and powerful rouleur." },
      { name: "Dorian Godon", role: "Support Rider 4", summary: "French puncheur suited to rolling and hilly finishes." },
      { name: "Mauro Schmid", role: "Support Rider 5", summary: "Swiss all-rounder and stage hunter with attacking ability." }
    ]
  },
  {
    owner: "Spare 1",
    status: "Spare",
    riders: [
      { name: "Mads Pedersen", role: "S Rider", summary: "Danish sprinter-puncheur and former world champion." },
      { name: "Tim Merlier", role: "Support Rider 1", summary: "Belgian sprinter with a very fast finish on flat stages." },
      { name: "Matteo Jorgenson", role: "Support Rider 2", summary: "American all-rounder with climbing, GC, and stage-race ability." },
      { name: "Tobias Halland Johannessen", role: "Support Rider 3", summary: "Norwegian climber and stage-race talent." },
      { name: "Romain Grégoire", role: "Support Rider 4", summary: "French puncheur and attacking rider suited to hilly stages." },
      { name: "Victor Campenaerts", role: "Support Rider 5", summary: "Belgian time trialist and breakaway specialist." }
    ]
  },
  {
    owner: "Spare 2",
    status: "Spare",
    riders: [
      { name: "Juan Ayuso", role: "S Rider", summary: "Spanish GC rider and climber with major stage-race potential." },
      { name: "Ben Healy", role: "Support Rider 1", summary: "Irish breakaway specialist and aggressive hilly-stage attacker." },
      { name: "Kévin Vauquelin", role: "Support Rider 2", summary: "French all-rounder with climbing and punchy-stage strength." },
      { name: "Egan Bernal", role: "Support Rider 3", summary: "Colombian climber and former Tour de France winner." },
      { name: "Marc Hirschi", role: "Support Rider 4", summary: "Swiss puncheur known for one-day races and hilly stage finishes." },
      { name: "Anthony Turgis", role: "Support Rider 5", summary: "French classics-style rider and stage hunter." }
    ]
  },
  {
    owner: "Spare 3",
    status: "Spare",
    riders: [
      { name: "Isaac Del Toro", role: "S Rider", summary: "Mexican climbing talent and rising stage-race prospect." },
      { name: "Olav Kooij", role: "Support Rider 1", summary: "Dutch sprinter with a strong finishing kick." },
      { name: "Lenny Martínez", role: "Support Rider 2", summary: "French climber and young general classification prospect." },
      { name: "Richard Carapaz", role: "Support Rider 3", summary: "Ecuadorian climber, Olympic champion, and Grand Tour winner." },
      { name: "Matej Mohorič", role: "Support Rider 4", summary: "Slovenian stage hunter and descender known for tactical breakaway wins." },
      { name: "Brandon McNulty", role: "Support Rider 5", summary: "American climber and time trialist with strong stage-race ability." }
    ]
  },
  {
    owner: "Spare 4",
    status: "Spare",
    riders: [
      { name: "Paul Seixas", role: "S Rider", summary: "Young French climbing prospect and emerging stage-race rider." },
      { name: "Tom Pidcock", role: "Support Rider 1", summary: "British multi-discipline star, punchy climber, and stage hunter." },
      { name: "Michael Storer", role: "Support Rider 2", summary: "Australian climber suited to mountain stages and breakaways." },
      { name: "Jai Hindley", role: "Support Rider 3", summary: "Australian Grand Tour winner and strong climbing GC rider." },
      { name: "Jasper Stuyven", role: "Support Rider 4", summary: "Belgian classics rider and powerful all-rounder." },
      { name: "Antonio Tiberi", role: "Support Rider 5", summary: "Italian GC prospect with climbing and time trial ability." }
    ]
  }
];

function renderStandings() {
  const standingsContainer = document.getElementById("standings");

  const sortedStandings = [...standings].sort((a, b) => b.points - a.points);

  standingsContainer.innerHTML = sortedStandings
    .map((person, index) => {
      const medals = ["🥇", "🥈", "🥉"];
      const rankDisplay = medals[index] || `${index + 1}.`;

      const topRiderText = person.topScoringRider
        ? `<div class="standing-detail">Top rider: ${person.topScoringRider} — ${person.topRiderPoints} pts</div>`
        : "";

      return `
        <div class="card standing-row">
          <div class="rank">${rankDisplay}</div>

          <div class="standing-main">
            <div class="name">${person.name}</div>
            ${topRiderText}
          </div>

          <div class="points">${person.points} pts</div>
        </div>
      `;
    })
    .join("");
}

function renderTeams() {
  const teamsContainer = document.getElementById("teams");

  const activeTeams = teams.filter((team) => team.status === "Active");

  teamsContainer.classList.add("team-grid");

  teamsContainer.innerHTML = activeTeams
    .map((team) => {
      return `
        <div class="card team-card">
          <h3>${team.owner}</h3>
          ${team.riders
            .map((rider) => {
              const isSRider = rider.role === "S Rider";

              return `
                <div class="rider ${isSRider ? "s-rider" : ""}">
                  <div>${isSRider ? "⭐ " : ""}${rider.name}</div>
                  <div class="tier">${rider.role}</div>
                </div>
              `;
            })
            .join("")}
        </div>
      `;
    })
    .join("");
}

function renderRiderPool() {
  const riderPoolContainer = document.getElementById("riderPool");

  riderPoolContainer.innerHTML = teams
    .map((team) => {
      return `
        <div class="card rider-pool-team">
          <div class="rider-pool-header">
            <h3>${team.owner}</h3>
            <span class="status-badge ${team.status.toLowerCase()}">${team.status}</span>
          </div>

          ${team.riders
            .map((rider) => {
              const isSRider = rider.role === "S Rider";

              return `
                <div class="rider-pool-row ${isSRider ? "s-rider-pool" : ""}">
                  <div>
                    <strong>${isSRider ? "⭐ " : ""}${rider.name}</strong>
                    <div class="tier">${rider.role}</div>
                  </div>
                  <p>${rider.summary}</p>
                </div>
              `;
            })
            .join("")}
        </div>
      `;
    })
    .join("");
}

function setupTabs() {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedTab = button.dataset.tab;

      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      button.classList.add("active");
      document.getElementById(selectedTab).classList.add("active");
    });
  });
}

function parseCSV(csvText) {
  const rows = [];
  let currentRow = [];
  let currentValue = "";
  let insideQuotes = false;

  for (let i = 0; i < csvText.length; i++) {
    const char = csvText[i];
    const nextChar = csvText[i + 1];

    if (char === '"' && insideQuotes && nextChar === '"') {
      currentValue += '"';
      i++;
    } else if (char === '"') {
      insideQuotes = !insideQuotes;
    } else if (char === "," && !insideQuotes) {
      currentRow.push(currentValue);
      currentValue = "";
    } else if ((char === "\n" || char === "\r") && !insideQuotes) {
      if (currentValue || currentRow.length > 0) {
        currentRow.push(currentValue);
        rows.push(currentRow);
        currentRow = [];
        currentValue = "";
      }

      if (char === "\r" && nextChar === "\n") {
        i++;
      }
    } else {
      currentValue += char;
    }
  }

  if (currentValue || currentRow.length > 0) {
    currentRow.push(currentValue);
    rows.push(currentRow);
  }

  return rows;
}

function rowsToObjects(rows) {
  const headers = rows[0].map((header) => header.trim());

  return rows.slice(1).map((row) => {
    const object = {};

    headers.forEach((header, index) => {
      object[header] = row[index] ? row[index].trim() : "";
    });

    return object;
  });
}

async function loadStandingsFromSheet() {
  try {
    const response = await fetch(BROADCAST_CSV_URL);

    if (!response.ok) {
      throw new Error("Could not load Google Sheet data.");
    }

    const csvText = await response.text();
    const rows = parseCSV(csvText);

    const activeStandingsIndex = rows.findIndex((row) =>
      row.some((cell) => cell.trim() === "Active Standings")
    );

    if (activeStandingsIndex === -1) {
      throw new Error("Could not find Active Standings section.");
    }

    const headerIndex = activeStandingsIndex + 1;
    const dataStartIndex = headerIndex + 1;

    const activeStandingsRows = [];

    for (let i = dataStartIndex; i < rows.length; i++) {
      const row = rows[i];

      const firstCell = row[0] ? row[0].trim() : "";
      const team = row[1] ? row[1].trim() : "";
      const points = row[2] ? row[2].trim() : "";

      if (!firstCell && !team && !points) {
        break;
      }

      if (firstCell === "Hidden Spare Standings") {
        break;
      }

      if (team && points) {
        activeStandingsRows.push({
          rank: Number(firstCell) || activeStandingsRows.length + 1,
          name: team,
          points: Number(points) || 0,
          sRider: row[3] ? row[3].trim() : "",
          topScoringRider: row[4] ? row[4].trim() : "",
          topRiderPoints: Number(row[5]) || 0,
          gain: 0
        });
      }
    }

    if (activeStandingsRows.length > 0) {
      standings = activeStandingsRows;
      renderStandings();
    }
  } catch (error) {
    console.error("Google Sheet loading failed:", error);
  }
}

renderStandings();
renderTeams();
renderRiderPool();
setupTabs();

loadStandingsFromSheet();