// ============================================================
// REALISTIC DATA FOR LEITSTELLE INGOLSTADT (BAVARIA, GERMANY)
// ============================================================
// --- AAO (Alarm- und Ausrückeordnung) Protocols ---
// Based on Bavarian emergency response standards
const DISPATCH_PROTOCOLS = {
    "Notarzteinsatz - Reanimation": {
        units: ["RTW", "NEF"],
        max_time: 8,
        critical: true,
        description: "Cardiac arrest with CPR in progress"
    },
    "Verkehrsunfall - Eingeklemmte Person": {
        units: ["HLF", "RTW", "NEF"],
        max_time: 10,
        critical: true,
        description: "Traffic accident with trapped persons"
    },
    "Wohnungsbrand": {
        units: ["HLF", "DLK", "RTW", "ELW"],
        max_time: 8,
        critical: true,
        description: "Apartment fire with persons at risk"
    },
    "Betriebsunfall": {
        units: ["RTW", "NEF", "HLF"],
        max_time: 12,
        critical: true,
        description: "Industrial accident at factory"
    },
    "Wasserrettung": {
        units: ["RTW", "WLF"],
        max_time: 10,
        critical: true,
        description: "Water rescue operation"
    },
    "Kindernotfall - Fieberkrampf": {
        units: ["RTW", "NEF"],
        max_time: 12,
        critical: false,
        description: "Pediatric emergency"
    },
    "Standard": {
        units: ["RTW"],
        max_time: 15,
        critical: false,
        description: "Standard medical emergency"
    }
};
// --- FLEET (Expanded Realistic Bavarian Emergency Vehicles) ---
const FLEET = [
    // === RETTUNGSWAGEN (RTW) - Ambulances ===
    // Primary Medical Response
    {
        id: "IN-RK 71/1",
        type: "RTW",
        status: "Einsatzbereit",
        location: "Rettungswache Nord",
        battery: 98,
        crew: { shift_start: -2, calls_last_hour: 0, fatigue_score: 10, qualification: "Notfallsanitäter" },
        equipment: ["Defibrillator (Corpuls)", "ALS-Ausstattung", "Kindernotfallkoffer", "Spineboard"],
        history: { on_time_rate: 0.94, specialty: "Notarzteinsatz - Reanimation", trend: "improving", avg_response_time: 7.2 },
        gps: { last_update: 0, accuracy: "High" },
        call_sign: "Florian Ingolstadt 71/1"
    },
    {
        id: "IN-RK 71/2",
        type: "RTW",
        status: "Auf Anfahrt",
        location: "Klinikum Ingolstadt",
        battery: 75,
        crew: { shift_start: -11, calls_last_hour: 3, fatigue_score: 85, qualification: "Notfallsanitäter" },
        equipment: ["Defibrillator (Corpuls)", "ALS-Ausstattung", "Vakuummatratze"],
        history: { on_time_rate: 0.88, specialty: "Verkehrsunfall - Eingeklemmte Person", trend: "stable", avg_response_time: 8.5 },
        gps: { last_update: 1, accuracy: "High" },
        call_sign: "Florian Ingolstadt 71/2"
    },
    {
        id: "IN-RK 71/3", // NEW
        type: "RTW",
        status: "Einsatzbereit",
        location: "Rettungswache Nord",
        battery: 100,
        crew: { shift_start: -1, calls_last_hour: 0, fatigue_score: 5, qualification: "Rettungssanitäter + Notfallsanitäter" },
        equipment: ["Defibrillator (Corpuls)", "ALS-Ausstattung", "Infektionsschutz"],
        history: { on_time_rate: 0.95, specialty: "Standard", trend: "stable", avg_response_time: 6.5 },
        gps: { last_update: 0, accuracy: "High" },
        call_sign: "Florian Ingolstadt 71/3"
    },
    {
        id: "IN-RK 72/1", // NEW
        type: "RTW",
        status: "Desinfektion", // Currently cleaning
        location: "Rettungswache Süd",
        battery: 60,
        crew: { shift_start: -6, calls_last_hour: 2, fatigue_score: 40, qualification: "Notfallsanitäter" },
        equipment: ["Defibrillator (Corpuls)", "ALS-Ausstattung"],
        history: { on_time_rate: 0.90, specialty: "Standard", trend: "stable", avg_response_time: 8.0 },
        gps: { last_update: 5, accuracy: "High" },
        call_sign: "Florian Ingolstadt 72/1"
    },
    {
        id: "IN-RK 73/1",
        type: "RTW",
        status: "Einsatzbereit",
        location: "Rettungswache Ost",
        battery: 95,
        crew: { shift_start: -5, calls_last_hour: 1, fatigue_score: 30, qualification: "Notfallsanitäter" },
        equipment: ["Defibrillator (Corpuls)", "ALS-Ausstattung", "Schaufeltrage"],
        history: { on_time_rate: 0.91, specialty: "Standard", trend: "stable", avg_response_time: 9.1 },
        gps: { last_update: 15, accuracy: "Low" },
        call_sign: "Florian Ingolstadt 73/1"
    },
    {
        id: "IN-RK 74/1",
        type: "RTW",
        status: "Einsatzbereit",
        location: "Rettungswache Süd",
        battery: 22,
        crew: { shift_start: -3, calls_last_hour: 0, fatigue_score: 15, qualification: "Rettungssanitäter" },
        equipment: ["Defibrillator (Corpuls)", "ALS-Ausstattung", "Beatmungsgerät"],
        history: { on_time_rate: 0.89, specialty: "Standard", trend: "declining", avg_response_time: 10.2 },
        gps: { last_update: 0, accuracy: "High" },
        call_sign: "Florian Ingolstadt 74/1"
    },
    {
        id: "MHD-IN 1", // NEW (Malteser Hilfsdienst)
        type: "RTW",
        status: "Einsatzbereit",
        location: "Ingolstadt Innenstadt",
        battery: 88,
        crew: { shift_start: -4, calls_last_hour: 0, fatigue_score: 20, qualification: "Notfallsanitäter" },
        equipment: ["Defibrillator (LP15)", "ALS-Ausstattung", "Kindernotfallkoffer"],
        history: { on_time_rate: 0.93, specialty: "Kindernotfall - Fieberkrampf", trend: "improving", avg_response_time: 5.5 },
        gps: { last_update: 0, accuracy: "High" },
        call_sign: "Johannes Ingolstadt 71/5"
    },
    // === KRANKENTRANSPORTWAGEN (KTW) - Patient Transport ===
    // Useful as backup for "Standard" calls
    {
        id: "IN-RK 72/70", // NEW
        type: "KTW", // Can handle basic "Standard" calls if needed
        status: "Einsatzbereit",
        location: "Rettungswache Süd",
        battery: 90,
        crew: { shift_start: -2, calls_last_hour: 1, fatigue_score: 15, qualification: "Rettungssanitäter" },
        equipment: ["AED", "Tragestuhl", "Sauerstoff"],
        history: { on_time_rate: 0.96, specialty: "Standard", trend: "stable", avg_response_time: 12.0 },
        gps: { last_update: 0, accuracy: "High" },
        call_sign: "Rotkreuz Ingolstadt 72/70"
    },
    // === NOTARZTEINSATZFAHRZEUG (NEF) - Emergency Doctor Vehicles ===
    {
        id: "IN-NEF 10/1",
        type: "NEF",
        status: "Einsatzbereit",
        location: "Rettungswache Nord",
        battery: 100,
        crew: { shift_start: -4, calls_last_hour: 0, fatigue_score: 20, qualification: "Notarzt + Notfallsanitäter" },
        equipment: ["Notarztkoffer", "Medikamente (Narkotika)", "Beatmungsgerät", "EKG-Monitor", "Absaugpumpe"],
        history: { on_time_rate: 0.98, specialty: "Notarzteinsatz - Reanimation", trend: "stable", avg_response_time: 6.8 },
        gps: { last_update: 0, accuracy: "High" },
        call_sign: "Christoph Ingolstadt NEF 10/1"
    },
    {
        id: "IN-NEF 20/1",
        type: "NEF",
        status: "Im Einsatz",
        location: "A9 - Ausfahrt Ingolstadt-Nord",
        battery: 50,
        crew: { shift_start: -6, calls_last_hour: 2, fatigue_score: 45, qualification: "Notarzt + Notfallsanitäter" },
        equipment: ["Defibrilator", "Notarztkoffer", "Medikamente (Narkotika)", "Beatmungsgerät", "EKG-Monitor"],
        history: { on_time_rate: 0.92, specialty: "Verkehrsunfall - Eingeklemmte Person", trend: "improving", avg_response_time: 7.9 },
        gps: { last_update: 2, accuracy: "High" },
        call_sign: "Christoph Ingolstadt NEF 20/1"
    },
    {
        id: "IN-NEF 30/1",
        type: "NEF",
        status: "Einsatzbereit",
        location: "Rettungswache Nord",
        battery: 100,
        crew: { shift_start: -4, calls_last_hour: 0, fatigue_score: 20, qualification: "Notarzt + Notfallsanitäter" },
        equipment: ["Notarztkoffer", "Medikamente (Narkotika)", "Beatmungsgerät", "EKG-Monitor", "Absaugpumpe"],
        history: { on_time_rate: 0.98, specialty: "Notarzteinsatz - Reanimation", trend: "stable", avg_response_time: 6.8 },
        gps: { last_update: 0, accuracy: "High" },
        call_sign: "Christoph Ingolstadt NEF 10/1"
    },
    {
        id: "IN-NEF 76/1", // NEW
        type: "NEF",
        status: "Einsatzbereit",
        location: "Klinikum Ingolstadt",
        battery: 95,
        crew: { shift_start: 0, calls_last_hour: 0, fatigue_score: 0, qualification: "Notarzt + Notfallsanitäter" },
        equipment: ["Notarztkoffer", "Medikamente (Narkotika)", "Ultraschall", "Lucas-Reanimationshilfe"],
        history: { on_time_rate: 0.99, specialty: "Notarzteinsatz - Reanimation", trend: "stable", avg_response_time: 4.5 },
        gps: { last_update: 0, accuracy: "High" },
        call_sign: "Florian Ingolstadt NEF 76/1"
    },
    // === HILFELEISTUNGSLÖSCHFAHRZEUG (HLF) - Fire Trucks ===
    {
        id: "IN-HLF 1-40",
        type: "HLF",
        status: "Einsatzbereit",
        location: "Feuerwache Hauptwache",
        battery: 90,
        crew: { shift_start: -8, calls_last_hour: 0, fatigue_score: 35, qualification: "Berufsfeuerwehr" },
        equipment: ["Hydraulische Rettungsgeräte", "Wasser (1600L)", "Schaummittel", "Atemschutzgeräte"],
        history: { on_time_rate: 0.96, specialty: "Verkehrsunfall - Eingeklemmte Person", trend: "stable", avg_response_time: 5.4 },
        gps: { last_update: 0, accuracy: "High" },
        call_sign: "Florian Ingolstadt 1-40"
    },
    {
        id: "IN-HLF 1-40-2", // NEW (Backup HLF at main station)
        type: "HLF",
        status: "Einsatzbereit",
        location: "Feuerwache Hauptwache",
        battery: 85,
        crew: { shift_start: -8, calls_last_hour: 0, fatigue_score: 35, qualification: "Berufsfeuerwehr" },
        equipment: ["Hydraulische Rettungsgeräte", "Wasser (2000L)", "Sprungretter", "Atemschutzgeräte"],
        history: { on_time_rate: 0.94, specialty: "Wohnungsbrand", trend: "stable", avg_response_time: 5.9 },
        gps: { last_update: 0, accuracy: "High" },
        call_sign: "Florian Ingolstadt 1-40-2"
    },
    {
        id: "IN-HLF 2-40",
        type: "HLF",
        status: "Einsatzbereit",
        location: "Feuerwache Ost",
        battery: 88,
        crew: { shift_start: -4, calls_last_hour: 1, fatigue_score: 25, qualification: "Berufsfeuerwehr" },
        equipment: ["Hydraulische Rettungsgeräte", "Wasser (1600L)", "Schaummittel", "Atemschutzgeräte"],
        history: { on_time_rate: 0.94, specialty: "Wohnungsbrand", trend: "improving", avg_response_time: 6.1 },
        gps: { last_update: 0, accuracy: "High" },
        call_sign: "Florian Ingolstadt 2-40"
    },
    {
        id: "IN-HLF 3-41", // NEW (Volunteer Fire Dept - Freiwillige Feuerwehr)
        type: "HLF",
        status: "Einsatzbereit",
        location: "Ingolstadt Südwest", // Virtual location for FF
        battery: 98,
        crew: { shift_start: 0, calls_last_hour: 0, fatigue_score: 5, qualification: "Freiwillige Feuerwehr" },
        equipment: ["Hydraulische Rettungsgeräte", "Wasser (1200L)", "Kettensäge"],
        history: { on_time_rate: 0.85, specialty: "Standard", trend: "stable", avg_response_time: 9.5 }, // Slower due to volunteers driving to station
        gps: { last_update: 0, accuracy: "Medium" },
        call_sign: "Florian Haunwöhr 41/1"
    },
    // === EINSATZLEITWAGEN (ELW) - Command ===
    {
        id: "IN-ELW 1",
        type: "ELW",
        status: "Einsatzbereit",
        location: "Feuerwache Hauptwache",
        battery: 95,
        crew: { shift_start: -1, calls_last_hour: 0, fatigue_score: 5, qualification: "Einsatzleiter" },
        equipment: ["Funkanlage (Digital)", "Lagekarten", "Führungsmittel", "Laptop"],
        history: { on_time_rate: 0.99, specialty: "Wohnungsbrand", trend: "stable", avg_response_time: 4.2 },
        gps: { last_update: 0, accuracy: "High" },
        call_sign: "Florian Ingolstadt ELW 1"
    },
    {
        id: "IN-KdoW 2", // NEW (Command Car - Kommandowagen)
        type: "ELW", // Treated as ELW for logic
        status: "Streife", // On inspection
        location: "Ingolstadt Nord",
        battery: 70,
        crew: { shift_start: -5, calls_last_hour: 1, fatigue_score: 20, qualification: "Inspektionsdienst" },
        equipment: ["Funkanlage (Digital)", "Führungsmittel"],
        history: { on_time_rate: 0.95, specialty: "Betriebsunfall", trend: "improving", avg_response_time: 5.0 },
        gps: { last_update: 2, accuracy: "High" },
        call_sign: "Florian Ingolstadt 10/1"
    },
    // === DREHLEITER (DLK) - Aerial Ladder ===
    {
        id: "IN-DLK 1-33",
        type: "DLK",
        status: "Einsatzbereit",
        location: "Feuerwache Hauptwache",
        battery: 92,
        crew: { shift_start: -7, calls_last_hour: 0, fatigue_score: 40, qualification: "Berufsfeuerwehr" },
        equipment: ["Drehleiter (33m)", "Rettungskorb", "Löschmonitor", "Atemschutzgeräte"],
        history: { on_time_rate: 0.97, specialty: "Wohnungsbrand", trend: "stable", avg_response_time: 5.8 },
        gps: { last_update: 0, accuracy: "High" },
        call_sign: "Florian Ingolstadt DLK 1-33"
    },
    // === RETTUNGSHUBSCHRAUBER (RTH) - Air Rescue ===
    {
        id: "Christoph 32",
        type: "RTH",
        status: "Einsatzbereit",
        location: "Flugplatz Manching",
        battery: 100,
        crew: { shift_start: -3, calls_last_hour: 0, fatigue_score: 15, qualification: "Pilot + Notarzt + TC HEMS" },
        equipment: ["Notarztausrüstung", "Rettungswinde", "Trauma-Kit", "Beatmungsgerät"],
        history: { on_time_rate: 0.85, specialty: "Betriebsunfall", trend: "stable", avg_response_time: 12.5 },
        gps: { last_update: 0, accuracy: "High" },
        call_sign: "Christoph 32"
    },
    // === WASSERRETTUNG (WLF/GW-W) ===
    {
        id: "DLRG-IN 8/1",
        type: "WLF",
        status: "Rufbereitschaft",
        location: "DLRG Station Donau",
        battery: 85,
        crew: { shift_start: 0, calls_last_hour: 0, fatigue_score: 5, qualification: "Wasserretter" },
        equipment: ["Rettungsboot", "Tauchausrüstung", "Wurfleine", "Schwimmwesten"],
        history: { on_time_rate: 0.82, specialty: "Wasserrettung", trend: "stable", avg_response_time: 15.5 },
        gps: { last_update: 30, accuracy: "Low" },
        call_sign: "DLRG Ingolstadt 8/1"
    },
    {
        id: "WW-IN 91/1", // NEW (Wasserwacht - Water Rescue)
        type: "WLF",
        status: "Einsatzbereit", // Active at the lake
        location: "Donau - Höhe Baggersee Auwaldsee",
        battery: 90,
        crew: { shift_start: -4, calls_last_hour: 0, fatigue_score: 25, qualification: "Rettungsschwimmer" },
        equipment: ["Rettungsboot", "Sonar", "Wurfleine"],
        history: { on_time_rate: 0.98, specialty: "Wasserrettung", trend: "improving", avg_response_time: 2.0 }, // Very fast as already on site
        gps: { last_update: 0, accuracy: "High" },
        call_sign: "Wasserwacht Ingolstadt 91/1"
    }
];
// --- REALISTIC EMERGENCIES FOR INGOLSTADT AREA ---
const EMERGENCIES = [
    {
        id: "E-2024-12547",
        type: "Notarzteinsatz - Reanimation",
        location: "Theresienstraße 15",
        severity: "Lebensbedrohlich",
        description: "Mann, 62 Jahre, bewusstlos. Reanimation durch Ersthelfer.",
        required_equipment: "Defibrillator (Corpuls)",
        caller_type: "Ersthelfer",
        district: "Ingolstadt Innenstadt"
    },
    {
        id: "E-2024-12548",
        type: "Verkehrsunfall - Eingeklemmte Person",
        location: "A9 Ausfahrt Ingolstadt-Süd",
        severity: "Schwer",
        description: "PKW gegen LKW. 1 Person eingeklemmt. Airbag ausgelöst.",
        required_equipment: "Hydraulische Rettungsgeräte",
        caller_type: "Unfallbeteiligter",
        district: "Autobahn A9"
    },
    {
        id: "E-2024-12549",
        type: "Wohnungsbrand",
        location: "Manchinger Straße 47, 3. OG",
        severity: "Lebensbedrohlich",
        description: "Starke Rauchentwicklung aus Wohnung. Personen vermutet.",
        required_equipment: "Wasser (1600L)",
        caller_type: "Nachbar",
        district: "Ingolstadt Nord"
    },
    {
        id: "E-2024-12550",
        type: "Betriebsunfall",
        location: "Audi Werk II - Halle A22",
        severity: "Schwer",
        description: "Arbeitsunfall mit Maschine. Person verletzt, starke Blutung.",
        required_equipment: "ALS-Ausstattung",
        caller_type: "Werksarzt",
        district: "Industriegebiet"
    },
    {
        id: "E-2024-12551",
        type: "Wasserrettung",
        location: "Donau - Höhe Baggersee Auwaldsee",
        severity: "Lebensbedrohlich",
        description: "Person im Wasser treibend. Schwimmt nicht mehr.",
        required_equipment: "Rettungsboot",
        caller_type: "Zeuge",
        district: "Donauufer"
    },
    {
        id: "E-2024-12552",
        type: "Kindernotfall - Fieberkrampf",
        location: "Goethestraße 28",
        severity: "Mittel",
        description: "Kind, 3 Jahre, Fieberkrampf. Bei Bewusstsein, zittert.",
        required_equipment: "Kindernotfallkoffer",
        caller_type: "Mutter",
        district: "Ingolstadt Südwest"
    }
];
// --- REALISTIC LOCATIONS IN INGOLSTADT ---
const LOCATIONS = {
    // Emergency Service Stations
    "Rettungswache Nord": [48.7850, 11.4350],
    "Rettungswache Süd": [48.7400, 11.4200],
    "Rettungswache Ost": [48.7650, 11.4650],
    "Feuerwache Hauptwache": [48.7635, 11.4247], // Near city center
    "Feuerwache Ost": [48.7680, 11.4520],
    "Klinikum Ingolstadt": [48.7630, 11.3950],
    "Flugplatz Manching": [48.7180, 11.5360], // Air base
    "DLRG Station Donau": [48.7580, 11.4300],
    "Ingolstadt Innenstadt": [48.7665, 11.4258], // City center (police patrol)
    // Emergency Locations
    "Theresienstraße 15": [48.7640, 11.4245], // Cardiac arrest
    "A9 Ausfahrt Ingolstadt-Süd": [48.7320, 11.4180], // Highway exit
    "A9 - Ausfahrt Ingolstadt-Nord": [48.7800, 11.4600],
    "Manchinger Straße 47, 3. OG": [48.7720, 11.4380], // Apartment fire
    "Audi Werk II - Halle A22": [48.7580, 11.4100], // Audi factory
    "Donau - Höhe Baggersee Auwaldsee": [48.7520, 11.4280], // Danube river
    "Goethestraße 28": [48.7590, 11.4190] // Pediatric emergency
};
// --- EXPORT FOR USE ---
//export { DISPATCH_PROTOCOLS, FLEET, EMERGENCIES, LOCATIONS };
// --- 2. GLOBAL STATE ---
let map;
let currentEmergencyMarker = null;
let currentEmergencyData = null;
let currentSquadAnalysis = [];
let currentWorldState = { weather: "Clear", traffic: "Free", hospital: "Open" };
// --- 3. INITIALIZATION ---
function initApp() {
    console.log("Neural Core Online");
    map = L.map('map').setView([48.7665, 11.4258], 13);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(map);
    renderFleetMarkers();
    renderFleetList();
    document.getElementById('fleet-count').innerText = FLEET.length;
    document.getElementById('randomize-btn').onclick = triggerRandomEmergency;
    document.getElementById('start-dispatch-btn').onclick = startDispatchProcess;
    document.getElementById('close-modal').onclick = closeModal;
    // KEYBOARD SHORTCUTS
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !document.getElementById('analysis-modal').classList.contains('hidden')) {
            const unitId = currentSquadAnalysis[0]?.best?.id;
            if (unitId) confirmDispatch(unitId);
        }
        if (e.key === 'Escape') closeModal();
    });
    const style = document.createElement("style");
    style.innerHTML = `@keyframes pulse-red { 0% {transform:scale(0.95); box-shadow:0 0 0 0 rgba(239,68,68,0.7);} 70% {transform:scale(1); box-shadow:0 0 0 20px rgba(239,68,68,0);} 100% {transform:scale(0.95); box-shadow:0 0 0 0 rgba(239,68,68,0);} }`;
    document.head.appendChild(style);
}
// --- 4. CORE FUNCTIONS ---
function triggerRandomEmergency() {
    const idx = Math.floor(Math.random() * EMERGENCIES.length);
    const em = EMERGENCIES[idx];
    currentEmergencyData = em;
    if (currentEmergencyMarker) map.removeLayer(currentEmergencyMarker);
    const coords = LOCATIONS[em.location] || [48.7665, 11.4258];
    const icon = L.divIcon({
        className: 'emergency-pulse',
        html: `<div style="width: 20px; height: 20px; background: rgba(239, 68, 68, 0.9); border-radius: 50%; box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); animation: pulse-red 1.5s infinite; border: 3px solid white;"></div>`,
        iconSize: [20, 20]
    });
    currentEmergencyMarker = L.marker(coords, { icon }).addTo(map);
    map.flyTo(coords, 14);
    const proto = DISPATCH_PROTOCOLS[em.type] || DISPATCH_PROTOCOLS["Default"];
    const timeReceived = new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    const panel = document.getElementById('emergency-display-area');
    panel.classList.remove('empty');
    panel.innerHTML = `
        <div class="info-row"><span class="info-label">Type</span><div class="info-val" style="color:#ef4444">${em.id}: ${em.type}</div></div>
        <div class="info-row"><span class="info-label">Location</span><div class="info-val">${em.location}</div></div>
        <div class="info-row"><span class="info-label">Time Received</span><div class="info-val">${timeReceived}</div></div>
        <div class="info-row"><span class="info-label">Severity</span><div class="badge crit">${em.severity}</div></div>
        <div class="info-row"><span class="info-label">Description</span><div class="info-desc">"${em.description}"</div></div>
        <div class="info-row" style="border:none"><span class="info-label">AAO Protocol</span><div class="info-val" style="font-size:0.9rem">${proto.units.join(' + ')}</div></div>
    `;
    const btn = document.getElementById('start-dispatch-btn');
    btn.disabled = false;
    btn.innerHTML = `<i class="ri-flashlight-fill"></i><span>START DISPATCH</span>`;
}
function startDispatchProcess() {
    if (!currentEmergencyData) return;
    const btn = document.getElementById('start-dispatch-btn');
    btn.innerHTML = `<i class="ri-loader-4-line ri-spin"></i><span>ANALYZING...</span>`;
    setTimeout(() => {
        analyzeSquad(currentEmergencyData);
        btn.innerHTML = `<i class="ri-flashlight-fill"></i><span>START DISPATCH</span>`;
    }, 600);
}
// --- 5. AI ENGINE (DEEP REASONING) ---
function getRouteTraffic(fromLoc, toLoc) {
    if (fromLoc.includes("Highway") || toLoc.includes("Highway")) {
        return Math.random() > 0.5 ? "Heavy Traffic" : "Free Flowing";
    }
    return "Free Flowing";
}
function analyzeSquad(em) {
    const isGoodDay = Math.random() > 0.4;
    currentWorldState = {
        weather: isGoodDay ? "Clear" : "Rain",
        hospital: isGoodDay ? { status: "Accepting", wait: 10 } : { status: "Diversion", wait: 45 }
    };
    const protocol = DISPATCH_PROTOCOLS[em.type] || DISPATCH_PROTOCOLS["Default"];
    currentSquadAnalysis = [];
    protocol.units.forEach(reqType => {
        let candidates = FLEET.filter(v =>
            v.type.includes(reqType) &&
            !v.status.startsWith("Out") &&
            !currentSquadAnalysis.some(s => s.best.id === v.id)
        );
        if (candidates.length === 0) candidates = FLEET.filter(v => !v.status.startsWith("Out"));
        const scored = candidates.map(v => {
            const dist = calculateTravelTime(v.location, em.location);
            const routeTraffic = getRouteTraffic(v.location, em.location);
            const worldContext = { ...currentWorldState, traffic: routeTraffic };
            const ai = getDeepAiStats(v, em, worldContext, dist, protocol);
            return { ...v, score: parseFloat(ai.confidence), eta: dist, aiStats: ai };
        });
        // CRITICAL EQUIPMENT PRIORITY FIX
        scored.sort((a, b) => {
            const aEquip = a.aiStats.breakdown.equipment;
            const bEquip = b.aiStats.breakdown.equipment;
            if (aEquip < 60 && bEquip >= 80) return 1;
            if (bEquip < 60 && aEquip >= 80) return -1;
            return b.score - a.score;
        });
        currentSquadAnalysis.push({ role: reqType, best: scored[0], alternatives: scored });
    });
    populateSquadModal(em, 0);
}
function getDeepAiStats(unit, em, world, dist, protocol) {
    // BASELINE: Start perfect
    let conf = 100;
    let rationale = [];
    let secondary = [];
    let breakdown = { route: 100, equipment: 100, crew: 100 };
    let monitoringMsg = "All parameters nominal.";

    // --- A. DISTANCE DECAY (NEW LOGIC) ---
    // Every minute of travel reduces confidence. 
    // This creates separation between a unit 1m away vs 10m away.
    const distancePenalty = Math.round(dist * 2);
    if (distancePenalty > 0) {
        conf -= distancePenalty;
        // Don't clutter UI with "Distance OK", only penalize silently or in secondary
    }

    // --- B. TRAFFIC & GPS ---
    const gpsAge = unit.gps.last_update;
    if (gpsAge > 10) {
        rationale.push({ type: "neg", label: "GPS Data", value: "Stale Signal", sub: `Last update ${gpsAge}m ago.` });
        breakdown.route = 60;
        conf -= 15;
    } else if (world.traffic === "Heavy Traffic") {
        const variance = Math.ceil(dist * 0.4);
        rationale.push({ type: "neg", label: "Traffic Model", value: "Congestion", sub: `ETA ±${variance}m variance.` });
        breakdown.route = 70;
        conf -= 10;
        monitoringMsg = "Elevated uncertainty due to traffic patterns.";
    } else {
        rationale.push({ type: "pos", label: "Route", value: "Optimal", sub: `${world.traffic}. GPS fresh.` });
        breakdown.route = 98;
    }

    // --- C. PROTOCOL & EQUIPMENT (SQUAD SYNERGY) ---
    const hasDirectItem = unit.equipment.includes(em.required_equipment);
    let coveredBySquad = false;
    let coveringUnitType = "";

    if (!hasDirectItem) {
        const partnerRoles = protocol.units.filter(role => !unit.type.includes(role));
        const partnerProvider = FLEET.find(f =>
            partnerRoles.some(role => f.type.includes(role)) &&
            f.equipment.includes(em.required_equipment) &&
            !f.status.startsWith("Out")
        );
        if (partnerProvider) {
            coveredBySquad = true;
            coveringUnitType = partnerProvider.type;
        }
    }

    if (hasDirectItem) {
        rationale.push({ type: "pos", label: "Protocol", value: "Matched", sub: `Unit has ${em.required_equipment}.` });
        breakdown.equipment = 100;
    } else if (coveredBySquad) {
        rationale.push({ type: "pos", label: "Squad Synergy", value: "Covered", sub: `Item provided by ${coveringUnitType}.` });
        breakdown.equipment = 100;
    } else {
        rationale.push({ type: "neg", label: "Protocol", value: "Mismatch", sub: `Missing: ${em.required_equipment}.` });
        breakdown.equipment = 50;
        conf -= 40;
        monitoringMsg = `Critical: Missing ${em.required_equipment}.`;
    }

    // --- D. CREW FATIGUE ---
    const fScore = unit.crew.fatigue_score;
    const shiftHrs = Math.abs(unit.crew.shift_start);
    const calls = unit.crew.calls_last_hour;
    breakdown.crew = 100 - fScore;

    if (fScore > 70) {
        rationale.push({
            type: "neg",
            label: "Crew Risk",
            value: "High Fatigue",
            sub: `Shift: ${shiftHrs}h active • Load: ${calls} calls/hr (Score: ${fScore})`
        });
        conf -= 15;
    } else if (fScore > 30) {
        rationale.push({
            type: "neg",
            label: "Crew Risk",
            value: "Moderate Load",
            sub: `Shift: ${shiftHrs}h active • Load: ${calls} calls/hr (Score: ${fScore})`
        });
        conf -= 5;
    } else {
        breakdown.crew = 98;
    }

    // --- E. EXPERTISE & TIME LIMITS ---
    if (unit.history.specialty === em.type) {
        rationale.push({ type: "pos", label: "Expertise", value: "Specialist", sub: `Crew specializes in this type.` });
        conf += 5;
    }

    // Hard Limit Check (on top of decay)
    if (protocol.critical && dist > protocol.max_time) {
        rationale.push({ type: "neg", label: "Protocol", value: "Time Exceeded", sub: `ETA ${dist}m > ${protocol.max_time}m.` });
        conf -= 20;
    }

    // --- F. SECONDARY & UNCERTAINTY ---
    if (unit.battery < 30) {
        secondary.push({ crit: true, icon: "ri-battery-charge-line", text: `Battery Critical: ${unit.battery}%` });
        conf -= 15;
    }

    // Cap Confidence (Max 99, Min 5)
    conf = Math.min(Math.max(conf, 5), 99);
    conf += Math.floor(Math.random() * 5) - 2;

    return { confidence: conf.toFixed(0), rationale, secondary, breakdown, monitoringMsg, history: unit.history };
}
// --- 6. RENDER MODAL ---
function populateSquadModal(em, slotIdx) {
    const modal = document.getElementById('analysis-modal');
    modal.classList.remove('hidden');
    const content = modal.querySelector('.modal-content');
    const slot = currentSquadAnalysis[slotIdx];
    const unit = slot.best;
    const ai = unit.aiStats;
    const color = getScoreColor(ai.confidence);
    // CRITICAL: Check if NO UNIT has the required equipment
    const totalEquipmentFailure = unit.aiStats.breakdown.equipment < 100;
    const listHtml = currentSquadAnalysis.map((s, idx) => `
        <div onclick="populateSquadModal(currentEmergencyData, ${idx})"
             style="padding:12px; margin-bottom:8px; background:${idx === slotIdx ? 'rgba(255,255,255,0.08)' : 'transparent'};
             border-left:3px solid ${getScoreColor(s.best.aiStats.confidence)}; border-radius:4px; cursor:pointer; transition:all 0.2s;">
            <div style="display:flex; justify-content:space-between; font-weight:bold;">
                <span style="color:#e5e7eb">${s.role}</span>
                <span style="color:${getScoreColor(s.best.aiStats.confidence)}">${s.best.aiStats.confidence}%</span>
            </div>
            <div style="font-size:0.8rem; color:#9ca3af; margin-top:2px;">${s.best.id} • ${s.best.eta}m</div>
        </div>
    `).join('');
    const detailHtml = `
        <div style="padding:30px; overflow-y:auto; background:#111827; height:100%;">
            ${totalEquipmentFailure ? `
                <div style="margin-bottom:20px; padding:20px; background:#450a0a; border:2px solid #ef4444; border-radius:8px;">
                    <div style="color:#ef4444; font-weight:bold; font-size:1.2rem; display:flex; align-items:center; gap:10px;">
                        <i class="ri-alarm-warning-fill"></i> NO CAPABLE UNITS
                    </div>
                    <div style="color:#fecaca; margin-top:10px;">
                        No unit in the fleet carries the required <b>${em.required_equipment}</b>.
                        <br>Primary unit is a forced match with <b>Critical Failure</b>.
                    </div>
                    <div style="margin-top:15px; display:flex; gap:10px;">
                        <button class="override-btn" style="background:#ef4444; color:white; border:none; padding:10px;">
                            REQUEST EXTERNAL MUTUAL AID
                        </button>
                    </div>
                </div>
            ` : ''}
            <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:25px;">
                <div>
                    <div style="font-size:0.8rem; color:#6b7280; letter-spacing:1px; margin-bottom:5px;">PRIMARY RECOMMENDATION</div>
                    <h2 style="margin:0; font-size:2.2rem; color:white; line-height:1;">${unit.id}</h2>
                    <div style="font-size:1rem; color:#9ca3af; margin-top:8px;">
                        <span style="color:white; font-weight:bold;">${unit.eta} min</span> ETA
                        <span style="margin:0 8px; color:#4b5563;">|</span>
                        ${unit.status}
                    </div>
                    ${ai.confidence < 70 && !totalEquipmentFailure ? `
                        <div style="margin-top:10px; padding:8px; background:rgba(251,191,36,0.1); border:1px solid #f59e0b; border-radius:4px; font-size:0.8rem; color:#fbbf24;">
                            <i class="ri-information-line"></i> Low confidence. Consider alternative: ${slot.alternatives[1]?.id} (${slot.alternatives[1]?.aiStats.confidence}%)
                        </div>
                    ` : ''}
                </div>
                <div style="text-align:right;">
                    <div style="font-size:3rem; font-weight:800; color:${color}; line-height:1;">${ai.confidence}%</div>
                    <div style="font-size:0.75rem; color:#9ca3af; letter-spacing:1px; margin-top:5px;">MATCH CONFIDENCE</div>
                </div>
            </div>
            <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:15px; margin-bottom:30px;">
                <div class="xai-card" style="padding:15px; background:rgba(255,255,255,0.03);">
                    <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                        <span style="font-size:0.7rem; color:#9ca3af;">ROUTE</span>
                        <span style="font-size:0.8rem; font-weight:bold; color:${getScoreColor(ai.breakdown.route)}">${ai.breakdown.route}%</span>
                    </div>
                    <div style="height:4px; background:#374151; border-radius:2px; overflow:hidden;">
                        <div style="width:${ai.breakdown.route}%; height:100%; background:${getScoreColor(ai.breakdown.route)};"></div>
                    </div>
                </div>
                <div class="xai-card" style="padding:15px; background:rgba(255,255,255,0.03);">
                    <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                        <span style="font-size:0.7rem; color:#9ca3af;">EQUIPMENT</span>
                        <span style="font-size:0.8rem; font-weight:bold; color:${getScoreColor(ai.breakdown.equipment)}">${ai.breakdown.equipment}%</span>
                    </div>
                    <div style="height:4px; background:#374151; border-radius:2px; overflow:hidden;">
                        <div style="width:${ai.breakdown.equipment}%; height:100%; background:${getScoreColor(ai.breakdown.equipment)};"></div>
                    </div>
                </div>
                <div class="xai-card" style="padding:15px; background:rgba(255,255,255,0.03);">
                    <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
                        <span style="font-size:0.7rem; color:#9ca3af;">CREW STATE</span>
                        <span style="font-size:0.8rem; font-weight:bold; color:${getScoreColor(ai.breakdown.crew)}">${ai.breakdown.crew}%</span>
                    </div>
                    <div style="height:4px; background:#374151; border-radius:2px; overflow:hidden;">
                        <div style="width:${ai.breakdown.crew}%; height:100%; background:${getScoreColor(ai.breakdown.crew)};"></div>
                    </div>
                </div>
            </div>
            <div style="display:grid; grid-template-columns:1.4fr 0.8fr; gap:25px;">
                <div>
                    <h4 style="color:#6b7280; font-size:0.75rem; margin-bottom:15px; letter-spacing:1px; font-weight:700;">AI RATIONALE</h4>
                    <div class="xai-card" style="padding:20px; border:1px solid #374151;">
                        <div style="margin-bottom:20px; padding:12px; background:rgba(59,130,246,0.1); border-left:3px solid #3b82f6; border-radius:4px;">
                            <div style="color:#60a5fa; font-size:0.7rem; font-weight:bold; margin-bottom:4px; display:flex; align-items:center; gap:6px;">
                                <i class="ri-history-line"></i> TRUST CALIBRATION
                            </div>
                            <div style="color:#e5e7eb; font-size:0.85rem; line-height:1.4;">
                                This crew has a <b>${ai.history.on_time_rate * 100}% on-time rate</b> for ${ai.history.specialty} calls.
                                ${ai.history.trend === 'improving' ? '<span style="color:#10b981; margin-left:5px;">↗ Improving</span>' : ''}
                                ${ai.history.trend === 'declining' ? '<span style="color:#ef4444; margin-left:5px;">↘ Declining</span>' : ''}
                            </div>
                        </div>
                        ${ai.rationale.map(r => `
                            <div style="margin-bottom:15px; padding-bottom:15px; border-bottom:1px solid rgba(255,255,255,0.05);">
                                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
                                    <span style="font-size:0.95rem; color:#e5e7eb; font-weight:500;">${r.label}</span>
                                    <span style="font-size:0.85rem; font-weight:bold; color:${r.type === 'pos' ? '#10b981' : '#ef4444'}">
                                        ${r.type === 'pos' ? '✓' : '⚠️'} ${r.value}
                                    </span>
                                </div>
                                <div style="font-size:0.85rem; color:#9ca3af; padding-left:12px; border-left:2px solid ${r.type === 'pos' ? '#10b981' : '#ef4444'};">
                                    ${r.sub}
                                </div>
                            </div>
                        `).join('')}
                        <div style="margin-top:20px;">
                            <span style="font-size:0.7rem; color:#6b7280; text-transform:uppercase; letter-spacing:0.5px; font-weight:bold;">Secondary Considerations</span>
                            <div style="margin-top:10px; display:grid; grid-template-columns: 1fr 1fr; gap:10px;">
                                ${ai.secondary.map(s => `
                                    <div style="font-size:0.8rem; color:${s.crit ? '#ef4444' : '#9ca3af'}; display:flex; align-items:center; gap:8px;">
                                        <i class="${s.icon}"></i> ${s.text}
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 style="color:#6b7280; font-size:0.75rem; margin-bottom:15px; letter-spacing:1px; font-weight:700;">WHY NOT OTHERS?</h4>
                    <div class="xai-card" style="padding:0; overflow:hidden;">
                        ${slot.alternatives.slice(1, 4).map((alt, i) => {
        const timeDiff = alt.eta - unit.eta;
        const timeStr = timeDiff < 0 ? `${Math.abs(timeDiff)}m faster` : `${timeDiff}m slower`;
        const timeColor = timeDiff < 0 ? '#10b981' : '#9ca3af';
        let riskDetails = "";
        let headlineRisk = "Suboptimal Position";
        // Check Battery
        if (alt.battery < 30) {
            headlineRisk = "⚠️ Low Battery";
            riskDetails += `<div class="tradeoff-row"><span class="tradeoff-label">Battery:</span><span class="tradeoff-val">${alt.battery}% critical</span></div>`;
        }
        // Check GPS
        else if (alt.gps.last_update > 10) {
            headlineRisk = "⚠️ GPS Stale";
            riskDetails += `<div class="tradeoff-row"><span class="tradeoff-label">Data Age:</span><span class="tradeoff-val">${alt.gps.last_update}m old</span></div>`;
        }
        // Fatigue Check
        else if (alt.crew.fatigue_score > 50) {
            headlineRisk = "⚠️ High Fatigue Risk";
            riskDetails += `
                                    <div class="tradeoff-row"><span class="tradeoff-label">Shift:</span><span class="tradeoff-val">${Math.abs(alt.crew.shift_start)}h active</span></div>
                                    <div class="tradeoff-row"><span class="tradeoff-label">Load:</span><span class="tradeoff-val">${alt.crew.calls_last_hour} calls/hr</span></div>
                                `;
        }
        // Equipment Check
        else if (alt.aiStats.breakdown.equipment < 100) {
            headlineRisk = "⚠️ Missing Gear";
            riskDetails += `<div class="tradeoff-row"><span class="tradeoff-label">Missing:</span><span class="tradeoff-val">${em.required_equipment}</span></div>`;
        }
        // Just Slower
        else if (timeDiff > 0 && headlineRisk === "Suboptimal Position") {
            headlineRisk = "⚠️ ETA Delay";
            riskDetails += `<div class="tradeoff-row"><span class="tradeoff-label">Route:</span><span class="tradeoff-val">+${timeDiff}m vs best</span></div>`;
        }
        else {
            headlineRisk = "Lower Score";
            const scoreDiff = unit.aiStats.confidence - alt.aiStats.confidence;
            riskDetails += `
                <div class="tradeoff-row"><span class="tradeoff-label">Confidence:</span><span class="tradeoff-val">-${scoreDiff}% lower overall</span></div>
                <div class="tradeoff-row"><span class="tradeoff-label">Reason:</span><span class="tradeoff-val">Minor fatigue or history factors</span></div>
             `;
        }
        return `
                            <div class="alt-card">
                                <div class="alt-card-header" onclick="toggleDetails('alt-${i}')">
                                    <div style="flex:1;">
                                        <div style="display:flex; justify-content:space-between; font-weight:bold; font-size:0.9rem; margin-bottom:2px;">
                                            <span>${alt.id}</span>
                                            <span style="color:${getScoreColor(alt.aiStats.confidence)}">${alt.aiStats.confidence}%</span>
                                        </div>
                                        <div style="font-size:0.75rem; color:${timeColor}; margin-bottom:2px;">
                                            ${timeStr}
                                        </div>
                                        <div style="font-size:0.75rem; color:#ef4444; font-weight:500;">
                                            ${headlineRisk} <i class="ri-arrow-down-s-line" style="float:right; color:#6b7280;"></i>
                                        </div>
                                    </div>
                                </div>
                                <div id="alt-${i}" class="alt-details">
                                    ${riskDetails}
                                </div>
                            </div>
                            `;
    }).join('')}
                    </div>
                </div>
            </div>
            <div style="margin-top:30px; padding-top:20px; border-top:1px solid #374151;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
                    <div style="font-size:0.8rem; color:${ai.confidence < 80 ? '#f59e0b' : '#9ca3af'};">
                        <i class="ri-eye-line"></i> Monitoring: ${ai.monitoringMsg}
                    </div>
                    <div style="font-size:0.8rem; color:#6b7280; cursor:pointer;" onclick="exportDecision()">
                        <i class="ri-download-line"></i> Export Log
                    </div>
                </div>
                <button onclick="confirmDispatch('${unit.id}')" style="width:100%; padding:16px; background:#10b981; color:white; border:none; border-radius:8px; font-weight:bold; font-size:1rem; cursor:pointer; box-shadow:0 4px 15px rgba(16,185,129,0.3); display:flex; justify-content:center; gap:10px; align-items:center;">
                    <span>CONFIRM DISPATCH</span> <i class="ri-send-plane-fill"></i>
                </button>
            </div>
        </div>
    `;
    content.style.display = 'grid';
    content.style.gridTemplateColumns = '320px 1fr';
    content.innerHTML = `
        <div style="background:#1f2937; padding:20px; border-right:1px solid #374151; overflow-y:auto;">
            <h3 style="margin-top:0; color:#9ca3af; font-size:0.7rem; letter-spacing:1px; margin-bottom:15px; font-weight:700;">SQUAD ASSIGNMENT</h3>
            ${listHtml}
            <div style="margin-top:15px; padding:12px; border:1px dashed #4b5563; border-radius:6px; color:#9ca3af; text-align:center; cursor:pointer; font-size:0.8rem; transition:all 0.2s;" 
                 onmouseover="this.style.background='rgba(255,255,255,0.05)'; this.style.color='white';" 
                 onmouseout="this.style.background='transparent'; this.style.color='#9ca3af';">
                <i class="ri-add-line"></i> ADD OPTIONAL UNIT
            </div>
            <div style="margin-top:auto; padding-top:20px; text-align:center;">
                <div style="font-size:0.7rem; color:#4b5563;">AAO PROTOCOL: ${em.type.toUpperCase()}</div>
            </div>
        </div>
        ${detailHtml}
    `;
}
// --- 8. HELPER FUNCTIONS ---
window.toggleDetails = function (id) {
    const el = document.getElementById(id);
    el.classList.toggle('open');
};
function confirmDispatch(unitId) {
    console.log(`[SYSTEM_LEARNING] User confirmed unit ${unitId}.`);
    alert(`Unit ${unitId} Dispatched. System updated.`);
    closeModal();
}
function exportDecision() {
    alert("Decision log exported to audit trail.");
}
function renderFleetMarkers() {
    FLEET.forEach(v => {
        const c = LOCATIONS[v.location];
        if (!c) return;
        const color = v.status.startsWith("Avail") ? '#3b82f6' : '#9ca3af';
        L.marker(c, { icon: L.divIcon({ className: 'custom', html: `<div style="background:${color};width:10px;height:10px;border-radius:50%;border:1px solid white;"></div>` }) }).addTo(map);
    });
}
function renderFleetList() {
    const l = document.getElementById('fleet-list');
    l.innerHTML = FLEET.map(v => `
        <div class="fleet-card">
            <div><b>${v.id}</b><br><span style="font-size:0.8em;color:#9ca3af">${v.type}</span></div>
            <div style="text-align:right"><span style="font-size:0.8em;background:#374151;padding:2px 6px;border-radius:4px;">${v.status}</span></div>
        </div>
    `).join('');
}
function calculateTravelTime(locA, locB) {
    if (!LOCATIONS[locA] || !LOCATIONS[locB]) return 15;
    return Math.round(L.latLng(LOCATIONS[locA]).distanceTo(LOCATIONS[locB]) / 500);
}
function getScoreColor(s) {
    if (s >= 90) return '#10b981';
    if (s >= 75) return '#eab308';
    if (s >= 50) return '#f97316';
    return '#ef4444';
}
function closeModal() {
    document.getElementById('analysis-modal').classList.add('hidden');
}
// Start
initApp();