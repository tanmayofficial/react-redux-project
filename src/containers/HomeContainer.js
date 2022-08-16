import { connect } from "react-redux";
import Home from "../components/home/Home";
import { addToCart } from "../services/actions/action";

const mapStateToProps = (state) => ({
  cartData: state,
});

const mapDispatchToProps = (dispatch) => ({
  addToCartHandler: (data) => dispatch(addToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
