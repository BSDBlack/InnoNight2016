var World = {
	loaded: false,
	rotating: false,
	trackableVisible: false,

	init: function initFn() {
		this.createOverlays();
	},

	createOverlays: function createOverlaysFn() {

		this.tracker = new AR.ClientTracker("assets/tracker.wtc", {});

        this.modelUhr = new AR.HtmlDrawable({html: "<div><h1>Noch 5 Minuten</h1></div>"}, 1, {
            viewportWidth: 128,
            viewportHeight: 128,
            horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.LEFT
        });

		this.modelCat = new AR.ImageDrawable(new AR.ImageResource("assets/cat.jpg"), 1, {
            onClick: function() {
                this.rotation += 10;
            }
        });

        this.modelBewertung= new AR.ImageDrawable(
            new AR.ImageResource("assets/cat.jpg"),
            1, {
            onClick: function() {
                this.rotation += 10;
            }
        });

        this.modelBraun = new AR.HtmlDrawable({uri: "https://www.welearn.de/fakultaet-iw/personen/details/person/prof-dr-peter-braun.html"}, 1, {
            viewportWidth: 1024,
            viewportHeight: 1024,
            scale: 2,
            offsetX: -1,
            onClick : function() {
                window.open("mailto:peter.braun@fhws.de");
            },
            horizontalAnchor : AR.CONST.HORIZONTAL_ANCHOR.LEFT
        });

        this.modelAcker = new AR.ImageDrawable(
            new AR.ImageResource("assets/Ackermann.png"), 1, {offsetX: 0});

        this.modelVorlesung = new AR.ImageDrawable(
            new AR.ImageResource("assets/vorlesung2.png"), 1, {scale: 0.75, offsetX: 0});

        this.trackableBewertung = new AR.Trackable2DObject(this.tracker, "MarkerBewertung", {
            drawables: {
                cam: [this.modelVorlesung]
            }
        });

		this.trackableDozent = new AR.Trackable2DObject(this.tracker, "MarkerDozent", {
            drawables: {
                cam: [this.modelBraun]
            }
        });
        this.trackablePinnwand = new AR.Trackable2DObject(this.tracker, "MarkerPinnwand", {
            drawables: {
                cam: [this.modelPinnwand]
            }
        });
        this.trackablePostfach = new AR.Trackable2DObject(this.tracker, "MarkerPostfach", {
            drawables: {
                cam: [this.modelCat]
            }
        });
        this.trackableUhr = new AR.Trackable2DObject(this.tracker, "MarkerUhr", {
            drawables: {
                cam: [this.modelUhr]
            }
        });
        this.trackableVorlesung = new AR.Trackable2DObject(this.tracker, "MarkerVorlesung", {
            drawables: {
                cam: [this.modelAcker]
            }
        });

	}
};

World.init();
