import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import styled from 'styled-components';
import ReactDOM from 'react-dom';


export default class Map extends Component {
    state = {
        lng: (parseFloat(this.props.hospital.location.split(" ")[1]) + parseFloat(this.props.center.location.split(" ")[1])) / 2,
        lat: (parseFloat(this.props.hospital.location.split(" ")[0]) + parseFloat(this.props.center.location.split(" ")[0])) / 2,
        zoom: 11
    }

    componentDidMount() {
        mapboxgl.accessToken = 'pk.eyJ1IjoibW1yb3pld3NraSIsImEiOiJja2Ftc3p4Mm8xaDFqMnhuczRlazF0bjZiIn0.90sz_eoeSuG_o_DpUa5VxQ';
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });
        map.on('move', () => {
            this.setState({
              lng: map.getCenter().lng.toFixed(4),
              lat: map.getCenter().lat.toFixed(4),
              zoom: map.getZoom().toFixed(2)
            });
          });
        const geojson = {
        type: 'FeatureCollection',
        features: [{
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [this.props.hospital.location.split(" ")[1], this.props.hospital.location.split(" ")[0]]
            },
            properties: {
                title: this.props.hospital.name,
                description: this.props.hospital.cityState
            }
        },
        {
            type: 'Feature',
            geometry: {
            type: 'Point',
            coordinates: [this.props.center.location.split(" ")[1], this.props.hospital.location.split(" ")[0]]
            },
            properties: {
            title: this.props.center.name,
            description: this.props.center.cityState
            }
        }]
        }
        geojson.features.forEach(function(marker) {
            let el = document.createElement("div");
            el.className = "marker";
            new mapboxgl.Marker(el)
            .setLngLat(marker.geometry.coordinates)
            .setPopup(new mapboxgl.Popup({ offset: 25 })
            .setHTML('<h6>' + marker.properties.title + '</h6><p>' + marker.properties.description + '</p>'))
            .addTo(map)
        })
    }

    

    render() {
        return (
            <div id="wrapper">
                <div ref={el => this.mapContainer = el} className="mapContainer"/>
            </div>
        )
    }

}


