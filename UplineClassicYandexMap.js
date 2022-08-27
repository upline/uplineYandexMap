(function () {
    function getCamelCaseText(text, isPascalCase) {
        let finalText = "";
        const splitText = String(text).toLowerCase().split("_");
        if (splitText[1]) {
            finalText = splitText.map((e, index) => {
                if (index > 0) {
                    return ucFirst(e);
                } else {
                    return e;
                }
            }).join('');
        } else {
            finalText = splitText[0];
        }
        if (isPascalCase) {
            return ucFirst(finalText);
        }
        return finalText;
    }

    function isColor(color) {
        const colors = ["blue", "darkblue", "lightblue", "yellow", "green", "darkgreen", "olive", "brown", "red", "orange", "darkorange", "pink", "gray", "night", "black", "violet"];
        return colors.includes(color.toLowerCase());
    }

    function isIcon(icon) {
        const icons = ["Airport", "Attention", "Auto", "Bar", "Barber", "Beach", "Bicycle", "Bicycle2", "Book", "CarWash", "Christian", "Cinema", "Circus", "Court", "Delivery", "Discount", "Dog", "Education", "EntertainmentCenter", "Factory", "Family", "Fashion", "Food", "FuelStation", "Garden", "Government", "Heart", "Home", "Hotel", "Hydro", "Info", "Laundry", "Leisure", "MassTransit", "Medical", "Money", "Mountain", "NightClub", "Observation", "Park", "Parking", "Person", "Pocket", "Pool", "Post", "Railway", "RapidTransit", "RepairShop", "Run", "Science", "Shopping", "Souvenirs", "Sport", "Star", "Theater", "Toilet", "Underpass", "Vegetation", "Video", "Waste", "WaterPark", "Waterway", "Worship", "Zoo"];
        return icons.includes(icon);
    }

    function createMarkPreset(color = '', icon = '', type = '', circle = false) {
        const circleText = circle ? 'Circle' : '';
        const colorText = color ? color : 'blue';
        return `islands#${colorText}${icon}${circleText}${type}Icon`;
    }

    function getClusterPreset(color, inverted) {
        if (inverted) {
            const colorText = getCamelCaseText(color, true);
            return `islands#inverted${colorText}ClusterIcons`;
        } else {
            const colorText = getCamelCaseText(color, false);
            return `islands#${colorText}ClusterIcons`;
        }
    }

    function ucFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function getClusterBalloonContentLayout(str) {
        return `cluster#${getCamelCaseText(str, false)}`;
    }

    function getCommonSettings(params) {
        const settings = {};
        if (params.latitude) {
            settings.lat = params.latitude;
        }
        if (params.longitude) {
            settings.lon = params.longitude;
        }
        if (params.id) {
            settings.id = params.id;
        }
        return settings;
    }

    function getMapSettings(params, centerItem) {
        const settings = {};
        if (params.set_center) {
            settings.center = true;
            settings.centerCoordinates = [Number(params.center_lat), Number(params.center_lon)];
            settings.zoom = params.zoom;
        } else {
            //Берем центр из первого элемента
            const lat = centerItem[params.latitude] || null;
            const lon = centerItem[params.longitude] || null;
            //todo: Написать передачу центра от настройки в ручную
            settings.centerCoordinates = lat && lon ? [lat, lon] : [55.831903, 37.411961];
            settings.zoom = 15;
        }
        if (params.change_controls) {
            settings.controls = [];
            if (params.control_zoom_control) {
                settings.controls.push('zoomControl');
            }
            if (params.control_search_control) {
                settings.controls.push('searchControl');
            }
            if (params.control_type_selector) {
                settings.controls.push('typeSelector');
            }
            if (params.control_fullscreen_control) {
                settings.controls.push('fullscreenControl');
            }
            if (params.control_route_button_control) {
                settings.controls.push('routeButtonControl');
            }

            if (params.control_ruler_control) {
                settings.controls.push('rulerControl');
            }
            if (params.control_geolocation_control) {
                settings.controls.push('geolocationControl');
            }
            if (params.control_traffic_control) {
                settings.controls.push('trafficControl');
            }


        }
        return settings;
    }

    function getMarkerSettings(params) {
        const settings = {};
        if (params.set_point_options) {
            settings.pointColor = getCamelCaseText(params.point_options_color, false);
            if (params.set_point_options_color_field && params.point_options_color_field) {
                settings.colorField = params.point_options_color_field;
            }
            if (params.point_round_marker) {
                settings.circle = true;
            }
            switch (params.point_options_kind) {
                case "dot":
                    settings.pointType = 'Dot';
                    break;
                case "num":
                    settings['pointType'] = '';
                    settings.numberField = params.point_options_number_field;
                    break;
                case "text":
                    settings.pointType = 'Stretchy';
                    settings.circle = false;
                    settings.pointText = params.point_options_text_default;
                    settings.textField = params.point_options_text_field;
                    break;
                case "icon":
                    settings.pointIcon = getCamelCaseText(params.point_options_icon_item, true);
                    settings.iconField = params.point_options_icon_field;
                    break;
                case "img":
                    settings.iconImage = true;
                    settings.iconImageHref = params.marker_icon_image_href;
                    settings.iconImageSize = [params.marker_icon_image_width_size, params.marker_icon_image_height_size];
                    settings.iconImageOffset = [params.marker_icon_image_x_offset, params.marker_icon_image_y_offset];

                    settings.iconImageHrefField = params.marker_icon_image_href_field;
                    settings.iconImageSizeWidthField = params.marker_icon_image_size_width_field;
                    settings.iconImageSizeHeightField = params.marker_icon_image_size_height_field;
                    settings.iconImageOffsetXField = params.marker_icon_image_offset_x_field;
                    settings.iconImageOffsetYField = params.marker_icon_image_offset_y_field;
                    break;
            }
            settings.kind = params.point_options_kind;
            settings.pointPreset = createMarkPreset(settings.pointColor, settings.pointIcon, settings.pointType, settings.circle);
        }
        if (params.set_icon_caption && params.icon_caption) {
            settings.iconCaption = params.icon_caption;
        }
        return settings;
    }

    function getClusterSettings(params) {
        const settings = {};
        if (params.clusterize) {
            settings.clusterize = {};
            settings.clusterize.clusterize = params.clusterize;
            //Отключаем приближение
            settings.clusterize.clusterDisableClickZoom = params.cluster_disable_click_zoom;
            //Отключаем клик по балунам
            settings.clusterize.clusterHasBalloon = params.cluster_has_balloon;

            if (params.clusterize) {
                if (params.set_cluster_options) {
                    //Задаем пресет
                    settings.clusterize.preset = getClusterPreset(params.cluster_options_color, params.cluster_is_invert);
                    //Выбираем тип отображения
                    settings.clusterize.clusterBalloonContentLayout = getClusterBalloonContentLayout(params.cluster_balloon_content_layout);
                }
            }
        }
        if (params.set_cluster_caption) {
            settings.clusterCaption = params.cluster_caption;
        }
        return settings;
    }

    function getBalloonSettings(params) {
        const settings = {};
        settings.markBallon = params.mark_has_balloon;
        if (params.balloon_content_header) {
            settings.balloonContentHeader = params.balloon_content_header;
        }
        if (params.balloon_content_body) {
            settings.balloonContentBody = params.balloon_content_body;
        }
        if (params.balloon_content_footer) {
            settings.balloonContentFooter = params.balloon_content_footer;
        }
        return settings;
    }

    function getListSettings(params) {

    }

    function getSettings(params, item) {
        const settings = {};
        settings.common = getCommonSettings(params);
        settings.map = getMapSettings(params, item);
        settings.marker = getMarkerSettings(params);
        settings.cluster = getClusterSettings(params);
        settings.balloon = getBalloonSettings(params);
        settings.list = getListSettings(params);
        //console.log(settings);
        return settings;
    }

    function dataSetGenerator(data, settings) {
        const features = data.map(function (item, index) {
            const marker = settings.marker;
            const common = settings.common;
            const balloon = settings.balloon;
            const cluster = settings.cluster;

            const lat = item[common.lat];
            const lon = item[common.lon];
            const id = item[common.id];

            //Получаем номер из таблицы
            const number = item[marker.numberField] || null;
            //Получаем текст из таблицы
            const text = item[marker.textField] || null;
            //Устанавливаем текст на маркер, текст по умолчанию или из таблицы
            const iconContent = text ? text : number ? number : marker.pointText;
            //Устанавливаем цвет по умолчанию или из таблицы
            const colorText = getCamelCaseText(item[marker.colorField], false);
            const color = isColor(colorText) ? colorText : marker.pointColor;
            //Устанавливаем иконку по умолчанию или из таблицы
            let icon = "";
            if (marker.kind === "icon") {
                const iconText = getCamelCaseText(item[marker.iconField], true);
                icon = isIcon(iconText) ? iconText : marker.pointIcon;
            }


            //Начинаем формировать персет
            const result = {
                "type": "Feature"
            }
            if (id) {
                result.id = id;
            }
            if (lat && lon) {
                result.geometry = {
                    "type": "Point",
                    "coordinates": [lat, lon]
                };
            }
            //todo: написать передачу clusterCaption

            const properties = {}
            //контент на баллуне
            if (iconContent) {
                properties.iconContent = iconContent;
            }
            //контент на контент
            if (item[balloon.balloonContent]) {
                properties.balloonContent = item[balloon.balloonContent];
            }
            //заголовок в кластере
            if (item[cluster.clusterCaption]) {
                properties.clusterCaption = item[cluster.clusterCaption];
            }
            //Контент балуна игорится елси заполнен balloonContentBody
            if (item[marker.iconCaption]) {
                properties.iconCaption = item[marker.iconCaption];
            }
            //содержимое заголовка балуна геообъекта
            if (item[balloon.balloonContentHeader]) {
                properties.balloonContentHeader = item[balloon.balloonContentHeader];
            }
            //содержимое основой части<br> <b>балуна геообъекта</b>
            if (item[balloon.balloonContentBody]) {
                properties.balloonContentBody = item[balloon.balloonContentBody];

            }
            //содержимое нижней части балуна геообъекта
            if (item[balloon.balloonContentFooter]) {
                properties.balloonContentFooter = item[balloon.balloonContentFooter];
            }

            result.options = {
                'preset': createMarkPreset(color, icon, marker.pointType, marker.circle),
                'openBalloonOnClick': settings.balloon.markBallon,
            };
            if (marker.iconImage) {

                const iconImg = item[marker.iconImageHrefField] ? item[marker.iconImageHrefField] : marker.iconImageHref;
                const iconImageSizeW = item[marker.iconImageSizeWidthField] ? item[marker.iconImageSizeWidthField] : "";
                const iconImageSizeH = item[marker.iconImageSizeHeightField] ? item[marker.iconImageSizeHeightField] : "";
                const iconImageSize = item[marker.iconImageSizeWidthField] && item[marker.iconImageSizeHeightField] ? [iconImageSizeW, iconImageSizeH] : marker.iconImageSize;


                const iconImageOffsetX = item[marker.iconImageOffsetXField] ? item[marker.iconImageOffsetXField] : "";
                const iconImageOffsetY = item[marker.iconImageOffsetYField] ? item[marker.iconImageOffsetYField] : "";
                const iconImageOffset = item[marker.iconImageOffsetXField] && item[marker.iconImageOffsetYField] ? [iconImageOffsetX, iconImageOffsetY] : marker.iconImageOffset;

                result.options.iconLayout = 'default#image';
                result.options.iconImageHref = iconImg;
                result.options.iconImageSize = iconImageSize;
                result.options.iconImageOffset = iconImageOffset;
            }
            result.properties = properties;
            return result;
        });
        const dataSet = {
            "type": "FeatureCollection",
            "features": features
        };
        return JSON.stringify(dataSet);
    }

    function renderTemplate(template, data) {
        return template.replace(/{{f\d}}/gi, (match) => {
            const index = match.slice(2, match.length - 2);
            return data[index];
        });
    }

    function getTemplateFields(item, params) {
        return {
            f1: item[params.f1],
            f2: item[params.f2],
            f3: item[params.f3],
            f4: item[params.f4],
            f5: item[params.f5],
            f6: item[params.f6],
            f7: item[params.f7],
            f8: item[params.f8],
        }
    }

    function getMapBehaviorsSettings(params) {
        const behaviors = {enabled: [], disabled: []};
        for (key in params) {
            if (key.indexOf('behavior_') !== -1) {
                const text = getCamelCaseText(key.substring(9), false);
                if (params[key]) {
                    behaviors.enabled.push(text);
                } else {
                    behaviors.disabled.push(text);
                }
            }
        }
        return behaviors;
    }

    function showListItems(list, params, myMap, element) {
        const htmlContainer = document.querySelector('.upym__list');
        const template = document.querySelector('.upym__template').innerHTML;
        let htmlResult;
        htmlResult = list.map(function (item) {
            const templateVars = getTemplateFields(item, params);
            return renderTemplate(template, templateVars);
        }).join('');
        htmlContainer.innerHTML = htmlResult;

        if (!params.show_list_items_on_start) {
            const container = element.querySelector('.upym__contatiner');
            if (!container.classList.contains('show__list')) {
                container.classList.add("show__list");
                myMap.container.fitToViewport();
            }
        }

    }

    function init(params, data, id) {
        //Получаем настройки
        const settings = getSettings(params, data.rows[0]);
        // console.log(settings);
        //Создаем JSON с данными
        const dataSet = dataSetGenerator(data.rows, settings);
        // console.log(dataSet);
        const mapConfig = {
            center: settings.map.centerCoordinates,
            zoom: settings.map.zoom,
        };

        if (settings.map.controls) {
            mapConfig.controls = settings.map.controls;
        }

        const myMap = new ymaps.Map(id, mapConfig);

        if (params.change_behaviors) {
            const behaviors = getMapBehaviorsSettings(params);
            myMap.behaviors.disable(behaviors.disabled).enable(behaviors.enabled);
        }

        // Создание геообъекта с типом точка (метка).
        let objectManager = new ymaps.ObjectManager(settings.cluster.clusterize);

        //Добавляем дата сет в обджек менеджер
        objectManager.add(dataSet);
        //Добавляем данные на карту
        myMap.geoObjects.add(objectManager);
        //Устанавливаем центр
        if (!params.set_center) {
            myMap.setBounds(objectManager.getBounds());
        }
        //Отправляем на рендр Лист если это включено
        if (params.show_list) {
            //Вешаю слушатель на кластер
            objectManager.clusters.events.add(['click'], function (e) {
                const objects = objectManager.clusters.getById(e.get('objectId')).properties.geoObjects;
                const objectsIDs = objects.map(function (item, index) {
                    return item.id;
                });
                const objectsData = data.rows.filter(item => objectsIDs.includes(item[settings.common.id]));
                showListItems(objectsData, params, myMap, id);
            });
            //Вешаю слушатель на объект
            objectManager.objects.events.add(['click'], function (e) {
                const objectId = e.get('objectId');
                const objectsData = data.rows.filter(item => objectId === item[settings.common.id]);
                showListItems(objectsData, params, myMap, id);
            });
            if (params.show_list_items_on_start) {
                showListItems(data.rows, params, myMap, id);
            }
        }
    }

    window.crUplineYandexMap = init;
})();