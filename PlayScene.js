import { updateRectangle, createRectangle } from "./rectangle.js";


export class PlayScene extends Phaser.Scene {
  constructor() {
    super("PlayScene");
    this.player;
    this.keys;
  }

  preload() {
    console.log(this);
    this.load.image("background", "background.jpg");
    //this.load.image("originalbackground", "originalbackground.jpg");
    // this.load.image("cat", "cat.png");
    this.load.image("catb", "catb.png");
    this.load.image("owlyte", "owlyte.png");
    this.load.image("background2", "background2.jpg");
    this.load.image("1", "1.png");
    this.load.image("2", "2.png");
    this.load.image("3", "3.png");
    this.load.image("4", "4.png");
    this.load.image("5", "5.png");
    this.load.image("6", "6.png");
    this.load.image("7", "7.png");
    this.load.image("8", "8.png");
    this.load.image("9", "9.png");
    this.load.image("10", "10.png");
    this.load.image("11", "11.png");
    this.load.image("12", "12.png");
    this.load.image("root", "root.png");
    console.log('')
  }

  create() {
    createRectangle(this);
    
    this.add.image(0, 0, "background").setOrigin(0, 0);
    //this.add.image(0, 0, "originalbackground").setOrigin(0, 0);
   // this.add.text(100,100,'this is testing to see if the font works', {fontFamily: 'Source Code Pro', fontSize: '40px'})
    //this.add.text(100,200,'this is testing to see if the font works', {fontFamily: 'Bebas Neue', fontSize: '40px'})
   // this.add.text(100,300,'this is testing to see if the font works', {fontFamily: 'Gloock', fontSize: '40px'})

   //this.add.image(0, 0, "background2").setOrigin(0, 0);

    this.player = this.physics.add.sprite(50, 440, "catb")
    .setScale(0.3)
    .setSize(150,80)
    .setOffset(140,350)
    .setCollideWorldBounds(true)
    .setOrigin(.5,1)

    this.root = this.physics.add.sprite(830, 500, "root")
    .setCircle(90,90)
    .setScale(0.17)
    .setOffset(10,100)
    .setBounce(0.8, 0.8)
    .setCollideWorldBounds(true)
    .setAcceleration(0)
    .setDrag(650,650)
    .setFriction(10,10)
    

    const owlyte = this.player2 = this.physics.add.sprite(800, 300, 'owlyte').setInteractive()
    .setCircle(60,80)
    .setScale(0.35)
    //.setSize(100,100)
    .setOffset(120,230)
    .setBounce(0.1, 0.1)
    //.setImmovable()
    .setCollideWorldBounds(true);

  

    /*
    this.layer10 = this.add.sprite(637.5, 423, "10")
    .setDepth(20)

    this.layer = this.add.sprite(637.5, 423, "9")
    .setDepth(18)

    this.layer = this.add.sprite(637.5, 423, "8")
    .setDepth(16)

    this.layer = this.add.sprite(637.5, 423, "7")
    .setDepth(14)

    this.layer = this.add.sprite(637.5, 423, "6")
    .setDepth(12)

    this.layer = this.add.sprite(637.5, 423, "5")
    .setDepth(10)

    this.layer = this.add.sprite(637.5, 423, "4")
    .setDepth(8)

    this.layer = this.add.sprite(637.5, 423, "3")
    .setDepth(6)

    this.layer = this.add.sprite(637.5, 423, "2")
    .setDepth(4)

    this.layer = this.add.sprite(637.5, 423, "1")
    .setDepth(2)
    //*/

    
    //*
    this.layer = [];
    this.layer.push(this.add.sprite(692, 681, "12"))
    this.layer.push(this.add.sprite(675, 642, "11"))
    this.layer.push(this.add.sprite(740, 645, "10"))
    this.layer.push(this.add.sprite(625, 613, "9"))
    this.layer.push(this.add.sprite(330, 580, "8"))
    this.layer.push(this.add.sprite(1007, 515, "7"))
    this.layer.push(this.add.sprite(75, 480, "6"))
    this.layer.push(this.add.sprite(515, 424, "5"))
    this.layer.push(this.add.sprite(878, 394, "4").setOrigin(0.5,.5))
    this.layer.push(this.add.sprite(589, 389, "3"))
    //this.layer.push(this.add.sprite(1076, 343, "2"))
    this.layer.push(this.add.sprite(1069, 278, "1"))
    console.log(this.layer)
    

    this.layer.forEach(sprite => {
      sprite.setOrigin(.5,1)
      sprite.setDepth(sprite.y)
      //sprite.setTint(0xff0000)
      //sprite.setAlpha(0.5)
    })
    //*/



    
    //let dialogue1=false
    {
    
    /*sprite.on('pointerdown', function (pointer)
    {
      console.log('true');
      let dialogue1=true
    }
    );*/

  }

    const walls = [
      //[0, 0, 1275, 209,0x000000, 0], // top
      //[747, 203, 392, 24,0x000000, 0], // top rock
      [659, 0, 518, 207, 0x000000, 0],
      [498, 0, 161, 181, 0x000000, 0],
      [51, 20, 448, 187, 0x000000, 0],
      [2, 45, 48, 134, 0x000000, 0],
      [1178, 6, 94, 175, 0x000000, 0],
      [750, 155, 167, 74, 0x000000, 0],
      [0, 589, 148, 158, 0x000000, 0], // bottom
      [149, 623, 217, 126, 0x000000, 0], // bottom
      [474, 644, 141, 99, 0x000000, 0], // bottom
      [366, 662, 103, 74, 0x000000, 0], // bottom
      [621, 696, 140, 46, 0x000000, 0], // bottom
      [763, 677, 128, 63, 0x000000, 0], // bottom
      [887, 624, 201, 121, 0x000000, 0], // bottom
      [1084, 610, 133, 135, 0x000000, 0], // bottom
      
      [335, 321, 65, 21, 0x000000, 0],
      
     
      // [80,670,160,180,0x000000, 0],
      // [270,690,220,150,0x000000, 0],
      // [420,710,120,110,0x000000, 0],
      // [547,700,165,150,0x000000, 0],
      // [690,745,150,120,0x000000, 0],
      // [820,710,140,100,0x000000, 0],
      // [980,680,215,140,0x000000, 0],
      // [1150,670,150,150,0x000000, 0],
      // [1245,645,60,200,0x000000, 0],
      // [150,70,220,210,0x000000, 0],
      // [300,60,80,210,0x000000, 0],
      // [425,70,170,210,0x000000, 0],
      // [560,50,170,210,0x000000, 0],
      // [700,80,100,210,0x000000, 0],
      // [830,110,160,210,0x000000, 0],
      // [950,90,60,210,0x000000, 0],
      // [1080,100,190,210,0x000000, 0],
      // [1220,60,100,210,0x000000, 0],

      [105, 336, 220, 32,0x000000, 0], // left large rock
      [495, 398, 125, 18,0x000000, 0], // left large rock
      [312, 536, 100, 13,0x000000, 0],
      //[305, 546, 114, 13,0x000000, 0],
      [868, 355, 144, 20, 0x000000, 0],
      [25, 355, 61, 15, 0x000000, 0],
      [1038, 478, 220, 25, 0x000000, 0], //castle
      [651, 663, 83, 15, 0x000000, 0],



      //[130, 525, 150, 5,0x000000, 0], 3flower
      
    ]

    walls.forEach(wall => {
      this.createWall(...wall)
    })



    const roots = [

      [780, 459, 20, 20, 0.17],
      [795, 469, 30, 0, 0.17],
      [800, 485, 20, 20, 0.17],


    ]

    roots.forEach(root => {
      this.createRoot(...root)
    })

    /*
    this.createWall(330,590,200,115,0x000000, 0)
    this.createWall(110,570,230,290,0x000000, 0)
    this.createWall(590,590,145,115,0x000000, 0)
    this.createWall(85,360,150,140,0x000000, 0)
    this.createWall(340,280,100,100,0x000000, 0)
    this.createWall(760,590,200,240,0x000000, 0)
    this.createWall(520,275,270,205,0x000000, 0)
    this.createWall(230,490,2,100,0x000000, 0)
    */
    
    /*
    this.wall=this.add.rectangle(330,590,200,115,0x000000, 0)
    this.wall2=this.add.rectangle(110,570,230,290,0x000000, 0)
    this.wall3=this.add.rectangle(590,590,145,115,0x000000, 0)
    this.wall4=this.add.rectangle(85,360,150,140,0x000000, 0)
    this.wall5=this.add.rectangle(340,280,100,100,0x000000, 0)
    this.wall6=this.add.rectangle(760,590,200,240,0x000000, 0)
    this.wall7=this.add.rectangle(520,275,270,205,0x000000, 0)
    this.wall8=this.add.rectangle(230,490,2,100,0x000000, 0)
    
    this.w=this.physics.add.existing(this.wall)
    this.w2=this.physics.add.existing(this.wall2)
    this.w3=this.physics.add.existing(this.wall3)
    this.w4=this.physics.add.existing(this.wall4)
    this.w5=this.physics.add.existing(this.wall5)
    this.w6=this.physics.add.existing(this.wall6)
    this.w7=this.physics.add.existing(this.wall7)
    this.w8=this.physics.add.existing(this.wall8)
    this.w.body.setImmovable(true)
    this.w2.body.setImmovable(true)
    this.w3.body.setImmovable(true)
    this.w4.body.setImmovable(true)
    this.w5.body.setImmovable(true)
    this.w6.body.setImmovable(true)
    this.w7.body.setImmovable(true)
    this.w8.body.setImmovable(true)
    this.physics.add.collider(this.player, this.w)
    this.physics.add.collider(this.player, this.w2)
    this.physics.add.collider(this.player, this.w3)
    this.physics.add.collider(this.player, this.w4)
    this.physics.add.collider(this.player, this.w5)
    this.physics.add.collider(this.player, this.w6)
    this.physics.add.collider(this.player, this.w7)
    this.physics.add.collider(this.player, this.w8)
    */
    this.physics.add.collider(this.player, this.player2)
    this.physics.add.collider(this.player, this.root)
    this.physics.add.collider(this.root, this.player2)

    this.keys = this.input.keyboard.addKeys("LEFT,RIGHT,UP,DOWN,W,A,S,D");
  }



  update() {
    /*
    console.log(this.player.body.y, this.player.depth)
    if (this.player.body.y < 320) {
      this.player.setDepth(5)
    }
    else if (this.player.body.y < 400) {
      this.player.setDepth(15)
    }
    else if (this.player.body.y < 510) {
      this.player.setDepth(25)
    }
    else if (this.player.body.y < 680) {
      this.player.setDepth(35)
    }
    */

    this.player.setDepth(this.player.body.y +40)
    this.player2.setDepth(this.player2.body.y +50)
    this.root.setDepth(this.root.body.y +30)

    console.log(this.player.depth, this.layer[0].depth)
  

    if (this.keys.LEFT.isDown && this.keys.RIGHT.isDown) {
      this.player.body.velocity.x = 0;
      //player.x -= 8;
    } else if (this.keys.LEFT.isDown) {
      this.player.body.velocity.x = -300;
      //player.x -= 8;
    } else if (this.keys.RIGHT.isDown) {
      this.player.body.velocity.x = 300;
      //player.x += 8;
    } else {
      this.player.body.velocity.x = 0;
    }

    if (this.keys.UP.isDown && this.keys.DOWN.isDown) {
      this.player.body.velocity.y = 0;
      //player.x -= 8;
    } else if (this.keys.UP.isDown) {
      this.player.body.velocity.y = -300;
      //player.y -= 8;
    } else if (this.keys.DOWN.isDown) {
      this.player.body.velocity.y = 300;
      //player.y += 8;
    } else {
      this.player.body.velocity.y = 0;
    }
    this.player2.body.velocity.x *=.95
    this.player2.body.velocity.y *=.95

    updateRectangle(this);
  }

  if (dialogue1=true)
  {this.add.text(400, 100, "hello")} 
  if (dialogue1=false) {}

  createWall(x,y,width,height, fillColor, fillAlpha) {
    const wall = this.physics.add.existing(
      this.add.rectangle(x,y,width,height, fillColor, fillAlpha).setOrigin(0,0)
    );
    wall.body.setImmovable(true)
    
    this.physics.add.collider(wall, this.player)
    this.physics.add.collider(wall, this.player2)
    this.physics.add.collider(wall, this.root)
  }

  createRoot(x,y,width,height) {
    const root = this.physics.add.existing(
      this.physics.add.sprite(x,y,width,height).setOrigin(0,0)
      .setCircle(90,90)
      .setScale(0.17)
      .setOffset(10,100)
      .setBounce(0.8, 0.8)
      .setCollideWorldBounds(true)
      .setAcceleration(0)
      .setDrag(650,650)
      .setFriction(10,10)
      .setTexture("root")
      .setDepth(this.root.body.y +30)
      
    );
    //root.body.setImmovable(true)
    
    this.physics.add.collider(root, this.player)
    this.physics.add.collider(root, this.player2)
    this.physics.add.collider(root, this.root)
    this.physics.add.collider(root, this.wall)
    
    //this.add.value = Phaser.Math.Between(0.15,0.18);
    
  }


}

let scale = Phaser.Math.Between(0.15, 0.18);