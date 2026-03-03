export const NAV_LINKS = ["Home", "Squad", "Fixtures", "Stats", "News", "Contact"];
// const NAV_LINKS = ["https://www.bcci.tv/", "https://www.bcci.tv/international/men/players", "https://www.bcci.tv/international/men/fixtures-results", "https://www.bcci.tv/international/men/stats/test", "https://www.bcci.tv/international/men/news", "mailto:office@bcci.tv"];

export const FIXTURES = [
  { date: "14 Feb", team1: "India", flag1: "🇮🇳", score1: "571/8", team2: "England", flag2: "🏴", score2: "137", result: "India won by 434 runs", format: "TEST", venue: "Rajkot", status: "completed" },
  { date: "18 Feb", team1: "India", flag1: "🇮🇳", score1: "312/4", team2: "Australia", flag2: "🇦🇺", score2: "309", result: "India won by 6 wkts", format: "ODI", venue: "Mumbai", status: "completed" },
  { date: "3 Mar", team1: "India", flag1: "🇮🇳", score1: "—", team2: "New Zealand", flag2: "🇳🇿", score2: "—", result: "Starts 14:30 IST", format: "T20", venue: "Delhi", status: "upcoming" },
  { date: "7 Mar", team1: "India", flag1: "🇮🇳", score1: "—", team2: "South Africa", flag2: "🇿🇦", score2: "—", result: "Starts 09:30 IST", format: "ODI", venue: "Ahmedabad", status: "upcoming" },
];

export const SQUAD = [
  { name: "Rohit Sharma", role: "Batsman · Captain", jersey: 45, runs: 10709, avg: 48.7, flag: "🏏", form: ["50","112","34","91","8"] },
  { name: "Virat Kohli", role: "Batsman", jersey: 18, runs: 13906, avg: 58.1, flag: "🏏", form: ["186","91","12","149","55"] },
  { name: "Jasprit Bumrah", role: "Bowler", jersey: 93, wickets: 195, avg: 21.9, flag: "🎯", form: ["5/23","2/41","6/19","3/55","4/30"] },
  { name: "Shubman Gill", role: "Batsman · Opener", jersey: 77, runs: 2310, avg: 44.4, flag: "🏏", form: ["91","33","128","44","76"] },
  { name: "Ravindra Jadeja", role: "All-Rounder", jersey: 8, runs: 2633, avg: 36.0, flag: "⚡", form: ["75","3/28","112*","2/44","61"] },
  { name: "KL Rahul", role: "WK-Batsman", jersey: 1, runs: 4683, avg: 46.2, flag: "🧤", form: ["86","12","97","43","110"] },
];

export const LEADERBOARDS = [
  { label: "Top Scorer 2024", name: "Virat Kohli", stat: "891", unit: "RUNS", sub: "Avg: 81.0", grad: "linear-gradient(135deg,#001233,#003580)" },
  { label: "Most Valuable", name: "Rohit Sharma", stat: "743", unit: "RUNS", sub: "SR: 142.7", grad: "linear-gradient(135deg,#003580,#0057A8)" },
  { label: "Top Wicket-Taker", name: "Jasprit Bumrah", stat: "34", unit: "WKTS", sub: "Econ: 4.2", grad: "linear-gradient(135deg,#7B2D00,#FF6B35)" },
];

export const NEWS = [
  { date: "Feb 25, 2024", title: "Kohli becomes first Indian to score 50 Test centuries", tag: "MILESTONE", color: "#003580" },
  { date: "Feb 22, 2024", title: "India clinch Test series 4-1 in dominant home campaign", tag: "SERIES", color: "#138808" },
  { date: "Feb 18, 2024", title: "Bumrah's 6-for dismantles Australia middle order in Mumbai", tag: "BOWLING", color: "#FF6B35" },
  { date: "Feb 14, 2024", title: "India post record 571/8 in Rajkot to crush England", tag: "BATTING", color: "#7B2FBE" },
];

export const STATS_HIGHLIGHTS = [
  { icon: "🏏", label: "Test Matches", value: "571", sub: "Played" },
  { icon: "🏆", label: "ICC Titles", value: "6", sub: "World Titles" },
  { icon: "📊", label: "Highest Score", value: "759/7", sub: "vs England, 2016" },
  { icon: "🎯", label: "Most Wickets", value: "619", sub: "Anil Kumble" },
];

export const FORMATS = [
  { name: "TEST", color: "#1a1a2e", light: "#e8eaf6", rank: "#1", matches: 571, wins: 178 },
  { name: "ODI", color: "#003580", light: "#e3f0ff", rank: "#2", matches: 1063, wins: 534 },
  { name: "T20I", color: "#0057A8", light: "#dceeff", rank: "#1", matches: 218, wins: 143 },
];


// export default { NAV_LINKS, FIXTURES, SQUAD, LEADERBOARDS, NEWS, STATS_HIGHLIGHTS, FORMATS };
