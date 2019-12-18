class Geo extends React.Component {
    getCurrentGeo() {
        navigator.geolocation.getCurrentPosition()
    }
}