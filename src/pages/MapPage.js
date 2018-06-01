import { MapView, Polyline } from 'react-native-amap3d';
import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import { connect } from 'react-redux';
import LoginAction from '../actions/LoginAction';
const _line3 = new Array();
class MapPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            latitude: 0,
            longitude: 0,
            locationEnabled: true,
            drawLineEnabled: true,
            _line3: [],
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps.message);
    }

    render() {
        return (

            <View style={StyleSheet.absoluteFill}>

                <MapView locationEnabled={this.state.locationEnabled}
                    onLocation={({ nativeEvent }) => {
                        this.setState({
                            latitude: nativeEvent.latitude,
                            longitude: nativeEvent.longitude,
                        });

                        _line3 = _line3.concat([{
                            latitude: this.state.latitude,
                            longitude: this.state.longitude,
                        }]);
                    }}
                    coordinate={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
                    }}
                    rotateEnabled={false}
                    showsBuildings={false}
                    zoomLevel={18}
                    tilt={0}
                    style={StyleSheet.absoluteFill}
                    locationInterval={5000} >
                    <Polyline
                        gradient={true}
                        width={5}
                        colors={['#f44336', '#2196f3', '#4caf50']}
                        coordinates={_line3.slice(1, _line3.length - 1)}
                    />
                </MapView>
                <Button onPress={() => {
                    this.setState({ locationEnabled: !this.state.locationEnabled, });
                }}
                    title={this.state.locationEnabled ? "停止定位" : "开始定位"}
                    style={styles.style_view_commit}
                />
                <Button onPress={() => {
                    this.setState({ drawLineEnabled: !this.state.drawLineEnabled, });
                    _line3 = [];
                    this.props.message = 0;
                    this.props.dispatch(LoginAction(1));
                }}
                    title={this.state.drawLineEnabled ? "绘制线段" : "取消线段"}
                    style={styles.style_view_commit}
                />

            </View>

        )
    }
}

const styles = StyleSheet.create({
    style_image: {
        borderRadius: 35,
        height: 70,
        width: 70,
        marginTop: 40,
        alignSelf: 'center',
    },
    style_user_input: {
        backgroundColor: '#fff',
        marginTop: 100,
        height: 35,
    },
    style_pwd_input: {
        backgroundColor: '#fff',
        height: 35,
        marginTop: 10,
    },
    style_view_commit: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#63B8FF',
        height: 35,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

function sel(store) {
    return {
        AccountReducer: store.AccountReducer,
    }
}



export default connect(sel)(MapPage);