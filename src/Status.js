 var Status= cc.Sprite.extend({

    ctor: function() {
        this._super();
        this.initWithFile( res.Start_png );
        this.setPosition(new cc.Point(825,415));
    },

    change: function(x){
    	if(x=='play'){
    		this.initWithFile( res.Play_png );
    	}
    },

    setTime: function(hour,minute,secound,label){

        var sec = new Date().getSeconds();
        var min = new Date().getMinutes();
        var hr = new Date().getHours();

        var duration0 = (secound)+(minute*60)+(hour*3600);
        var duration1 = sec+(min*60)+(hr*3600);

        var duration = duration1-duration0;

        var h = Math.floor(duration/3600);
        var m = Math.floor(duration/60);
        var s = Math.floor(duration%60);

        if(s<10){
            s='0'+s;
        }
        if(m<10){
            m='0'+m;
        }
        if(h<10){
            h='0'+h;
        }
        label.setString( h+' : '+ m+' : '+ s, 'Arial', 60 );
    }
    
}); 