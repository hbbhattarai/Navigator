import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
import Legend from './Legend';
import MapTooltip from './MapTooltip';
import Directions from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';
import {
  chapters, tooltipConfig,
} from '../config/options';

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2VvLWRldiIsImEiOiJjbGJ4NjFrN2UxM3hiNDBueWhwa3E1NHQxIn0.vZnv3suu2YhqqiKFvSH3lw';

export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 26.8725,
      lng: 90.48,
      zoom: 13.6,
    };
  }

  componentDidMount() {
    const {
      lng, lat, zoom,
    } = this.state;

    // Container to put React generated content in.
    this.tooltipContainer = document.createElement('div'); // eslint-disable-line

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/geo-dev/clc4hce1q004414oxltynf3c6',
      center: [lng, lat],
      zoom,
      minZoom: 13,
      maxZoom: 30,
      pitch: 60
    });

    var directions = new Directions({
      accessToken: 'pk.eyJ1IjoiZ2VvLWRldiIsImEiOiJjbGJ4NjFrN2UxM3hiNDBueWhwa3E1NHQxIn0.vZnv3suu2YhqqiKFvSH3lw',
      unit: 'metric',
      profile: 'mapbox/cycling'
    });


    this.map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    this.map.addControl(directions, 'top-left');


    this.map.on('style.load', () => {

      this.map.addSource('boundary', {
        type: 'geojson',
        data: 'data/gelephu_boundary.geojson',
      });

      this.map.addSource('baseline', {
        type: 'geojson',
        data: 'data/baseline.geojson',
      });

      this.map.addSource('reference', {
        type: 'geojson',
        data: 'data/reference.geojson',
      });
      this.map.addSource('quadrant', {
        type: 'geojson',
        data: 'data/quadrant.geojson',
      });
      this.map.addSource('order', {
        type: 'geojson',
        data: 'data/street.geojson',
      });
      this.map.addSource('type', {
        type: 'geojson',
        data: 'data/street.geojson',
      });


      this.map.addLayer({
        id: 'boundary',
        type: 'line',
        source: 'boundary',
        paint: {
          'line-color': '#090909',
          'line-opacity': 0.5,
          'line-width': 1,
        },
      }, 'waterway');

      this.map.addLayer({
        id: 'baseline',
        type: 'line',
        source: 'baseline',
        paint: {
          'line-color': '#E13A16',
          'line-opacity': 0.7,
          'line-width': 3,
        },
      }, 'waterway');

      this.map.addLayer({
        id: 'quadrant',
        type: 'fill',
        source: 'quadrant',
        paint:  {
          'fill-color': {
            property: 'code',
            stops: [
              [1, '#F99B37'],
              [2, '#7fcdbb'],
              [3, '#41b6c4'],
              [4, '#1d91c0'],
            ],
          },
          'fill-opacity': 0,
          'fill-opacity-transition': {
            duration: 800,
            delay: 0,
          },
        },
      }, 'waterway');

      this.map.addLayer({
        id: 'order',
        type: 'line',
        source: 'order',
        paint: {
          'line-color': ['get', 'color'],
          'line-opacity': 1,
          'line-width': 2,
        },
      }, 'waterway');

      this.map.addLayer({
        id: 'type',
        type: 'line',
        source: 'type',
        paint: {
          'line-color': ['get', 'zcolor'],
          'line-opacity': 1,
          'line-width': 2,
        },
      }, 'waterway');


      
      
      this.map.addLayer({
        id: 'reference',
        type: 'symbol',
        source: 'reference',
        layout: {
          'icon-image': 'marker',
          'icon-size': 1,
          "icon-allow-overlap": true,
        },
        paint: {
          "icon-color": "#00ff00",
          "icon-halo-color": "#fff",
          "icon-halo-width": 4
        },
      }, 'waterway');

      this.map.addLayer({
        id: 'labels',
        type: 'symbol',
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [{
              type: 'Feature',
              properties: {
                name: 'Municipal Office',
                size: 8,
                marker: 'marker',
              },
              geometry: {
                type: 'Point',
                coordinates: [90.48, 26.87],
              },
            },
            {
              type: 'Feature',
              properties: {
                name: 'CRRH',
                size: 12,
                marker: 'hospital',
              },
              geometry: {
                type: 'Point',
                coordinates: [90.490, 26.874],
              },
            }],
          },
        },
        layout: {
          'icon-image': ['get', 'marker'],
          'text-field': '{name}',
          'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
          'text-size': ['get', 'size'],
          'text-transform': 'uppercase',
          'text-letter-spacing': 0.05,
          'text-offset': [0, 1.5],
        },
        paint: {
          'text-color': '#7a7a78',
          'text-halo-color': '#f9f6e7',
          'text-halo-width': 1,
        },
      });
    });


    this.tooltipContainer = document.createElement('div');

    const tooltip = new mapboxgl.Marker(this.tooltipContainer, {
      offset: [-110, 0],
    }).setLngLat([0, 0]).addTo(this.map);


    this.map.on('mousemove', (e) => {
      const { chapterName } = this.props;
      const tooltipOptions = tooltipConfig[chapterName];

      if (tooltipOptions !== undefined) {
        const features = this.map.queryRenderedFeatures(e.point, { layers: [tooltipOptions.layer] });

        if (features.length > 0) {
          const selected = features[0].properties;

          if (selected !== undefined) {
            this.map.getCanvas().style.cursor = features.length ? 'default' : '';
          }
        }

        tooltip.setLngLat(e.lngLat);
        this.setTooltip(features, tooltipOptions);
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    const {
      chapterName
    } = this.props;

    if (this.map.isStyleLoaded()) {
      if (nextProps.chapterName !== chapterName) {
        const { paint, layout, location } = chapters[nextProps.chapterName]; // eslint-disable-line
        paint.forEach((data) => {
          const currentLayer = this.map.getLayer(data.id);
          if (currentLayer !== undefined) {
           
            const layerType = currentLayer.type;
            this.map.setPaintProperty(data.id, `${layerType}-opacity`, data.opacity);
          }
        });

        layout.forEach((data) => {
          this.map.setLayoutProperty(data.id, 'visibility', data.visibility);
        });

        this.map.easeTo(location);
      }

    }
  }

  componentWillUnmount() {
    this.map.remove();
  }

  /**
   * Creates the tooltip element for the hovered tile
   * @param {object} features - queried features from the map
   * @public
   */
  setTooltip(features, tooltipOptions) {
    if (features.length) {
      ReactDOM.render(
        React.createElement(
          MapTooltip, {
          features, tooltipOptions,
        },
        ),
        this.tooltipContainer,
      );
    } else {
      ReactDOM.unmountComponentAtNode(this.tooltipContainer);
    }
  }

  tooltipContainer;

  render() {
    const mapStyle = {
      position: 'fixed',
      width: '63%',
      left: '32%',
      top: 0,
      bottom: 0,
    };

    const { chapterName, layer } = this.props;

    return (
      <div>
        <div style={mapStyle} ref={(el) => { this.mapContainer = el; }} />
        <Legend chapterName={chapterName} layer={layer} />
      </div>
    );
  }
}

Map.propTypes = {
  chapterName: PropTypes.string.isRequired,
  layer: PropTypes.string.isRequired,

};
