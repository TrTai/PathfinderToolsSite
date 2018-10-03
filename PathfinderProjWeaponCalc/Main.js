function Test(){
    alert("Test!")
}
//populate Weapon Slection list
function WeaponPopulate(){
    var WeaponList = ""
    
}
//Populates Enhancement list with special abilities available for melee weapons. move lists from array to DB later?
function Populate(){ 
    var enchant = ""
    const Plus1Ability = ["Allying", "Bane", "Benevolent", "Called", "Conductive", "Corrosive", "Countering", "Courageous", "Cruel", "Cunning", "Deadly", "Defending", "Dispelling", "Flaming", "Frost", "Furious", "Ghost Touch", "Grayflame", "Grounding", "Guardian", "Heartseeker", "Huntsman", "Jurist", "Keen", "Ki focus", "Limning", "Menacing", "Merciful", "Mighty Cleaving", "Mimetic", "Neutralizing", "Ominous", "Planar", "Quenching", "Seaborne", "Shock", "Spell Storing", "Thawing", "Throwing", "Thundering", "Unaligned", "Valiant", "Vicious"];
    const Plus2Ability = ["Advancing", "Anarchic", "Anchoring", "Axiomatic", "Corrosive burst", "Defiant", "Dispelling burst", "Disruption", "Flaming burst", "Furyborn", "Glorious", "Holy", "Icy Burst", "Igniting", "Impact", "Invigorating", "Ki intensifying", "Lifesurge", "Negating", "Phase locking", "Planestriking", "Shocking burst", "Stalking", "Unholy", "Wounding"];
    const Plus3Ability = ["Nullifying", "Repositioning", "Speed", "Spell Stealing"];
    const Plus4Ability = ["Brilliant energy", "Dancing"];
    enchant += '<option value="'+Plus1Ability[0]+'" /> +1 Enchantments';
    for (var i = 1; i < Plus1Ability.length; i++ ){
        enchant += '<option value="'+Plus1Ability[i]+'" />';
    }
    enchant += '<option value="'+Plus2Ability[0]+'" /> +2 Enchantments';
    for (var i = 1; i < Plus2Ability.length; i++ ){
        enchant += '<option value="'+Plus2Ability[i]+'" />';
    }
    enchant += '<option value="'+Plus3Ability[0]+'" /> +3 Enchantments';
    for (var i = 1; i < Plus3Ability.length; i++ ){
        enchant += '<option value="'+Plus3Ability[i]+'" />';
    }
    enchant += '<option value="'+Plus4Ability[0]+'" /> +4 Enchantments';
    for (var i = 1; i < Plus4Ability.length; i++ ){
        enchant += '<option value="'+Plus4Ability[i]+'" />';
    }
    enchant += '<option value="Vorpal" /> +5 Enchantments';
    
    document.getElementById("enhancements").innerHTML = enchant;
    
}
//adds 1st additional enchantment box on button click shows button for box 2
function addEnchantBox1() { 
    document.getElementById("EnhancementAddA").style.display ='inline';
    document.getElementById("enhancement+A").style.display = 'none';
    document.getElementById("enhancement+B").style.display = 'inline';
}
//add 2nd additional enchantment box on relevant button click
function addEnchantBox2() {
    document.getElementById("EnhancementAddB").style.display ='inline';
    document.getElementById("enhancement+B").style.display = 'none';
}
//Calculates cost based off selected form inputs upon button click, alerts if total enhancement value is > 10
function Calculation() {
    let NumEnhance = parseInt(document.getElementById("numericEnhancement").value);
    let EnhancementA = document.getElementById("Enhancement1").value;
    let EnhancementC = document.getElementById("Enhancement3").value;
    let EnhancementB = document.getElementById("Enhancement2").value;
    let EnhancementCounter = NumEnhance;
    var Plus1Ability = ["Allying", "Bane", "Benevolent", "Called", "Conductive", "Corrosive", "Countering", "Courageous", "Cruel", "Cunning", "Deadly", "Defending", "Dispelling", "Flaming", "Frost", "Furious", "Ghost Touch", "Grayflame", "Grounding", "Guardian", "Heartseeker", "Huntsman", "Jurist", "Keen", "Ki focus", "Limning", "Menacing", "Merciful", "Mighty Cleaving", "Mimetic", "Neutralizing", "Ominous", "Planar", "Quenching", "Seaborne", "Shock", "Spell Storing", "Thawing", "Throwing", "Thundering", "Unaligned", "Valiant", "Vicious"];
    var Plus2Ability = ["Advancing", "Anarchic", "Anchoring", "Axiomatic", "Corrosive burst", "Defiant", "Dispelling burst", "Disruption", "Flaming burst", "Furyborn", "Glorious", "Holy", "Icy Burst", "Igniting", "Impact", "Invigorating", "Ki intensifying", "Lifesurge", "Negating", "Phase locking", "Planestriking", "Shocking burst", "Stalking", "Unholy", "Wounding"];
    var Plus3Ability = ["Nullifying", "Repositioning", "Speed", "Spell Stealing"];
    var Plus4Ability = ["Brilliant energy", "Dancing"];
    var Vorpal = "Vorpal";
    if (EnhancementA == ""){
        EnhancementCounter = EnhancementCounter;
    } else if (Plus1Ability.includes(EnhancementA)) {
        EnhancementCounter += 1;
    } else if (Plus2Ability.includes(EnhancementA)) {
        EnhancementCounter += 2;
    } else if (Plus3Ability.includes(EnhancementA)) {
        EnhancementCounter += 3;
    } else if (Plus4Ability.includes(EnhancementA)) {
        EnhancementCounter += 4;
    } else if (EnhancementA == Vorpal) {
        EnhancementCounter += 5; 
    } else {
        EnhancementCounter = EnhancementCounter;
    }
    if (EnhancementB == ""){
        EnhancementCounter = EnhancementCounter;
    } else if (Plus1Ability.includes(EnhancementB)) {
        EnhancementCounter += 1;
    } else if (Plus2Ability.includes(EnhancementB)) {
        EnhancementCounter += 2;
    } else if (Plus3Ability.includes(EnhancementB)) {
        EnhancementCounter += 3;
    } else if (Plus4Ability.includes(EnhancementB)) {
        EnhancementCounter += 4;
    } else if (EnhancementB == Vorpal) {
        EnhancementCounter += 5; 
    } else {
        EnhancementCounter = EnhancementCounter;
    }
    if (EnhancementC == ""){
        EnhancementCounter = EnhancementCounter;
    } else if (Plus1Ability.includes(EnhancementC)) {
        EnhancementCounter += 1;
    } else if (Plus2Ability.includes(EnhancementC)) {
        EnhancementCounter += 2;
    } else if (Plus3Ability.includes(EnhancementC)) {
        EnhancementCounter += 3;
    } else if (Plus4Ability.includes(EnhancementC)) {
        EnhancementCounter += 4;
    } else if (EnhancementC == Vorpal) {
        EnhancementCounter += 5; 
    } else {
        EnhancementCounter = EnhancementCounter;
    }
   
    var PriceOutput = (EnhancementCounter)**2 * 2000 + 300;
    if (document.getElementById("Impervious").checked == true){
        PriceOutput += 3000;
    } else {
        PriceOutput = PriceOutput;
    } 
    if (document.getElementById("Glamered").checked == true){
        PriceOutput += 4000;
    } else {
        PriceOutput = PriceOutput;
    }
    if (document.getElementById("Transformative").checked == true){
        PriceOutput += 10000;
    } else {
        PriceOutput = PriceOutput;
    }
    if (document.getElementById("Dueling").checked == true){
        PriceOutput += 14000;
    } 
    else {
        PriceOutput = PriceOutput;
    }
    if(EnhancementCounter > 10){
        alert("Total Enhancment must be 10 or less!");
    } else{
    document.getElementById("FinalPrice").innerHTML = PriceOutput;
    }
}