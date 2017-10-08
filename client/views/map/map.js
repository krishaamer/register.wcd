Template.map.onCreated(() => {

  //console.log("map created");
  GoogleMaps.load({ v: '3', key: Meteor.settings["public"].GoogleMapKey, libraries: 'geometry,places'});

});

Template.map.onRendered(function () {

  let lookup = [];
  let self = this;
  function getBox (map) {

    let bounds = map.instance.getBounds();
    let ne = bounds.getNorthEast();
    let sw = bounds.getSouthWest();
    let box = [
      [sw.lng(),sw.lat()],
      [ne.lng(),ne.lat()]
    ];

    Session.set("box", box);
  }

  GoogleMaps.ready('bigmap', (map) => {

    google.maps.event.addListener(map.instance, 'dragend', (e) => { getBox(map); });
    google.maps.event.addListener(map.instance, 'zoom_changed', (e) => { getBox(map); });

  });

    /*
    self.autorun(() => {  

      getBox(map);
      self.subscribe('users.location', Session.get('box'), TAPi18n.getLanguage(), () => {

        // Map stuff
        let markers = [];
        Users.find({haslocation:true}).forEach((doc) => {

          let lat = doc.location.coordinates[1];
          let lng = doc.location.coordinates[0];
            
          if (!_.contains(lookup, lat+','+lng)) {

            let marker = new SlidingMarker({
              draggable: false,
              animation: google.maps.Animation.DROP,
              position: new google.maps.LatLng(lat, lng),
              map: map.instance,
              id: doc._id,
              duration: 2000,
              easing: "easeOutExpo",
              icon: '/map/marker.png',
              title: '100'
            });
            
            lookup.push(lat+','+lng);
            markers.push(marker);

            let w = new google.maps.InfoWindow({
              content: 'plap'
            });
            google.maps.event.addListener(marker, 'click', () => {
              w.open(map.instance, marker);
            });
          }
        });

        let options = {
            imagePath: '/map/m'
        };
        let markerCluster = new MarkerClusterer(map.instance, markers, options);

      });
    });
    */

});

Template.map.onDestroyed(() => {

  //console.log("map destroyed");
  delete(GoogleMaps.maps.bigmap);
});

Template.map.helpers({
  ops () {
    if (GoogleMaps.loaded()) {
      
      let lat = 58.0041;
      let lng = 25.7482;

      return {
        center: new google.maps.LatLng(lat, lng),
        zoom: 5,
        scrollwheel: false,
        backgroundColor: "rgba(255, 255, 255, 1)",
        mapTypeControl: false,
      };
    }
  }
});