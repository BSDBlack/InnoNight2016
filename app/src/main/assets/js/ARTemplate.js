var World = {
	loaded: false,
	rotating: false,
	trackableVisible: false,

	init: function initFn() {
		this.createOverlays();
	},

	createOverlays: function createOverlaysFn() {

		this.tracker = new AR.ClientTracker("assets/tracker.wtc", {	});

        this.modelUhr = new AR.HtmlDrawable({html: "<div><h1>Noch 5 Minuten</h1></div>"}, 1, {
            viewportWidth: 128,
            viewportHeight: 128,
            horizontalAnchor : AR.CONST.HORIZONTAL_ANCHOR.LEFT,
            opacity : 0.9
        });

		var imageResource = new AR.ImageResource("assets/cat.jpg");
		this.modelCat = new AR.ImageDrawable(imageResource, 5, {
            offsetX: 1,
            onClick: function() {
                this.rotation += 10;
            }
        });
        var bewertungsImage = new AR.ImageResource("assets/cat.jpg");
        this.modelBewertung= new AR.ImageDrawable(bewertungsImage, 5, {
            offsetX:  1,
            onClick: function() {
                this.rotation += 10;
            }
        });

        this.modelBraun = new AR.HtmlDrawable({uri: "https://www.welearn.de/fakultaet-iw/personen/details/person/prof-dr-peter-braun.html"}, 1, {
            viewportWidth: 1024,
            viewportHeight: 1024,
            scale: 2,
          onClick : function() {
            window.open("mailto:peter.braun@fhws.de");
          },
          horizontalAnchor : AR.CONST.HORIZONTAL_ANCHOR.LEFT,
          opacity : 0.9
        });

        var imgAckermann = new AR.ImageResource("assets/Ackermann.png");
        this.modelAcker = new AR.ImageDrawable(imgAckermann, 1, {
            offsetX: 0
        });
        var imgVorlesung = new AR.ImageResource("assets/vorlesung2.png");
        this.modelVorlesung = new AR.ImageDrawable(imgVorlesung, 1, {
            scale: 0.75,
            offsetX: 0
        });


		/*
			To receive a notification once the image target is inside the field of vision the onEnterFieldOfVision trigger of the AR.Trackable2DObject is used. In the example the function appear() is attached. Within the appear function the previously created AR.AnimationGroup is started by calling its start() function which plays the animation once.
		*/
		var trackableBewertung = new AR.Trackable2DObject(this.tracker, "MarkerBewertung", {
                    drawables: {
                        cam: [this.modelVorlesung]
                    }
                });

		var trackableDozent = new AR.Trackable2DObject(this.tracker, "MarkerDozent", {
        			drawables: {
        				cam: [this.modelBraun]
        			}
        		});
        var trackablePinnwand = new AR.Trackable2DObject(this.tracker, "MarkerPinnwand", {
        			drawables: {
        				cam: [this.modelPinnwand]
        			}
        		});
        var trackablePostfach = new AR.Trackable2DObject(this.tracker, "MarkerPostfach", {
        			drawables: {
        				cam: [this.modelCat]
        			}
        		});
        var trackableUhr = new AR.Trackable2DObject(this.tracker, "MarkerUhr", {
        			drawables: {
        				cam: [this.modelUhr]
        			}
        		});
        var trackableVorlesung = new AR.Trackable2DObject(this.tracker, "MarkerVorlesung", {
        			drawables: {
        				cam: [this.modelAcker]
        			}
        		});

	}
};

World.init();
