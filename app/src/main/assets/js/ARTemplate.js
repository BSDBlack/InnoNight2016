var World = {
	loaded: false,
	rotating: false,
	trackableVisible: false,

	init: function initFn() {
		this.createOverlays();
	},

	createOverlays: function createOverlaysFn() {
		/*
			First an AR.ClientTracker needs to be created in order to start the recognition engine. It is initialized with a URL specific to the target collection. Optional parameters are passed as object in the last argument. In this case a callback function for the onLoaded trigger is set. Once the tracker is fully loaded the function loadingStep() is called.
			Important: If you replace the tracker file with your own, make sure to change the target name accordingly.
			Use a specific target name to respond only to a certain target or use a wildcard to respond to any or a certain group of targets.
		*/
		this.tracker = new AR.ClientTracker("assets/tracker.wtc", {
			onLoaded: this.showNotification
		});

		/*
			3D content within Wikitude can only be loaded from Wikitude 3D Format files (.wt3). This is a compressed binary format for describing 3D content which is optimized for fast loading and handling of 3D content on a mobile device. You still can use 3D models from your favorite 3D modeling tools (Autodesk® Maya® or Blender) but you'll need to convert them into the wt3 file format. The Wikitude 3D Encoder desktop application (Windows and Mac) encodes your 3D source file. You can download it from our website. The Encoder can handle Autodesk® FBX® files (.fbx) and the open standard Collada (.dae) file formats for encoding to .wt3.
			Create an AR.Model and pass the URL to the actual .wt3 file of the model. Additional options allow for scaling, rotating and positioning the model in the scene.
			A function is attached to the onLoaded trigger to receive a notification once the 3D model is fully loaded. Depending on the size of the model and where it is stored (locally or remotely) it might take some time to completely load and it is recommended to inform the user about the loading time.
		*/
		this.model = new AR.Model("assets/ico.wt3", {
			onLoaded: this.loadingStep,
			scale: {
				x: 0.005,
				y: 0.005,
				z: 0.005
			},
			translate: {
				x: 0.0,
				y: 0.0,
				z: 0.0
			}
		});

        this.modelUhr = new AR.HtmlDrawable({html: "<div><h1>Noch 5 Minuten</h1></div>"}, 1, {
            viewportWidth: 128,
            viewportHeight: 128,
            scale: 2,
            offsetX: -1,
          horizontalAnchor : AR.CONST.HORIZONTAL_ANCHOR.LEFT,
          opacity : 0.9
        });

		var imageResource = new AR.ImageResource("assets/cat.jpg")
		this.modelKatze = new AR.ImageDrawable(imageResource, 5, {
                         offsetX : 1,
                         onClick : function() {e
                             // 'this' represents the ImageDrawable
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
            offsetX: -1,
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
            offsetX: 0});
		/*
			As a next step, an appearing animation is created. For more information have a closer look at the function implementation.
		*/
		this.appearingAnimation = this.createAppearingAnimation(this.model, 0.005);


		/*
			To receive a notification once the image target is inside the field of vision the onEnterFieldOfVision trigger of the AR.Trackable2DObject is used. In the example the function appear() is attached. Within the appear function the previously created AR.AnimationGroup is started by calling its start() function which plays the animation once.
		*/
		var trackableBewertung = new AR.Trackable2DObject(this.tracker, "MarkerBewertung", {
			drawables: {
				cam: [this.modelVorlesung]
			},
			onEnterFieldOfVision: this.appear,
			onExitFieldOfVision: this.disappear
		});

		var trackableDozent = new AR.Trackable2DObject(this.tracker, "MarkerDozent", {
        			drawables: {
        				cam: [this.modelBraun]
        			},
        			onEnterFieldOfVision: this.appear,
        			onExitFieldOfVision: this.disappear
        		});
        var trackablePinnwand = new AR.Trackable2DObject(this.tracker, "MarkerPinnwand", {
        			drawables: {
        				cam: [this.modelPinnwand]
        			}
        		});
        var trackablePostfach = new AR.Trackable2DObject(this.tracker, "MarkerPostfach", {
        			drawables: {
        				cam: [this.modelKatze]
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

	},

	showNotification: function showNotification() {
		if (!World.loaded && World.tracker.isLoaded() && World.model.isLoaded()) {
			World.loaded = true;

			if ( World.trackableVisible && !World.appearingAnimation.isRunning() ) {
				World.appearingAnimation.start();
			}
		}
	},

	createAppearingAnimation: function createAppearingAnimationFn(model, scale) {
		/*
			The animation scales up the 3D model once the target is inside the field of vision. Creating an animation on a single property of an object is done using an AR.PropertyAnimation. Since the car model needs to be scaled up on all three axis, three animations are needed. These animations are grouped together utilizing an AR.AnimationGroup that allows them to play them in parallel.
			Each AR.PropertyAnimation targets one of the three axis and scales the model from 0 to the value passed in the scale variable. An easing curve is used to create a more dynamic effect of the animation.
		*/
		var sx = new AR.PropertyAnimation(model, "scale.x", 0, scale, 1500, {
			type: AR.CONST.EASING_CURVE_TYPE.EASE_OUT_ELASTIC
		});
		var sy = new AR.PropertyAnimation(model, "scale.y", 0, scale, 1500, {
			type: AR.CONST.EASING_CURVE_TYPE.EASE_OUT_ELASTIC
		});
		var sz = new AR.PropertyAnimation(model, "scale.z", 0, scale, 1500, {
			type: AR.CONST.EASING_CURVE_TYPE.EASE_OUT_ELASTIC
		});

		return new AR.AnimationGroup(AR.CONST.ANIMATION_GROUP_TYPE.PARALLEL, [sx, sy, sz]);
	},

	appear: function appearFn() {
		World.trackableVisible = true;
		if (World.loaded) {
			World.appearingAnimation.start();
		}
	},
	disappear: function disappearFn() {
		World.trackableVisible = false;
	}
};

World.init();
