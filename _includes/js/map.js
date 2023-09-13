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
        let main_station = L.marker([35.618052279120086, 139.78076073681018], {
            icon: L.divIcon({
                className: '',
                html: '<span class="fa fa-train fa-4x"></span><br> Telecom center station',
                iconSize: [120, 56]
            })
        }).addTo(map);

        let venue = L.marker([35.61881009080275, 139.77751173662017], {
            icon: L.divIcon({
                className: '',
                html: '<span class="fas fa-users fa-4x"></span><br>  Main venue (AIST Tokyo Waterfront Annex building)',
                iconSize: [120, 56]
            })
        }).addTo(map);

        let meiyo_mae = L.marker([35.62798196395211, 139.77994010835985], {
            icon: L.divIcon({
                className: '',
                html: '<span class="fas fa-train fa-4x"></span><br>  Tokyo Teleport station',
                iconSize: [120, 56]
            })
        }).addTo(map);

        let tenjin_1 = L.marker([35.6282322990255, 139.77190682608966], {
            icon: L.divIcon({
                className: '',
                html: '<span class="fas fa-binoculars fa-4x"></span><br>  Statue of Liberty',
                iconSize: [120, 56]
            })
        }).addTo(map);

        let tenjin_2 = L.marker([35.63207067204, 139.77752755712808], {
            icon: L.divIcon({
                className: '',
                html: '<span class="fas fa-binoculars fa-4x"></span><br> Odaiba Beach',
                iconSize: [120, 56]
            })
        }).addTo(map);
    }
});
