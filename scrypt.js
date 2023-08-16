
/** Amount of coins left */
var coins = 10000;
var varForInventoryItem1 = "Item-1";
function showItems(){
    document.getElementById('items').innerHTML=/*HTML*/`
    <div id="item1" onclick='placeItem1InInventory()'class='item1'>Item1</div>
    <div id="item2" onclick='placeItem2InInventory()' class='item2'>Item2</div>

     `;
}
/*la oss prøve å trykke på inventory etter item 1 */
function showInventory(){
    alert('Looting bag Opened')
    document.getElementById("inventory").innerHTML=/*HTML*/`
    <div id="inventoryItem1" class='invenitem1'>${varForInventoryItem1}</div>
     
    <div class='invenitem2'></div>
    <div id="inventoryItem2" class='invenitem2'>invenitem2</div>
    
    <div id="Coins" class='money' onclick='showAmount()'>Coins:${coins}</div>
    `;
    document.getElementById('inventoryItem1').innerHTML == varForInventoryItem1;
    console.log('showInventory ran');
}



/** */
function placeItem1InInventory() {
    document.getElementById('item1').innerHTML = '';
    varForInventoryItem1 = 'item 1 is in inventory';
   
}

/** */
function placeItem2InInventory() {
    document.getElementById('item2').innerHTML = '';
    document.getElementById('inventoryItem2').innerHTML = 'Nå vises item2 i inventory';
    
}

function add_brus1()
{
    coins =- 500;
}


