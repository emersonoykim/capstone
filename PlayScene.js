export class PlayScene extends Phaser.Scene {
  constructor() {
    super("PlayScene");
    this.player;
    this.keys;
  }

  preload() {
    console.log(this);
    this.load.image("background", "background.jpg");
    this.load.image("cat", "cat.png");
  }

  create() {
    this.add.image(1, 0, "background").setOrigin(0, 0);
   // this.add.text(100,100,'this is testing to see if the font works', {fontFamily: 'Source Code Pro', fontSize: '40px'})
    //this.add.text(100,200,'this is testing to see if the font works', {fontFamily: 'Bebas Neue', fontSize: '40px'})
   // this.add.text(100,300,'this is testing to see if the font works', {fontFamily: 'Gloock', fontSize: '40px'})

    this.player = this.physics.add.sprite(400, 400, "cat")
    .setScale(0.09)
    //.setSize(400,400)
    .setCircle(300)
    .setOffset(150,200)
    .setCollideWorldBounds(true);

    this.player2 = this.physics.add.sprite(400, 400, "cat")
    .setScale(0.08)
    //.setSize(400,400)
    .setCircle(300)
    .setOffset(150,200)
    //.setImmovable(true)
    .setBounce(1.5, 1.5)
    .setCollideWorldBounds(true);
``
    const walls = [
      [330,590,200,115,0x000000, 0],
      [110,570,230,290,0x000000, 0],
      [590,590,145,115,0x000000, 0],
      [85,360,150,140,0x000000, 0],
      [340,280,100,100,0x000000, 0],
      [760,590,200,240,0x000000, 0],
      [520,275,270,205,0x000000, 0],
      [230,490,2,100,0x000000, 0],
    ]

    walls.forEach(wall => {
      this.createWall(...wall)
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
  
    this.physics.add.collider(this.player, this.player2)
    this.physics.add.collider(this.player, this.w)
    this.physics.add.collider(this.player, this.w2)
    this.physics.add.collider(this.player, this.w3)
    this.physics.add.collider(this.player, this.w4)
    this.physics.add.collider(this.player, this.w5)
    this.physics.add.collider(this.player, this.w6)
    this.physics.add.collider(this.player, this.w7)
    this.physics.add.collider(this.player, this.w8)
    */

    this.keys = this.input.keyboard.addKeys("LEFT,RIGHT,UP,DOWN,W,A,S,D");
  }



  update() {
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
  }

  createWall(x,y,width,height, fillColor, fillAlpha) {
    const wall = this.physics.add.existing(
      this.add.rectangle(x,y,width,height, fillColor, fillAlpha)
    );
    wall.body.setImmovable(true)
    this.physics.add.collider(wall, this.player)
  }
}
