window.addEventListener('DOMContentLoaded', function(){

	var Widget = function(){
		this.b = document.body;
		this.btnAdap = document.body.querySelector('.adap-btn');
		this.navPanel = document.body.querySelector('.nav-panel')

		this.init();
	}


	Widget.prototype.init = function(){
		this.btnAdap.addEventListener('click', this.toggle.bind(this));
		window.addEventListener('scroll', this.scrollingMenuFix.bind(this));
	}

	Widget.prototype.toggle = function(e){
		this.b.classList.toggle('openMenu');
	}

	Widget.prototype.scrollingMenuFix = function(e){
		var curScrollVal = window.pageYOffset;
		if(curScrollVal>100&&!this.navPanel.classList.contains('nav-panel_fix')){
			this.navPanel.classList.add('nav-panel_fix')
		}
		if(curScrollVal<100){
			this.navPanel.classList.remove('nav-panel_fix')
		}

	}






	var widget = new Widget();

});