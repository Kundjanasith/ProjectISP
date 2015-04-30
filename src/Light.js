var Light = cc.Sprite.extend({
	ctor:function(){
		this._super();
		this.isOn = false;
		this.currentScale = 0 ;
		this.scaleMax = 1;
		this.scheduleUpdate();
		this.setOpacity(180);
	},

	update:function(){
		this.setScaleX(this.currentScale/this.scaleMax);
		if(this.isOn){
			this.currentScale = 1;
			this.isOn = false;
		}
		else{
		this.currentScale-=0.1;
			if(this.currentScale<=0){
				this.currentScale = 0;
			}
		}
	}
});

var LightRed = Light.extend({
	ctor: function(){
		this._super();
		this.initWithFile(res.LightRed_png);
		this.setPosition(new cc.Point(125,250));
	}
});

var LightOrange = Light.extend({
	ctor: function(){
		this._super();
		this.initWithFile(res.LightOrange_png);
		this.setPosition(new cc.Point(225,250));
	}
});

var LightYellow = Light.extend({
	ctor: function(){
		this._super();
		this.initWithFile(res.LightYellow_png);
		this.setPosition(new cc.Point(325,250));
	}
});

var LightGreen = Light.extend({
	ctor: function(){
		this._super();
		this.initWithFile(res.LightGreen_png);
		this.setPosition(new cc.Point(425,250));
	}
});

var LightBlue = Light.extend({
	ctor: function(){
		this._super();
		this.initWithFile(res.LightBlue_png);
		this.setPosition(new cc.Point(525,250));
	}
});

var LightViolet = Light.extend({
	ctor: function(){
		this._super();
		this.initWithFile(res.LightViolet_png);
		this.setPosition(new cc.Point(625,250));
	}
});
