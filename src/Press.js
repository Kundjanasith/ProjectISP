 var Press = cc.Sprite.extend({
    pressDown: function(e){
        if(e==this.key){
            if(this.key==cc.KEY.s){
              this.initWithFile( 'res/press/red2.png' );
              cc.audioEngine.playMusic('sound/Do1.mp3',false);
            }
            if(this.key==cc.KEY.d){
              this.initWithFile( 'res/press/orange2.png' );
              cc.audioEngine.playMusic('sound/Ra1.mp3',false);
            }
            if(this.key==cc.KEY.f){
              this.initWithFile( 'res/press/yellow2.png' );
              cc.audioEngine.playMusic('sound/Me1.mp3',false);
            }
            if(this.key==cc.KEY.j){
              this.initWithFile( 'res/press/green2.png' );
              cc.audioEngine.playMusic('sound/Fa1.mp3',false);
            }
            if(this.key==cc.KEY.k){
              this.initWithFile( 'res/press/blue2.png' );
              cc.audioEngine.playMusic('sound/Sol1.mp3',false);
            }
            if(this.key==cc.KEY.l){
              this.initWithFile( 'res/press/violet2.png' );
              cc.audioEngine.playMusic('sound/La1.mp3',false);
            }
        }
    },
    pressUp: function(e){
        if(e==this.key){
            if(this.key==cc.KEY.s)this.initWithFile( 'res/press/red1.png' );
            if(this.key==cc.KEY.d)this.initWithFile( 'res/press/orange1.png' );
            if(this.key==cc.KEY.f)this.initWithFile( 'res/press/yellow1.png' );
            if(this.key==cc.KEY.j)this.initWithFile( 'res/press/green1.png' );
            if(this.key==cc.KEY.k)this.initWithFile( 'res/press/blue1.png' );
            if(this.key==cc.KEY.l)this.initWithFile( 'res/press/violet1.png' );
        }
    },
    destroy: function(){
      this.removeFromParent();
    }
 });

var Red = Press.extend({
     ctor: function(){
       this._super();
       this.initWithFile( 'res/press/red1.png' );
       this.setPosition(new cc.Point(125,400));
       this.key=cc.KEY.s;
     }
 });

var Orange = Press.extend({
     ctor: function(){
       this._super();
       this.initWithFile( 'res/press/orange1.png' );
       this.setPosition(new cc.Point(225,400));
       this.key=cc.KEY.d;
     }
 });

var Yellow = Press.extend({
     ctor: function(){
       this._super();
       this.initWithFile( 'res/press/yellow1.png' );
       this.setPosition(new cc.Point(325,400));
       this.key=cc.KEY.f;
     }
 });

var Green = Press.extend({
     ctor: function(){
       this._super();
       this.initWithFile( 'res/press/green1.png' );
       this.setPosition(new cc.Point(425,400));
       this.key=cc.KEY.j;
     }
 });

var Blue = Press.extend({
     ctor: function(){
       this._super();
       this.initWithFile( 'res/press/blue1.png' );
       this.setPosition(new cc.Point(525,400));
       this.key=cc.KEY.k;
     }
 });

var Violet = Press.extend({
     ctor: function(){
       this._super();
       this.initWithFile( 'res/press/violet1.png' );
       this.setPosition(new cc.Point(625,400));
       this.key=cc.KEY.l;
     }
 });
 