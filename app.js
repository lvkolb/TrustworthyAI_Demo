
// --- EMBEDDED DATA ---
const FLEET = [
    // --- AMBULANCES (RTW) ---
    { id: "RK-IN-71-1", type: "RTW", status_code: "2 (Available)", location: "Station North", battery_level: 98, crew_state: "Fresh", equipment: ["Standard", "Defibrillator", "Basic Life Support"] },
    { id: "RK-IN-71-2", type: "RTW", status_code: "8 (Finishing)", location: "Klinikum (Hospital)", time_until_free: "3 min", battery_level: 75, crew_state: "Fresh", equipment: ["Standard", "Defibrillator", "Basic Life Support"] },
    { id: "RK-IN-71-3", type: "RTW", status_code: "6 (Out of Service)", location: "Station South", battery_level: 10, crew_state: "N/A", equipment: ["Maintenance"] },
    { id: "RK-IN-71-4", type: "RTW", status_code: "2 (Available)", location: "Station North", battery_level: 92, crew_state: "Fresh", equipment: ["Standard", "Defibrillator", "Basic Life Support"] },
    { id: "RK-IN-72-1", type: "RTW (Electric)", status_code: "2 (Available)", location: "Station South", battery_level: 88, crew_state: "Fresh", equipment: ["Standard", "Defibrillator"], notes: "Low Range Warning" },
    { id: "RK-IN-72-2", type: "RTW", status_code: "2 (Available)", location: "Station South", battery_level: 100, crew_state: "Fresh", equipment: ["Standard", "Defibrillator", "Basic Life Support"] },
    { id: "RK-IN-73-1", type: "RTW", status_code: "2 (Available)", location: "Station East", battery_level: 95, crew_state: "Fresh", equipment: ["Standard", "Defibrillator", "Basic Life Support"] },
    { id: "RK-IN-74-1", type: "RTW", status_code: "1 (Radio Patrol)", location: "City Center", battery_level: 60, crew_state: "Fatigued", equipment: ["Standard", "Defibrillator", "Basic Life Support"] },

    // --- DOCTORS (NEF) ---
    { id: "NEF-IN-10", type: "NEF (Doctor)", status_code: "2 (Available)", location: "Station North", battery_level: 100, crew_state: "Fresh", equipment: ["Doctor", "Advanced Drugs", "Stroke Unit / Doctor"] },
    { id: "NEF-IN-20", type: "NEF (Doctor)", status_code: "4 (Busy)", location: "Highway A9", battery_level: 50, crew_state: "Fresh", equipment: ["Doctor", "Advanced Drugs"] },
    { id: "NEF-IN-30", type: "NEF (Doctor)", status_code: "2 (Available)", location: "Station South", battery_level: 90, crew_state: "Fresh", equipment: ["Doctor", "Advanced Drugs", "Trauma Kit"] },

    // --- FIRE (FIRE) ---
    { id: "FL-IN-1-40", type: "HLF (Fire)", status_code: "2 (Available)", location: "Fire Station Main", battery_level: 90, crew_state: "Fresh", equipment: ["Jaws of Life", "Water", "Hydraulic Rescue Tool"] },
    { id: "FL-IN-1-30", type: "DLK (Ladder)", status_code: "2 (Available)", location: "Fire Station Main", battery_level: 85, crew_state: "Fresh", equipment: ["30m Ladder", "Ladder Truck (DLK)"] },
    { id: "FL-IN-2-40", type: "HLF (Fire)", status_code: "2 (Available)", location: "Station East", battery_level: 94, crew_state: "Fresh", equipment: ["Jaws of Life", "Water", "Hydraulic Rescue Tool"] },

    // ---  SPECIAL ---
    { id: "CHR-32", type: "RTH (Heli)", status_code: "2 (Available)", location: "Airbase", battery_level: 100, crew_state: "Fresh", equipment: ["Air Rescue", "Trauma Kit", "Boat / Diver"] },
    { id: "dogo-32", type: "Dogs", status_code: "2 (Available)", location: "at home", battery_level: 100, crew_state: "Fresh", equipment: ["Dogs"] },

    // --- TRANSPORT (KTW) ---
    { id: "KTW-IN-04", type: "KTW", status_code: "2 (Available)", location: "Station East", battery_level: 40, crew_state: "Fresh", equipment: ["Basic", "Basic Life Support", "Pediatric Kit", "Psychological Support"] },
    { id: "KTW-IN-05", type: "KTW", status_code: "2 (Available)", location: "Station South", battery_level: 90, crew_state: "Fresh", equipment: ["Basic", "Basic Life Support"] },
    { id: "RK-IN-80-1", type: "RTW (Reserve)", status_code: "2 (Available)", location: "Station North", battery_level: 100, crew_state: "Unknown", equipment: ["Standard", "Defibrillator", "Basic Life Support"] }
];

const EMERGENCIES = [
    { id: "CMD-01", type: "Cardiac Arrest", location: "Viktualienmarkt, Ingolstadt", severity: "Critical", time_received: "10:42", data_quality: "High (GPS Exact)", required_equipment: "Defibrillator", description: "Male, 60s, collapsed. Bystander CPR in progress." },
    { id: "CMD-02", type: "Traffic Accident", location: "A9 Highway, Exit Ingolstadt-Nord", severity: "High", time_received: "10:45", data_quality: "Medium (Caller on highway)", required_equipment: "Hydraulic Rescue Tool", description: "Two vehicles, high speed impact. Potential trapped persons." },
    { id: "CMD-03", type: "Child High Fever", location: "Kindergarten Piusviertel", severity: "Medium", time_received: "10:55", data_quality: "High", required_equipment: "Pediatric Kit", description: "Child (4y) with febrile seizure. Conscious." },
    { id: "CMD-04", type: "Forest Injury", location: "Zucheringer Wald (Approx)", severity: "Medium", time_received: "11:02", data_quality: "Low (Cell Tower Triangulation +/- 500m)", required_equipment: "Off-road capability", description: "Hiker twisted ankle. Exact location unknown." },
    { id: "CMD-05", type: "Apartment Fire", location: "Harderstraße 12", severity: "Critical", time_received: "11:10", data_quality: "High", required_equipment: "Ladder Truck (DLK)", description: "Smoke visible from 3rd floor. Occupancy unknown." },
    { id: "CMD-06", type: "Intoxicated Person", location: "Hauptbahnhof Main Entrance", severity: "Low", time_received: "11:15", data_quality: "High", required_equipment: "Basic Life Support", description: "Person sleeping on bench, difficult to wake." },
    { id: "CMD-07", type: "Stroke Suspected", location: "Westpark Shopping Center", severity: "High", time_received: "11:20", data_quality: "High", required_equipment: "Stroke Unit / Doctor", description: "Female, 50s, slurred speech and facial droop." },
    { id: "CMD-08", type: "Industrial Accident", location: "Audi Factory Hall B", severity: "Critical", time_received: "11:30", data_quality: "High (Internal Hotline)", required_equipment: "Trauma Kit", description: "Crush injury involving machinery." },
    { id: "CMD-09", type: "Water Rescue", location: "Donau River, Konrad-Adenauer-Brücke", severity: "High", time_received: "11:35", data_quality: "Vague (Visual report from bridge)", required_equipment: "Boat / Diver", description: "Person seen drifting in current." },
    { id: "CMD-10", type: "Panic Attack", location: "University Campus", severity: "Low", time_received: "11:40", data_quality: "High", required_equipment: "Psychological Support", description: "Student hyperventilating, no physical injury." }
];

const LOCATIONS = {
    "Station North": [48.7850, 11.4350],
    "Station South": [48.7400, 11.4200],
    "Station East": [48.7650, 11.4650],
    "Fire Station Main": [48.7600, 11.4280],
    "Klinikum (Hospital)": [48.7630, 11.3950],
    "Airbase": [48.7180, 11.5360],
    "City Center": [48.7665, 11.4258],
    "Highway A9": [48.7800, 11.4600],
    "Viktualienmarkt, Ingolstadt": [48.7640, 11.4245],
    "A9 Highway, Exit Ingolstadt-Nord": [48.7900, 11.4550],
    "Kindergarten Piusviertel": [48.7750, 11.4100],
    "Zucheringer Wald (Approx)": [48.7200, 11.4000],
    "Harderstraße 12": [48.7690, 11.4220],
    "Hauptbahnhof Main Entrance": [48.7450, 11.4340],
    "Westpark Shopping Center": [48.7620, 11.3850],
    "Audi Factory Hall B": [48.7950, 11.4150],
    "Donau River, Konrad-Adenauer-Brücke": [48.7580, 11.4300],
    "University Campus": [48.7670, 11.4150]
};
// --- CONFIGURATION ---
const DISPATCH_WEIGHTS = {
    BASE_SCORE: 110,             // INCREASED: Start higher to allow for some distance without turning red
    PENALTY_PER_MIN_ETA: 1.5,    // REDUCED: Was 3. Distance is less punishing now.
    PENALTY_FATIGUE: 10,
    PENALTY_LOW_BATTERY: 40,
    PENALTY_WRONG_EQ: 60,
    PENALTY_FINISHING: 5
};
// --- INIT VARIABLES ---
let map;
let currentEmergencyMarker = null;
let currentRoutePolyline = null;
let currentEmergencyData = null;
let currentlySelectedUnitId = null;

// --- INITIALIZE UI ---
function initApp() {
    console.log("Initializing App...");

    // 1. Init Map
    map = L.map('map').setView([48.7665, 11.4258], 13);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap &copy; CARTO',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(map);

    // 2. Render Fleet Markers
    FLEET.forEach(vehicle => {
        const coords = LOCATIONS[vehicle.location];
        if (coords) {
            let color = '#3b82f6';
            if (vehicle.status_code.startsWith("6")) color = '#9ca3af';
            if (vehicle.status_code.startsWith("4")) color = '#f97316';
            if (vehicle.status_code.startsWith("8")) color = '#10b981';

            const icon = L.divIcon({
                className: 'custom-vehicle-marker',
                html: `<div style="background-color: ${color}; width: 12px; height: 12px; border-radius: 50%; box-shadow: 0 0 10px ${color}; border: 2px solid white;"></div>`,
                iconSize: [12, 12]
            });

            L.marker(coords, { icon: icon })
                .bindPopup(`<b>${vehicle.id}</b><br>${vehicle.type}<br>${vehicle.status_code}`)
                .addTo(map);
        }
    });

    // 3. Render Sidebar Fleet List
    renderFleetList();

    // 4. Attach Listeners
    document.getElementById('get-emergency-btn').onclick = triggerRandomEmergency;
    document.getElementById('close-modal').onclick = closeModal;
    document.getElementById('dispatch-btn').onclick = executeDispatch;

    // 5. Inject CSS Animations
    const styleSheet = document.createElement("style");
    styleSheet.innerText = `
    @keyframes pulse-red {
        0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); }
        70% { transform: scale(1); box-shadow: 0 0 0 20px rgba(239, 68, 68, 0); }
        100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
    }`;
    document.head.appendChild(styleSheet);
}
// --- GLOBAL SIMULATION STATE ---
let currentWorldState = {
    weather: "Dry/Clear",
    traffic: "Free Flowing",
    hospital: "Accepting All"
};

// --- BIASED WORLD GENERATOR (Good weather is more likely) ---
function generateWorldState() {
    // 70% chance of "Good" conditions
    const isGoodDay = Math.random() > 0.3;

    const weatherOpts = isGoodDay ? ["Dry/Clear"] : ["Raining", "Foggy"];
    const trafficOpts = isGoodDay ? ["Free Flowing", "Moderate"] : ["Heavy Traffic", "Gridlock"];
    const hospitalOpts = isGoodDay ? ["Accepting All"] : ["ER Busy", "Diversion Protocol"];

    currentWorldState = {
        weather: weatherOpts[Math.floor(Math.random() * weatherOpts.length)],
        traffic: trafficOpts[Math.floor(Math.random() * trafficOpts.length)],
        hospital: hospitalOpts[Math.floor(Math.random() * hospitalOpts.length)]
    };
}

// --- OPTIMIZED AI INSIGHTS ---
function getSimulatedAIInsights(unit, emergency, baseScore, worldState) {
    const context = {
        traffic: worldState.traffic,
        weather: worldState.weather,
        hospital: worldState.hospital,
        historyCount: Math.floor(Math.random() * 800) + 120
    };

    const positives = [];
    const negatives = [];

    // TRAFFIC LOGIC
    if (context.traffic.includes("Heavy") || context.traffic.includes("Gridlock")) {
        negatives.push({ label: "Live Traffic", value: context.traffic });
    } else {
        positives.push({ label: "Traffic Flow", value: "Optimal" });
    }

    // HOSPITAL LOGIC
    if (context.hospital.includes("Diversion")) {
        negatives.push({ label: "Hospital Status", value: context.hospital });
    } else {
        positives.push({ label: "Hospital", value: "Available" });
    }

    // UNIT SPECIFIC LOGIC
    if (unit.battery_level < 30) {
        negatives.push({ label: "Battery", value: "Low (" + unit.battery_level + "%)" });
    }
    // Bonus for matching specific equipment perfectly
    if (unit.equipment.includes(emergency.required_equipment)) {
        positives.push({ label: "Equipment", value: "Perfect Match" });
    }

    // --- SCORING MATH ---
    let confidence = baseScore;

    // Soften the penalties: Only subtract 4 per negative (was 6)
    if (negatives.length > 0) confidence -= (negatives.length * 4);
    // Increase the bonuses: Add 3 per positive (was 2)
    if (positives.length > 0) confidence += (positives.length * 3);

    // Add small variability
    confidence += (Math.random() * 4) - 2;

    // Cap strictly between 20% and 99%
    confidence = Math.min(Math.max(confidence, 20), 99.1);

    return {
        confidence: confidence.toFixed(1),
        context: context,
        positives: positives,
        negatives: negatives
    };
}
/**
 * SIMULATES THE "DIGITAL TWIN" INPUTS
 * Generates synthetic data for Traffic, Weather, Hospital Status, and History.
 */
function getSimulatedAIInsights(unit, emergency, baseScore, worldState) {
    // 1. Use the Consistent Global Context
    const context = {
        traffic: worldState.traffic,
        weather: worldState.weather,
        hospital: worldState.hospital,
        historyCount: Math.floor(Math.random() * 800) + 120
    };

    const positives = [];
    const negatives = [];

    // 2. Logic: Only flag Traffic if it hurts THIS unit
    // If traffic is heavy, units further away are hurt more
    if (context.traffic !== "Free Flowing") {
        negatives.push({ label: "Live Traffic", value: context.traffic });
    } else {
        positives.push({ label: "Traffic Flow", value: "Optimal" });
    }

    // 3. Logic: Hospital applies to everyone equally
    if (context.hospital.includes("Diversion")) {
        negatives.push({ label: "Hospital Status", value: context.hospital });
    }

    // 4. Logic: Unit Specifics
    if (unit.battery_level < 30) {
        negatives.push({ label: "Battery", value: "Low (" + unit.battery_level + "%)" });
    }

    // Calculate Confidence
    let confidence = baseScore;
    // Normalize: If baseScore is 80 (due to distance), make confidence ~80%
    // Add small noise
    confidence = Math.min(Math.max(confidence, 15), 99.1);

    return {
        confidence: confidence.toFixed(1),
        context: context,
        positives: positives,
        negatives: negatives
    };
}
// --- RENDER FUNCTIONS ---
function renderFleetList() {
    const list = document.getElementById('fleet-list');
    if (!list) return;
    list.innerHTML = '';

    FLEET.forEach(v => {
        const item = document.createElement('div');
        item.className = 'fleet-card';

        let color = '#3b82f6';
        if (v.status_code.startsWith("6")) color = '#9ca3af';
        if (v.status_code.startsWith("4")) color = '#f97316';
        if (v.status_code.startsWith("8")) color = '#10b981';

        const battColor = v.battery_level < 20 ? 'low' : '';

        item.innerHTML = `
            <div class="fc-left">
                <span class="fc-id">
                    <span style="width:8px; height:8px; border-radius:50%; background:${color}"></span>
                    ${v.id}
                </span>
                <span class="fc-type">${v.type}</span>
            </div>
            <div class="fc-right">
                <span class="fc-status" style="color:${color}">${v.status_code.split(' ')[0]}</span>
                <span class="fc-batt">
                    <div class="batt-icon"><div class="batt-fill ${battColor}" style="width:${v.battery_level}%"></div></div>
                    ${v.battery_level}%
                </span>
            </div>
        `;
        list.appendChild(item);
    });
}

// --- CORE LOGIC ---
function triggerRandomEmergency() {
    const idx = Math.floor(Math.random() * EMERGENCIES.length);
    const em = EMERGENCIES[idx];
    currentEmergencyData = em;

    // Reset Map View
    if (currentEmergencyMarker) map.removeLayer(currentEmergencyMarker);
    if (currentRoutePolyline) map.removeLayer(currentRoutePolyline);

    // Add Marker
    const coords = LOCATIONS[em.location] || [48.7665, 11.4258];
    const icon = L.divIcon({
        className: 'emergency-pulse',
        html: `<div style="width: 20px; height: 20px; background: rgba(239, 68, 68, 0.9); border-radius: 50%; box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); animation: pulse-red 1.5s infinite; border: 3px solid white;"></div>`,
        iconSize: [20, 20],
        iconAnchor: [10, 10]
    });

    currentEmergencyMarker = L.marker(coords, { icon: icon }).addTo(map);
    map.flyTo(coords, 14, { duration: 1.5 });

    // Open Modal
    setTimeout(() => {
        analyzeEmergency(em);
    }, 1200);
}

function analyzeEmergency(em) {
    // 1. Generate consistent world data for this specific emergency event
    generateWorldState();

    const candidates = FLEET.filter(v => !v.status_code.startsWith("6") && !v.status_code.startsWith("4"));

    const scored = candidates.map(v => {
        let breakdown = [];
        let score = 100; // Start at 100

        // --- A. ETA CALCULATION (Critical) ---
        let dist = calculateTravelTime(v.location, em.location);
        let wait = v.status_code.startsWith("8") ? 3 : 0;
        let totalEta = dist + wait;

        // HEAVY Penalty for time: -5 points per minute
        score -= (totalEta * 5);

        // --- B. HARD CONSTRAINTS (The "Sanity Check") ---
        // If equipment is missing, massive penalty (effectively disqualifies it from #1)
        const reqEq = em.required_equipment;
        const hasEq = v.equipment.some(e => e.includes(reqEq) || reqEq.includes(e));
        const isSpecial = v.type.includes("NEF") || v.type.includes("RTH");

        if (!hasEq && !isSpecial) {
            score -= 50;
            breakdown.push({ label: "Missing Equipment", value: "CRITICAL", type: 'crit' });
        }

        // --- C. AI CONTEXT INJECTION ---
        // Pass the GLOBAL world state, not random local state
        const aiStats = getSimulatedAIInsights(v, em, score, currentWorldState);

        // If the AI finds risks (e.g. Traffic is bad AND unit is far), penalize further
        if (aiStats.negatives.length > 0) score -= 10;

        return { ...v, score, eta: totalEta, breakdown, aiStats };
    });

    // Sort by Score
    scored.sort((a, b) => b.score - a.score);

    populateModal(em, scored[0], scored);
}
function getScoreColor(score) {
    if (score >= 90) return '#10b981'; // Emerald Green (Excellent)
    if (score >= 75) return '#eab308'; // Yellow (Good/Caution)
    if (score >= 50) return '#f97316'; // Orange (Suboptimal)
    return '#ef4444';                  // Red (Critical/Bad)
}
function populateModal(em, best, allScored) {
    document.getElementById('analysis-modal').classList.remove('hidden');

    // 1. Modal Header
    document.getElementById('modal-title').innerHTML = `
        <span class="badge ${em.severity === 'Critical' ? 'crit' : 'warn'}">${em.severity}</span>
        ${em.type} <span style="font-weight:400; color:#6b7280; font-size: 0.9rem;">#${em.id}</span>
    `;

    // 2. Define the Render Function for the Main View
    const renderUnitView = (unit) => {
        currentlySelectedUnitId = unit.id;
        const ai = unit.aiStats;
        const scoreVal = parseFloat(ai.confidence);
        const scoreColor = getScoreColor(scoreVal); // <--- NEW COLOR LOGIC

        const container = document.getElementById('rec-reasoning');

        container.innerHTML = `
            <div style="display: flex; gap: 15px; margin-bottom: 20px; align-items: stretch;">
                
                <div style="flex: 1;">
                    <h2 style="margin:0; font-size:1.6rem; line-height:1.2;">${unit.id}</h2>
                    <div style="color:#9ca3af; font-size:0.9rem;">${unit.type}</div>
                    <div style="margin-top:5px; font-size:0.8rem; color:#6b7280;">
                        <i class="fas fa-database"></i> Matched ${ai.context.historyCount} historic protocols
                    </div>
                </div>

                <div style="background: #374151; padding: 10px 20px; border-radius: 8px; text-align: center; min-width: 110px; border: 1px solid #4b5563;">
                    <div style="font-size: 2rem; font-weight: 800; color: white; line-height: 1;">${unit.eta}<span style="font-size:1rem; font-weight:400;"> min</span></div>
                    <div style="font-size: 0.7rem; color: #d1d5db; text-transform: uppercase; letter-spacing: 1px; margin-top: 5px;">Est. Arrival</div>
                </div>

                <div style="background: #374151; padding: 10px 20px; border-radius: 8px; text-align: center; min-width: 110px; border: 1px solid #4b5563;">
                    <div style="font-size: 2rem; font-weight: 800; color: ${scoreColor}; line-height: 1;">
                        ${Math.floor(scoreVal)}%
                    </div>
                    <div style="font-size: 0.7rem; color: #d1d5db; text-transform: uppercase; letter-spacing: 1px; margin-top: 5px;">Match Confidence</div>
                </div>

            </div>

            <div class="human-centric-grid">
                
                <div class="hc-card">
                    <h4>Data Synthesis (Rationale)</h4> <div class="hc-content">
                        ${ai.negatives.length > 0 ? `
                            <div style="margin-bottom:8px; border-bottom:1px solid #374151; padding-bottom:8px;">
                                <strong style="color:#ef4444; font-size:0.8rem;">⚠️ OPERATIONAL RISKS:</strong>
                                ${ai.negatives.map(f => `
                                    <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-top:2px;">
                                        <span>${f.label}</span>
                                        <span style="color:#fca5a5">${f.value}</span>
                                    </div>
                                `).join('')}
                            </div>
                        ` : ''}

                        <div>
                             <strong style="color:#10b981; font-size:0.8rem;">✓ FIT FACTORS:</strong>
                             ${ai.positives.slice(0, 3).map(f => `
                                <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-top:2px;">
                                    <span>${f.label}</span>
                                    <span style="color:#6ee7b7">${f.value}</span>
                                </div>
                            `).join('')}
                        </div>
                        
                        <div style="margin-top:10px; font-size:0.7rem; color:#6b7280; font-style:italic;">
                            Sources: Live Traffic API, Hospital IoT, Weather Service.
                        </div>
                    </div>
                </div>

                <div class="hc-card">
                    <h4>Augmentation (Auto-Tasks)</h4>
                    <div class="hc-content">
                        <ul style="padding-left:15px; margin:0; font-size:0.85rem; color:#d1d5db;">
                            <li>Route calculated via A9 (Avoids ${ai.context.traffic})</li>
                            <li>Hospital (${ai.context.hospital}) notification drafted</li>
                            <li>Equipment Checklist: <span style="color:#10b981">Verified</span></li>
                        </ul>
                    </div>
                </div>

                <div class="hc-card ${ai.negatives.some(n => n.label === "Critical Battery" || n.label === "Missing Equipment") ? 'violation-warning' : ''}">
                    <h4>System Monitoring</h4>
                    <div class="hc-content">
                        ${ai.negatives.some(n => n.label === "Critical Battery")
                ? `<span style="color:#ef4444"><b>CRITICAL ALERT:</b> Battery levels insufficient for return trip.</span>`
                : `Real-time oversight active. No critical thresholds breached.`}
                    </div>
                </div>

                <div class="hc-card">
                    <h4>Command Authority</h4>
                    <div class="hc-content">
                        <div style="margin-bottom:5px; font-size:0.85rem;">Operator retains final veto right.</div>
                        <button class="override-btn" onclick="alert('Manual Protocol Override: Logging action for audit.')">
                            Switch Protocol (Quereinstieg)
                        </button>
                    </div>
                </div>
            </div>
        `;
    };

    // 3. Render Alternatives List (Sidebar)
    const altList = document.getElementById('alternatives-list');
    altList.innerHTML = '';

    allScored.slice(0, 5).forEach(unit => {
        const div = document.createElement('div');
        const isBest = unit.id === best.id;

        // Color logic for sidebar items
        const unitScore = parseFloat(unit.aiStats.confidence);
        const unitColor = getScoreColor(unitScore);

        div.className = `alt-unit-card ${isBest ? 'selected' : ''}`;
        div.style.borderLeft = isBest ? `3px solid ${unitColor}` : '3px solid transparent';

        div.innerHTML = `
            <div style="display:flex; justify-content:space-between;">
                <b>${unit.id}</b>
                <span style="color:${unitColor}; font-weight:bold;">
                    ${Math.round(unitScore)}%
                </span>
            </div>
            <div style="font-size:0.75em; color:#9ca3af; margin-top:2px;">
                ${unit.eta} min • ${unit.status_code.split(' ')[0]}
            </div>
        `;

        div.onclick = () => {
            document.querySelectorAll('.alt-unit-card').forEach(c => {
                c.classList.remove('selected');
                c.style.borderLeft = '3px solid transparent';
            });
            div.classList.add('selected');
            div.style.borderLeft = `3px solid white`; // Highlight selection white
            renderUnitView(unit);
        };
        altList.appendChild(div);
    });

    if (best) renderUnitView(best);
}

function executeDispatch() {
    if (!currentlySelectedUnitId || !currentEmergencyData) return;

    closeModal();

    const unit = FLEET.find(u => u.id === currentlySelectedUnitId);
    const uLoc = LOCATIONS[unit.location];
    const eLoc = LOCATIONS[currentEmergencyData.location] || [48.7665, 11.4258];

    if (uLoc && eLoc) {
        currentRoutePolyline = L.polyline([uLoc, eLoc], {
            color: '#3b82f6', weight: 4, dashArray: '10, 10', opacity: 0.8
        }).addTo(map);

        map.flyToBounds(L.latLngBounds([uLoc, eLoc]), { padding: [100, 100], duration: 1.5 });
    }
}

function closeModal() {
    document.getElementById('analysis-modal').classList.add('hidden');
}

function calculateTravelTime(locA, locB) {
    if (!LOCATIONS[locA] || !LOCATIONS[locB]) return 999;
    const dist = L.latLng(LOCATIONS[locA]).distanceTo(LOCATIONS[locB]);
    return Math.round(dist / 500);
}

// Start
initApp();
