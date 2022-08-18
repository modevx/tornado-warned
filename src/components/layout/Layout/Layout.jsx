import PropTypes from "prop-types";

export const Layout = () => {
	return (
		<div
			sx={{
				display: "flex",
				flexDirection: "column",
				minHeight: "100vh",
			}}
		>
			<header
				sx={{
					width: "100%",
					display: "flex",
					alignItems: "center",
				}}
			>
				Header content
			</header>
			<main
				sx={{
					width: "100%",
					flex: "1 1 auto",
				}}
			>
				<div
					sx={{
						maxWidth: 768,
						mx: "auto",
						px: 3,
					}}
				>
					{props.children}
				</div>
			</main>
			<footer
				sx={{
					width: "100%",
				}}
			>
				Footer content
			</footer>
		</div>
	);
};

Layout.defaultProps = {};
Layout.propTypes = {
	// optionalArray: PropTypes.array,
	// optionalBigInt: PropTypes.bigint,
	// optionalBool: PropTypes.bool,
	// optionalFunc: PropTypes.func,
	// optionalNumber: PropTypes.number,
	// optionalObject: PropTypes.object,
	// optionalString: PropTypes.string,
	// optionalSymbol: PropTypes.symbol,
	// optionalNode: PropTypes.node,
	// optionalElement: PropTypes.element,
	// optionalElementType: PropTypes.elementType,
	// optionalMessage: PropTypes.instanceOf(Message),
	// optionalEnum: PropTypes.oneOf(["News", "Photos"]),
	// optionalUnion: PropTypes.oneOfType([
	// 	PropTypes.string,
	// 	PropTypes.number,
	// 	PropTypes.instanceOf(Message),
	// ]),
	// optionalArrayOf: PropTypes.arrayOf(PropTypes.number),
	// optionalObjectOf: PropTypes.objectOf(PropTypes.number),
	// optionalObjectWithShape: PropTypes.shape({
	// 	optionalProperty: PropTypes.string,
	// 	requiredProperty: PropTypes.number.isRequired,
	// }),
	// optionalObjectWithStrictShape: PropTypes.exact({
	// 	optionalProperty: PropTypes.string,
	// 	requiredProperty: PropTypes.number.isRequired,
	// }),
	// requiredFunc: PropTypes.func.isRequired,
	// requiredAny: PropTypes.any.isRequired,
	// customProp: function (props, propName, componentName) {
	// 	if (!/matchme/.test(props[propName])) {
	// 		return new Error(
	// 			"Invalid prop `" +
	// 				propName +
	// 				"` supplied to" +
	// 				" `" +
	// 				componentName +
	// 				"`. Validation failed."
	// 		);
	// 	}
	// },
	// customArrayProp: PropTypes.arrayOf(function (
	// 	propValue,
	// 	key,
	// 	componentName,
	// 	location,
	// 	propFullName
	// ) {
	// 	if (!/matchme/.test(propValue[key])) {
	// 		return new Error(
	// 			"Invalid prop `" +
	// 				propFullName +
	// 				"` supplied to" +
	// 				" `" +
	// 				componentName +
	// 				"`. Validation failed."
	// 		);
	// 	}
	// }),
};
