 var Press = cc.Sprite.extend({
  
    pressDown: function(e){
        if(e==this.key){
            if(this.key==cc.KEY.s){
              this.initWithFile( res.Red2_png );
              cc.audioEngine.playMusic( res.Do_mp3 ,false);
            }
            if(this.key==cc.KEY.d){
              this.initWithFile( res.Orange2_png );
              cc.audioEngine.playMusic( res.Ra_mp3 ,false);
            }
            if(this.key==cc.KEY.f){
              this.initWithFile( res.Yellow2_png );
              cc.audioEngine.playMusic( res.Me_mp3 ,false);
            }
            if(this.key==cc.KEY.j){
              this.initWithFile( res.Green2_png );
              cc.audioEngine.playMusic( res.Fa_mp3 ,false);
            }
            if(this.key==cc.KEY.k){
              this.initWithFile( res.Blue2_png );
              cc.audioEngine.playMusic( res.Sol_mp3 ,false);
            }
            if(this.key==cc.KEY.l){
              this.initWithFile( res.Violet2_png );
              cc.audioEngine.playMusic( res.La_mp3 ,false);
            }
        }
    },

    pressUp: function(e){
        if(e==this.key){
            if(this.key==cc.KEY.s)this.initWithFile( res.Red1_png );
            if(this.key==cc.KEY.d)this.initWithFile( res.Orange1_png );
            if(this.key==cc.KEY.f)this.initWithFile( res.Yellow1_png );
            if(this.key==cc.KEY.j)this.initWithFile( res.Green1_png );
            if(this.key==cc.KEY.k)this.initWithFile( res.Blue1_png );
            if(this.key==cc.KEY.l)this.initWithFile( res.Violet1_png );
        }
    },

    destroy: function(){
      this.removeFromParent();
    }

 });

var Red = Press.extend({
     ctor: function(){
       this._super();
       this.initWithFile( res.Red1_png );
       this.setPosition(new cc.Point(125,400));
       this.key=cc.KEY.s;
     }
 });

var Orange = Press.extend({
     ctor: function(){
       this._super();
       this.initWithFile( res.Orange1_png );
       this.setPosition(new cc.Point(225,400));
       this.key=cc.KEY.d;
     }
 });

var Yellow = Press.extend({
     ctor: function(){
       this._super();
       this.initWithFile( res.Yellow1_png );
       this.setPosition(new cc.Point(325,400));
       this.key=cc.KEY.f;
     }
 });

var Green = Press.extend({
     ctor: function(){
       this._super();
       this.initWithFile( res.Green1_png );
       this.setPosition(new cc.Point(425,400));
       this.key=cc.KEY.j;
     }
 });

var Blue = Press.extend({
     ctor: function(){
       this._super();
       this.initWithFile( res.Blue1_png );
       this.setPosition(new cc.Point(525,400));
       this.key=cc.KEY.k;
     }
 });

var Violet = Press.extend({
     ctor: function(){
       this._super();
       this.initWithFile( res.Violet1_png );
       this.setPosition(new cc.Point(625,400));
       this.key=cc.KEY.l;
     }
 });
 