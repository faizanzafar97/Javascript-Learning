// Prototype Inheritance Demo
// Objects can inherit methods and properties from other objects

// Base object (prototype)
const coffee = {
    color: "dark",
    type: "coffee",
    drink: function() {
        return `Drinking ${this.type}... Enjoy your ${this.color} colored beverage! ☕`;
    },
    describe: function() {
        return `${this.type} - Color: ${this.color}, Taste: ${this.taste || 'classic'}`;
    }
};

// Create derived objects using Object.create()
const cappuccino = Object.create(coffee);
cappuccino.type = "Cappuccino";
cappuccino.taste = "bitter";
cappuccino.froth = "thick";

const latte = Object.create(coffee);
latte.type = "Latte";
latte.taste = "mild";
latte.milk = "lots of steamed milk";

const espresso = Object.create(coffee);
espresso.type = "Espresso";
espresso.taste = "strong";
espresso.size = "small";

// Store all coffee types
const coffeeTypes = [cappuccino, latte, espresso];

// Display functions for UI
function demonstrateInheritance() {
    const output = document.getElementById('output');
    let html = '<h3>🍵 Creating Cappuccino via Prototype Inheritance</h3>';
    
    html += '<strong>1. Original Coffee Object:</strong>\n';
    html += `   color: ${coffee.color}\n`;
    html += `   type: ${coffee.type}\n\n`;
    
    html += '<strong>2. Creating Cappuccino:</strong>\n';
    html += '   const cappuccino = Object.create(coffee)\n';
    html += '   cappuccino.type = "Cappuccino"\n';
    html += '   cappuccino.taste = "bitter"\n\n';
    
    html += '<strong>3. Inherited Method Called:</strong>\n';
    html += `   ${cappuccino.drink()}\n\n`;
    
    html += '<strong>4. Cappuccino Properties:</strong>\n';
    html += `   ${cappuccino.describe()}\n`;
    html += `   Froth: ${cappuccino.froth}\n\n`;
    
    html += '<strong>5. Prototype Chain:</strong>\n';
    html += '   cappuccino → coffee → Object.prototype → null';
    
    output.innerHTML = `<pre>${html}</pre>`;
}

function showAllCoffees() {
    const output = document.getElementById('output');
    let html = '<h3>📋 All Coffee Types (Created via Prototype Inheritance)</h3>\n\n';
    
    coffeeTypes.forEach((coffeeItem, index) => {
        html += `<strong>Coffee ${index + 1}: ${coffeeItem.type}</strong>\n`;
        html += `   ${coffeeItem.describe()}\n`;
        html += `   ${coffeeItem.drink()}\n`;
        
        // Show additional properties
        if (coffeeItem.froth) html += `   Special: ${coffeeItem.froth} froth\n`;
        if (coffeeItem.milk) html += `   Special: ${coffeeItem.milk}\n`;
        if (coffeeItem.size) html += `   Special: ${coffeeItem.size} size\n`;
        
        html += '\n';
    });
    
    html += '<strong>🔍 Prototype Check:</strong>\n';
    html += `Is cappuccino inheriting from coffee? ${coffee.isPrototypeOf(cappuccino)}\n`;
    html += `Is coffee the prototype of latte? ${coffee.isPrototypeOf(latte)}`;
    
    output.innerHTML = `<pre>${html}</pre>`;
    
    // Console output for developers
    console.log('=== All Coffee Types ===');
    coffeeTypes.forEach(coffeeItem => {
        console.log(coffeeItem.describe());
    });
}

function clearOutput() {
    const output = document.getElementById('output');
    output.innerHTML = '<p style="color: #718096; text-align: center;">Output cleared. Click a button to see prototype inheritance in action!</p>';
}

// Initial console demonstration
console.log('=== Prototype Inheritance Demo ===');
console.log('Base Coffee Object:', coffee);
console.log('Cappuccino (inherits from coffee):', cappuccino);
console.log('Cappuccino can drink:', cappuccino.drink());