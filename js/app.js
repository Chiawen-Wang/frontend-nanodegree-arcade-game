// Enemies our player must avoid
var Enemy = function(speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
   // this.num = num;
    //this.count = 0;
    this.x = 0;
    this.y = Math.floor(Math.random()*200) + 50;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
//console.log(dt);
        this.x = this.x + this.speed*dt;

        if(this.x >= 505){
            this.x = 0;
        }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var player = function(){
    this.speed = 100;
    this.x = 200;
    this.y = 400;
    this.left = 0;
    this.right = 0;
    this.up = 0;
    this.down = 0;
    this.sprite = 'images/char-boy.png';

};
player.prototype.update = function(){
    //console.log(dt);
 if(this.left){
        this.left = 0;
        this.x = this.x - this.speed*0.5;
        console.log(this.x);
        if(this.x <= 0){
            this.x = 200;
        }
    }
    if(this.right){
        this.right = 0;
        this.x = this.x + this.speed*0.5;
        if(this.x > 505){
            this.x = 200;
        }
    }
    if(this.up){
        this.up = 0;
        this.y = this.y - this.speed*0.5;
        if(this.y <= 0){
            this.y = 400;
        }
    }
    if(this.down){
        this.down = 0;
        this.y = this.y + this.speed*0.5;
        if(this.y > 400){
            this.y = 400;
        }
    }

};
player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

player.prototype.handleInput = function(direc) {
    switch (direc) {
        case "left":
            this.left = 1;
            console.log("left");
            break;
        case "right":
            this.right = 1;
            console.log("r");
            break;
        case "up":
            this.up = 1;
            console.log("up");
            break;
        case "down":
            this.down = 1;
            console.log("d");
            break;
        default:
            // statements_def
            break;
    }


}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
allEnemies = [new Enemy(100),new Enemy(10), new Enemy(360), new Enemy(40)];
player = new player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    //console.log(typeof allowedKeys[e.keyCode]);
    player.handleInput(allowedKeys[e.keyCode]);
});
