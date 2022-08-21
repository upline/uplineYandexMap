(function () {
    function getColor(color) {
        const colorText = color.toLowerCase();
        //Возвращает цвет не зависимо от регистра
        if (colorText === 'blue') {
            return 'blue';
        }
        if (colorText === 'darkblue') {
            return 'darkBlue';
        }
        if (colorText === 'lightblue') {
            return 'lightBlue';
        }
        if (colorText === 'yellow') {
            return 'yellow';
        }
        if (colorText === 'green') {
            return 'green';
        }
        if (colorText === 'darkgreen') {
            return 'darkGreen';
        }
        if (colorText === 'olive') {
            return 'olive';
        }
        if (colorText === 'brown') {
            return 'brown';
        }
        if (colorText === 'red') {
            return 'red';
        }
        if (colorText === 'orange') {
            return 'orange';
        }
        if (colorText === 'darkorange') {
            return 'darkOrange';
        }
        if (colorText === 'pink') {
            return 'pink';
        }
        if (colorText === 'gray') {
            return 'gray';
        }
        if (colorText === 'night') {
            return 'night';
        }
        if (colorText === 'black') {
            return 'black';
        }
        if (colorText === 'violet') {
            return 'violet';
        }
        return 'blue';
    }

    function getIcon(icon) {
        //Возвращает иконку не зависимо от регистра
        const iconText = icon.toLowerCase();
        if (iconText === 'airport') {
            return 'Airport';
        }
        if (iconText === 'attention') {
            return 'Attention';
        }
        if (iconText === 'auto') {
            return 'Auto';
        }
        if (iconText === 'bar') {
            return 'Bar';
        }
        if (iconText === 'barber') {
            return 'Barber';
        }
        if (iconText === 'beach') {
            return 'Beach';
        }
        if (iconText === 'bicycle') {
            return 'Bicycle';
        }
        if (iconText === 'bicycle2') {
            return 'Bicycle2';
        }
        if (iconText === 'book') {
            return 'Book';
        }
        if (iconText === 'carwash') {
            return 'CarWash';
        }
        if (iconText === 'christian') {
            return 'Christian';
        }
        if (iconText === 'cinema') {
            return 'Cinema';
        }
        if (iconText === 'circus') {
            return 'Circus';
        }
        if (iconText === 'court') {
            return 'Court';
        }
        if (iconText === 'delivery') {
            return 'Delivery';
        }
        if (iconText === 'discount') {
            return 'Discount';
        }
        if (iconText === 'dog') {
            return 'Dog';
        }
        if (iconText === 'education') {
            return 'Education';
        }
        if (iconText === 'entertainmentcenter') {
            return 'EntertainmentCenter';
        }
        if (iconText === 'factory') {
            return 'Factory';
        }
        if (iconText === 'family') {
            return 'Family';
        }
        if (iconText === 'fashion') {
            return 'Fashion';
        }
        if (iconText === 'food') {
            return 'Food';
        }
        if (iconText === 'fuelstation') {
            return 'FuelStation';
        }
        if (iconText === 'garden') {
            return 'Garden';
        }
        if (iconText === 'government') {
            return 'Government';
        }
        if (iconText === 'heart') {
            return 'Heart';
        }
        if (iconText === 'home') {
            return 'Home';
        }
        if (iconText === 'hotel') {
            return 'Hotel';
        }
        if (iconText === 'hydro') {
            return 'Hydro';
        }
        if (iconText === 'info') {
            return 'Info';
        }
        if (iconText === 'laundry') {
            return 'Laundry';
        }
        if (iconText === 'leisure') {
            return 'Leisure';
        }
        if (iconText === 'masstransit') {
            return 'MassTransit';
        }
        if (iconText === 'medical') {
            return 'Medical';
        }
        if (iconText === 'money') {
            return 'Money';
        }
        if (iconText === 'mountain') {
            return 'Mountain';
        }
        if (iconText === 'nightclub') {
            return 'NightClub';
        }
        if (iconText === 'observation') {
            return 'Observation';
        }
        if (iconText === 'park') {
            return 'Park';
        }
        if (iconText === 'parking') {
            return 'Parking';
        }
        if (iconText === 'person') {
            return 'Person';
        }
        if (iconText === 'pocket') {
            return 'Pocket';
        }
        if (iconText === 'pool') {
            return 'Pool';
        }
        if (iconText === 'post') {
            return 'Post';
        }
        if (iconText === 'railway') {
            return 'Railway';
        }
        if (iconText === 'rapidtransit') {
            return 'RapidTransit';
        }
        if (iconText === 'repairshop') {
            return 'RepairShop';
        }
        if (iconText === 'run') {
            return 'Run';
        }
        if (iconText === 'science') {
            return 'Science';
        }
        if (iconText === 'shopping') {
            return 'Shopping';
        }
        if (iconText === 'souvenirs') {
            return 'Souvenirs';
        }
        if (iconText === 'sport') {
            return 'Sport';
        }
        if (iconText === 'star') {
            return 'Star';
        }
        if (iconText === 'theater') {
            return 'Theater';
        }
        if (iconText === 'toilet') {
            return 'Toilet';
        }
        if (iconText === 'underpass') {
            return 'Underpass';
        }
        if (iconText === 'vegetation') {
            return 'Vegetation';
        }
        if (iconText === 'video') {
            return 'Video';
        }
        if (iconText === 'waste') {
            return 'Waste';
        }
        if (iconText === 'waterpark') {
            return 'WaterPark';
        }
        if (iconText === 'waterway') {
            return 'Waterway';
        }
        if (iconText === 'worship') {
            return 'Worship';
        }
        if (iconText === 'zoo') {
            return 'Zoo';
        }
        return '';
    }

    function createMarkPreset(color = '', icon = '', type = '', circle = false) {
        const circleText = circle ? 'Circle' : '';
        return `islands#${color}${icon}${circleText}${type}Icon`;
    }

    function getClusterPreset(color, inverted) {
        const colorText = inverted ? ucFirst(getColor(color.toLowerCase())) : getColor(color.toLowerCase());
        const invert = inverted ? 'inverted' : '';
        return `islands#${invert}${colorText}ClusterIcons`;
    }

    function ucFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function getClusterBalloonContentLayout(str) {
        if (str === "balloon_two_columns") {
            return 'cluster#balloonTwoColumns';
        }
        if (str === "balloon_accordion") {
            return 'cluster#balloonAccordion';
        }
        if (str === "balloon_carousel") {
            return 'cluster#balloonCarousel';
        }
    }

    function getMapSettings(params) {
        const settings = {};
        //Если включены визуальные настройки пунктов то собираем настройки по умолчанию
        if (params["set_point_options"]) {
            settings['pointColor'] = getColor(params["point_options_color"]);
            if (params["point_options_type"] === "circle") {
                settings['circle'] = true;
            }
            if (params["point_options_kind"] === "dot") {
                settings['pointType'] = 'Dot';
            }
            if (params["point_options_kind"] === "num") {
                //'islands#blueIcon'
                //'islands#blueCircleIcon'
                settings['pointType'] = '';
            }
            if (params["point_options_kind"] === "text") {
                //'islands#blueStretchyIcon'
                settings['pointType'] = 'Stretchy';
                settings['circle'] = false;
                settings['pointText'] = params['point_options_text_default'];
            }
            if (params["point_options_kind"] === "icon") {
                //'islands#blueAirportIcon'
                //'islands#blueScienceCircleIcon'
                settings['pointIcon'] = getIcon(params["point_options_icon_item"]);
            }
            settings['pointPreset'] = createMarkPreset(settings['pointColor'], settings['pointIcon'], settings['pointType'], settings['circle']);
        }

        if (params["clusterize"]) {
            settings['clusterize'] = {};
            settings['clusterize']['clusterize'] = params['clusterize'];
            //Отключаем приближение
            settings['clusterize']['clusterDisableClickZoom'] = params['cluster_disable_click_zoom'];
            //Отключаем клик по балунам
            settings['clusterize']['clusterHasBalloon'] = params['cluster_has_balloon'];

            if (params["clusterize"]) {
                //Задаем пресет
                settings['clusterize']['preset'] = getClusterPreset(params["cluster_options_color"], params["cluster_is_invert"]);
                //Выбираем тип отображения
                settings['clusterize']['clusterBalloonContentLayout'] = getClusterBalloonContentLayout(params["cluster_balloon_content_layout"]);
            }
        }
        // controls: ['zoomControl', 'searchControl', 'typeSelector',  'fullscreenControl', 'routeButtonControl']
        if (params['change_controls']) {
            settings['controls'] = [];
            if (params['control_zoom_control']) {
                settings['controls'].push('zoomControl');
            }
            if (params['control_search_control']) {
                settings['controls'].push('searchControl');
            }
            if (params['control_type_selector']) {
                settings['controls'].push('typeSelector');
            }
            if (params['control_fullscreen_control']) {
                settings['controls'].push('fullscreenControl');
            }
            if (params['control_route_button_control']) {
                settings['controls'].push('routeButtonControl');
            }
        }

        //console.log(settings);
        return settings;
    }

    function getFields(params) {
        const fields = {};
        //Общие полея
        if (params['latitude']) {
            fields['lat'] = params['latitude'];
        }
        if (params['longitude']) {
            fields['lon'] = params['longitude'];
        }
        if (params['id']) {
            fields['id'] = params['id'];
        }
        //Поля для маркера
        if (params['set_point_options']) {
            if (params['point_options_color_field']) {
                fields['color'] = params['point_options_color_field'];
            }

            if (params["point_options_kind"] === "num" && params['point_options_number_field']) {
                fields['number'] = params['point_options_number_field'];
            }

            if (params["point_options_kind"] === "icon" && params['point_options_icon_field'] && params['point_options_icon_type'] === 'field') {
                fields['icon'] = params['point_options_icon_field'];
            }

            if (params["point_options_kind"] === "text" && params['point_options_text_field']) {
                fields['text'] = params['point_options_text_field'];
            }
        }
        if (params['cluster_caption']) {
            fields['clusterCaption'] = params['cluster_caption'];
        }
        if (params['icon_caption']) {
            fields['iconCaption'] = params['icon_caption'];
        }
        if (params['balloon_content_header']) {
            fields['balloonContentHeader'] = params['balloon_content_header'];
        }
        if (params['balloon_content_body']) {
            fields['balloonContentBody'] = params['balloon_content_body'];
        }
        if (params['balloon_content_footer']) {
            fields['balloonContentFooter'] = params['balloon_content_footer'];
        }

        //Поля для кластера
        if (params['set_cluster_options']) {

        }

        return fields;
    }

    function dataSetGenerator(data, settings, fields) {
        const features = data.map(function (item, index) {
            const defaultText = settings['pointText'];
            const defaultColor = settings['pointColor'];
            const defaultIcon = settings['pointIcon'];
            const defaultCircle = settings['circle'];
            const defaultType = settings['pointType'];

            const lat = item[fields['lat']];
            const lon = item[fields['lon']];
            const id = item[fields['id']];

            const text = item[fields['text']] || null;
            const number = item[fields['number']] || null;
            const iconContent = text ? text : number ? number : defaultText;
            const color = item[fields['color']] ? getColor(item[fields['color']]) : defaultColor;
            const icon = item[fields['icon']] ? getIcon(item[fields['icon']]) : defaultIcon;

            const result = {
                "type": "Feature"
            }
            if (id) {
                result['id'] = id;
            }
            if (lat && lon) {
                result['geometry'] = {
                    "type": "Point",
                    "coordinates": [lat, lon]
                };
            }

            //todo: iconCaption - это прикольная подпись показываеться когда показаны не Stretch иконки можно ее тоже задавать,
            // - написать ее передачу
            // - написать передачу clusterCaption
            // - написать передачу balloonContentHeader
            // - написать передачу balloonContentBody
            // - написать передачу balloonContentFooter
            const properties = {}
            //контент на баллуне
            if (iconContent) {
                properties["iconContent"] = iconContent;
            }
            if (fields['balloonContent']) {
                properties["balloonContent"] = item[fields['balloonContent']];
            }
            //заголовок в кластере
            if (fields['clusterCaption']) {
                properties["clusterCaption"] = item[fields['clusterCaption']];
            }
            //Контент балуна игорится елси заполнен balloonContentBody
            // if(fields['iconCaption']   ){
            //     properties["balloonContent"] = fields['iconCaption'];
            // }
            //содержимое заголовка балуна геообъекта
            if (fields['balloonContentHeader']) {
                properties["balloonContentHeader"] = item[fields['balloonContentHeader']];
            }
            //содержимое основой части<br> <b>балуна геообъекта</b>
            if (fields['balloonContentBody']) {
                properties["balloonContentBody"] = item[fields['balloonContentBody']];

            }
            //содержимое нижней части балуна геообъекта
            if (fields['balloonContentFooter']) {
                properties["balloonContentFooter"] = item[fields['balloonContentFooter']];
            }
            //console.log(item[fields['balloonContentBody']]);
            result['properties'] = properties;
            //     {
            //     "iconContent": iconContent,
            //     "balloonContent": "gsdggdfgdfgdf<br>dfdfdfd",
            //     "clusterCaption": "Метка 1",
            //     "iconCaption": "22222",
            //     "balloonContentHeader": "содержимое заголовка балуна геообъекта",
            //     "balloonContentBody": "содержимое основой части<br> <b>балуна геообъекта</b>",
            //     "balloonContentFooter": "содержимое нижней части балуна геообъекта"
            // }
            result['options'] = {
                'preset': createMarkPreset(color, icon, defaultType, defaultCircle),
                //todo: Написать настройку открытия меток
                //todo: Написать переход по ссылке при клике по метке.
                'openBalloonOnClick': false
                //'disableClickZoom':false
            };
            return result;
        });
        const dataSet = {
            "type": "FeatureCollection",
            "features": features
        };
        return JSON.stringify(dataSet);
    }

    function renderTemplate(tempale, data) {
        return tempale.replace(/{{f\d}}/gi, (match) => {
            const index = match.slice(2, match.length - 2);
            return data[index];
        });
    }

    function getTemplateFields(item, params) {
        return {
            f1: item[params['f1']],
            f2: item[params['f2']],
            f3: item[params['f3']],
            f4: item[params['f4']],
            f5: item[params['f5']],
            f6: item[params['f6']],
            f7: item[params['f7']],
            f8: item[params['f8']],
        }
    }

    function showListItems(list) {
        const htmlContainer = document.querySelector('.upym__list');
        const template = document.querySelector('.upym__template').innerHTML;
        htmlContainer.innerHTML = '';
        list.forEach(function (item) {
            const templateVars = getTemplateFields(item, params);
            const rendered = renderTemplate(template, templateVars);
            htmlContainer.innerHTML += rendered;
        });
    }

    function init(params, data, id) {
        //Получаем настройки
        const settings = getMapSettings(params);
        //Получаем поля
        const fields = getFields(params);
        //Создаем JSON с данными
        const dataSet = dataSetGenerator(data['rows'], settings, fields);
        //Берем центр из первого элемента
        const lat = data.rows[0][params.latitude] || null;
        const lon = data.rows[0][params.longitude] || null;
        //todo: Написать передачу центра от настройки в ручную
        const center = lat && lon ? [lat, lon] : [55.831903, 37.411961];

        const mapConfig = {
            center: center,
            zoom: 15,
        };

        if (settings.controls) {
            mapConfig['controls'] = settings.controls;
        }
        console.log(mapConfig);
        // console.log(dataSet);
        const myMap = new ymaps.Map(id, mapConfig);


        // Создание геообъекта с типом точка (метка).
        let objectManager = new ymaps.ObjectManager(settings.clusterize);

        //Добавляем дата сет в обджек менеджер
        objectManager.add(dataSet);
        //Добавляем данные на карту
        myMap.geoObjects.add(objectManager);
        //Устанавливаем центр
        //todo: Написать передачу центра от настройки в ручную
        myMap.setBounds(objectManager.getBounds());

        //Отправляем на рендр Лист если это включено
        if (params['show_list']) {
            //Вешаю слушатель на кластер
            objectManager.clusters.events.add(['click'], function (e) {
                const objects = objectManager.clusters.getById(e.get('objectId')).properties.geoObjects;
                const objectsIDs = objects.map(function (item, index) {
                    return item.id;
                });
                const objectsData = data.rows.filter(item => objectsIDs.includes(item[fields['id']]));
                showListItems(objectsData);
            });
            //Вешаю слушатель на объект
            objectManager.objects.events.add(['click'], function (e) {
                const objectId = e.get('objectId');
                const objectsData = data.rows.filter(item => objectId === item[fields['id']]);
                showListItems(objectsData);
            });
        }

    }

    window.crUplineYandexMap = init;
})();
