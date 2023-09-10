window.conference.map = (() => {
    let config;
    let lang;

    let map;

    const setup = (elId) => {
        map = L.map(elId).setView(config.home_coord, config.default_zoom);

        L.tileLayer.provider(config.map_provider).addTo(map);

        L.easyButton('far fa-star', () => {
            map.flyTo(config.home_coord, config.default_zoom);
        }, lang.focus_conf).addTo(map);

        L.control.locate({
            flyTo: true,
            strings: {
                title: lang.focus_me
            }
        }).addTo(map);
    };

    const init = (c, l) => {
        config = c;
        lang = l;

        const elId = 'map';

        if (document.getElementById(elId)) {
            setup(elId);
        }
    };

    const getMap = () => {
        return map
    };

    return {
        init: init,
        getMap: getMap
    };
})();

window.conference.awaitReady().then(() => {
    const map = window.conference.map.getMap();

    if (typeof map !== 'undefined') {
        let main_station = L.marker([33.73271, 135.38431], {
            icon: L.divIcon({
                className: '',
                html: '<span class="fa fa-train fa-4x"></span><br> Kii-Tanabe station',
                iconSize: [120, 56]
            })
        }).addTo(map);

        let venue = L.marker([33.73420, 135.35194], {
            icon: L.divIcon({
                className: '',
                html: '<span class="fas fa-users fa-4x"></span><br>  Main venue (Kamenoi Hotel Kii-Tanabe)',
                iconSize: [120, 56]
            })
        }).addTo(map);

        let meiyo_mae = L.marker([33.73658, 135.35854], {
            icon: L.divIcon({
                className: '',
                html: '<span class="fas fa-bus fa-4x"></span><br>  Meiyo mae (bus stop)',
                iconSize: [120, 56]
            })
        }).addTo(map);

        let tenjin_1 = L.marker([33.72795, 135.35207], {
            icon: L.divIcon({
                className: '',
                html: '<span class="fas fa-binoculars fa-4x"></span><br>  Tenjin-zaki',
                iconSize: [120, 56]
            })
        }).addTo(map);

        let tenjin_2 = L.marker([33.72724, 135.35699], {
            icon: L.divIcon({
                className: '',
                html: '<span class="fas fa-binoculars fa-4x"></span><br> Tenjin-zaki',
                iconSize: [120, 56]
            })
        }).addTo(map);
    }
});
