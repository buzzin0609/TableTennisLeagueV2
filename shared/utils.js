import Dimensions from "react-native/Libraries/Utilities/Dimensions";

export function getWidth() {
	const {width} = Dimensions.get('screen');
	return width;
}
